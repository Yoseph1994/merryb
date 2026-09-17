import React, { useState, useEffect } from 'react';
import { Zap, Timer, Flame, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, UserStats } from '../types';
import { QUESTIONS } from '../data/questions';
import { sound } from '../utils/sound';

interface SpeedBlitzProps {
  stats: UserStats;
  onComplete: (updatedStats: UserStats) => void;
  onExit: () => void;
}

export const SpeedBlitz: React.FC<SpeedBlitzProps> = ({ stats, onComplete, onExit }) => {
  // Pick vocabulary and spelling questions for quick recognition
  const [blitzDeck, setBlitzDeck] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Filter questions appropriate for fast blitz (spelling & vocab)
    const candidates = QUESTIONS.filter((q) => q.category === 'spelling' || q.category === 'vocabulary');
    const shuffled = [...candidates].sort(() => 0.5 - Math.random());
    setBlitzDeck(shuffled);
    sound.playCabinChime();
  }, []);

  // 60-second Timer
  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishBlitz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const currentQ = blitzDeck[currentIndex];

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered || !currentQ || !isActive) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentQ.correctAnswer;

    if (isCorrect) {
      sound.playCorrect();
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo((prev) => Math.max(prev, newCombo));
      const multiplier = Math.min(4, 1 + Math.floor(newCombo / 3));
      setScore((prev) => prev + 10 * multiplier);
    } else {
      sound.playIncorrect();
      setCombo(0); // Reset combo on mistake
    }

    // Advance to next question quickly (after 400ms feedback)
    setTimeout(() => {
      setSelectedOption(null);
      setIsAnswered(false);
      if (currentIndex + 1 < blitzDeck.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Reshuffle and continue
        const candidates = QUESTIONS.filter((q) => q.category === 'spelling' || q.category === 'vocabulary');
        setBlitzDeck([...candidates].sort(() => 0.5 - Math.random()));
        setCurrentIndex(0);
      }
    }, 450);
  };

  const finishBlitz = () => {
    setIsActive(false);
    sound.playCelebration();

    if (score >= 100) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // Confetti fallback
      }
    }

    const xpEarned = Math.round(score * 1.5) + 30;
    const updated: UserStats = {
      ...stats,
      totalXp: stats.totalXp + xpEarned,
      speedRunsCompleted: stats.speedRunsCompleted + 1,
      bestSpeedRunScore: Math.max(stats.bestSpeedRunScore, score)
    };

    onComplete(updated);
  };

  if (!currentQ && isActive) {
    return <div style={{ color: '#fff', textAlign: 'center', padding: '40px' }}>Preparing Runway Sprint...</div>;
  }

  // End of Sprint View
  if (!isActive) {
    const isNewRecord = score > stats.bestSpeedRunScore;

    return (
      <div className="quiz-container glass-panel" style={{ textAlign: 'center', padding: '36px 20px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(245, 183, 0, 0.25), rgba(255, 153, 0, 0.25))',
            border: '2px solid var(--et-gold-primary)'
          }}
        >
          <Zap size={40} color="var(--et-gold-light)" />
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#fff', marginBottom: '8px' }}>
          Runway Blitz Complete! ⚡
        </h2>

        {isNewRecord && (
          <div style={{ display: 'inline-block', background: 'rgba(245, 183, 0, 0.2)', border: '1px solid var(--et-gold-primary)', color: 'var(--et-gold-light)', padding: '4px 14px', borderRadius: '14px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '14px' }}>
            🏆 NEW PERSONAL RECORD!
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>FINAL SCORE</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--et-gold-light)' }}>
              {score}
            </div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>MAX COMBO</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#ff9900' }}>
              {maxCombo}x 🔥
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button
            className="btn-primary"
            onClick={() => {
              setTimeLeft(60);
              setScore(0);
              setCombo(0);
              setMaxCombo(0);
              setCurrentIndex(0);
              setIsActive(true);
            }}
          >
            <RotateCcw size={16} /> Run Again
          </button>
          <button className="btn-secondary" onClick={onExit}>
            Exit to Lounge
          </button>
        </div>
      </div>
    );
  }

  const multiplier = Math.min(4, 1 + Math.floor(combo / 3));

  return (
    <div className="quiz-container glass-panel">
      {/* Top Blitz Header */}
      <div className="quiz-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ background: '#d81e05', width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={16} color="#fff" />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>60s SPEED RUN</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
              {score} PTS
            </div>
          </div>
        </div>

        {/* Combo Multiplier */}
        {combo > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 153, 0, 0.2)', border: '1px solid #ff9900', padding: '4px 10px', borderRadius: '14px', color: '#ff9900', fontWeight: 800, fontSize: '0.85rem', animation: 'bounce 0.4s ease' }}>
            <Flame size={16} fill="#ff9900" />
            <span>{combo}x COMBO ({multiplier}x XP)</span>
          </div>
        )}

        {/* Big Time Countdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: timeLeft <= 10 ? '#f87171' : 'var(--et-gold-light)', fontWeight: 800, fontSize: '1.2rem', fontFamily: 'monospace' }}>
          <Timer size={20} />
          <span>{timeLeft}s</span>
        </div>
      </div>

      {/* Question */}
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>
        {currentQ.category.toUpperCase()} • RAPID RECOGNITION
      </div>

      <div className="question-text" style={{ fontSize: '1.25rem', minHeight: '60px' }}>
        {currentQ.question}
      </div>

      {/* Fast Option Buttons */}
      <div className="options-list">
        {currentQ.options.map((option, idx) => {
          let btnClass = 'option-btn';
          if (isAnswered) {
            if (idx === currentQ.correctAnswer) btnClass += ' correct';
            else if (selectedOption === idx) btnClass += ' wrong';
          }

          return (
            <button
              key={idx}
              className={btnClass}
              onClick={() => handleAnswer(idx)}
              disabled={isAnswered}
              style={{ fontSize: '1.05rem', padding: '16px 20px' }}
            >
              <div className="option-letter">{String.fromCharCode(65 + idx)}</div>
              <span style={{ flex: 1, fontWeight: 600 }}>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

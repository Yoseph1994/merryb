import React, { useState, useEffect } from 'react';
import { Plane, Clock, Bookmark, ArrowRight, ArrowLeft, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, UserStats } from '../types';
import { QUESTIONS } from '../data/questions';
import { sound } from '../utils/sound';

interface MockExamProps {
  stats: UserStats;
  onComplete: (updatedStats: UserStats) => void;
  onExit: () => void;
}

export const MockExam: React.FC<MockExamProps> = ({ stats, onComplete, onExit }) => {
  // Generate 25 randomized questions
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [bookmarked, setBookmarked] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    // Shuffle and pick 25 questions
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, Math.min(25, shuffled.length)));
    sound.playCabinChime();
  }, []);

  // Timer Countdown
  useEffect(() => {
    if (isFinished || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished, timeLeft]);

  const currentQ = examQuestions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    sound.playTap();
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const toggleBookmark = () => {
    sound.playTap();
    setBookmarked((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const finishExam = () => {
    setIsFinished(true);
    let correctCount = 0;
    const newMissed: string[] = [...stats.missedQuestionIds];
    const categoryStats = { ...stats.categoryStats };

    examQuestions.forEach((q, idx) => {
      const selected = userAnswers[idx];
      const isCorrect = selected === q.correctAnswer;
      
      // Update Category Stats
      if (categoryStats[q.category]) {
        categoryStats[q.category].total += 1;
        if (isCorrect) categoryStats[q.category].correct += 1;
      }

      if (isCorrect) {
        correctCount += 1;
      } else {
        if (!newMissed.includes(q.id)) {
          newMissed.push(q.id);
        }
      }
    });

    const scorePercent = Math.round((correctCount / examQuestions.length) * 100);
    const xpGained = correctCount * 15 + (scorePercent >= 75 ? 100 : 25);

    if (scorePercent >= 75) {
      sound.playCelebration();
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    } else {
      sound.playCabinChime();
    }

    const updated: UserStats = {
      ...stats,
      totalXp: stats.totalXp + xpGained,
      totalAnswered: stats.totalAnswered + examQuestions.length,
      correctAnswered: stats.correctAnswered + correctCount,
      categoryStats,
      mockExamsCompleted: stats.mockExamsCompleted + 1,
      bestMockScore: Math.max(stats.bestMockScore, scorePercent),
      missedQuestionIds: newMissed
    };

    onComplete(updated);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!currentQ) {
    return <div style={{ color: '#fff', textAlign: 'center', padding: '40px' }}>Loading Flight Simulation...</div>;
  }

  // Current Flight Altitude Simulation
  const progressPercent = Math.round(((currentIndex + 1) / examQuestions.length) * 100);
  const simulatedAltitude = Math.round(37000 * (progressPercent / 100));

  // If exam finished, show report card
  if (isFinished) {
    let score = 0;
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score += 1;
    });
    const percentage = Math.round((score / examQuestions.length) * 100);
    const passed = percentage >= 75;

    return (
      <div className="quiz-container glass-panel">
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: passed ? 'rgba(0, 112, 56, 0.25)' : 'rgba(216, 30, 5, 0.25)',
              border: `2px solid ${passed ? 'var(--et-green-light)' : 'var(--et-red-accent)'}`
            }}
          >
            {passed ? <Award size={44} color="var(--et-gold-light)" /> : <RotateCcw size={40} color="var(--et-red-accent)" />}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#fff', marginBottom: '8px' }}>
            {passed ? 'Wings Flight Qualified! 🌟' : 'Flight Debrief & Review'}
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 20px' }}>
            {passed
              ? `Outstanding performance, Cadet ${stats.userName}! You met the Ethiopian Airlines Cabin Crew proficiency standard.`
              : `Good effort, Cadet ${stats.userName}. Ethiopian Airlines written exams demand high precision. Review the detailed explanations below to master every rule!`}
          </p>

          <div
            style={{
              display: 'inline-flex',
              gap: '24px',
              background: 'rgba(0,0,0,0.3)',
              padding: '16px 28px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(245, 183, 0, 0.2)',
              marginBottom: '24px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>SCORE</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: passed ? 'var(--et-gold-light)' : '#f87171' }}>
                {percentage}%
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>CORRECT</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
                {score} / {examQuestions.length}
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>STATUS</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, marginTop: '6px', color: passed ? '#4ade80' : '#f87171' }}>
                {passed ? 'PASS' : 'RETEST'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <button className="btn-secondary" onClick={() => setShowReview(!showReview)}>
              {showReview ? 'Hide Explanations' : 'Review All Explanations 📖'}
            </button>
            <button className="btn-primary" onClick={onExit}>
              Back to Lounge
            </button>
          </div>
        </div>

        {/* Detailed Review Deck */}
        {showReview && (
          <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--et-gold-light)', marginBottom: '16px' }}>
              Flight Exam Breakdown & Study Notes
            </h3>

            {examQuestions.map((q, idx) => {
              const userPick = userAnswers[idx];
              const isCorrect = userPick === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  style={{
                    background: 'rgba(0,0,0,0.25)',
                    border: `1px solid ${isCorrect ? 'rgba(14, 168, 89, 0.3)' : 'rgba(216, 30, 5, 0.3)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    marginBottom: '14px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                      Question {idx + 1} • {q.category.toUpperCase()}
                    </span>
                    {isCorrect ? (
                      <span style={{ color: '#4ade80', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                        <CheckCircle2 size={16} /> Correct
                      </span>
                    ) : (
                      <span style={{ color: '#f87171', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                        <XCircle size={16} /> Incorrect
                      </span>
                    )}
                  </div>

                  <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '12px' }}>
                    {q.question}
                  </p>

                  <div style={{ fontSize: '0.85rem', marginBottom: '10px' }}>
                    <div style={{ color: isCorrect ? '#4ade80' : '#f87171', marginBottom: '4px' }}>
                      <strong>Your Answer:</strong> {userPick !== undefined ? q.options[userPick] : 'No answer selected'}
                    </div>
                    {!isCorrect && (
                      <div style={{ color: 'var(--text-gold)' }}>
                        <strong>Correct Answer:</strong> {q.options[q.correctAnswer]}
                      </div>
                    )}
                  </div>

                  <div className="explanation-card" style={{ margin: 0 }}>
                    <h4>Rule & Aviation Context:</h4>
                    <p>{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="quiz-container glass-panel">
      {/* Top Simulation Header */}
      <div className="quiz-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Plane size={20} color="var(--et-gold-light)" />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block' }}>
              SIMULATED FLIGHT ET-777
            </span>
            <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700 }}>
              Question {currentIndex + 1} of {examQuestions.length}
            </span>
          </div>
        </div>

        {/* Timer & Altitude */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: timeLeft < 300 ? '#f87171' : 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Clock size={16} />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={toggleBookmark}
            style={{
              background: bookmarked[currentIndex] ? 'rgba(245, 183, 0, 0.25)' : 'none',
              border: 'none',
              color: bookmarked[currentIndex] ? 'var(--et-gold-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px'
            }}
            title="Flag for review"
          >
            <Bookmark size={18} fill={bookmarked[currentIndex] ? 'var(--et-gold-primary)' : 'none'} />
          </button>
        </div>
      </div>

      {/* Flight Path Progress Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
        <span>Takeoff: Bole (ADD)</span>
        <span>Cruising Altitude: {simulatedAltitude.toLocaleString()} FT</span>
        <span>Destination: Wings</span>
      </div>
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>

      {/* Category Tag */}
      <div style={{ display: 'inline-block', background: 'rgba(245, 183, 0, 0.12)', border: '1px solid rgba(245, 183, 0, 0.3)', padding: '3px 10px', borderRadius: '12px', fontSize: '0.72rem', color: 'var(--et-gold-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '14px' }}>
        {currentQ.category} • {currentQ.context || 'Cabin English Standard'}
      </div>

      {/* Question Body */}
      <div className="question-text">{currentQ.question}</div>

      {/* Options List */}
      <div className="options-list">
        {currentQ.options.map((option, idx) => {
          const isSelected = userAnswers[currentIndex] === idx;
          const letter = String.fromCharCode(65 + idx);

          return (
            <button
              key={idx}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectOption(idx)}
            >
              <div className="option-letter">{letter}</div>
              <span style={{ flex: 1 }}>{option}</span>
            </button>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <button
          className="btn-secondary"
          onClick={() => {
            sound.playTap();
            setCurrentIndex((prev) => Math.max(0, prev - 1));
          }}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <ArrowLeft size={16} /> Previous
        </button>

        {currentIndex === examQuestions.length - 1 ? (
          <button
            className="btn-primary"
            onClick={finishExam}
            style={{ background: 'linear-gradient(135deg, #f5b700, #c48c00)', color: '#061a11' }}
          >
            Submit Flight Exam ✈️
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={() => {
              sound.playTap();
              setCurrentIndex((prev) => Math.min(examQuestions.length - 1, prev + 1));
            }}
          >
            Next <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Quick Question Dot Matrix */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {examQuestions.map((_, idx) => {
          const answered = userAnswers[idx] !== undefined;
          const isCurrent = idx === currentIndex;
          const isFlagged = bookmarked[idx];

          let bg = 'rgba(255, 255, 255, 0.08)';
          if (answered) bg = 'var(--et-green-primary)';
          if (isFlagged) bg = 'var(--et-gold-primary)';

          return (
            <div
              key={idx}
              onClick={() => {
                sound.playTap();
                setCurrentIndex(idx);
              }}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                background: bg,
                color: isFlagged ? '#061a11' : '#fff',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: isCurrent ? '2px solid #fff' : 'none'
              }}
              title={`Question ${idx + 1}`}
            >
              {idx + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

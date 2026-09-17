import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Sparkles, BookOpen } from 'lucide-react';
import { Question, QuestionCategory, UserStats } from '../types';
import { QUESTIONS } from '../data/questions';
import { sound } from '../utils/sound';

interface CategoryDrillProps {
  category: QuestionCategory;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onBack: () => void;
}

export const CategoryDrill: React.FC<CategoryDrillProps> = ({ category, stats, onUpdateStats, onBack }) => {
  const [deck, setDeck] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const filtered = QUESTIONS.filter((q) => q.category === category);
    setDeck(filtered.sort(() => 0.5 - Math.random()));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [category]);

  const currentQ = deck[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }

    // Update stats
    const catStats = { ...stats.categoryStats };
    if (catStats[category]) {
      catStats[category].total += 1;
      if (isCorrect) catStats[category].correct += 1;
    }

    const missed = [...stats.missedQuestionIds];
    if (!isCorrect && !missed.includes(currentQ.id)) {
      missed.push(currentQ.id);
    }

    onUpdateStats({
      ...stats,
      totalXp: stats.totalXp + (isCorrect ? 15 : 2),
      totalAnswered: stats.totalAnswered + 1,
      correctAnswered: stats.correctAnswered + (isCorrect ? 1 : 0),
      categoryStats: catStats,
      missedQuestionIds: missed
    });
  };

  const handleNext = () => {
    sound.playTap();
    if (currentIndex + 1 < deck.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Loop or restart deck
      setDeck([...deck].sort(() => 0.5 - Math.random()));
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const categoryTitles: Record<QuestionCategory, { name: string; icon: string }> = {
    grammar: { name: 'Grammar & Sentence Mastery', icon: '✍️' },
    spelling: { name: 'Aviation Spelling Traps', icon: '🔤' },
    vocabulary: { name: 'Cabin Hospitality Vocabulary', icon: '📖' },
    situational: { name: 'Cabin Scenarios & Dialogue', icon: '✈️' }
  };

  if (!currentQ) {
    return <div style={{ color: '#fff', textAlign: 'center', padding: '40px' }}>Loading Drills...</div>;
  }

  const isCorrect = selectedOption === currentQ.correctAnswer;

  return (
    <div className="quiz-container glass-panel">
      {/* Top Header */}
      <div className="quiz-header">
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back to Hub
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.9rem' }}>
          <span>{categoryTitles[category].icon}</span>
          <span>{categoryTitles[category].name}</span>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {currentIndex + 1} of {deck.length}
        </div>
      </div>

      {/* Context Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 183, 0, 0.1)', border: '1px solid rgba(245, 183, 0, 0.25)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.72rem', color: 'var(--et-gold-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '14px' }}>
        <Sparkles size={12} />
        <span>{currentQ.context || 'Ethiopian Airlines Standard'}</span>
      </div>

      {/* Question */}
      <div className="question-text">{currentQ.question}</div>

      {/* Options */}
      <div className="options-list">
        {currentQ.options.map((opt, idx) => {
          let btnClass = 'option-btn';
          if (isAnswered) {
            if (idx === currentQ.correctAnswer) btnClass += ' correct';
            else if (selectedOption === idx) btnClass += ' wrong';
          }

          return (
            <button
              key={idx}
              className={btnClass}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
            >
              <div className="option-letter">{String.fromCharCode(65 + idx)}</div>
              <span style={{ flex: 1 }}>{opt}</span>
              {isAnswered && idx === currentQ.correctAnswer && (
                <CheckCircle2 size={18} color="#4ade80" />
              )}
              {isAnswered && selectedOption === idx && idx !== currentQ.correctAnswer && (
                <XCircle size={18} color="#f87171" />
              )}
            </button>
          );
        })}
      </div>

      {/* In-depth Explanation Card */}
      {isAnswered && (
        <div className="explanation-card">
          <h4>
            <BookOpen size={16} /> Why This Is Tested:
          </h4>
          <p>{currentQ.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button className="btn-primary" onClick={handleNext}>
            Next Question <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

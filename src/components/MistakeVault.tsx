import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, RotateCcw, Sparkles, BookOpen, Trash2 } from 'lucide-react';
import { UserStats, Question } from '../types';
import { QUESTIONS } from '../data/questions';
import { sound } from '../utils/sound';

interface MistakeVaultProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onBack: () => void;
}

export const MistakeVault: React.FC<MistakeVaultProps> = ({ stats, onUpdateStats, onBack }) => {
  const missedQuestions = QUESTIONS.filter((q) => stats.missedQuestionIds.includes(q.id));
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(
    missedQuestions.length > 0 ? missedQuestions[0].id : null
  );
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQ = missedQuestions.find((q) => q.id === activeQuestionId);

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  const handleMarkMastered = (questionId: string) => {
    sound.playTap();
    const updatedMissed = stats.missedQuestionIds.filter((id) => id !== questionId);
    onUpdateStats({
      ...stats,
      totalXp: stats.totalXp + 20,
      missedQuestionIds: updatedMissed
    });

    // Pick next question
    const remaining = missedQuestions.filter((q) => q.id !== questionId);
    if (remaining.length > 0) {
      setActiveQuestionId(remaining[0].id);
    } else {
      setActiveQuestionId(null);
    }
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleClearAllMissed = () => {
    if (confirm('Clear all missed questions from your vault?')) {
      onUpdateStats({
        ...stats,
        missedQuestionIds: []
      });
      setActiveQuestionId(null);
    }
  };

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.95rem' }}>
          <RotateCcw size={18} />
          <span>Mistake Vault & Weak Spot Drill</span>
        </div>

        {missedQuestions.length > 0 && (
          <button
            onClick={handleClearAllMissed}
            style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}
            title="Reset vault"
          >
            <Trash2 size={14} /> Clear
          </button>
        )}
      </div>

      {missedQuestions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(0, 112, 56, 0.2)', border: '2px solid var(--et-green-light)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={36} color="var(--et-gold-light)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', marginBottom: '8px' }}>
            No Weak Spots Recorded! 🎉
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 20px', fontSize: '0.9rem' }}>
            Cadet {stats.userName}, your mistake deck is completely clear! Any question you stumble on in mock flights or drills will automatically appear here for review.
          </p>
          <button className="btn-primary" onClick={onBack}>
            Return to Flight Lounge
          </button>
        </div>
      ) : (
        <div>
          {/* Question Selector Pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '18px' }}>
            {missedQuestions.map((q, idx) => {
              const isActive = q.id === activeQuestionId;
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    sound.playTap();
                    setActiveQuestionId(q.id);
                    setSelectedOption(null);
                    setIsAnswered(false);
                  }}
                  style={{
                    background: isActive ? 'var(--et-gold-primary)' : 'rgba(255,255,255,0.08)',
                    color: isActive ? '#061a11' : '#fff',
                    border: 'none',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  #{idx + 1} {q.category.slice(0, 4).toUpperCase()}
                </button>
              );
            })}
          </div>

          {currentQ && (
            <div>
              {/* Question Context */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--et-gold-light)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Category: {currentQ.category} • {currentQ.context}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#fca5a5', background: 'rgba(216, 30, 5, 0.2)', padding: '2px 8px', borderRadius: '10px' }}>
                  Target for Mastery
                </span>
              </div>

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
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <div className="option-letter">{String.fromCharCode(65 + idx)}</div>
                      <span style={{ flex: 1 }}>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div className="explanation-card">
                  <h4>
                    <BookOpen size={16} /> Rule Clarification:
                  </h4>
                  <p>{currentQ.explanation}</p>
                </div>
              )}

              {/* Actions */}
              {isAnswered && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  {selectedOption === currentQ.correctAnswer ? (
                    <button
                      className="btn-primary"
                      onClick={() => handleMarkMastered(currentQ.id)}
                      style={{ background: 'linear-gradient(135deg, #0ea859, #007038)' }}
                    >
                      <CheckCircle2 size={16} /> Mark as Mastered & Remove (+20 XP)
                    </button>
                  ) : (
                    <button
                      className="btn-secondary"
                      onClick={() => {
                        setSelectedOption(null);
                        setIsAnswered(false);
                      }}
                    >
                      Try Again
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

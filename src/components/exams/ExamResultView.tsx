import React, { useState } from 'react';
import { RotateCcw, Share2, Target, CheckCircle2, XCircle, ArrowRight, BookOpen } from 'lucide-react';
import { ExamAttempt, UserStudyState } from '../../types';
import { shareScore } from '../../utils/share';

interface Props {
  attempt: ExamAttempt;
  studyState: UserStudyState;
  onRetake: () => void;
  onPracticeWeakSpots: () => void;
  onGoHome: () => void;
}

export const ExamResultView: React.FC<Props> = ({
  attempt,
  studyState,
  onRetake,
  onPracticeWeakSpots,
  onGoHome
}) => {
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const { score, questionCount, percentage, mistakes } = attempt;

  let message = '';
  if (percentage >= 90) {
    message = 'Outstanding performance! You are fully exam ready! 🌟';
  } else if (percentage >= 70) {
    message = 'Good work! Review the questions you missed below to reach perfection. 💪';
  } else {
    message = 'Keep going! Review your mistakes below to turn weak spots into strengths. 🌱';
  }

  const handleShare = async () => {
    const weakest = mistakes.length > 0 ? mistakes[0].lessonItemId : undefined;
    const res = await shareScore(studyState.userName || 'Student', score, questionCount, percentage, weakest);
    if (res.success) {
      if (res.method === 'clipboard') {
        setShareFeedback('Score copied to clipboard!');
      } else {
        setShareFeedback('Score shared successfully!');
      }
      setTimeout(() => setShareFeedback(null), 3000);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Result Hero Card */}
      <div className="card" style={{ padding: '32px 24px', textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
          {message}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
          Exam completed for <strong>{studyState.userName}</strong>.
        </p>

        {/* Score Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '24px',
            padding: '16px 32px',
            background: 'var(--bg-surface-subtle)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '26px'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Score
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1 }}>
              {score} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>/ {questionCount}</span>
            </div>
          </div>

          <div style={{ width: '1px', height: '40px', background: 'var(--border-medium)' }} />

          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Percentage
            </div>
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: percentage >= 70 ? 'var(--color-success-icon)' : 'var(--color-warning-icon)',
                lineHeight: 1.1
              }}
            >
              {percentage}%
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={onRetake}>
            <RotateCcw size={16} /> Retake with New Questions
          </button>
          <button className="btn btn-secondary" onClick={handleShare}>
            <Share2 size={16} /> Send My Score
          </button>
          {mistakes.length > 0 && (
            <button className="btn btn-outline" onClick={onPracticeWeakSpots}>
              <Target size={16} /> Practice My Weak Spots
            </button>
          )}
          <button className="btn btn-ghost" onClick={onGoHome}>
            Back to Home
          </button>
        </div>

        {shareFeedback && (
          <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--color-success-text)' }}>
            ✓ {shareFeedback}
          </div>
        )}
      </div>

      {/* Review Mistakes Section */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Review Your Mistakes ({mistakes.length})
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {mistakes.length === 0 ? 'Zero mistakes!' : 'Learn from each item'}
          </span>
        </div>

        {mistakes.length === 0 ? (
          <div className="card" style={{ padding: '24px', textAlign: 'center', background: 'var(--color-success-bg)', border: '1px solid var(--color-success-border)' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>🎉</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-success-text)', marginBottom: '4px' }}>
              Flawless Exam Score!
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-success-text)' }}>
              You answered all questions correctly without a single error. Keep up this consistency!
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {mistakes.map((m, idx) => (
              <div key={idx} className="card" style={{ padding: '18px 20px', borderLeft: '4px solid var(--color-error-icon)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Mistake #{idx + 1}
                </div>

                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '14px', lineHeight: 1.5 }}>
                  {m.questionText}
                </div>

                {/* Option comparison */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                  <div
                    style={{
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-error-bg)',
                      border: '1px solid var(--color-error-border)',
                      fontSize: '0.9rem',
                      color: 'var(--color-error-text)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <XCircle size={16} color="var(--color-error-icon)" style={{ flexShrink: 0 }} />
                    <span>Your Answer: <strong>{m.userAnswerText}</strong></span>
                  </div>

                  <div
                    style={{
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-success-bg)',
                      border: '1px solid var(--color-success-border)',
                      fontSize: '0.9rem',
                      color: 'var(--color-success-text)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--color-success-icon)" style={{ flexShrink: 0 }} />
                    <span>Correct Answer: <strong>{m.correctAnswerText}</strong></span>
                  </div>
                </div>

                {/* Explanation */}
                <div style={{ padding: '10px 12px', background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-sm)', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  <strong>Rule & Clue: </strong>{m.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

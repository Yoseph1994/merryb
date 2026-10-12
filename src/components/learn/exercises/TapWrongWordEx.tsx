import React from 'react';
import { PracticeExercise } from '../../../types';

interface Props {
  exercise: PracticeExercise;
  selectedAnswer: any;
  isSubmitted: boolean;
  onSelect: (val: any) => void;
}

export const TapWrongWordEx: React.FC<Props> = ({
  exercise,
  selectedAnswer,
  isSubmitted,
  onSelect
}) => {
  const words = exercise.words || [];
  const wrongIndex = exercise.wrongWordIndex ?? -1;

  return (
    <div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
        Tap the single word that makes this sentence grammatically wrong:
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px', background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)' }}>
        {words.map((word, idx) => {
          const isSelected = selectedAnswer === idx;
          const isTargetWrongWord = idx === wrongIndex;

          let bg = 'var(--bg-surface)';
          let border = '1px solid var(--border-medium)';
          let color = 'var(--text-main)';

          if (isSubmitted) {
            if (isTargetWrongWord) {
              bg = 'var(--color-error-bg)';
              border = '1.5px solid var(--color-error-border)';
              color = 'var(--color-error-text)';
            }
          } else if (isSelected) {
            bg = 'var(--accent-subtle)';
            border = '1.5px solid var(--accent-primary)';
            color = 'var(--accent-primary)';
          }

          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              disabled={isSubmitted}
              style={{
                background: bg,
                border: border,
                color: color,
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1.05rem',
                fontWeight: 600,
                cursor: isSubmitted ? 'default' : 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {word}
            </button>
          );
        })}
      </div>

      {isSubmitted && exercise.correction && (
        <div style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--color-success-text)' }}>
          Correction: Replace with <strong>"{exercise.correction}"</strong>
        </div>
      )}
    </div>
  );
};

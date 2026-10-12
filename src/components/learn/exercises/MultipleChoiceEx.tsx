import React from 'react';
import { Check, X } from 'lucide-react';
import { PracticeExercise } from '../../../types';

interface Props {
  exercise: PracticeExercise;
  selectedAnswer: any;
  isSubmitted: boolean;
  onSelect: (val: any) => void;
}

export const MultipleChoiceEx: React.FC<Props> = ({
  exercise,
  selectedAnswer,
  isSubmitted,
  onSelect
}) => {
  const options = exercise.options || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {options.map((opt, idx) => {
        const isSelected = selectedAnswer === idx || selectedAnswer === opt;
        const isCorrect = idx === exercise.correctAnswer || opt === exercise.correctAnswer;
        
        let btnClass = 'exercise-option-btn';
        if (isSubmitted) {
          if (isCorrect) btnClass += ' correct';
          else if (isSelected) btnClass += ' incorrect';
        } else if (isSelected) {
          btnClass += ' selected';
        }

        return (
          <button
            key={idx}
            className={btnClass}
            onClick={() => onSelect(typeof exercise.correctAnswer === 'number' ? idx : opt)}
            disabled={isSubmitted}
            aria-pressed={isSelected}
          >
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 700,
                flexShrink: 0
              }}
            >
              {String.fromCharCode(65 + idx)}
            </span>
            <span style={{ flex: 1, fontSize: '1rem' }}>{opt}</span>
            {isSubmitted && isCorrect && <Check size={18} color="var(--color-success-icon)" />}
            {isSubmitted && isSelected && !isCorrect && <X size={18} color="var(--color-error-icon)" />}
          </button>
        );
      })}
    </div>
  );
};

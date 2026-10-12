import React from 'react';
import { Check, X } from 'lucide-react';
import { PracticeExercise } from '../../../types';

interface Props {
  exercise: PracticeExercise;
  selectedAnswer: any;
  isSubmitted: boolean;
  onSelect: (val: any) => void;
}

export const FillGapEx: React.FC<Props> = ({
  exercise,
  selectedAnswer,
  isSubmitted,
  onSelect
}) => {
  const options = exercise.options || [];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
        {options.map((opt, idx) => {
          const isSelected = selectedAnswer === opt;
          const isCorrect = opt === exercise.correctAnswer;

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
              onClick={() => onSelect(opt)}
              disabled={isSubmitted}
              style={{ justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}
            >
              <span>{opt}</span>
              {isSubmitted && isCorrect && <Check size={18} color="var(--color-success-icon)" />}
              {isSubmitted && isSelected && !isCorrect && <X size={18} color="var(--color-error-icon)" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

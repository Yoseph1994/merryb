import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { PracticeExercise } from '../../types';
import { MultipleChoiceEx } from './exercises/MultipleChoiceEx';
import { FillGapEx } from './exercises/FillGapEx';
import { TapWrongWordEx } from './exercises/TapWrongWordEx';
import { SentenceBuilderEx } from './exercises/SentenceBuilderEx';
import { MatchPairsEx } from './exercises/MatchPairsEx';
import { BucketSortEx } from './exercises/BucketSortEx';

interface Props {
  exercise: PracticeExercise;
  exerciseNumber: number;
  totalExercises: number;
  onAnswerSubmit: (isCorrect: boolean) => void;
  onNext: () => void;
}

export const ExerciseContainer: React.FC<Props> = ({
  exercise,
  exerciseNumber,
  totalExercises,
  onAnswerSubmit,
  onNext
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setAttemptCount(0);
  }, [exercise]);

  const checkCorrectness = (answer: any): boolean => {
    switch (exercise.type) {
      case 'multiple_choice':
        if (typeof exercise.correctAnswer === 'number') {
          return answer === exercise.correctAnswer;
        }
        return answer === exercise.correctAnswer;
      case 'fill_gap':
        return answer === exercise.correctAnswer;
      case 'tap_wrong_word':
        return answer === exercise.wrongWordIndex;
      case 'sentence_builder':
        if (exercise.correctSentenceWords) {
          const target = exercise.correctSentenceWords.join(' ').trim().toLowerCase();
          return String(answer).trim().toLowerCase() === target;
        }
        return false;
      case 'match_pairs': {
        const pairs = exercise.pairs || [];
        if (!answer || typeof answer !== 'object') return false;
        return pairs.every(p => answer[p.left] === p.right);
      }
      case 'bucket_sort': {
        const items = exercise.itemsToSort || [];
        if (!answer || typeof answer !== 'object') return false;
        return items.every((item, idx) => answer[idx] === item.correctBucketIndex);
      }
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || selectedAnswer === '') return;
    const correct = checkCorrectness(selectedAnswer);
    setIsCorrect(correct);
    setIsSubmitted(true);
    setAttemptCount(prev => prev + 1);
    onAnswerSubmit(correct);
  };

  const handleRetryCurrent = () => {
    setIsSubmitted(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="card exercise-card">
      {/* Exercise progress count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Practice {exerciseNumber} of {totalExercises}
        </span>
        {exercise.hint && !isSubmitted && (
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            💡 {exercise.hint}
          </span>
        )}
      </div>

      {/* Prompt / Question */}
      <h3 style={{ fontSize: '1.18rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.5, marginBottom: '20px' }}>
        {exercise.prompt}
      </h3>

      {/* Active Exercise Component */}
      <div style={{ marginBottom: '24px' }}>
        {exercise.type === 'multiple_choice' && (
          <MultipleChoiceEx
            exercise={exercise}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
            onSelect={val => setSelectedAnswer(val)}
          />
        )}
        {exercise.type === 'fill_gap' && (
          <FillGapEx
            exercise={exercise}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
            onSelect={val => setSelectedAnswer(val)}
          />
        )}
        {exercise.type === 'tap_wrong_word' && (
          <TapWrongWordEx
            exercise={exercise}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
            onSelect={val => setSelectedAnswer(val)}
          />
        )}
        {exercise.type === 'sentence_builder' && (
          <SentenceBuilderEx
            exercise={exercise}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
            onSelect={val => setSelectedAnswer(val)}
          />
        )}
        {exercise.type === 'match_pairs' && (
          <MatchPairsEx
            exercise={exercise}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
            onSelect={val => setSelectedAnswer(val)}
          />
        )}
        {exercise.type === 'bucket_sort' && (
          <BucketSortEx
            exercise={exercise}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
            onSelect={val => setSelectedAnswer(val)}
          />
        )}
      </div>

      {/* Instant Kind Feedback Card */}
      {isSubmitted && (
        <div
          style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            background: isCorrect ? 'var(--color-success-bg)' : 'var(--color-error-bg)',
            border: `1.5px solid ${isCorrect ? 'var(--color-success-border)' : 'var(--color-error-border)'}`,
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}
        >
          {isCorrect ? (
            <CheckCircle size={22} color="var(--color-success-icon)" style={{ flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <AlertCircle size={22} color="var(--color-error-icon)" style={{ flexShrink: 0, marginTop: '2px' }} />
          )}

          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: isCorrect ? 'var(--color-success-text)' : 'var(--color-error-text)', marginBottom: '4px' }}>
              {isCorrect ? 'Well done!' : 'Not quite yet.'}
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {exercise.explanation}
            </div>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="exercise-action-footer">
        {!isSubmitted ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={selectedAnswer === null || selectedAnswer === ''}
          >
            Check Answer
          </button>
        ) : (
          <>
            {!isCorrect && (
              <button className="btn btn-secondary" onClick={handleRetryCurrent}>
                <RotateCcw size={16} /> Try Again
              </button>
            )}
            <button className="btn btn-primary" onClick={onNext}>
              Continue <ArrowRight size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

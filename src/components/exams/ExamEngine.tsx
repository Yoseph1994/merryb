import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { ExamQuestion, ExamAttempt, ExamMistake, TopicId } from '../../types';

interface ShuffledQuestion {
  question: ExamQuestion;
  shuffledOptions: { text: string; originalIndex: number }[];
}

interface Props {
  questions: ExamQuestion[];
  selectedTopics: TopicId[];
  isTimed: boolean;
  onFinish: (attempt: ExamAttempt) => void;
  onExit: () => void;
}

export const ExamEngine: React.FC<Props> = ({
  questions,
  selectedTopics,
  isTimed,
  onFinish,
  onExit
}) => {
  const [examDeck, setExamDeck] = useState<ShuffledQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedShuffledIndex, setSelectedShuffledIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Results tracking
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<ExamMistake[]>([]);
  const [startTime] = useState<number>(Date.now());

  // Shuffled options setup
  useEffect(() => {
    const prepared: ShuffledQuestion[] = questions.map(q => {
      const optionsWithOrig = q.options.map((text, originalIndex) => ({ text, originalIndex }));
      // Fisher-Yates shuffle
      const shuffled = [...optionsWithOrig].sort(() => 0.5 - Math.random());
      return { question: q, shuffledOptions: shuffled };
    });
    setExamDeck(prepared);
    setCurrentIndex(0);
    setScore(0);
    setMistakes([]);
  }, [questions]);

  if (examDeck.length === 0) {
    return <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Preparing exam...</div>;
  }

  const currentItem = examDeck[currentIndex];
  const q = currentItem.question;
  const isLast = currentIndex === examDeck.length - 1;
  const progressPercent = Math.round(((currentIndex + 1) / examDeck.length) * 100);

  // Check correct option in shuffled deck
  const correctShuffledIndex = currentItem.shuffledOptions.findIndex(
    opt => opt.originalIndex === q.correctAnswerIndex
  );
  const isUserCorrect = selectedShuffledIndex === correctShuffledIndex;

  const handleSelectOption = (shuffledIdx: number) => {
    if (isAnswered) return;
    setSelectedShuffledIndex(shuffledIdx);
    setIsAnswered(true);

    const chosenOption = currentItem.shuffledOptions[shuffledIdx];
    const isCorrect = chosenOption.originalIndex === q.correctAnswerIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      const correctOptText = q.options[q.correctAnswerIndex];
      const mistake: ExamMistake = {
        questionId: q.id,
        questionText: q.question,
        userAnswerIndex: chosenOption.originalIndex,
        correctAnswerIndex: q.correctAnswerIndex,
        userAnswerText: chosenOption.text,
        correctAnswerText: correctOptText,
        explanation: q.explanation,
        topicId: q.topicId,
        lessonItemId: q.lessonItemId
      };
      setMistakes(prev => [...prev, mistake]);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < examDeck.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedShuffledIndex(null);
      setIsAnswered(false);
    } else {
      // Finish Exam
      const finalScore = isUserCorrect ? score : score; // already counted in handleSelectOption
      const percentage = Math.round((finalScore / examDeck.length) * 100);
      const durationSeconds = Math.round((Date.now() - startTime) / 1000);

      const attempt: ExamAttempt = {
        id: 'attempt_' + Date.now(),
        date: new Date().toISOString(),
        topics: selectedTopics,
        questionCount: examDeck.length,
        score: finalScore,
        percentage,
        durationSeconds,
        mistakes
      };
      onFinish(attempt);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <button
          onClick={() => {
            if (confirm('Leave the exam? Your current progress will not be saved.')) {
              onExit();
            }
          }}
          className="btn-ghost"
          style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <ArrowLeft size={16} /> Exit Exam
        </button>

        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
          Question {currentIndex + 1} of {examDeck.length}
        </span>

        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {progressPercent}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-track" style={{ marginBottom: '24px' }}>
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Question Card */}
      <div className="card" style={{ padding: '28px', marginBottom: '20px' }}>
        {/* DO NOT show any topic hints or tense labels here as per instructions */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '24px' }}>
          {q.question}
        </h3>

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {currentItem.shuffledOptions.map((opt, sIdx) => {
            const isSelected = selectedShuffledIndex === sIdx;
            const isCorrect = sIdx === correctShuffledIndex;

            let btnClass = 'exercise-option-btn';
            if (isAnswered) {
              if (isCorrect) btnClass += ' correct';
              else if (isSelected) btnClass += ' incorrect';
            } else if (isSelected) {
              btnClass += ' selected';
            }

            return (
              <button
                key={sIdx}
                className={btnClass}
                onClick={() => handleSelectOption(sIdx)}
                disabled={isAnswered}
              >
                <span
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    flexShrink: 0
                  }}
                >
                  {String.fromCharCode(65 + sIdx)}
                </span>
                <span style={{ flex: 1, fontSize: '0.98rem' }}>{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Immediate Explanation Banner */}
        {isAnswered && (
          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              background: isUserCorrect ? 'var(--color-success-bg)' : 'var(--color-error-bg)',
              border: `1.5px solid ${isUserCorrect ? 'var(--color-success-border)' : 'var(--color-error-border)'}`,
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}
          >
            {isUserCorrect ? (
              <CheckCircle2 size={22} color="var(--color-success-icon)" style={{ flexShrink: 0, marginTop: '2px' }} />
            ) : (
              <AlertCircle size={22} color="var(--color-error-icon)" style={{ flexShrink: 0, marginTop: '2px' }} />
            )}

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isUserCorrect ? 'var(--color-success-text)' : 'var(--color-error-text)', marginBottom: '4px' }}>
                {isUserCorrect
                  ? 'Correct!'
                  : `Not quite. Correct answer: ${String.fromCharCode(65 + correctShuffledIndex)}. ${currentItem.shuffledOptions[correctShuffledIndex].text}`}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {q.explanation}
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-primary" onClick={handleNext}>
              {isLast ? 'View Exam Results' : 'Next Question'} <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

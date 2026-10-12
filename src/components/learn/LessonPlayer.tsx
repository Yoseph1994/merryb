import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, RotateCcw, ArrowRight, Award } from 'lucide-react';
import { LessonItem, Topic } from '../../types';
import { ExplanationStepView } from './ExplanationStepView';
import { ExerciseContainer } from './ExerciseContainer';
import { RememberCard } from './RememberCard';
import { recordLessonScore, saveLessonStepProgress, loadStudyState } from '../../utils/storage';

interface Props {
  lesson: LessonItem;
  topic: Topic;
  onExit: () => void;
  onOpenCheatSheet: () => void;
  onNextLesson?: () => void;
}

type Stage = 'explain' | 'practice' | 'remember' | 'result';

export const LessonPlayer: React.FC<Props> = ({
  lesson,
  topic,
  onExit,
  onOpenCheatSheet,
  onNextLesson
}) => {
  const [stage, setStage] = useState<Stage>('explain');
  const [explainIndex, setExplainIndex] = useState(0);

  // Practice state
  const [isRetryDeck, setIsRetryDeck] = useState(false);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  // Active practice deck: primaryPractice or retryPractice
  const currentExercises = isRetryDeck ? lesson.retryPractice : lesson.primaryPractice;
  const totalStepsInLesson = lesson.explanationSteps.length + currentExercises.length + 1; // + remember

  // Resume state if previously left
  useEffect(() => {
    const state = loadStudyState();
    const prevProgress = state.lessonProgress[lesson.id];
    if (prevProgress && prevProgress.currentStepIndex > 0) {
      if (prevProgress.currentStepIndex < lesson.explanationSteps.length) {
        setExplainIndex(prevProgress.currentStepIndex);
        setStage('explain');
      }
    }
  }, [lesson.id]);

  // Handle explain progression
  const handleNextExplain = () => {
    const nextIdx = explainIndex + 1;
    if (nextIdx < lesson.explanationSteps.length) {
      setExplainIndex(nextIdx);
      saveLessonStepProgress(lesson.id, nextIdx);
    } else {
      setStage('practice');
      setPracticeIndex(0);
      setCorrectCount(0);
      saveLessonStepProgress(lesson.id, lesson.explanationSteps.length);
    }
  };

  const handlePrevExplain = () => {
    if (explainIndex > 0) {
      setExplainIndex(prev => prev - 1);
    } else {
      onExit();
    }
  };

  // Handle practice answer
  const handlePracticeAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNextPractice = () => {
    const nextIdx = practiceIndex + 1;
    if (nextIdx < currentExercises.length) {
      setPracticeIndex(nextIdx);
    } else {
      setStage('remember');
    }
  };

  // Handle remember finish -> save score
  const handleFinishRemember = () => {
    recordLessonScore(lesson.id, correctCount, currentExercises.length);
    setStage('result');
  };

  // Retry with new examples if < 3
  const handleRetryWithNewExamples = () => {
    setIsRetryDeck(true);
    setPracticeIndex(0);
    setCorrectCount(0);
    setStage('practice');
  };

  const handleRetakeOriginal = () => {
    setIsRetryDeck(false);
    setExplainIndex(0);
    setPracticeIndex(0);
    setCorrectCount(0);
    setStage('explain');
  };

  // Progress Calculation
  let currentProgressStep = 0;
  if (stage === 'explain') currentProgressStep = explainIndex + 1;
  else if (stage === 'practice') currentProgressStep = lesson.explanationSteps.length + practiceIndex + 1;
  else if (stage === 'remember') currentProgressStep = totalStepsInLesson;
  else if (stage === 'result') currentProgressStep = totalStepsInLesson;

  const progressPercent = Math.min(100, Math.round((currentProgressStep / totalStepsInLesson) * 100));

  return (
    <div style={{ width: '100%' }}>
      {/* Top Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <button
          onClick={onExit}
          className="btn-ghost"
          style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <ArrowLeft size={16} /> Exit Lesson
        </button>

        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          {lesson.title}
        </span>

        <button
          onClick={onOpenCheatSheet}
          className="btn-ghost"
          style={{ padding: '6px 12px', fontSize: '0.82rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <BookOpen size={16} /> Cheat Sheet
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-track" style={{ marginBottom: '24px' }}>
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* STAGE 1: EXPLANATION */}
      {stage === 'explain' && (
        <ExplanationStepView
          step={lesson.explanationSteps[explainIndex]}
          stepNumber={explainIndex + 1}
          totalSteps={lesson.explanationSteps.length}
          onNext={handleNextExplain}
          onPrev={handlePrevExplain}
          canPrev={explainIndex > 0}
        />
      )}

      {/* STAGE 2: PRACTICE EXERCISES */}
      {stage === 'practice' && (
        <ExerciseContainer
          exercise={currentExercises[practiceIndex]}
          exerciseNumber={practiceIndex + 1}
          totalExercises={currentExercises.length}
          onAnswerSubmit={handlePracticeAnswer}
          onNext={handleNextPractice}
        />
      )}

      {/* STAGE 3: REMEMBER THIS CARD */}
      {stage === 'remember' && (
        <RememberCard
          title={lesson.rememberCard.title}
          bullets={lesson.rememberCard.bullets}
          onFinish={handleFinishRemember}
        />
      )}

      {/* STAGE 4: LESSON RESULT CARD */}
      {stage === 'result' && (
        <div className="card" style={{ padding: '36px 24px', textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-full)',
              background: correctCount >= 3 ? 'var(--color-success-bg)' : 'var(--color-warning-bg)',
              color: correctCount >= 3 ? 'var(--color-success-icon)' : 'var(--color-warning-icon)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}
          >
            {correctCount >= 3 ? <CheckCircle2 size={36} /> : <RotateCcw size={32} />}
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
            {correctCount === 4
              ? 'Mastered! 🌟'
              : correctCount === 3
              ? 'Lesson Completed! 👍'
              : 'Let\'s try again with new examples.'}
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.5 }}>
            {correctCount >= 3
              ? `You scored ${correctCount} of 4 on the practice exercises. Great job mastering this concept!`
              : `You got ${correctCount} of 4 right. A fresh set of 4 new practice examples is ready to help you lock in the concept.`}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: 'var(--bg-surface-subtle)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '28px',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-main)'
            }}
          >
            Score: <span style={{ color: correctCount >= 3 ? 'var(--color-success-icon)' : 'var(--color-warning-icon)' }}>{correctCount} / 4</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {correctCount < 3 ? (
              <button className="btn btn-primary" onClick={handleRetryWithNewExamples}>
                <RotateCcw size={16} /> Try Again with New Examples
              </button>
            ) : (
              <>
                <button className="btn btn-outline" onClick={handleRetakeOriginal}>
                  <RotateCcw size={16} /> Review Again
                </button>
                {onNextLesson ? (
                  <button className="btn btn-primary" onClick={onNextLesson}>
                    Next Lesson <ArrowRight size={16} />
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={onExit}>
                    Back to Topic <CheckCircle2 size={16} />
                  </button>
                )}
              </>
            )}
            <button className="btn btn-secondary" onClick={onExit}>
              Topic Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

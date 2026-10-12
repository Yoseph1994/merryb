import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RotateCcw, Award, Plane, BookOpen, User, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserStats } from '../types';
import { TENSE_QUESTIONS, TenseQuestion } from '../data/tenseQuestions';
import { sound } from '../utils/sound';
import { TenseMasterclass } from './TenseMasterclass';

interface TenseTestProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onBack: () => void;
  initialMode?: 'intro' | 'masterclass';
}

type ExamState = 'intro' | 'masterclass' | 'testing' | 'result';

export const TenseTest: React.FC<TenseTestProps> = ({ stats, onUpdateStats, onBack, initialMode = 'intro' }) => {
  const [examState, setExamState] = useState<ExamState>(initialMode);
  const [candidateName, setCandidateName] = useState<string>(stats.userName || 'Merry');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const totalQuestions = TENSE_QUESTIONS.length;
  const currentQ: TenseQuestion = TENSE_QUESTIONS[currentIndex];

  const handleStartExam = () => {
    sound.playCabinChime();
    // Save updated name if changed
    if (candidateName.trim() && candidateName.trim() !== stats.userName) {
      onUpdateStats({
        ...stats,
        userName: candidateName.trim()
      });
    }
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExamState('testing');
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: idx
    }));

    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  const handleNext = () => {
    sound.playTap();
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    let correctCount = 0;
    const newMissed = [...stats.missedQuestionIds];
    const updatedCategoryStats = {
      ...stats.categoryStats,
      grammar: {
        total: stats.categoryStats.grammar.total + totalQuestions,
        correct: stats.categoryStats.grammar.correct
      }
    };

    TENSE_QUESTIONS.forEach((q, idx) => {
      const chosen = userAnswers[idx];
      if (chosen === q.correctAnswer) {
        correctCount += 1;
      } else {
        if (!newMissed.includes(q.id)) {
          newMissed.push(q.id);
        }
      }
    });

    updatedCategoryStats.grammar.correct += correctCount;

    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const xpGained = correctCount * 15 + (percentage >= 90 ? 150 : percentage >= 70 ? 80 : 30);

    if (percentage >= 70) {
      sound.playCelebration();
      try {
        confetti({
          particleCount: 130,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    } else {
      sound.playCabinChime();
    }

    onUpdateStats({
      ...stats,
      userName: candidateName.trim() || stats.userName,
      totalXp: stats.totalXp + xpGained,
      totalAnswered: stats.totalAnswered + totalQuestions,
      correctAnswered: stats.correctAnswered + correctCount,
      categoryStats: updatedCategoryStats,
      missedQuestionIds: newMissed
    });

    setExamState('result');
  };

  const handleRetake = () => {
    sound.playTap();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExamState('intro');
  };

  // ----------------------------------------------------
  // 1) MASTERCLASS LESSON SCREEN
  // ----------------------------------------------------
  if (examState === 'masterclass') {
    return (
      <TenseMasterclass
        stats={stats}
        onStartExam={handleStartExam}
        onBack={() => setExamState('intro')}
      />
    );
  }

  // ----------------------------------------------------
  // 2) START SCREEN (Google Form Header Style + Masterclass Entry)
  // ----------------------------------------------------
  if (examState === 'intro') {
    return (
      <div className="tense-test-wrapper">
        {/* Top Back Navigation */}
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={() => {
              sound.playTap();
              onBack();
            }}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <ArrowLeft size={16} /> Back to Lounge
          </button>
        </div>

        {/* Interactive Masterclass Callout Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '18px 22px',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, rgba(245, 183, 0, 0.16), rgba(0, 112, 56, 0.28))',
            border: '1.5px solid var(--et-gold-primary)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)'
          }}
          onClick={() => {
            sound.playTap();
            setExamState('masterclass');
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, var(--et-gold-primary), #c48c00)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.7rem',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(245, 183, 0, 0.35)'
              }}
            >
              🎓
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--et-gold-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  STEP 1: RECOMMENDED FIRST
                </span>
                <span style={{ fontSize: '0.7rem', color: '#a7f3d0', background: 'rgba(14, 168, 89, 0.25)', padding: '1px 7px', borderRadius: '8px', fontWeight: 700 }}>
                  5 MIN INTERACTIVE LESSON
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', margin: '2px 0' }}>
                Tense Masterclass: The 3-Step Cabin Crew Grammar System
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', margin: 0, lineHeight: 1.4 }}>
                Visual flight timeline, time clue trigger radar, and the 4 classic entrance exam traps.
              </p>
            </div>
          </div>
          <button
            className="btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              sound.playTap();
              setExamState('masterclass');
            }}
            style={{
              padding: '10px 18px',
              fontSize: '0.85rem',
              flexShrink: 0,
              background: 'linear-gradient(135deg, var(--et-gold-primary), #d49800)',
              color: '#061a11'
            }}
          >
            Start Masterclass <ArrowRight size={14} />
          </button>
        </div>

        {/* Google Form Style Main Container */}
        <div className="google-form-card glass-panel">
          {/* Distinct Top Accent Strip */}
          <div className="google-form-top-accent" />

          {/* Form Header Area */}
          <div className="google-form-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="exam-tag">CABIN CREW GRAMMAR ASSESSMENT</span>
              <span className="exam-time-tag">⏱️ 15 MIN</span>
            </div>

            <h1 className="google-form-title">
              ✈️ Cabin Crew English Tense Exam
            </h1>

            <p className="google-form-description">
              Welcome! This exam tests your mastery of English tenses, the grammar skill that cabin crew entrance exams and interviews rely on most. 20 questions · multiple choice · about 15 minutes. How it works: choose one answer for each question. You will see right away whether you were correct, and a clear explanation of why. At the end you get your score and a review of every question you missed. Tip: read the whole sentence first and look for time clues like by the time, since, while and yesterday. Good luck!
            </p>

            {/* Feature Highlights Pills */}
            <div className="google-form-meta-grid">
              <div className="meta-badge">
                <span className="badge-icon">📝</span>
                <div>
                  <strong>20 Questions</strong>
                  <span>Comprehensive Tense Coverage</span>
                </div>
              </div>
              <div className="meta-badge">
                <span className="badge-icon">⚡</span>
                <div>
                  <strong>Instant Explanations</strong>
                  <span>Clear grammatical reasoning</span>
                </div>
              </div>
              <div className="meta-badge">
                <span className="badge-icon">🎯</span>
                <div>
                  <strong>Passing Standard: 70%+</strong>
                  <span>Ethiopian Airlines Target</span>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Name Input Section */}
          <div className="google-form-section">
            <label className="google-form-label" htmlFor="candidate-name-input">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} color="var(--et-gold-light)" />
                Your name <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 400 }}>(optional)</span>
              </span>
            </label>
            <input
              id="candidate-name-input"
              type="text"
              className="google-form-input"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Enter your name (e.g. Merry)"
              maxLength={30}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '6px' }}>
              Your certificate and debrief report will be addressed to this name.
            </span>
          </div>

          {/* Start Button */}
          <div className="google-form-footer">
            <button
              className="btn-primary start-exam-btn"
              onClick={handleStartExam}
            >
              <Plane size={18} />
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2) EXAM FLOW (One question per screen)
  // ----------------------------------------------------
  if (examState === 'testing') {
    const isLast = currentIndex === totalQuestions - 1;
    const isCurrentCorrect = selectedOption === currentQ.correctAnswer;
    const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

    return (
      <div className="quiz-container glass-panel">
        {/* Exam Navigation & Progress */}
        <div className="quiz-header">
          <button
            onClick={() => {
              if (confirm('Leave the exam? Your current progress will be lost.')) {
                sound.playTap();
                onBack();
              }
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem'
            }}
          >
            <ArrowLeft size={16} /> Exit Exam
          </button>

          <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '0.95rem' }}>
            Question {currentIndex + 1} of {totalQuestions}
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {progressPercent}% Complete
          </div>
        </div>

        {/* Progress Bar */}
        <div className="quiz-progress-track">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* QUESTION TEXT (NO TENSE NAME OR CATEGORY LABEL SHOWN AS REQUESTED) */}
        <div
          className="question-text"
          style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            fontWeight: 600,
            marginTop: '8px',
            marginBottom: '26px'
          }}
        >
          {currentQ.question}
        </div>

        {/* Options List */}
        <div className="options-list">
          {currentQ.options.map((opt, idx) => {
            let btnClass = 'option-btn';
            if (isAnswered) {
              if (idx === currentQ.correctAnswer) {
                btnClass += ' correct';
              } else if (selectedOption === idx) {
                btnClass += ' wrong';
              }
            }

            return (
              <button
                key={idx}
                className={btnClass}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                style={{
                  cursor: isAnswered ? 'default' : 'pointer',
                  opacity: isAnswered && idx !== currentQ.correctAnswer && selectedOption !== idx ? 0.6 : 1
                }}
              >
                <div className="option-letter">{String.fromCharCode(65 + idx)}</div>
                <span style={{ flex: 1, fontSize: '1rem', fontWeight: 500 }}>{opt}</span>
                {isAnswered && idx === currentQ.correctAnswer && (
                  <CheckCircle2 size={20} color="#4ade80" />
                )}
                {isAnswered && selectedOption === idx && idx !== currentQ.correctAnswer && (
                  <XCircle size={20} color="#f87171" />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Answer Feedback & Explanation */}
        {isAnswered && (
          <div style={{ marginTop: '20px', animation: 'fadeIn 0.25s ease' }}>
            {/* Answer Result Banner */}
            {isCurrentCorrect ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(14, 168, 89, 0.2)',
                  border: '1.5px solid var(--et-green-light)',
                  color: '#a7f3d0',
                  fontWeight: 700,
                  fontSize: '1rem',
                  marginBottom: '12px'
                }}
              >
                <Check size={20} color="#4ade80" />
                <span>✅ Correct!</span>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(216, 30, 5, 0.2)',
                  border: '1.5px solid var(--et-red-accent)',
                  color: '#fca5a5',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginBottom: '12px',
                  lineHeight: 1.4
                }}
              >
                <AlertCircle size={20} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontWeight: 800 }}>❌ Not quite.</span> Correct answer:{' '}
                  <span style={{ color: '#fff', fontWeight: 800 }}>
                    {String.fromCharCode(65 + currentQ.correctAnswer)}. {currentQ.options[currentQ.correctAnswer]}
                  </span>
                </div>
              </div>
            )}

            {/* Clear Explanation Card */}
            <div className="explanation-card" style={{ marginTop: '0', marginBottom: '24px' }}>
              <h4>
                <BookOpen size={16} /> Grammatical Explanation:
              </h4>
              <p>{currentQ.explanation}</p>
            </div>

            {/* Next / Result Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="btn-primary"
                onClick={handleNext}
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                {isLast ? (
                  <>
                    See my result <ArrowRight size={18} />
                  </>
                ) : (
                  <>
                    Next question <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------
  // 3) RESULT SCREEN (Score, Message, Missed Questions Review)
  // ----------------------------------------------------
  let correctCount = 0;
  const missedIndices: number[] = [];

  TENSE_QUESTIONS.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctAnswer) {
      correctCount += 1;
    } else {
      missedIndices.push(idx);
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Message based on score criteria:
  // 90%+ "Excellent, cabin-crew ready! 🌟"
  // 70-89% "Good, review the tenses below. 💪"
  // below 70%
  let scoreMessage = '';
  let scoreBadgeColor = '';
  if (percentage >= 90) {
    scoreMessage = 'Excellent, cabin-crew ready! 🌟';
    scoreBadgeColor = 'var(--et-gold-primary)';
  } else if (percentage >= 70) {
    scoreMessage = 'Good, review the tenses below. 💪';
    scoreBadgeColor = '#38bdf8';
  } else {
    scoreMessage = 'Keep practicing! Review the tenses below to build mastery. ✈️';
    scoreBadgeColor = 'var(--et-red-accent)';
  }

  return (
    <div className="tense-test-wrapper">
      <div className="quiz-container glass-panel" style={{ padding: '30px 24px' }}>
        {/* Results Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: percentage >= 70 ? 'rgba(0, 112, 56, 0.3)' : 'rgba(216, 30, 5, 0.25)',
              border: `2px solid ${percentage >= 70 ? 'var(--et-gold-primary)' : 'var(--et-red-accent)'}`,
              boxShadow: percentage >= 70 ? '0 0 25px var(--et-gold-glow)' : 'none'
            }}
          >
            {percentage >= 70 ? (
              <Award size={46} color="var(--et-gold-light)" />
            ) : (
              <RotateCcw size={42} color="var(--et-red-accent)" />
            )}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#fff', marginBottom: '6px' }}>
            {scoreMessage}
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 20px' }}>
            Exam completed for Candidate <strong style={{ color: 'var(--et-gold-light)' }}>{candidateName}</strong>.
            {percentage >= 90
              ? ' Outstanding grammar precision! You are fully primed for aviation panel tests and interviews.'
              : percentage >= 70
              ? ' Solid performance! Reviewing the questions below will help lock in 100% test accuracy.'
              : ' Cabin crew exams place strong emphasis on tense accuracy and reported speech. Dive into the missed questions below to master every rule.'}
          </p>

          {/* Score Box */}
          <div
            style={{
              display: 'inline-flex',
              gap: '24px',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.45)',
              padding: '16px 32px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(245, 183, 0, 0.3)',
              marginBottom: '20px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Score
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>
                {correctCount} <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>/ {totalQuestions}</span>
              </div>
            </div>

            <div style={{ width: '1px', height: '44px', background: 'rgba(255, 255, 255, 0.15)' }} />

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Percentage
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, color: scoreBadgeColor, lineHeight: 1.1 }}>
                {percentage}%
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={handleRetake}
              style={{ padding: '12px 24px' }}
            >
              <RotateCcw size={16} /> Retake Exam
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                sound.playTap();
                setExamState('masterclass');
              }}
              style={{ padding: '12px 24px', borderColor: 'var(--et-gold-primary)', color: 'var(--et-gold-light)' }}
            >
              🎓 Review Masterclass
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                sound.playTap();
                onBack();
              }}
              style={{ padding: '12px 24px' }}
            >
              <Plane size={16} /> Back to Lounge
            </button>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* REVIEW OF MISSED QUESTIONS                       */}
        {/* ------------------------------------------------ */}
        <div style={{ marginTop: '36px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={20} color="var(--et-gold-primary)" />
              Review of Missed Questions ({missedIndices.length})
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {missedIndices.length === 0 ? 'Zero mistakes!' : 'Learn from every error'}
            </span>
          </div>

          {missedIndices.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '36px 20px',
                background: 'rgba(0, 112, 56, 0.15)',
                border: '1px solid var(--et-green-light)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🎉</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', marginBottom: '6px' }}>
                Flawless Score, Cadet {candidateName}!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto' }}>
                You did not miss any question! You have proven complete command of English verb tenses for cabin crew entrance exams.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {missedIndices.map((idx) => {
                const q = TENSE_QUESTIONS[idx];
                const chosen = userAnswers[idx];

                return (
                  <div
                    key={q.id}
                    style={{
                      background: 'rgba(7, 24, 17, 0.7)',
                      border: '1px solid rgba(216, 30, 5, 0.35)',
                      borderLeft: '4px solid var(--et-red-accent)',
                      borderRadius: 'var(--radius-md)',
                      padding: '18px 20px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--et-gold-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Question {idx + 1} of {totalQuestions}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#fca5a5', background: 'rgba(216, 30, 5, 0.2)', padding: '2px 8px', borderRadius: '10px', fontWeight: 600 }}>
                        Needs Review
                      </span>
                    </div>

                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '14px', lineHeight: 1.5 }}>
                      {q.question}
                    </div>

                    {/* Options Comparison */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                      {chosen !== undefined && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 12px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(216, 30, 5, 0.15)',
                            border: '1px solid rgba(216, 30, 5, 0.3)',
                            fontSize: '0.9rem',
                            color: '#fca5a5'
                          }}
                        >
                          <XCircle size={16} color="#f87171" style={{ flexShrink: 0 }} />
                          <span>
                            <strong>Your Answer:</strong> {String.fromCharCode(65 + chosen)}. {q.options[chosen]}
                          </span>
                        </div>
                      )}

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(14, 168, 89, 0.15)',
                          border: '1px solid rgba(14, 168, 89, 0.3)',
                          fontSize: '0.9rem',
                          color: '#a7f3d0'
                        }}
                      >
                        <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0 }} />
                        <span>
                          <strong>Correct Answer:</strong> {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}
                        </span>
                      </div>
                    </div>

                    {/* Grammatical Explanation */}
                    <div
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '12px 14px',
                        borderLeft: '3px solid var(--et-gold-primary)'
                      }}
                    >
                      <div style={{ fontSize: '0.78rem', color: 'var(--et-gold-light)', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <BookOpen size={14} /> Rule & Explanation:
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {q.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

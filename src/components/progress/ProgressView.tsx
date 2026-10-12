import React from 'react';
import { Target, Award, Calendar, AlertCircle, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Topic, UserStudyState, WeakSpot, LessonItem } from '../../types';

interface Props {
  topics: Topic[];
  studyState: UserStudyState;
  onPracticeWeakSpot: (lessonItemId: string) => void;
  onResetProgress: () => void;
}

export const ProgressView: React.FC<Props> = ({
  topics,
  studyState,
  onPracticeWeakSpot,
  onResetProgress
}) => {
  const { examHistory, weakSpots } = studyState;

  // Calculate overall metrics
  let totalLessons = 0;
  let totalCompleted = 0;
  let totalMastered = 0;

  topics.forEach(t => {
    t.lessonItems.forEach(l => {
      totalLessons += 1;
      const status = studyState.lessonProgress[l.id]?.status;
      if (status === 'completed') totalCompleted += 1;
      if (status === 'mastered') {
        totalCompleted += 1;
        totalMastered += 1;
      }
    });
  });

  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <div style={{ width: '100%' }}>
      {/* Page Title */}
      <div style={{ marginBottom: '22px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
          Your Learning Progress
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Track your topic mastery, exam history, and targeted weak spots.
        </p>
      </div>

      {/* Overall Mastery Card */}
      <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
          Curriculum Overview
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
          <div style={{ background: 'var(--bg-surface-subtle)', padding: '14px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
              {totalCompleted}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
              Completed
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface-subtle)', padding: '14px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-success-icon)' }}>
              {totalMastered}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
              Mastered 🌟
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface-subtle)', padding: '14px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {overallPercent}%
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
              Overall
            </div>
          </div>
        </div>

        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${overallPercent}%` }} />
        </div>
      </div>

      {/* Weak Spots Section */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Target size={20} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Identified Weak Spots ({weakSpots.length})
            </h3>
          </div>
        </div>

        {weakSpots.length === 0 ? (
          <div className="card" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p style={{ margin: 0 }}>
              No weak spots recorded yet! Complete practice exams to pinpoint specific areas needing extra focus.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {weakSpots.map(spot => (
              <div
                key={spot.lessonItemId}
                className="card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-error-text)', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {spot.mistakeCount} missed in exams
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                    {spot.lessonTitle}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Topic: {spot.topicTitle}
                  </div>
                </div>

                <button
                  className="btn btn-secondary"
                  onClick={() => onPracticeWeakSpot(spot.lessonItemId)}
                  style={{ padding: '8px 16px', fontSize: '0.85rem', flexShrink: 0 }}
                >
                  Practice Spot <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Exam History Section */}
      <div style={{ marginBottom: '36px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px' }}>
          Exam Attempt History ({examHistory.length})
        </h3>

        {examHistory.length === 0 ? (
          <div className="card" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p style={{ margin: 0 }}>
              No completed exams yet. Take a custom exam from the Exams tab to see your score history here.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {examHistory.map(att => (
              <div
                key={att.id}
                className="card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={13} /> {new Date(att.date).toLocaleDateString()} at {new Date(att.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                    {att.questionCount} Questions ({att.topics.join(', ')})
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {att.mistakes.length} mistakes reviewed
                  </div>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: att.percentage >= 70 ? 'var(--color-success-icon)' : 'var(--color-warning-icon)' }}>
                    {att.percentage}%
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {att.score} / {att.questionCount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reset Progress Section */}
      <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
        <button
          className="btn-ghost"
          onClick={() => {
            if (confirm('Are you sure you want to reset all learning progress and exam history?')) {
              onResetProgress();
            }
          }}
          style={{ fontSize: '0.85rem', color: 'var(--color-error-text)', padding: '8px 16px' }}
        >
          <RotateCcw size={14} /> Reset all progress and history
        </button>
      </div>
    </div>
  );
};

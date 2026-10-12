import React from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Sparkles, ChevronRight, Award } from 'lucide-react';
import { Topic, LessonItem, UserStudyState, LessonStatus } from '../../types';

interface Props {
  topic: Topic;
  studyState: UserStudyState;
  onSelectLesson: (lesson: LessonItem) => void;
  onOpenCheatSheet: () => void;
  onBack: () => void;
}

export const TopicDetailView: React.FC<Props> = ({
  topic,
  studyState,
  onSelectLesson,
  onOpenCheatSheet,
  onBack
}) => {
  const getStatus = (lessonId: string): LessonStatus => {
    return studyState.lessonProgress[lessonId]?.status || 'not_started';
  };

  const getStatusBadge = (status: LessonStatus) => {
    switch (status) {
      case 'mastered':
        return <span className="status-badge status-mastered">Mastered 🌟</span>;
      case 'completed':
        return <span className="status-badge status-completed">Completed ✓</span>;
      case 'in_progress':
        return <span className="status-badge status-in_progress">In Progress</span>;
      case 'not_started':
      default:
        return <span className="status-badge status-not_started">Not Started</span>;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <button
          onClick={onBack}
          className="btn-ghost"
          style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <ArrowLeft size={16} /> All Topics
        </button>

        <button
          onClick={onOpenCheatSheet}
          className="btn btn-outline"
          style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', minHeight: '38px' }}
        >
          <BookOpen size={16} color="var(--accent-primary)" /> Topic Cheat Sheet
        </button>
      </div>

      {/* Topic Hero Card */}
      <div className="card" style={{ padding: '24px', marginBottom: '24px', background: 'var(--bg-surface)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'var(--accent-subtle)', color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
          <Sparkles size={14} /> Topic Curriculum
        </div>

        <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
          {topic.title}
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: '16px' }}>
          {topic.shortDesc}
        </p>

        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {topic.lessonItems.length} lessons in this topic · All lessons unlocked
        </div>
      </div>

      {/* Lesson Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {topic.lessonItems.map((item, idx) => {
          const status = getStatus(item.id);

          return (
            <div
              key={item.id}
              className="card card-interactive lesson-item-card"
              onClick={() => onSelectLesson(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                <span
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-md)',
                    background: status === 'mastered' || status === 'completed'
                      ? 'var(--color-success-bg)'
                      : 'var(--bg-surface-subtle)',
                    color: status === 'mastered' || status === 'completed'
                      ? 'var(--color-success-icon)'
                      : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {status === 'mastered' || status === 'completed' ? '✓' : idx + 1}
                </span>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                      {item.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                {getStatusBadge(status)}
                <ChevronRight size={18} color="var(--text-muted)" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

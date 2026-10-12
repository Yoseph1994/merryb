import React from 'react';
import { Clock, GitBranch, CheckSquare, FileText, BookA, SpellCheck, ChevronRight, Sparkles } from 'lucide-react';
import { Topic, UserStudyState } from '../../types';

interface Props {
  topics: Topic[];
  studyState: UserStudyState;
  onSelectTopic: (topic: Topic) => void;
}

export const LearnTopicList: React.FC<Props> = ({ topics, studyState, onSelectTopic }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock size={24} color="var(--accent-primary)" />;
      case 'GitBranch': return <GitBranch size={24} color="var(--accent-primary)" />;
      case 'CheckSquare': return <CheckSquare size={24} color="var(--accent-primary)" />;
      case 'FileText': return <FileText size={24} color="var(--accent-primary)" />;
      case 'BookA': return <BookA size={24} color="var(--accent-primary)" />;
      case 'SpellCheck': return <SpellCheck size={24} color="var(--accent-primary)" />;
      default: return <Clock size={24} color="var(--accent-primary)" />;
    }
  };

  const getCompletedCount = (topic: Topic) => {
    let count = 0;
    topic.lessonItems.forEach(l => {
      const s = studyState.lessonProgress[l.id]?.status;
      if (s === 'completed' || s === 'mastered') count += 1;
    });
    return count;
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Title */}
      <div style={{ marginBottom: '22px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
          Study Topics
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Choose any topic to learn step-by-step. Everything is self-paced with instant practice.
        </p>
      </div>

      {/* Grid of 6 Topic Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
        {topics.map(topic => {
          const completedCount = getCompletedCount(topic);
          const totalLessons = topic.lessonItems.length;

          return (
            <div
              key={topic.id}
              className="card card-interactive"
              onClick={() => onSelectTopic(topic)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1 }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {getIcon(topic.iconName)}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                      {topic.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 8px' }}>
                    {topic.shortDesc}
                  </p>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {totalLessons > 0 ? (
                      <span>{completedCount} of {totalLessons} lessons completed</span>
                    ) : (
                      <span>Cheat Sheet available · Lessons in next phase</span>
                    )}
                  </div>
                </div>
              </div>

              <ChevronRight size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

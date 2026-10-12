import React from 'react';
import { ArrowRight, BookOpen, Clock, GitBranch, CheckSquare, FileText, BookA, SpellCheck, Play, Award } from 'lucide-react';
import { Topic, UserStudyState, LessonItem } from '../../types';
import { ProgressRing } from './ProgressRing';

interface Props {
  topics: Topic[];
  studyState: UserStudyState;
  lastActiveLesson?: LessonItem;
  lastActiveTopic?: Topic;
  onResumeLesson: (lesson: LessonItem) => void;
  onSelectTopic: (topic: Topic) => void;
  onStartExamTab: () => void;
}

export const HomeView: React.FC<Props> = ({
  topics,
  studyState,
  lastActiveLesson,
  lastActiveTopic,
  onResumeLesson,
  onSelectTopic,
  onStartExamTab
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock size={22} color="var(--accent-primary)" />;
      case 'GitBranch': return <GitBranch size={22} color="var(--accent-primary)" />;
      case 'CheckSquare': return <CheckSquare size={22} color="var(--accent-primary)" />;
      case 'FileText': return <FileText size={22} color="var(--accent-primary)" />;
      case 'BookA': return <BookA size={22} color="var(--accent-primary)" />;
      case 'SpellCheck': return <SpellCheck size={22} color="var(--accent-primary)" />;
      default: return <Clock size={22} color="var(--accent-primary)" />;
    }
  };

  // Calculate topic progress (lessons done & exam average)
  const getTopicMetrics = (topic: Topic) => {
    const totalLessons = topic.lessonItems.length;
    let completedCount = 0;
    topic.lessonItems.forEach(l => {
      const s = studyState.lessonProgress[l.id]?.status;
      if (s === 'completed' || s === 'mastered') completedCount += 1;
    });

    const lessonPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    // Exam average for this topic
    const relevantAttempts = studyState.examHistory.filter(h => h.topics.includes(topic.id));
    const avgScore = relevantAttempts.length > 0
      ? Math.round(relevantAttempts.reduce((acc, h) => acc + h.percentage, 0) / relevantAttempts.length)
      : null;

    return { completedCount, totalLessons, lessonPercent, avgScore };
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Friendly Greeting Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.4px', marginBottom: '4px' }}>
          Welcome back, {studyState.userName}!
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
          One calm step every day. Build solid grammar and master your entrance exam.
        </p>
      </div>

      {/* "Continue where you left off" Card */}
      {lastActiveLesson && lastActiveTopic && (
        <div
          className="card"
          style={{
            padding: '20px 24px',
            marginBottom: '28px',
            background: 'var(--bg-surface)',
            borderLeft: '4px solid var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
              Continue where you left off
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: '2px 0' }}>
              {lastActiveLesson.title}
            </h3>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Topic: {lastActiveTopic.title}
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => onResumeLesson(lastActiveLesson)}
            style={{ padding: '10px 20px', fontSize: '0.9rem', flexShrink: 0 }}
          >
            Resume Lesson <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Topics Section */}
      <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
          Core Exam Topics
        </h2>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          6 Topics
        </span>
      </div>

      {/* 6 Topic Cards with Progress Rings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '32px' }}>
        {topics.map(topic => {
          const { completedCount, totalLessons, lessonPercent, avgScore } = getTopicMetrics(topic);

          return (
            <div
              key={topic.id}
              className="card card-interactive"
              onClick={() => onSelectTopic(topic)}
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
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

                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 2px' }}>
                    {topic.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {totalLessons > 0 ? (
                      <span>{completedCount}/{totalLessons} lessons done</span>
                    ) : (
                      <span>Cheat Sheet ready</span>
                    )}
                    {avgScore !== null && (
                      <span style={{ marginLeft: 6, color: 'var(--accent-primary)', fontWeight: 600 }}>
                        · Exam: {avgScore}%
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ flexShrink: 0 }}>
                <ProgressRing
                  percentage={lessonPercent}
                  label={totalLessons > 0 ? `${completedCount}/${totalLessons}` : '—'}
                  color={lessonPercent === 100 ? 'var(--color-success-icon)' : 'var(--accent-primary)'}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

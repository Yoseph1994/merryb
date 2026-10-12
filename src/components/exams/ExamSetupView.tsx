import React, { useState } from 'react';
import { Play, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Topic, TopicId } from '../../types';

interface Props {
  topics: Topic[];
  availableQuestionsCount: number;
  onStart: (selectedTopicIds: TopicId[], questionCount: number, timed: boolean) => void;
}

export const ExamSetupView: React.FC<Props> = ({
  topics,
  availableQuestionsCount,
  onStart
}) => {
  const [selectedTopics, setSelectedTopics] = useState<TopicId[]>(['tenses']);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isTimed, setIsTimed] = useState<boolean>(false);

  const toggleTopic = (id: TopicId) => {
    if (selectedTopics.includes(id)) {
      if (selectedTopics.length === 1) return; // Keep at least one
      setSelectedTopics(prev => prev.filter(t => t !== id));
    } else {
      setSelectedTopics(prev => [...prev, id]);
    }
  };

  const selectAllMixed = () => {
    setSelectedTopics(topics.map(t => t.id));
  };

  const isAllSelected = selectedTopics.length === topics.length;

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '22px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
          Custom Exam Simulator
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Choose the topics you want to be tested on, configure question length, and test your exam readiness.
        </p>
      </div>

      <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
        {/* Section 1: Choose Topics */}
        <div style={{ marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <label style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
              1. Select Topics to Include
            </label>
            <button
              className="btn-ghost"
              onClick={selectAllMixed}
              style={{ fontSize: '0.8rem', padding: '4px 8px', color: 'var(--accent-primary)', fontWeight: 600 }}
            >
              {isAllSelected ? '✓ All Selected' : 'Select All (Mixed)'}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {topics.map(t => {
              const isSelected = selectedTopics.includes(t.id);

              return (
                <button
                  key={t.id}
                  onClick={() => toggleTopic(t.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '1.5px solid var(--accent-primary)' : '1px solid var(--border-medium)',
                    background: isSelected ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{t.title}</span>
                  {isSelected && <Check size={16} color="var(--accent-primary)" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Number of Questions */}
        <div style={{ marginBottom: '26px' }}>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
            2. Number of Questions
          </label>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[10, 20, 30].map(count => (
              <button
                key={count}
                onClick={() => setQuestionCount(count)}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  border: questionCount === count ? '2px solid var(--accent-primary)' : '1px solid var(--border-medium)',
                  background: questionCount === count ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                {count} Questions
              </button>
            ))}
          </div>
        </div>

        {/* Section 3: Timer Toggle */}
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} color="var(--text-secondary)" />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  Optional Exam Timer
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {isTimed ? '60 seconds per question limit' : 'Practice at your own calm pace'}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsTimed(prev => !prev)}
              style={{
                width: '48px',
                height: '26px',
                borderRadius: '13px',
                background: isTimed ? 'var(--accent-primary)' : 'var(--border-medium)',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s'
              }}
              aria-label="Toggle exam timer"
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  position: 'absolute',
                  top: '3px',
                  left: isTimed ? '25px' : '3px',
                  transition: 'left 0.2s'
                }}
              />
            </button>
          </div>
        </div>

        {/* Start Button */}
        <button
          className="btn btn-primary"
          onClick={() => onStart(selectedTopics, questionCount, isTimed)}
          style={{ width: '100%', padding: '14px', fontSize: '1.05rem', fontWeight: 700 }}
        >
          <Play size={18} fill="currentColor" /> Start Exam ({questionCount} Questions)
        </button>
      </div>
    </div>
  );
};

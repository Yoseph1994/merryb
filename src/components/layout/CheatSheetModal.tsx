import React from 'react';
import { X, BookOpen, AlertCircle } from 'lucide-react';
import { Topic } from '../../types';

interface Props {
  topic: Topic;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<Props> = ({ topic, onClose }) => {
  const { cheatSheet } = topic;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {topic.title} Cheat Sheet
            </h3>
          </div>
          <button className="btn-ghost btn-icon-only" onClick={onClose} aria-label="Close cheat sheet">
            <X size={20} />
          </button>
        </div>

        {/* Overview */}
        <div style={{ padding: '14px 16px', background: 'var(--accent-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '20px', color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.5 }}>
          <strong>Summary: </strong>{cheatSheet.overview}
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cheatSheet.sections.map((section, sIdx) => (
            <div key={sIdx} style={{ background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                {section.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                {section.summary}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.rules.map((r, rIdx) => (
                  <div key={rIdx} style={{ background: 'var(--bg-surface)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-primary)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                      {r.rule}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                      Example: {r.example}
                    </div>
                    {r.clue && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '2px' }}>
                        Clue: {r.clue}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

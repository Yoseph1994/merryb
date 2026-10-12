import React from 'react';
import { BookmarkCheck, ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  bullets: string[];
  onFinish: () => void;
}

export const RememberCard: React.FC<Props> = ({ title, bullets, onFinish }) => {
  return (
    <div className="card" style={{ padding: '32px', textAlign: 'left', marginBottom: '20px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--accent-subtle)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
        <BookmarkCheck size={18} />
        REMEMBER THIS
      </div>

      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '18px' }}>
        {title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
        {bullets.map((bullet, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '14px 16px',
              background: 'var(--bg-surface-subtle)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--accent-primary)'
            }}
          >
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>💡</span>
            <span style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 500 }}>
              {bullet}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn btn-primary" onClick={onFinish}>
          View Lesson Result <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Sun, Moon, User } from 'lucide-react';
import { UserStudyState } from '../../types';

interface Props {
  studyState: UserStudyState;
  onToggleTheme: () => void;
  onEditName: () => void;
}

export const Header: React.FC<Props> = ({ studyState, onToggleTheme, onEditName }) => {
  return (
    <header className="app-header">
      <div className="header-brand">
        <h1 className="brand-title">
          English Study
        </h1>
        <span className="brand-badge">
          Entrance Exam Prep
        </span>
      </div>

      <div className="header-actions">
        {/* Name pill / Edit */}
        <button
          onClick={onEditName}
          className="btn-ghost"
          style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', minHeight: '38px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}
          title="Change student name"
          aria-label="Change student name"
        >
          <User size={14} color="var(--accent-primary)" />
          <span>{studyState.userName || 'Student'}</span>
        </button>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="btn-ghost btn-icon-only"
          style={{ minHeight: '38px', width: '38px', height: '38px', borderRadius: 'var(--radius-full)' }}
          title={studyState.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle color theme"
        >
          {studyState.theme === 'dark' ? (
            <Sun size={18} color="var(--color-warning-icon)" />
          ) : (
            <Moon size={18} color="var(--text-secondary)" />
          )}
        </button>
      </div>
    </header>
  );
};

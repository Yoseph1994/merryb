import React from 'react';
import { Home, BookOpen, Award, BarChart2 } from 'lucide-react';

export type ActiveTab = 'home' | 'learn' | 'exams' | 'progress';

interface Props {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Navigation: React.FC<Props> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Home },
    { id: 'learn' as ActiveTab, label: 'Learn', icon: BookOpen },
    { id: 'exams' as ActiveTab, label: 'Exams', icon: Award },
    { id: 'progress' as ActiveTab, label: 'Progress', icon: BarChart2 }
  ];

  return (
    <>
      {/* Desktop Side Rail */}
      <aside className="desktop-side-rail">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', padding: '0 8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
              M
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-main)', letterSpacing: '-0.2px' }}>
                English Study
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Exam Prep Academy
              </div>
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    background: isActive ? 'var(--accent-subtle)' : 'transparent',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Icon size={20} color={isActive ? 'var(--accent-primary)' : 'var(--text-secondary)'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div style={{ padding: '0 8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Clean study mode · Offline ready
        </div>
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <nav className="mobile-bottom-nav" aria-label="Bottom Navigation">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              className={`nav-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              aria-label={tab.label}
              aria-selected={isActive}
            >
              <Icon size={22} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

import React, { useState } from 'react';
import { X, Award, Flame, CheckCircle, Target, Trophy, Edit3, Shield } from 'lucide-react';
import { UserStats, QuestionCategory } from '../types';
import { calculateLevel } from '../utils/storage';
import { sound } from '../utils/sound';

interface StatsModalProps {
  stats: UserStats;
  onClose: () => void;
  onUpdateStats: (newStats: UserStats) => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ stats, onClose, onUpdateStats }) => {
  const levelInfo = calculateLevel(stats.totalXp);
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(stats.userName);
  const [tempAvatar, setTempAvatar] = useState(stats.avatar);

  const avatars = ['👩🏾‍✈️', '✈️', '🌟', '👑', '🦅', '💎'];

  const handleSaveProfile = () => {
    if (tempName.trim()) {
      onUpdateStats({
        ...stats,
        userName: tempName.trim(),
        avatar: tempAvatar
      });
    }
    setEditingName(false);
  };

  const getCategoryPercent = (cat: QuestionCategory) => {
    const s = stats.categoryStats[cat];
    if (!s || s.total === 0) return 0;
    return Math.round((s.correct / s.total) * 100);
  };

  const overallAccuracy = stats.totalAnswered > 0 ? Math.round((stats.correctAnswered / stats.totalAnswered) * 100) : 0;

  // Badges system
  const badges = [
    {
      id: 'first-flight',
      title: 'First Flight',
      desc: 'Completed first mock flight',
      unlocked: stats.mockExamsCompleted >= 1,
      icon: '🛫'
    },
    {
      id: 'speed-ace',
      title: 'Speed Ace',
      desc: 'Scored 100+ on Runway Blitz',
      unlocked: stats.bestSpeedRunScore >= 100,
      icon: '⚡'
    },
    {
      id: 'high-accuracy',
      title: 'Honor Cadet',
      desc: 'Achieved 80%+ on Mock Exam',
      unlocked: stats.bestMockScore >= 80,
      icon: '🎖️'
    },
    {
      id: 'streak-star',
      title: 'Cabin Dedication',
      desc: '3+ Day Practice Streak',
      unlocked: stats.streakDays >= 3,
      icon: '🔥'
    },
    {
      id: 'gold-wings',
      title: 'Gold Wings Ready',
      desc: 'Reached Level 3 rank',
      unlocked: levelInfo.level >= 3,
      icon: '👑'
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={20} color="var(--et-gold-primary)" />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.25rem' }}>
              Cadet Performance Record
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Card */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 183, 0, 0.2)', marginBottom: '20px' }}>
          {editingName ? (
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                {avatars.map((av) => (
                  <button
                    key={av}
                    onClick={() => setTempAvatar(av)}
                    style={{
                      background: tempAvatar === av ? 'var(--et-gold-primary)' : 'rgba(255,255,255,0.08)',
                      border: 'none',
                      padding: '6px 10px',
                      borderRadius: '8px',
                      fontSize: '1.2rem',
                      cursor: 'pointer'
                    }}
                  >
                    {av}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid var(--et-gold-primary)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '1rem',
                  marginBottom: '10px'
                }}
              />
              <button className="btn-primary" onClick={handleSaveProfile} style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                Save Profile
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '2.2rem' }}>{stats.avatar}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                    Cadet {stats.userName}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>
                    {levelInfo.rankTitle} • Level {levelInfo.level}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setEditingName(true)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
              >
                <Edit3 size={14} /> Edit
              </button>
            </div>
          )}
        </div>

        {/* Key Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '22px' }}>
          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>OVERALL ACCURACY</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: overallAccuracy >= 75 ? '#4ade80' : 'var(--et-gold-light)' }}>
              {overallAccuracy}%
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              {stats.correctAnswered} of {stats.totalAnswered} questions
            </span>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>BEST MOCK FLIGHT</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--et-gold-light)' }}>
              {stats.bestMockScore}%
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              {stats.mockExamsCompleted} exams logged
            </span>
          </div>
        </div>

        {/* Category Accuracy Bars */}
        <div style={{ marginBottom: '22px' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '0.95rem', marginBottom: '12px' }}>
            Subject Accuracy Breakdown
          </h4>

          {[
            { cat: 'grammar' as QuestionCategory, name: 'Grammar & Syntax' },
            { cat: 'spelling' as QuestionCategory, name: 'Aviation Spelling' },
            { cat: 'vocabulary' as QuestionCategory, name: 'Vocabulary & Idioms' },
            { cat: 'situational' as QuestionCategory, name: 'Cabin Situational Judgment' }
          ].map(({ cat, name }) => {
            const pct = getCategoryPercent(cat);
            const data = stats.categoryStats[cat] || { total: 0, correct: 0 };

            return (
              <div key={cat} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{name}</span>
                  <span style={{ color: '#fff', fontWeight: 700 }}>
                    {pct}% ({data.correct}/{data.total})
                  </span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${pct}%`,
                      height: '100%',
                      background: pct >= 75 ? 'var(--et-green-light)' : pct >= 50 ? 'var(--et-gold-primary)' : 'rgba(255,255,255,0.3)',
                      borderRadius: '3px'
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Badges Section */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--et-gold-light)', fontSize: '0.95rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Trophy size={16} /> Crew Badges & Milestones
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
            {badges.map((b) => (
              <div
                key={b.id}
                style={{
                  background: b.unlocked ? 'rgba(245, 183, 0, 0.12)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${b.unlocked ? 'rgba(245, 183, 0, 0.35)' : 'rgba(255,255,255,0.06)'}`,
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center',
                  opacity: b.unlocked ? 1 : 0.45
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{b.icon}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: b.unlocked ? '#fff' : 'var(--text-muted)' }}>
                  {b.title}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

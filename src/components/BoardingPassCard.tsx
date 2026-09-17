import React, { useState } from 'react';
import { Plane, Edit2, Check, Sparkles, Compass } from 'lucide-react';
import { UserStats } from '../types';
import { calculateLevel } from '../utils/storage';
import { DAILY_MOTIVATIONAL_QUOTES } from '../data/questions';
import { sound } from '../utils/sound';

interface BoardingPassProps {
  stats: UserStats;
  onUpdateName: (newName: string) => void;
}

export const BoardingPassCard: React.FC<BoardingPassProps> = ({ stats, onUpdateName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(stats.userName);
  const levelInfo = calculateLevel(stats.totalXp);

  // Rotating quote of the day
  const quoteIndex = new Date().getDate() % DAILY_MOTIVATIONAL_QUOTES.length;
  const todayQuote = DAILY_MOTIVATIONAL_QUOTES[quoteIndex];

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateName(tempName.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className="boarding-pass-ticket">
      {/* Top Banner */}
      <div className="ticket-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Compass size={18} color="#f5b700" />
          <span className="ticket-tag">Ethiopian Airlines Cadet Pass</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>FLIGHT</span>
          <span style={{ background: '#f5b700', color: '#061a11', padding: '2px 8px', borderRadius: '6px', fontWeight: 800, fontSize: '0.75rem' }}>
            ET-777
          </span>
        </div>
      </div>

      <div className="ticket-body">
        {/* Left Flight Route Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              PASSENGER / CADET
            </span>
            {isEditing ? (
              <button
                onClick={handleSaveName}
                style={{ background: 'var(--et-green-primary)', border: 'none', color: '#fff', padding: '3px 8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}
              >
                <Check size={14} /> Save
              </button>
            ) : (
              <button
                onClick={() => {
                  sound.playTap();
                  setIsEditing(true);
                }}
                style={{ background: 'none', border: 'none', color: 'var(--et-gold-light)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600 }}
              >
                <Edit2 size={12} /> Edit Name
              </button>
            )}
          </div>

          {isEditing ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
              autoFocus
              style={{
                fontSize: '1.4rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid var(--et-gold-primary)',
                color: '#fff',
                padding: '4px 10px',
                borderRadius: '8px',
                width: '100%',
                outline: 'none',
                marginBottom: '12px'
              }}
            />
          ) : (
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{stats.avatar}</span>
              <span>Cadet {stats.userName}</span>
            </div>
          )}

          {/* Route Visual */}
          <div className="flight-route-visual">
            <div className="flight-city">
              <h3>ADD</h3>
              <p>Addis Ababa (Bole)</p>
            </div>

            <div className="route-flight-line">
              <div className="flying-plane-icon">
                <Plane size={22} fill="var(--et-gold-primary)" style={{ transform: 'rotate(90deg)' }} />
              </div>
              <div className="flight-track"></div>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-gold)', marginTop: '8px', fontWeight: 600 }}>
                NON-STOP TO SUCCESS
              </span>
            </div>

            <div className="flight-city" style={{ textAlign: 'right' }}>
              <h3 style={{ color: 'var(--et-gold-light)' }}>WNGS</h3>
              <p>Golden Wings</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="ticket-details-grid">
            <div className="detail-box">
              <span className="label">Gate</span>
              <span className="value">07-Bole</span>
            </div>
            <div className="detail-box">
              <span className="label">Boarding Seat</span>
              <span className="value" style={{ color: 'var(--et-gold-light)' }}>01-A</span>
            </div>
            <div className="detail-box">
              <span className="label">Status</span>
              <span className="value" style={{ color: '#4ade80' }}>CONFIRMED</span>
            </div>
          </div>
        </div>

        {/* Right Rank & Motivational Section */}
        <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                CREW CADET RANK
              </span>
              <span style={{ background: 'rgba(245, 183, 0, 0.15)', color: 'var(--et-gold-light)', fontSize: '0.7rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px' }}>
                LVL {levelInfo.level}
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-gold)', marginBottom: '8px' }}>
              {levelInfo.rankTitle}
            </div>

            {/* Progress to next level */}
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', marginBottom: '6px' }}>
              <div
                style={{
                  width: `${levelInfo.progressPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--et-green-light), var(--et-gold-primary))',
                  borderRadius: '3px'
                }}
              ></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              <span>Progress: {levelInfo.progressPercent}%</span>
              <span>Next Rank at {levelInfo.nextLevelXp} XP</span>
            </div>
          </div>

          {/* Supportive Note */}
          <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic', display: 'flex', gap: '6px' }}>
            <Sparkles size={14} color="var(--et-gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>"{todayQuote.quote}"</span>
          </div>
        </div>
      </div>

      {/* Ticket Tear Perforation */}
      <div className="ticket-perforation">
        <div className="perforation-notch left"></div>
        <div className="perforation-line"></div>
        <div className="perforation-notch right"></div>
      </div>

      {/* Bottom Barcode Simulation */}
      <div style={{ padding: '0 24px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '2px', opacity: 0.6, height: '24px', alignItems: 'center' }}>
          {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2].map((w, i) => (
            <div key={i} style={{ width: `${w * 2}px`, height: '20px', background: '#fff' }}></div>
          ))}
        </div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'monospace', letterSpacing: '2px' }}>
          ET-CREW-RECRUIT-2026-OK
        </div>
      </div>
    </div>
  );
};

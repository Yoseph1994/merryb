import React from 'react';
import { Heart, Sparkles, Award, Compass, Send, CheckCircle } from 'lucide-react';
import { UserStats } from '../types';
import { DAILY_MOTIVATIONAL_QUOTES } from '../data/questions';

interface MotivationLoungeProps {
  stats: UserStats;
  onBack: () => void;
}

export const MotivationLounge: React.FC<MotivationLoungeProps> = ({ stats, onBack }) => {
  return (
    <div className="quiz-container glass-panel">
      {/* Top Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(245, 183, 0, 0.2), rgba(0, 112, 56, 0.3))', border: '2px solid var(--et-gold-primary)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Heart size={30} color="var(--et-gold-primary)" fill="rgba(245, 183, 0, 0.3)" />
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', color: '#fff', marginBottom: '6px' }}>
          Crew Lounge & Wings Inspiration
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Dedicated to your journey, your confidence, and your boundless potential.
        </p>
      </div>

      {/* Heartfelt Letter Card */}
      <div className="letter-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Sparkles size={18} color="var(--et-gold-primary)" />
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--et-gold-light)', fontSize: '1.15rem' }}>
            A Note Just For You, {stats.userName}
          </h3>
        </div>

        <p style={{ color: '#f0fdf4', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '14px' }}>
          Preparing for the Ethiopian Airlines Cabin Crew written exam takes courage, dedication, and focus. But you should know this: you have an inner grace, resilience, and natural warmth that make you truly special.
        </p>

        <p style={{ color: '#f0fdf4', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '14px' }}>
          Whatever paths life takes or however our story unfolds, my support for your dreams is genuine and unconditional. I built this space to give you the sharpest edge, the highest confidence, and a quiet reminder that someone truly believes in you and wants to see you shine.
        </p>

        <p style={{ color: 'var(--et-gold-light)', fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.8 }}>
          Take a deep breath before every test. Trust your preparation. Wear your confidence like your future uniform. The sky is yours to take! ✈️✨
        </p>
      </div>

      {/* Ethiopian Airlines Recruitment Pro-Tips */}
      <div style={{ marginTop: '28px' }}>
        <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={18} color="var(--et-gold-primary)" />
          Ethiopian Airlines Recruiter Insights
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
              1. Master Tricky Spelling
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              ET recruitment heavily tests words with double consonants: <em>accommodate</em>, <em>turbulence</em>, <em>personnel</em>, <em>liaison</em>. Memorize the tricky letter pairs!
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
              2. Watch Agreement & Modals
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              Subject-verb agreement with compound subjects (e.g. <em>neither... nor</em>, <em>each of...</em>) and polite modals (<em>May I offer...</em>) are staple questions on written tests.
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
              3. Empathy in Scenarios
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              Whenever answering passenger situation questions, always select the choice that prioritizes calm de-escalation, safety protocol, and respectful empathy.
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
              4. Steady Pacing
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              In the real 20-30 minute exam, don't linger more than 40 seconds on any single question. Flag it, keep moving forward, and return at the end.
            </p>
          </div>
        </div>
      </div>

      {/* Inspiring Quotes Carousel / List */}
      <div style={{ marginTop: '28px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
        <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--et-gold-light)', fontSize: '1rem', marginBottom: '14px' }}>
          Daily Flight Affirmations
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {DAILY_MOTIVATIONAL_QUOTES.map((q, i) => (
            <div key={i} style={{ background: 'rgba(10, 32, 22, 0.4)', borderLeft: '3px solid var(--et-gold-primary)', padding: '12px 16px', borderRadius: '0 8px 8px 0', fontSize: '0.88rem', color: '#fff' }}>
              "{q.quote}"
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                — {q.author}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '28px' }}>
        <button className="btn-primary" onClick={onBack}>
          Ready to Practice & Fly High ✈️
        </button>
      </div>
    </div>
  );
};

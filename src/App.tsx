import React, { useState, useEffect } from 'react';
import { Plane, Zap, BookOpen, Mic, RotateCcw, Heart, Shield, Sparkles, Award, ArrowRight, Download } from 'lucide-react';
import { UserStats, QuestionCategory } from './types';
import { loadUserStats, saveUserStats } from './utils/storage';
import { sound } from './utils/sound';
import { Header } from './components/Header';
import { BoardingPassCard } from './components/BoardingPassCard';
import { MockExam } from './components/MockExam';
import { SpeedBlitz } from './components/SpeedBlitz';
import { CategoryDrill } from './components/CategoryDrill';
import { AnnouncementLab } from './components/AnnouncementLab';
import { MistakeVault } from './components/MistakeVault';
import { MotivationLounge } from './components/MotivationLounge';
import { StatsModal } from './components/StatsModal';
import { TenseTest } from './components/TenseTest';

type ActiveView = 'home' | 'mock_exam' | 'speed_blitz' | 'announcement_lab' | 'mistake_vault' | 'category_drill' | 'motivation' | 'tense_test';

export function App() {
  const [stats, setStats] = useState<UserStats>(loadUserStats);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [tenseInitialMode, setTenseInitialMode] = useState<'intro' | 'masterclass'>('intro');
  const [drillCategory, setDrillCategory] = useState<QuestionCategory>('grammar');
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  // Sync sound setting with SoundEngine
  useEffect(() => {
    sound.setEnabled(stats.soundEnabled);
  }, [stats.soundEnabled]);

  // Handle PWA BeforeInstallPrompt
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallApp = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choice: any) => {
        if (choice.outcome === 'accepted') {
          setInstallPrompt(null);
        }
      });
    } else {
      alert('To install SkyWings on iOS: tap the Share button and select "Add to Home Screen". On Chrome/Android, tap the 3-dot menu and select "Install app".');
    }
  };

  const updateStats = (newStats: UserStats) => {
    setStats(newStats);
    saveUserStats(newStats);
  };

  const handleToggleSound = () => {
    const next = !stats.soundEnabled;
    const updated = { ...stats, soundEnabled: next };
    updateStats(updated);
  };

  const handleUpdateName = (newName: string) => {
    updateStats({
      ...stats,
      userName: newName
    });
  };

  const startCategoryDrill = (cat: QuestionCategory) => {
    sound.playTap();
    setDrillCategory(cat);
    setActiveView('category_drill');
  };

  return (
    <div className="app-container">
      {/* App Header */}
      <Header
        stats={stats}
        onToggleSound={handleToggleSound}
        onOpenStats={() => setShowStatsModal(true)}
      />

      {/* Main Content Areas */}
      {activeView === 'home' && (
        <main>
          {/* Personalized Boarding Pass Card */}
          <BoardingPassCard stats={stats} onUpdateName={handleUpdateName} />

          {/* Quick PWA Install Callout */}
          {installPrompt && (
            <div
              style={{
                background: 'linear-gradient(90deg, rgba(0, 112, 56, 0.4), rgba(245, 183, 0, 0.2))',
                border: '1px solid var(--et-gold-primary)',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Download size={20} color="var(--et-gold-light)" />
                <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                  Install SkyWings App for zero-data offline practice!
                </span>
              </div>
              <button
                className="btn-primary"
                onClick={handleInstallApp}
                style={{ padding: '6px 14px', fontSize: '0.78rem' }}
              >
                Install App
              </button>
            </div>
          )}

          {/* Big Distinct "✈️ Tense Test" Entry Banner */}
          <div
            className="tense-hero-entry"
            onClick={() => {
              sound.playTap();
              setTenseInitialMode('intro');
              setActiveView('tense_test');
            }}
            role="button"
            tabIndex={0}
            aria-label="Start Cabin Crew Tense Test"
          >
            <div className="tense-hero-content">
              <div className="tense-hero-icon-container">
                ✈️
              </div>
              <div className="tense-hero-title-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span className="exam-tag">
                    CABIN CREW ENTRANCE EXAM
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--et-gold-light)', fontWeight: 700, background: 'rgba(245, 183, 0, 0.2)', padding: '2px 8px', borderRadius: '10px' }}>
                    FEATURED
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#a7f3d0', fontWeight: 700, background: 'rgba(14, 168, 89, 0.2)', padding: '2px 8px', borderRadius: '10px' }}>
                    🎓 MASTERCLASS INCLUDED
                  </span>
                </div>
                <h2>✈️ Tense Test</h2>
                <div className="tense-hero-subtitle">
                  20 questions · instant explanations
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                className="btn-secondary"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playTap();
                  setTenseInitialMode('masterclass');
                  setActiveView('tense_test');
                }}
                style={{
                  padding: '10px 16px',
                  fontSize: '0.85rem',
                  borderColor: 'var(--et-gold-primary)',
                  color: 'var(--et-gold-light)'
                }}
              >
                🎓 Masterclass
              </button>
              <button
                className="tense-hero-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playTap();
                  setTenseInitialMode('intro');
                  setActiveView('tense_test');
                }}
              >
                Take Test <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Practice Modes Section Title */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plane size={20} color="var(--et-gold-primary)" />
              Flight Training Simulator
            </h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              150+ Ethiopian Airlines Exam Questions
            </span>
          </div>

          {/* Grid of Main Practice Modes */}
          <div className="mode-grid">
            {/* Mock Exam Card */}
            <div
              className="mode-card glass-panel"
              onClick={() => {
                sound.playTap();
                setActiveView('mock_exam');
              }}
              style={{ borderLeft: '4px solid var(--et-gold-primary)' }}
            >
              <div>
                <div className="mode-icon-box" style={{ background: 'linear-gradient(135deg, #007038, #004d26)' }}>
                  <Plane size={26} color="var(--et-gold-light)" />
                </div>
                <h3>The ET Flight Mock Exam</h3>
                <p>25-question timed simulation with live flight path altitude meter, review, and scoring.</p>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--et-gold-light)', fontWeight: 700 }}>
                  Best: {stats.bestMockScore}%
                </span>
                <span style={{ color: 'var(--et-gold-light)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                  Board Flight <ArrowRight size={14} />
                </span>
              </div>
              <span className="mode-badge" style={{ background: 'rgba(245, 183, 0, 0.2)', color: 'var(--et-gold-light)' }}>
                20 MIN
              </span>
            </div>

            {/* Runway Blitz Card */}
            <div
              className="mode-card glass-panel"
              onClick={() => {
                sound.playTap();
                setActiveView('speed_blitz');
              }}
              style={{ borderLeft: '4px solid #ff9900' }}
            >
              <div>
                <div className="mode-icon-box" style={{ background: 'linear-gradient(135deg, #d81e05, #8a1303)' }}>
                  <Zap size={26} color="#fff" />
                </div>
                <h3>Runway Blitz (60s)</h3>
                <p>High-adrenaline sprint for fast vocabulary & spelling recognition with combo multipliers!</p>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#ff9900', fontWeight: 700 }}>
                  Best: {stats.bestSpeedRunScore} pts
                </span>
                <span style={{ color: '#ff9900', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                  Start Sprint <ArrowRight size={14} />
                </span>
              </div>
              <span className="mode-badge" style={{ background: 'rgba(255, 153, 0, 0.2)', color: '#ff9900' }}>
                FAST PACED
              </span>
            </div>

            {/* Announcement Lab Card */}
            <div
              className="mode-card glass-panel"
              onClick={() => {
                sound.playTap();
                setActiveView('announcement_lab');
              }}
              style={{ borderLeft: '4px solid #38bdf8' }}
            >
              <div>
                <div className="mode-icon-box" style={{ background: 'linear-gradient(135deg, #0284c7, #0369a1)' }}>
                  <Mic size={26} color="#fff" />
                </div>
                <h3>Announcement Voice Lab</h3>
                <p>Listen to authentic Ethiopian Airlines in-flight announcements and master the missing aviation terms.</p>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#7dd3fc', fontWeight: 700 }}>
                  Audio Voice Engine
                </span>
                <span style={{ color: '#7dd3fc', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                  Listen & Train <ArrowRight size={14} />
                </span>
              </div>
              <span className="mode-badge" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8' }}>
                AUDIO
              </span>
            </div>

            {/* Mistake Vault Card */}
            <div
              className="mode-card glass-panel"
              onClick={() => {
                sound.playTap();
                setActiveView('mistake_vault');
              }}
              style={{ borderLeft: '4px solid #f43f5e' }}
            >
              <div>
                <div className="mode-icon-box" style={{ background: 'linear-gradient(135deg, #e11d48, #9f1239)' }}>
                  <RotateCcw size={26} color="#fff" />
                </div>
                <h3>Mistake Vault</h3>
                <p>Personalized deck containing every question you ever got wrong. Re-test until 100% mastered.</p>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#fda4af', fontWeight: 700 }}>
                  {stats.missedQuestionIds.length} Questions in Vault
                </span>
                <span style={{ color: '#fda4af', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                  Review Now <ArrowRight size={14} />
                </span>
              </div>
              <span className="mode-badge" style={{ background: 'rgba(244, 63, 94, 0.2)', color: '#f43f5e' }}>
                {stats.missedQuestionIds.length} TO FIX
              </span>
            </div>
          </div>

          {/* Category Focused Drills */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#fff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="var(--et-gold-primary)" />
              Targeted English Subject Drills
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div
                className="glass-panel"
                onClick={() => startCategoryDrill('grammar')}
                style={{ padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ fontSize: '1.6rem' }}>✍️</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Grammar Radar</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Tenses, Modals & Agreement</div>
                </div>
              </div>

              <div
                className="glass-panel"
                onClick={() => startCategoryDrill('spelling')}
                style={{ padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ fontSize: '1.6rem' }}>🔤</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Spelling Traps</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Double consonants & Aviation</div>
                </div>
              </div>

              <div
                className="glass-panel"
                onClick={() => startCategoryDrill('vocabulary')}
                style={{ padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ fontSize: '1.6rem' }}>📖</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Aviation Vocabulary</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Hospitality & Phrasal Verbs</div>
                </div>
              </div>

              <div
                className="glass-panel"
                onClick={() => startCategoryDrill('situational')}
                style={{ padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ fontSize: '1.6rem' }}>✈️</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Cabin Situations</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>De-escalation & Safety</div>
                </div>
              </div>
            </div>
          </div>

          {/* Uplifting Letter Banner for Merry */}
          <div
            className="glass-panel"
            onClick={() => {
              sound.playTap();
              setActiveView('motivation');
            }}
            style={{
              padding: '20px',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, rgba(245, 183, 0, 0.12), rgba(0, 112, 56, 0.2))',
              border: '1px solid rgba(245, 183, 0, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '30px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--et-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Heart size={24} color="#061a11" fill="#061a11" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '4px' }}>
                  A Special Note for Cadet {stats.userName}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  Read an inspiring letter of support and Ethiopian Airlines interview secrets.
                </p>
              </div>
            </div>
            <div style={{ color: 'var(--et-gold-light)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>
              Open Lounge <ArrowRight size={16} />
            </div>
          </div>
        </main>
      )}

      {/* Active Views */}
      {activeView === 'mock_exam' && (
        <MockExam
          stats={stats}
          onComplete={(updated) => updateStats(updated)}
          onExit={() => setActiveView('home')}
        />
      )}

      {activeView === 'speed_blitz' && (
        <SpeedBlitz
          stats={stats}
          onComplete={(updated) => updateStats(updated)}
          onExit={() => setActiveView('home')}
        />
      )}

      {activeView === 'announcement_lab' && (
        <AnnouncementLab
          stats={stats}
          onUpdateStats={(updated) => updateStats(updated)}
          onBack={() => setActiveView('home')}
        />
      )}

      {activeView === 'mistake_vault' && (
        <MistakeVault
          stats={stats}
          onUpdateStats={(updated) => updateStats(updated)}
          onBack={() => setActiveView('home')}
        />
      )}

      {activeView === 'category_drill' && (
        <CategoryDrill
          category={drillCategory}
          stats={stats}
          onUpdateStats={(updated) => updateStats(updated)}
          onBack={() => setActiveView('home')}
        />
      )}

      {activeView === 'motivation' && (
        <MotivationLounge
          stats={stats}
          onBack={() => setActiveView('home')}
        />
      )}

      {activeView === 'tense_test' && (
        <TenseTest
          stats={stats}
          initialMode={tenseInitialMode}
          onUpdateStats={(updated) => updateStats(updated)}
          onBack={() => setActiveView('home')}
        />
      )}

      {/* Bottom Sticky Navigation */}
      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeView === 'home' ? 'active' : ''}`}
          onClick={() => {
            sound.playTap();
            setActiveView('home');
          }}
        >
          <Plane size={20} />
          <span>Lounge</span>
        </button>

        <button
          className={`nav-item ${activeView === 'mock_exam' ? 'active' : ''}`}
          onClick={() => {
            sound.playTap();
            setActiveView('mock_exam');
          }}
        >
          <Award size={20} />
          <span>Mock Exam</span>
        </button>

        <button
          className={`nav-item ${activeView === 'speed_blitz' ? 'active' : ''}`}
          onClick={() => {
            sound.playTap();
            setActiveView('speed_blitz');
          }}
        >
          <Zap size={20} />
          <span>Runway Blitz</span>
        </button>

        <button
          className={`nav-item ${activeView === 'mistake_vault' ? 'active' : ''}`}
          onClick={() => {
            sound.playTap();
            setActiveView('mistake_vault');
          }}
        >
          <RotateCcw size={20} />
          <span>Mistakes ({stats.missedQuestionIds.length})</span>
        </button>

        <button
          className={`nav-item ${activeView === 'motivation' ? 'active' : ''}`}
          onClick={() => {
            sound.playTap();
            setActiveView('motivation');
          }}
        >
          <Heart size={20} />
          <span>For Merry</span>
        </button>
      </nav>

      {/* Performance Stats Modal */}
      {showStatsModal && (
        <StatsModal
          stats={stats}
          onClose={() => setShowStatsModal(false)}
          onUpdateStats={(updated) => updateStats(updated)}
        />
      )}
    </div>
  );
}

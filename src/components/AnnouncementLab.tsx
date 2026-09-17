import React, { useState, useEffect } from 'react';
import { Volume2, Square, Mic, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { CABIN_ANNOUNCEMENTS } from '../data/announcements';
import { UserStats } from '../types';
import { sound } from '../utils/sound';

interface AnnouncementLabProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onBack: () => void;
}

export const AnnouncementLab: React.FC<AnnouncementLabProps> = ({ stats, onUpdateStats, onBack }) => {
  const [selectedScriptIndex, setSelectedScriptIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userSelections, setUserSelections] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const currentAnnouncement = CABIN_ANNOUNCEMENTS[selectedScriptIndex];

  // Stop speech synthesis if user navigates away or switches announcement
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedScriptIndex]);

  const playAudioAnnouncement = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    sound.playCabinChime(); // Play ding-dong before announcement!

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(currentAnnouncement.text);
      utterance.rate = 0.9; // Professional deliberate cadence
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      // Pick an English voice if available
      const voices = window.speechSynthesis.getVoices();
      const engVoice = voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Google') || v.name.includes('Natural')));
      if (engVoice) {
        utterance.voice = engVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }, 600);
  };

  const handleSelectBlankWord = (blankIndex: number, word: string) => {
    sound.playTap();
    setUserSelections((prev) => ({
      ...prev,
      [blankIndex]: word
    }));
  };

  const handleCheckAnswers = () => {
    setChecked(true);
    let allCorrect = true;

    currentAnnouncement.blanks?.forEach((b, idx) => {
      if (userSelections[idx] !== b.word) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      sound.playCorrect();
      onUpdateStats({
        ...stats,
        totalXp: stats.totalXp + 35
      });
    } else {
      sound.playIncorrect();
    }
  };

  const handleNextScript = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsPlaying(false);
    setChecked(false);
    setUserSelections({});
    setSelectedScriptIndex((prev) => (prev + 1) % CABIN_ANNOUNCEMENTS.length);
  };

  return (
    <div className="quiz-container glass-panel">
      {/* Header */}
      <div className="quiz-header">
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--et-gold-light)', fontWeight: 700, fontSize: '0.95rem' }}>
          <Mic size={18} />
          <span>Cabin Announcement Lab</span>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Script {selectedScriptIndex + 1} of {CABIN_ANNOUNCEMENTS.length}
        </div>
      </div>

      {/* Script Title & Situation */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.25rem', marginBottom: '6px' }}>
          {currentAnnouncement.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} color="var(--et-gold-primary)" />
          {currentAnnouncement.situation}
        </p>
      </div>

      {/* Audio Playback Controls */}
      <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(245, 183, 0, 0.25)', borderRadius: 'var(--radius-md)', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
            IN-FLIGHT PA SYSTEM
          </span>
          <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
            {isPlaying ? 'Broadcasting Cabin Announcement...' : 'Listen to Professional Cadence & Accent'}
          </span>
        </div>

        <button
          className={isPlaying ? 'btn-secondary' : 'btn-primary'}
          onClick={playAudioAnnouncement}
          style={{ padding: '10px 18px', gap: '8px', display: 'flex', alignItems: 'center' }}
        >
          {isPlaying ? (
            <>
              <Square size={16} fill="#fff" /> Stop Broadcast
            </>
          ) : (
            <>
              <Volume2 size={16} /> Broadcast Audio 🎙️
            </>
          )}
        </button>
      </div>

      {/* Full Script Text */}
      <div style={{ background: 'rgba(10, 32, 22, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '20px', lineHeight: 1.8, fontSize: '1.02rem', color: '#fff', marginBottom: '24px' }}>
        {currentAnnouncement.text}
      </div>

      {/* Comprehension Cloze Challenge */}
      {currentAnnouncement.blanks && currentAnnouncement.blanks.length > 0 && (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '18px' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--et-gold-light)', fontSize: '1rem', marginBottom: '12px' }}>
            Aviation Cloze Exercise: Choose the Precise Term
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {currentAnnouncement.blanks.map((blank, bIdx) => {
              const selected = userSelections[bIdx];
              const isCorrect = selected === blank.word;

              return (
                <div key={bIdx} style={{ background: 'rgba(0,0,0,0.25)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Slot #{bIdx + 1}: Select the correct formal aviation word:
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {blank.options.map((opt, optIdx) => {
                      const isOptionSelected = selected === opt;
                      let btnStyle = {
                        background: isOptionSelected ? 'rgba(245, 183, 0, 0.25)' : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${isOptionSelected ? 'var(--et-gold-primary)' : 'rgba(255,255,255,0.1)'}`,
                        color: isOptionSelected ? 'var(--et-gold-light)' : '#fff',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.85rem'
                      };

                      if (checked) {
                        if (opt === blank.word) {
                          btnStyle.background = 'rgba(14, 168, 89, 0.3)';
                          btnStyle.border = '1px solid #4ade80';
                          btnStyle.color = '#a7f3d0';
                        } else if (isOptionSelected && opt !== blank.word) {
                          btnStyle.background = 'rgba(216, 30, 5, 0.3)';
                          btnStyle.border = '1px solid #f87171';
                          btnStyle.color = '#fca5a5';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          style={btnStyle}
                          onClick={() => handleSelectBlankWord(bIdx, opt)}
                          disabled={checked}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {checked && (
                    <div style={{ marginTop: '8px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', color: isCorrect ? '#4ade80' : '#f87171' }}>
                      {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                      <span>{isCorrect ? 'Correct aviation term!' : `Correct word: "${blank.word}"`}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '18px' }}>
            {!checked ? (
              <button
                className="btn-primary"
                onClick={handleCheckAnswers}
                disabled={Object.keys(userSelections).length < currentAnnouncement.blanks.length}
                style={{ opacity: Object.keys(userSelections).length < currentAnnouncement.blanks.length ? 0.6 : 1 }}
              >
                Verify Answers ✨
              </button>
            ) : (
              <button className="btn-primary" onClick={handleNextScript}>
                Next Announcement <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

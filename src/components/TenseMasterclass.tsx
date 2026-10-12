import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, BookOpen, AlertTriangle, Clock, Zap, Award, Check, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserStats } from '../types';
import { sound } from '../utils/sound';

interface TenseMasterclassProps {
  stats: UserStats;
  onStartExam: () => void;
  onBack: () => void;
}

export const TenseMasterclass: React.FC<TenseMasterclassProps> = ({ stats, onStartExam, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Step 2 Timeline active tab
  const [timelineZone, setTimelineZone] = useState<'past' | 'present' | 'future'>('past');

  // Step 5 Interactive practice micro-questions state
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({});
  const [practiceSubmitted, setPracticeSubmitted] = useState<Record<number, boolean>>({});

  const candidateName = stats.userName || 'Cadet';

  const handleNextStep = () => {
    sound.playTap();
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      sound.playCelebration();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }
  };

  const handlePrevStep = () => {
    sound.playTap();
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBack();
    }
  };

  const handleSelectPractice = (qIndex: number, optionIndex: number, correctIndex: number) => {
    sound.playTap();
    setPracticeAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
    setPracticeSubmitted((prev) => ({ ...prev, [qIndex]: true }));

    if (optionIndex === correctIndex) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  return (
    <div className="tense-test-wrapper">
      {/* Top Header Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <button
          onClick={handlePrevStep}
          className="btn-secondary"
          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> {currentStep === 1 ? 'Back' : 'Previous Step'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--et-gold-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
            MASTERCLASS STEP {currentStep} OF {totalSteps}
          </span>
        </div>

        <button
          onClick={onStartExam}
          className="btn-primary"
          style={{ padding: '8px 16px', fontSize: '0.82rem', background: 'rgba(245, 183, 0, 0.15)', borderColor: 'var(--et-gold-primary)', color: 'var(--et-gold-light)' }}
        >
          Skip to Exam ✈️
        </button>
      </div>

      {/* Duolingo/Brilliant style Stepper Bar */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            style={{
              flex: 1,
              height: '6px',
              borderRadius: '3px',
              background:
                step <= currentStep
                  ? 'linear-gradient(90deg, var(--et-green-light), var(--et-gold-primary))'
                  : 'rgba(255, 255, 255, 0.1)',
              transition: 'background 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* STEP 1: THE GOLDEN SECRET — TENSES ARE JUST 2 QUESTIONS                   */}
      {/* ========================================================================= */}
      {currentStep === 1 && (
        <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 183, 0, 0.15)', border: '1px solid rgba(245, 183, 0, 0.3)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--et-gold-light)', fontWeight: 700, marginBottom: '14px' }}>
            <Sparkles size={14} /> FOUNDATION
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: '#fff', marginBottom: '10px' }}>
            Welcome, Cadet {candidateName}! Tenses Are Just 2 Questions.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            School makes English tenses sound like a nightmare of 12 complicated formulas. But cabin crew entrance exams are actually very simple: every question can be solved by asking yourself <strong style={{ color: '#fff' }}>just two quick questions</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '26px' }}>
            {/* Question 1 Card */}
            <div
              style={{
                background: 'rgba(0, 112, 56, 0.2)',
                border: '1.5px solid var(--et-green-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>⏰</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#a7f3d0', fontSize: '1.2rem', marginBottom: '6px' }}>
                Question 1: WHEN did it happen?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Look for the time marker in the sentence. Are we talking about:
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '20px', color: '#fff', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <li><strong>PAST:</strong> Finished before now (*yesterday, in 2020*)</li>
                <li><strong>PRESENT:</strong> Happening now or a routine (*every day, right now*)</li>
                <li><strong>FUTURE:</strong> Yet to happen (*tomorrow, next flight*)</li>
              </ul>
            </div>

            {/* Question 2 Card */}
            <div
              style={{
                background: 'rgba(245, 183, 0, 0.12)',
                border: '1.5px solid rgba(245, 183, 0, 0.4)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🎬</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--et-gold-light)', fontSize: '1.2rem', marginBottom: '6px' }}>
                Question 2: HOW is it happening?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                What is the nature of the action?
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '20px', color: '#fff', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <li><strong>SIMPLE:</strong> A general fact, routine, or completed point</li>
                <li><strong>CONTINUOUS:</strong> In the middle of happening (<strong>-ing</strong>)</li>
                <li><strong>PERFECT:</strong> Happened <em>before</em> something else or connects to now</li>
              </ul>
            </div>
          </div>

          {/* Interactive Micro Example */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '18px 20px',
              marginBottom: '26px'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--et-gold-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              💡 Real Flight Example:
            </div>
            <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', marginBottom: '8px' }}>
              "The purser <span style={{ color: 'var(--et-gold-light)', borderBottom: '2px solid var(--et-gold-light)' }}>is conducting</span> the safety briefing right now."
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              1. <strong>When?</strong> "Right now" = Present. <br />
              2. <strong>How?</strong> In progress at this exact moment = Continuous. <br />
              👉 Result: <strong>Present Continuous</strong>!
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary" onClick={handleNextStep} style={{ padding: '12px 28px' }}>
              Next: Visual Flight Timeline <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 2: THE VISUAL FLIGHT TIMELINE                                        */}
      {/* ========================================================================= */}
      {currentStep === 2 && (
        <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 183, 0, 0.15)', border: '1px solid rgba(245, 183, 0, 0.3)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--et-gold-light)', fontWeight: 700, marginBottom: '14px' }}>
            <Clock size={14} /> FLIGHT TIMELINE
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: '#fff', marginBottom: '10px' }}>
            The 3 Flight Time Zones
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Tap each zone below to see exactly how cabin crew entrance exams test each timeframe.
          </p>

          {/* Interactive Timeline Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '22px' }}>
            <button
              onClick={() => {
                sound.playTap();
                setTimelineZone('past');
              }}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                border: timelineZone === 'past' ? '2px solid #f87171' : '1px solid rgba(255, 255, 255, 0.1)',
                background: timelineZone === 'past' ? 'rgba(216, 30, 5, 0.25)' : 'rgba(0, 0, 0, 0.3)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ⏮️ The Past Zone
            </button>

            <button
              onClick={() => {
                sound.playTap();
                setTimelineZone('present');
              }}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                border: timelineZone === 'present' ? '2px solid var(--et-green-light)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: timelineZone === 'present' ? 'rgba(0, 112, 56, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ⏱️ The Present Zone
            </button>

            <button
              onClick={() => {
                sound.playTap();
                setTimelineZone('future');
              }}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                border: timelineZone === 'future' ? '2px solid var(--et-gold-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: timelineZone === 'future' ? 'rgba(245, 183, 0, 0.25)' : 'rgba(0, 0, 0, 0.3)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ⏭️ The Future Zone
            </button>
          </div>

          {/* Past Zone Content */}
          {timelineZone === 'past' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #f87171', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#fca5a5', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  1. Past Simple (Action Finished at a Known Time)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"Ethiopian Airlines <strong>operated</strong> its first Dreamliner flight in 2012."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger words: <em>yesterday, in 2012, two hours ago, last night</em>. Notice the exact finished time.
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #fb923c', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#fdba74', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  2. Past Continuous (Action In Progress Interrupted)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"While the captain <strong>was making</strong> the announcement, turbulence hit."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger word: <em>While...</em> (long background action: was/were + ing).
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #f43f5e', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#fda4af', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  3. Past Perfect (THE #1 EXAM FAVORITE: Happened BEFORE Another Past Action)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"The crew <strong>had already checked</strong> the cabin before boarding began."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger clues: <em>by the time [past], before, already</em>. Formula: <strong>had + past participle</strong>.
                </div>
              </div>
            </div>
          )}

          {/* Present Zone Content */}
          {timelineZone === 'present' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid var(--et-green-light)', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#86efac', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  1. Present Simple (Flight Timetables & Aviation Rules)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"Flight ET 700 <strong>departs</strong> every evening at 23:15."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger clues: <em>every day, always, flight schedule time</em>. Used for scheduled transport timetables!
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #38bdf8', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#7dd3fc', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  2. Present Continuous (Happening Right This Second)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"The attendants <strong>are demonstrating</strong> safety equipment right now."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger clues: <em>right now, currently, at the moment, look!</em>.
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #a855f7', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#d8b4fe', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  3. Present Perfect Continuous (Started in Past, Still Going Now)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"Sara <strong>has been working</strong> for Ethiopian Airlines since 2019."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger clues: <em>since 2019, for three hours</em>. Shows ongoing duration up to the present moment.
                </div>
              </div>
            </div>
          )}

          {/* Future Zone Content */}
          {timelineZone === 'future' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid var(--et-gold-primary)', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  1. "Be Going To" vs "Will" (Physical Evidence)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"He looks extremely pale; I think he <strong>is going to faint</strong>."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Rule: When you have clear present physical evidence (pale face, dark storm clouds), use <em>be going to</em>!
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #facc15', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#fef08a', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  2. Future Continuous (In Progress at a Future Moment)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"At this exact time tomorrow, we <strong>will be flying</strong> over Rome."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger clue: <em>At this time tomorrow...</em>. Formula: <strong>will be + ing</strong>.
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderLeft: '4px solid #eab308', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <div style={{ color: '#fde047', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                  3. Future Perfect (Finished BEFORE a Future Deadline)
                </div>
                <div style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>
                  <em>"By next month, Merry <strong>will have completed</strong> her cabin training."</em>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Trigger clue: <em>By [future time/date]...</em>. Formula: <strong>will have + past participle</strong>.
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '26px' }}>
            <button className="btn-secondary" onClick={handlePrevStep} style={{ padding: '12px 20px' }}>
              <ArrowLeft size={16} /> Back
            </button>
            <button className="btn-primary" onClick={handleNextStep} style={{ padding: '12px 28px' }}>
              Next: Trigger Words Cheat Sheet <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 3: THE TIME CLUE RADAR (CHEAT CODES)                                  */}
      {/* ========================================================================= */}
      {currentStep === 3 && (
        <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 183, 0, 0.15)', border: '1px solid rgba(245, 183, 0, 0.3)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--et-gold-light)', fontWeight: 700, marginBottom: '14px' }}>
            <Zap size={14} /> CHEAT CODES
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: '#fff', marginBottom: '10px' }}>
            The Time Clue Radar (Your Secret Weapon)
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '22px' }}>
            On cabin crew entrance exams, you never have to guess. The sentence almost always includes a <strong>Time Clue</strong> that gives away the answer immediately:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '26px' }}>
            <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(245, 183, 0, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                🎯 "By the time..."
              </div>
              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                ➡️ Always choose a PERFECT tense!
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                Past clue: <em>had + V3</em>. Future clue: <em>will have + V3</em>.
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                🎯 "While..."
              </div>
              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                ➡️ Always choose a CONTINUOUS (-ing) tense!
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                Example: <em>While the crew was preparing...</em>
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ color: '#c084fc', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                🎯 "Since / For [duration]..."
              </div>
              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                ➡️ Always choose PERFECT CONTINUOUS!
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                Example: <em>has been flying since 2018</em>.
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(248, 113, 113, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ color: '#f87171', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                🎯 "Yesterday / in 2021 / ago"
              </div>
              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                ➡️ ALWAYS PAST SIMPLE!
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                Never use present perfect with finished dates.
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(74, 222, 128, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                🎯 "As soon as / When" (Future)
              </div>
              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                ➡️ ALWAYS PRESENT SIMPLE!
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                Never say "as soon as the sign will turn off". Say: <em>turns off</em>!
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(251, 146, 60, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ color: '#fb923c', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                🎯 "If had + V3..." (3rd Cond.)
              </div>
              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                ➡️ Pair with "WOULD HAVE + V3"!
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                Example: <em>If she had told us, we would have helped.</em>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-secondary" onClick={handlePrevStep} style={{ padding: '12px 20px' }}>
              <ArrowLeft size={16} /> Back
            </button>
            <button className="btn-primary" onClick={handleNextStep} style={{ padding: '12px 28px' }}>
              Next: The 4 Classic Traps <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 4: THE 4 CLASSIC CABIN CREW TRAPS                                    */}
      {/* ========================================================================= */}
      {currentStep === 4 && (
        <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(216, 30, 5, 0.15)', border: '1px solid rgba(216, 30, 5, 0.3)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', color: '#fca5a5', fontWeight: 700, marginBottom: '14px' }}>
            <AlertTriangle size={14} /> EXAM TRAPS TO AVOID
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: '#fff', marginBottom: '10px' }}>
            The 4 Classic Aviation Exam Traps
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '22px' }}>
            Interview panels and entrance tests repeat these four specific grammatical traps. Master them here and you will never fall for them again!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '26px' }}>
            {/* Trap 1 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
                🚨 Trap 1: The "Since" Mistake (Using Present Continuous)
              </div>
              <div style={{ color: '#fca5a5', fontSize: '0.9rem', marginBottom: '4px' }}>
                ❌ <em>"Sara is working here since 2019."</em> (Wrong!)
              </div>
              <div style={{ color: '#a7f3d0', fontSize: '0.9rem', marginBottom: '6px' }}>
                ✅ <em>"Sara <strong>has been working</strong> here since 2019."</em> (Correct!)
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Rule: Whenever you see <strong>since</strong> or <strong>for</strong> expressing an ongoing time span, you MUST use Present Perfect Continuous, never simple "-ing".
              </div>
            </div>

            {/* Trap 2 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
                🚨 Trap 2: The Double "Will" in Time Clauses
              </div>
              <div style={{ color: '#fca5a5', fontSize: '0.9rem', marginBottom: '4px' }}>
                ❌ <em>"As soon as the sign will turn off, we will serve coffee."</em> (Wrong!)
              </div>
              <div style={{ color: '#a7f3d0', fontSize: '0.9rem', marginBottom: '6px' }}>
                ✅ <em>"As soon as the sign <strong>turns</strong> off, we will serve coffee."</em> (Correct!)
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Rule: After time conjunctions like <em>as soon as, when, before, after</em>, English strictly uses the Present Simple for future meanings.
              </div>
            </div>

            {/* Trap 3 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
                🚨 Trap 3: Stative Verbs (Never in Continuous -ing)
              </div>
              <div style={{ color: '#fca5a5', fontSize: '0.9rem', marginBottom: '4px' }}>
                ❌ <em>"This overhead bin is belonging to emergency equipment."</em> (Wrong!)
              </div>
              <div style={{ color: '#a7f3d0', fontSize: '0.9rem', marginBottom: '6px' }}>
                ✅ <em>"This overhead bin <strong>belongs</strong> to emergency equipment."</em> (Correct!)
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Rule: Verbs of state, possession, or preference (<em>belong, prefer, contain, need</em>) are never used in continuous tenses.
              </div>
            </div>

            {/* Trap 4 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ color: 'var(--et-gold-light)', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
                🚨 Trap 4: "Used to" vs "Be used to"
              </div>
              <div style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '4px' }}>
                • <em>"I <strong>used to live</strong> in Paris."</em> = Past habit that stopped. <br />
                • <em>"I <strong>am used to flying</strong> night routes."</em> = Accustomed / familiar with it.
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Rule: When adapting to a challenging schedule, use <em>be used to + -ing/noun</em>!
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-secondary" onClick={handlePrevStep} style={{ padding: '12px 20px' }}>
              <ArrowLeft size={16} /> Back
            </button>
            <button className="btn-primary" onClick={handleNextStep} style={{ padding: '12px 28px' }}>
              Next: Interactive Confidence Check <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 5: INTERACTIVE PRACTICE CHECKPOINT & GRADUATION                      */}
      {/* ========================================================================= */}
      {currentStep === 5 && (
        <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 112, 56, 0.2)', border: '1px solid var(--et-green-light)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', color: '#a7f3d0', fontWeight: 700, marginBottom: '14px' }}>
            <Award size={14} /> CONFIDENCE CHECKPOINT
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: '#fff', marginBottom: '10px' }}>
            Let's Try 3 Micro-Questions Together!
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Tap the right answer for each checkpoint to test your new superpower. Watch how easily the clues jump out!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
            {/* Micro Question 1 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--et-gold-light)', fontWeight: 800, marginBottom: '6px' }}>
                MICRO QUESTION 1
              </div>
              <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, marginBottom: '14px' }}>
                "By the time the passengers boarded, the cleaning crew _______ the entire cabin."
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { text: 'already cleaned', isCorrect: false },
                  { text: 'had already cleaned', isCorrect: true },
                  { text: 'is cleaning', isCorrect: false }
                ].map((opt, idx) => {
                  const isPicked = practiceAnswers[1] === idx;
                  const isSubmitted = practiceSubmitted[1];
                  let btnBg = 'rgba(255, 255, 255, 0.08)';
                  let btnBorder = 'rgba(255, 255, 255, 0.15)';
                  let textColor = '#fff';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      btnBg = 'rgba(14, 168, 89, 0.3)';
                      btnBorder = 'var(--et-green-light)';
                      textColor = '#a7f3d0';
                    } else if (isPicked && !opt.isCorrect) {
                      btnBg = 'rgba(216, 30, 5, 0.3)';
                      btnBorder = 'var(--et-red-accent)';
                      textColor = '#fca5a5';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectPractice(1, idx, 1)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: btnBg,
                        border: `1.5px solid ${btnBorder}`,
                        color: textColor,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {opt.text}
                      {isSubmitted && opt.isCorrect && <Check size={16} color="#4ade80" />}
                    </button>
                  );
                })}
              </div>
              {practiceSubmitted[1] && (
                <div style={{ marginTop: '10px', fontSize: '0.85rem', color: practiceAnswers[1] === 1 ? '#a7f3d0' : '#fca5a5' }}>
                  {practiceAnswers[1] === 1
                    ? '🎉 Exactly! "By the time [past]" points to Past Perfect ("had already cleaned").'
                    : '💡 Clue: Cleaning happened BEFORE boarding in the past, so we use Past Perfect ("had already cleaned").'}
                </div>
              )}
            </div>

            {/* Micro Question 2 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--et-gold-light)', fontWeight: 800, marginBottom: '6px' }}>
                MICRO QUESTION 2
              </div>
              <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, marginBottom: '14px' }}>
                "Senior Purser Helen _______ for Ethiopian Airlines since 2015."
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { text: 'is working', isCorrect: false },
                  { text: 'has been working', isCorrect: true },
                  { text: 'works', isCorrect: false }
                ].map((opt, idx) => {
                  const isPicked = practiceAnswers[2] === idx;
                  const isSubmitted = practiceSubmitted[2];
                  let btnBg = 'rgba(255, 255, 255, 0.08)';
                  let btnBorder = 'rgba(255, 255, 255, 0.15)';
                  let textColor = '#fff';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      btnBg = 'rgba(14, 168, 89, 0.3)';
                      btnBorder = 'var(--et-green-light)';
                      textColor = '#a7f3d0';
                    } else if (isPicked && !opt.isCorrect) {
                      btnBg = 'rgba(216, 30, 5, 0.3)';
                      btnBorder = 'var(--et-red-accent)';
                      textColor = '#fca5a5';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectPractice(2, idx, 1)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: btnBg,
                        border: `1.5px solid ${btnBorder}`,
                        color: textColor,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {opt.text}
                      {isSubmitted && opt.isCorrect && <Check size={16} color="#4ade80" />}
                    </button>
                  );
                })}
              </div>
              {practiceSubmitted[2] && (
                <div style={{ marginTop: '10px', fontSize: '0.85rem', color: practiceAnswers[2] === 1 ? '#a7f3d0' : '#fca5a5' }}>
                  {practiceAnswers[2] === 1
                    ? '🎯 Flawless! The trigger "since 2015" requires Present Perfect Continuous ("has been working").'
                    : '💡 Clue: "Since 2015" expresses duration from the past to the present ("has been working").'}
                </div>
              )}
            </div>

            {/* Micro Question 3 */}
            <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--et-gold-light)', fontWeight: 800, marginBottom: '6px' }}>
                MICRO QUESTION 3
              </div>
              <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, marginBottom: '14px' }}>
                "As soon as the captain _______ the cruising announcement, service will begin."
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { text: 'will make', isCorrect: false },
                  { text: 'makes', isCorrect: true },
                  { text: 'is making', isCorrect: false }
                ].map((opt, idx) => {
                  const isPicked = practiceAnswers[3] === idx;
                  const isSubmitted = practiceSubmitted[3];
                  let btnBg = 'rgba(255, 255, 255, 0.08)';
                  let btnBorder = 'rgba(255, 255, 255, 0.15)';
                  let textColor = '#fff';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      btnBg = 'rgba(14, 168, 89, 0.3)';
                      btnBorder = 'var(--et-green-light)';
                      textColor = '#a7f3d0';
                    } else if (isPicked && !opt.isCorrect) {
                      btnBg = 'rgba(216, 30, 5, 0.3)';
                      btnBorder = 'var(--et-red-accent)';
                      textColor = '#fca5a5';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectPractice(3, idx, 1)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: btnBg,
                        border: `1.5px solid ${btnBorder}`,
                        color: textColor,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {opt.text}
                      {isSubmitted && opt.isCorrect && <Check size={16} color="#4ade80" />}
                    </button>
                  );
                })}
              </div>
              {practiceSubmitted[3] && (
                <div style={{ marginTop: '10px', fontSize: '0.85rem', color: practiceAnswers[3] === 1 ? '#a7f3d0' : '#fca5a5' }}>
                  {practiceAnswers[3] === 1
                    ? '✈️ Brilliant! You avoided the "will" trap! In time clauses with "as soon as", we use Present Simple ("makes").'
                    : '💡 Trap Alert: After "as soon as", never use "will". Always choose Present Simple ("makes")!'}
                </div>
              )}
            </div>
          </div>

          {/* Masterclass Complete Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(245, 183, 0, 0.2), rgba(0, 112, 56, 0.3))',
              border: '2px solid var(--et-gold-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              marginBottom: '26px'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🎓🌟</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff', marginBottom: '6px' }}>
              Masterclass Complete, Cadet {candidateName}!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 18px' }}>
              You now understand English verb tenses as one simple, cohesive flight system. You know the time clues, the formulas, and the classic traps. You are ready to ace the exam!
            </p>

            <button
              className="btn-primary"
              onClick={() => {
                sound.playCabinChime();
                onStartExam();
              }}
              style={{ padding: '14px 34px', fontSize: '1.1rem', fontWeight: 800 }}
            >
              Start 20-Question Exam Now ✈️
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <button className="btn-secondary" onClick={handlePrevStep} style={{ padding: '10px 18px' }}>
              <ArrowLeft size={16} /> Review Traps
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

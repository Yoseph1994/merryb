import React from 'react';
import { Plane, Volume2, VolumeX, Award, Flame, BarChart2 } from 'lucide-react';
import { UserStats } from '../types';
import { sound } from '../utils/sound';

interface HeaderProps {
  stats: UserStats;
  onToggleSound: () => void;
  onOpenStats: () => void;
}

export const Header: React.FC<HeaderProps> = ({ stats, onToggleSound, onOpenStats }) => {
  return (
    <header className="app-header">
      <div className="brand-wrapper">
        <div className="airline-crest" onClick={() => sound.playCabinChime()} title="Tap for cabin chime!">
          <Plane size={24} color="#f5b700" style={{ transform: 'rotate(-45deg)' }} />
        </div>
        <div className="brand-text">
          <h1>
            SkyWings <span className="gold">ET</span>
          </h1>
          <div className="brand-sub">Cabin Crew English Cadet</div>
        </div>
      </div>

      <div className="header-actions">
        {/* Streak Flame */}
        <div className="stat-pill streak" title={`${stats.streakDays} Day Active Streak!`}>
          <Flame size={16} fill="#ff9900" />
          <span>{stats.streakDays}d</span>
        </div>

        {/* XP / Level */}
        <div className="stat-pill xp" title={`Total XP: ${stats.totalXp}`}>
          <Award size={16} />
          <span>{stats.totalXp} XP</span>
        </div>

        {/* Analytics / Stats button */}
        <button
          className="icon-button"
          onClick={() => {
            sound.playTap();
            onOpenStats();
          }}
          title="Performance & Accuracy Breakdown"
          aria-label="View stats"
        >
          <BarChart2 size={18} />
        </button>

        {/* Sound Toggle */}
        <button
          className="icon-button"
          onClick={() => {
            onToggleSound();
            if (!stats.soundEnabled) sound.playCabinChime();
          }}
          title={stats.soundEnabled ? 'Cabin Audio: Active' : 'Cabin Audio: Muted'}
          aria-label="Toggle sound"
        >
          {stats.soundEnabled ? <Volume2 size={18} color="#f5b700" /> : <VolumeX size={18} color="#888" />}
        </button>
      </div>
    </header>
  );
};

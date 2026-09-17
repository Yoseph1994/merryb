import { UserStats } from '../types';

const STATS_KEY = 'skywings_et_stats_v1';

export const DEFAULT_USER_STATS: UserStats = {
  userName: 'Merry',
  avatar: '👩🏾‍✈️',
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalXp: 120,
  level: 1,
  totalAnswered: 0,
  correctAnswered: 0,
  categoryStats: {
    grammar: { total: 0, correct: 0 },
    spelling: { total: 0, correct: 0 },
    vocabulary: { total: 0, correct: 0 },
    situational: { total: 0, correct: 0 },
  },
  mockExamsCompleted: 0,
  bestMockScore: 0,
  speedRunsCompleted: 0,
  bestSpeedRunScore: 0,
  missedQuestionIds: [],
  bookmarkedQuestionIds: [],
  soundEnabled: true,
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return DEFAULT_USER_STATS;
    const parsed = JSON.parse(raw);

    // Calculate streak maintenance
    const today = new Date().toISOString().split('T')[0];
    const last = parsed.lastActiveDate || today;

    if (last !== today) {
      const lastDate = new Date(last);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        parsed.streakDays = (parsed.streakDays || 1) + 1;
      } else if (diffDays > 1) {
        parsed.streakDays = 1; // Reset streak if missed more than 1 day
      }
      parsed.lastActiveDate = today;
      saveUserStats(parsed);
    }

    return { ...DEFAULT_USER_STATS, ...parsed };
  } catch {
    return DEFAULT_USER_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save stats:', e);
  }
}

export function calculateLevel(xp: number): { level: number; rankTitle: string; nextLevelXp: number; progressPercent: number } {
  // Level progression
  const levels = [
    { level: 1, xp: 0, title: 'Flight Cadet Trainee' },
    { level: 2, xp: 250, title: 'Junior Cabin Crew' },
    { level: 3, xp: 600, title: 'Cabin Service Specialist' },
    { level: 4, xp: 1200, title: 'Senior Flight Attendant' },
    { level: 5, xp: 2000, title: 'Chief Purser' },
    { level: 6, xp: 3200, title: 'Gold Wings Ambassador' },
  ];

  let current = levels[0];
  let next = levels[1];

  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].xp) {
      current = levels[i];
      next = levels[i + 1] || { level: current.level + 1, xp: current.xp + 1500, title: 'Gold Wings Certified' };
      break;
    }
  }

  const xpInLevel = xp - current.xp;
  const xpNeeded = next.xp - current.xp;
  const progressPercent = Math.min(100, Math.max(0, Math.round((xpInLevel / xpNeeded) * 100)));

  return {
    level: current.level,
    rankTitle: current.title,
    nextLevelXp: next.xp,
    progressPercent,
  };
}

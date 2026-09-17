export type QuestionCategory = 'grammar' | 'spelling' | 'vocabulary' | 'situational';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  category: QuestionCategory;
  difficulty: DifficultyLevel;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  context?: string; // Optional context, e.g. "Boarding scenario", "Preposition rule"
}

export interface UserStats {
  userName: string;
  avatar: string;
  streakDays: number;
  lastActiveDate: string;
  totalXp: number;
  level: number;
  totalAnswered: number;
  correctAnswered: number;
  categoryStats: {
    grammar: { total: number; correct: number };
    spelling: { total: number; correct: number };
    vocabulary: { total: number; correct: number };
    situational: { total: number; correct: number };
  };
  mockExamsCompleted: number;
  bestMockScore: number;
  speedRunsCompleted: number;
  bestSpeedRunScore: number;
  missedQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  soundEnabled: boolean;
}

export interface CabinAnnouncement {
  id: string;
  title: string;
  situation: string;
  text: string;
  blanks?: { index: number; word: string; options: string[] }[];
}

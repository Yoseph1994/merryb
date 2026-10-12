export type TopicId = 
  | 'tenses' 
  | 'conditionals' 
  | 'agreement' 
  | 'paragraphs' 
  | 'vocabulary' 
  | 'spelling';

export type ExerciseType =
  | 'multiple_choice'
  | 'fill_gap'
  | 'tap_wrong_word'
  | 'sentence_builder'
  | 'match_pairs'
  | 'bucket_sort';

export interface VisualData {
  type: 'timeline' | 'chips' | 'table' | 'comparison' | 'formula';
  title?: string;
  items?: { label: string; value?: string; color?: 'past' | 'present' | 'future' | 'neutral' }[];
  headers?: string[];
  rows?: string[][];
  leftSide?: { label: string; text: string; tag?: string };
  rightSide?: { label: string; text: string; tag?: string };
  formulaTokens?: { text: string; highlight?: boolean; color?: 'past' | 'present' | 'future' | 'neutral' }[];
}

export interface ExplanationStep {
  title?: string;
  text: string; // Max ~40 words, clear & simple English
  visual?: VisualData;
}

export interface PracticeExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  hint?: string;
  explanation: string; // Kind, instant explanation of why

  // Multiple Choice / Fill Gap:
  options?: string[];
  correctAnswer?: string | number; // index or exact string

  // Tap Wrong Word:
  words?: string[]; // Sentence split into clickable words
  wrongWordIndex?: number;
  correction?: string;

  // Sentence Builder:
  jumbledWords?: string[];
  correctSentenceWords?: string[];

  // Match Pairs:
  pairs?: { left: string; right: string }[];

  // Bucket Sort:
  buckets?: string[]; // e.g. ["Past", "Present"]
  itemsToSort?: { text: string; correctBucketIndex: number }[];
}

export interface LessonItem {
  id: string;
  topicId: TopicId;
  title: string;
  subtitle: string;
  order: number;
  explanationSteps: ExplanationStep[];
  primaryPractice: PracticeExercise[]; // Exactly 4 exercises shown first
  retryPractice: PracticeExercise[];   // Exactly 4 spare exercises for retry (8 total)
  rememberCard: {
    title: string;
    bullets: string[]; // Max 3 bullets
  };
}

export interface CheatSheetSection {
  title: string;
  summary: string;
  rules: { rule: string; example: string; clue?: string }[];
}

export interface Topic {
  id: TopicId;
  title: string;
  shortDesc: string;
  iconName: string;
  lessonItems: LessonItem[];
  cheatSheet: {
    overview: string;
    sections: CheatSheetSection[];
  };
}

export interface ExamQuestion {
  id: string;
  topicId: TopicId;
  lessonItemId?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0-3
  explanation: string; // 1-2 sentences: rule + clue
}

// User Progress & History Schema
export type LessonStatus = 'not_started' | 'in_progress' | 'completed' | 'mastered';

export interface LessonProgress {
  status: LessonStatus;
  currentStepIndex: number; // For resuming mid-lesson
  attemptsCount: number;
  bestScore: number; // 0 to 4
  firstTryPerfect: boolean;
  lastPracticedAt: string;
}

export interface ExamMistake {
  questionId: string;
  questionText: string;
  userAnswerIndex: number;
  correctAnswerIndex: number;
  userAnswerText: string;
  correctAnswerText: string;
  explanation: string;
  topicId: TopicId;
  lessonItemId?: string;
}

export interface ExamAttempt {
  id: string;
  date: string;
  topics: TopicId[];
  questionCount: number;
  score: number;
  percentage: number;
  durationSeconds?: number;
  mistakes: ExamMistake[];
}

export interface WeakSpot {
  lessonItemId: string;
  topicId: TopicId;
  topicTitle: string;
  lessonTitle: string;
  mistakeCount: number;
  lastMistakeDate: string;
}

export interface UserStudyState {
  userName: string;
  theme: 'light' | 'dark';
  lastActiveLessonId?: string;
  lessonProgress: Record<string, LessonProgress>;
  examHistory: ExamAttempt[];
  weakSpots: WeakSpot[];
}

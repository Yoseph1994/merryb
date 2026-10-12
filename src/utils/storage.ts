import { UserStudyState, LessonProgress, ExamAttempt, WeakSpot, TopicId } from '../types';

const STORAGE_KEY = 'merry_study_app_state_v2';

export const DEFAULT_STUDY_STATE: UserStudyState = {
  userName: 'Merry',
  theme: 'light',
  lastActiveLessonId: 'tenses-01',
  lessonProgress: {},
  examHistory: [],
  weakSpots: []
};

export function loadStudyState(): UserStudyState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STUDY_STATE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STUDY_STATE,
      ...parsed,
      lessonProgress: parsed.lessonProgress || {},
      examHistory: parsed.examHistory || [],
      weakSpots: parsed.weakSpots || []
    };
  } catch (err) {
    console.error('Failed to load study state:', err);
    return DEFAULT_STUDY_STATE;
  }
}

export function saveStudyState(state: UserStudyState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save study state:', err);
  }
}

export function recordLessonScore(
  lessonId: string,
  score: number, // 0 to 4
  total: number = 4
): UserStudyState {
  const current = loadStudyState();
  const existing = current.lessonProgress[lessonId] || {
    status: 'not_started',
    currentStepIndex: 0,
    attemptsCount: 0,
    bestScore: 0,
    firstTryPerfect: false,
    lastPracticedAt: new Date().toISOString()
  };

  const isFirstTry = existing.attemptsCount === 0;
  const isPerfect = score === total;
  const isPassing = score >= 3;

  let newStatus = existing.status;
  if (isPassing) {
    newStatus = (isFirstTry && isPerfect) || existing.firstTryPerfect ? 'mastered' : 'completed';
  } else {
    newStatus = 'in_progress';
  }

  const updatedProgress: LessonProgress = {
    status: newStatus,
    currentStepIndex: 0, // Finished
    attemptsCount: existing.attemptsCount + 1,
    bestScore: Math.max(existing.bestScore, score),
    firstTryPerfect: isFirstTry ? isPerfect : existing.firstTryPerfect,
    lastPracticedAt: new Date().toISOString()
  };

  const updatedState: UserStudyState = {
    ...current,
    lastActiveLessonId: lessonId,
    lessonProgress: {
      ...current.lessonProgress,
      [lessonId]: updatedProgress
    }
  };

  saveStudyState(updatedState);
  return updatedState;
}

export function saveLessonStepProgress(lessonId: string, stepIndex: number): void {
  const current = loadStudyState();
  const existing = current.lessonProgress[lessonId] || {
    status: 'in_progress',
    currentStepIndex: stepIndex,
    attemptsCount: 0,
    bestScore: 0,
    firstTryPerfect: false,
    lastPracticedAt: new Date().toISOString()
  };

  const updatedState: UserStudyState = {
    ...current,
    lastActiveLessonId: lessonId,
    lessonProgress: {
      ...current.lessonProgress,
      [lessonId]: {
        ...existing,
        status: existing.status === 'not_started' ? 'in_progress' : existing.status,
        currentStepIndex: stepIndex,
        lastPracticedAt: new Date().toISOString()
      }
    }
  };
  saveStudyState(updatedState);
}

export function recordExamAttempt(attempt: ExamAttempt): UserStudyState {
  const current = loadStudyState();
  const updatedHistory = [attempt, ...current.examHistory];

  // Update Weak Spots from mistakes
  const weakSpotsMap: Record<string, WeakSpot> = {};
  current.weakSpots.forEach((w) => {
    weakSpotsMap[w.lessonItemId] = { ...w };
  });

  attempt.mistakes.forEach((m) => {
    if (m.lessonItemId) {
      if (!weakSpotsMap[m.lessonItemId]) {
        weakSpotsMap[m.lessonItemId] = {
          lessonItemId: m.lessonItemId,
          topicId: m.topicId,
          topicTitle: formatTopicTitle(m.topicId),
          lessonTitle: m.lessonItemId,
          mistakeCount: 1,
          lastMistakeDate: attempt.date
        };
      } else {
        weakSpotsMap[m.lessonItemId].mistakeCount += 1;
        weakSpotsMap[m.lessonItemId].lastMistakeDate = attempt.date;
      }
    }
  });

  const updatedWeakSpots = Object.values(weakSpotsMap).sort(
    (a, b) => b.mistakeCount - a.mistakeCount
  );

  const updatedState: UserStudyState = {
    ...current,
    examHistory: updatedHistory,
    weakSpots: updatedWeakSpots
  };

  saveStudyState(updatedState);
  return updatedState;
}

function formatTopicTitle(id: TopicId): string {
  switch (id) {
    case 'tenses': return 'Tenses';
    case 'conditionals': return 'Conditional Sentences';
    case 'agreement': return 'Subject-Verb Agreement';
    case 'paragraphs': return 'Paragraph Tricks';
    case 'vocabulary': return 'Vocabulary';
    case 'spelling': return 'Spelling';
    default: return id;
  }
}

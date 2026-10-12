import { ALL_TOPICS, ALL_EXAM_QUESTIONS } from '../data';

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  summary: {
    totalTopics: number;
    totalLessons: number;
    totalExercises: number;
    totalExamQuestions: number;
  };
}

export function validateAllContent(): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  let totalExercises = 0;

  // 1. Validate Lessons
  ALL_TOPICS.forEach((topic) => {
    topic.lessonItems.forEach((lesson) => {
      // Check 8 practice examples (4 primary + 4 retry)
      const primaryCount = lesson.primaryPractice?.length || 0;
      const retryCount = lesson.retryPractice?.length || 0;
      const lessonTotalExercises = primaryCount + retryCount;
      totalExercises += lessonTotalExercises;

      if (primaryCount !== 4) {
        errors.push(`[${lesson.id}] "${lesson.title}" must have exactly 4 primary exercises, found ${primaryCount}`);
      }
      if (retryCount !== 4) {
        errors.push(`[${lesson.id}] "${lesson.title}" must have exactly 4 retry exercises, found ${retryCount}`);
      }

      // Check exercises
      const allExercises = [...(lesson.primaryPractice || []), ...(lesson.retryPractice || [])];
      allExercises.forEach((ex, idx) => {
        if (!ex.id) {
          errors.push(`[${lesson.id}] Exercise #${idx + 1} is missing an id`);
        }
        if (!ex.prompt || ex.prompt.trim() === '') {
          errors.push(`[${lesson.id}][${ex.id}] Missing exercise prompt`);
        }
        if (!ex.explanation || ex.explanation.trim() === '') {
          errors.push(`[${lesson.id}][${ex.id}] Missing exercise explanation`);
        }

        // Validate type-specific correctness
        if (ex.type === 'multiple_choice' || ex.type === 'fill_gap') {
          if (!ex.options || ex.options.length < 2) {
            errors.push(`[${lesson.id}][${ex.id}] Multiple choice exercise must have at least 2 options`);
          }
          if (typeof ex.correctAnswer === 'number' && ex.options) {
            if (ex.correctAnswer < 0 || ex.correctAnswer >= ex.options.length) {
              errors.push(`[${lesson.id}][${ex.id}] Invalid correctAnswer index: ${ex.correctAnswer}`);
            }
          }
        }

        if (ex.type === 'tap_wrong_word') {
          if (!ex.words || ex.words.length === 0) {
            errors.push(`[${lesson.id}][${ex.id}] tap_wrong_word missing words array`);
          }
          if (ex.wrongWordIndex === undefined || (ex.words && ex.wrongWordIndex >= ex.words.length)) {
            errors.push(`[${lesson.id}][${ex.id}] Invalid wrongWordIndex`);
          }
        }

        if (ex.type === 'sentence_builder') {
          if (!ex.jumbledWords || !ex.correctSentenceWords) {
            errors.push(`[${lesson.id}][${ex.id}] sentence_builder missing jumbled or correct words`);
          }
        }

        if (ex.type === 'match_pairs') {
          if (!ex.pairs || ex.pairs.length < 2) {
            errors.push(`[${lesson.id}][${ex.id}] match_pairs requires at least 2 pairs`);
          }
        }

        if (ex.type === 'bucket_sort') {
          if (!ex.buckets || ex.buckets.length < 2) {
            errors.push(`[${lesson.id}][${ex.id}] bucket_sort requires at least 2 buckets`);
          }
          if (!ex.itemsToSort || ex.itemsToSort.length < 2) {
            errors.push(`[${lesson.id}][${ex.id}] bucket_sort requires items to sort`);
          }
        }
      });

      // Check remember card
      if (!lesson.rememberCard || !lesson.rememberCard.bullets || lesson.rememberCard.bullets.length === 0) {
        errors.push(`[${lesson.id}] Missing rememberCard or bullets`);
      } else if (lesson.rememberCard.bullets.length > 3) {
        warnings.push(`[${lesson.id}] Remember card has ${lesson.rememberCard.bullets.length} bullets (recommended max is 3)`);
      }
    });
  });

  // 2. Validate Exam Bank
  const seenQuestionIds = new Set<string>();
  const seenQuestionsText = new Set<string>();

  ALL_EXAM_QUESTIONS.forEach((q) => {
    if (seenQuestionIds.has(q.id)) {
      errors.push(`Duplicate Exam Question ID: ${q.id}`);
    }
    seenQuestionIds.add(q.id);

    const normText = q.question.trim().toLowerCase();
    if (seenQuestionsText.has(normText)) {
      warnings.push(`Possible duplicate question text: "${q.question}"`);
    }
    seenQuestionsText.add(normText);

    if (!q.options || q.options.length !== 4) {
      errors.push(`[${q.id}] Must have exactly 4 options, found ${q.options?.length || 0}`);
    }
    if (q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
      errors.push(`[${q.id}] Invalid correctAnswerIndex: ${q.correctAnswerIndex}`);
    }
    if (!q.explanation || q.explanation.trim() === '') {
      errors.push(`[${q.id}] Missing explanation for exam question`);
    }
  });

  // Check Exam bank sizes (at least 60 for Tenses, at least 40 for all other topics)
  const bankRequirements: Record<string, number> = {
    tenses: 60,
    conditionals: 40,
    agreement: 40,
    paragraphs: 40,
    vocabulary: 40,
    spelling: 40
  };

  Object.entries(bankRequirements).forEach(([topicId, minCount]) => {
    const count = ALL_EXAM_QUESTIONS.filter((q) => q.topicId === topicId).length;
    if (count < minCount) {
      errors.push(`Topic "${topicId}" exam bank must have at least ${minCount} questions, found ${count}`);
    }
  });

  const isValid = errors.length === 0;

  return {
    isValid,
    errors,
    warnings,
    summary: {
      totalTopics: ALL_TOPICS.length,
      totalLessons: ALL_TOPICS.reduce((acc, t) => acc + t.lessonItems.length, 0),
      totalExercises,
      totalExamQuestions: ALL_EXAM_QUESTIONS.length
    }
  };
}

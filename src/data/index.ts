import { Topic, TopicId, ExamQuestion } from '../types';
import { TOPICS_META } from './topics';
import { TENSES_LESSON_ITEMS } from './tensesLessonContent';
import { TENSES_EXAM_QUESTIONS } from './tensesExamQuestions';
import { CONDITIONALS_LESSON_ITEMS } from './conditionalsLessonContent';
import { CONDITIONALS_EXAM_QUESTIONS } from './conditionalsExamQuestions';
import { AGREEMENT_LESSON_ITEMS } from './agreementLessonContent';
import { AGREEMENT_EXAM_QUESTIONS } from './agreementExamQuestions';
import { PARAGRAPHS_LESSON_ITEMS } from './paragraphsLessonContent';
import { PARAGRAPHS_EXAM_QUESTIONS } from './paragraphsExamQuestions';
import { VOCABULARY_LESSON_ITEMS } from './vocabularyLessonContent';
import { VOCABULARY_EXAM_QUESTIONS } from './vocabularyExamQuestions';
import { SPELLING_LESSON_ITEMS } from './spellingLessonContent';
import { SPELLING_EXAM_QUESTIONS } from './spellingExamQuestions';

export const ALL_TOPICS: Topic[] = [
  {
    ...TOPICS_META.tenses,
    lessonItems: TENSES_LESSON_ITEMS
  },
  {
    ...TOPICS_META.conditionals,
    lessonItems: CONDITIONALS_LESSON_ITEMS
  },
  {
    ...TOPICS_META.agreement,
    lessonItems: AGREEMENT_LESSON_ITEMS
  },
  {
    ...TOPICS_META.paragraphs,
    lessonItems: PARAGRAPHS_LESSON_ITEMS
  },
  {
    ...TOPICS_META.vocabulary,
    lessonItems: VOCABULARY_LESSON_ITEMS
  },
  {
    ...TOPICS_META.spelling,
    lessonItems: SPELLING_LESSON_ITEMS
  }
];

export const ALL_EXAM_QUESTIONS: ExamQuestion[] = [
  ...TENSES_EXAM_QUESTIONS,
  ...CONDITIONALS_EXAM_QUESTIONS,
  ...AGREEMENT_EXAM_QUESTIONS,
  ...PARAGRAPHS_EXAM_QUESTIONS,
  ...VOCABULARY_EXAM_QUESTIONS,
  ...SPELLING_EXAM_QUESTIONS
];

export function getTopicById(id: TopicId): Topic | undefined {
  return ALL_TOPICS.find((t) => t.id === id);
}

export function getLessonItemById(id: string) {
  for (const topic of ALL_TOPICS) {
    const item = topic.lessonItems.find((l) => l.id === id);
    if (item) return { lesson: item, topic };
  }
  return undefined;
}

export function getExamQuestionsForTopics(topicIds: TopicId[]): ExamQuestion[] {
  return ALL_EXAM_QUESTIONS.filter((q) => topicIds.includes(q.topicId));
}

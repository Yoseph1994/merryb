import { Topic } from '../types';

export const TOPICS_META: Record<string, Omit<Topic, 'lessonItems'>> = {
  tenses: {
    id: 'tenses',
    title: 'Tenses',
    shortDesc: 'Master past, present, and future timelines with clear clue words and no confusion.',
    iconName: 'Clock',
    cheatSheet: {
      overview: 'Every tense question can be solved with 2 questions: WHEN (Past, Present, Future) and WHAT SHAPE (Simple, Continuous, Perfect, Perfect Continuous). Look for the time clue first.',
      sections: [
        {
          title: 'The 3-Step Tense Method',
          summary: 'Use this checklist on every exam question:',
          rules: [
            { rule: 'Step 1: Spot the Time Clue', example: 'yesterday, since 2021, by the time, while, every day', clue: 'Always underline time words.' },
            { rule: 'Step 2: Choose the Time Zone', example: 'Past (finished), Present (now/habit), Future (after now)' },
            { rule: 'Step 3: Choose the Aspect', example: 'Simple (fact/point), Continuous (in progress), Perfect (before another time/connected to now)' }
          ]
        },
        {
          title: 'Present Tenses at a Glance',
          summary: 'Actions connected to now or repeated habits.',
          rules: [
            { rule: 'Present Simple', example: 'The train departs at 09:00 every morning.', clue: 'every day, always, schedules, universal facts' },
            { rule: 'Present Continuous', example: 'She is writing her essay right now.', clue: 'now, at the moment, currently, look!' },
            { rule: 'Present Perfect', example: 'I have already finished two chapters today.', clue: 'already, yet, just, recently, so far' },
            { rule: 'Present Perfect Continuous', example: 'He has been studying since 08:00.', clue: 'since + starting point, for + duration' }
          ]
        },
        {
          title: 'Past Tenses at a Glance',
          summary: 'Actions that finished before the present moment.',
          rules: [
            { rule: 'Past Simple', example: 'We visited the museum yesterday.', clue: 'yesterday, in 2020, ago, last week' },
            { rule: 'Past Continuous', example: 'While she was cooking, the phone rang.', clue: 'while, when, at 8 PM last night' },
            { rule: 'Past Perfect', example: 'The train had left before we reached the platform.', clue: 'by the time, before, had + V3' },
            { rule: 'Past Perfect Continuous', example: 'They had been waiting for two hours before the bus arrived.', clue: 'had been + V-ing + duration before past event' }
          ]
        },
        {
          title: 'Future Forms at a Glance',
          summary: 'Actions occurring after the present moment.',
          rules: [
            { rule: 'Will (Spontaneous / Prediction)', example: 'I will help you with those heavy books.', clue: 'promises, offers, sudden choices' },
            { rule: 'Be Going To (Physical Evidence / Plan)', example: 'Look at those dark clouds; it is going to rain.', clue: 'visible physical evidence, intentions' },
            { rule: 'Future Continuous', example: 'At 10:00 tomorrow, we will be writing our test.', clue: 'at this time tomorrow, in progress then' },
            { rule: 'Future Perfect', example: 'By next Friday, she will have completed the project.', clue: 'by + future time (will have + V3)' }
          ]
        },
        {
          title: 'The 4 Golden Exam Traps',
          summary: 'Avoid these classic errors tested on entrance exams:',
          rules: [
            { rule: 'Trap 1: No "will" after time words', example: 'As soon as she arrives (NOT will arrive), we will start.', clue: 'when, as soon as, before, after, until' },
            { rule: 'Trap 2: "Since" needs Perfect tense', example: 'She has worked here since 2019 (NOT is working).', clue: 'since/for = perfect continuous' },
            { rule: 'Trap 3: Stative verbs never take -ing', example: 'This bag belongs to me (NOT is belonging).', clue: 'belong, need, contain, prefer, understand' },
            { rule: 'Trap 4: Reported speech backshift', example: 'He said he was tired (is -> was).', clue: 'said/told shifts tense back one step' }
          ]
        }
      ]
    }
  },

  conditionals: {
    id: 'conditionals',
    title: 'Conditional Sentences',
    shortDesc: 'Understand zero, first, second, third, and mixed conditions without mixing up clauses.',
    iconName: 'GitBranch',
    cheatSheet: {
      overview: 'Conditionals connect a condition (if-clause) with a result. Never put "would" in the if-part.',
      sections: [
        {
          title: 'The 4 Core Conditionals',
          summary: 'Summary of the standard conditional formulas:',
          rules: [
            { rule: 'Zero Conditional (Facts)', example: 'If water reaches 100°C, it boils.', clue: 'If + Present Simple, Present Simple' },
            { rule: 'First Conditional (Real Future)', example: 'If it rains tomorrow, we will stay inside.', clue: 'If + Present Simple, will + base verb' },
            { rule: 'Second Conditional (Unreal Present)', example: 'If I had more free time, I would learn violin.', clue: 'If + Past Simple, would + base verb' },
            { rule: 'Third Conditional (Unreal Past)', example: 'If she had studied harder, she would have passed.', clue: 'If + had + V3, would have + V3' }
          ]
        },
        {
          title: 'Condition Words & Inversion',
          summary: 'Alternative words for if and formal exam structures:',
          rules: [
            { rule: 'Unless = If not', example: 'Unless you hurry, you will miss the bus.' },
            { rule: 'Provided that / As long as', example: 'You can borrow it provided that you return it on time.' },
            { rule: 'Inversion (Had I known)', example: 'Had I known about the meeting, I would have attended.' }
          ]
        }
      ]
    }
  },

  agreement: {
    id: 'agreement',
    title: 'Subject-Verb Agreement',
    shortDesc: 'Match subjects with singular or plural verbs through distractors and tricky phrases.',
    iconName: 'CheckSquare',
    cheatSheet: {
      overview: 'Find the real subject by ignoring phrases between the subject and the verb (prepositional phrases, as well as, along with).',
      sections: [
        {
          title: 'Core Rules',
          summary: 'Essential agreement guidelines:',
          rules: [
            { rule: 'Ignore Intervening Phrases', example: 'The box of old books is in the attic.', clue: 'Cross out "of old books"; the subject is "box" (singular).' },
            { rule: 'Each, Every, Everyone are Singular', example: 'Everyone in the class has completed the homework.', clue: 'everyone / each takes singular verb' },
            { rule: 'Either... or / Neither... nor', example: 'Neither the teacher nor the students were in the room.', clue: 'The verb agrees with the subject CLOSER to it.' },
            { rule: 'Uncountable Nouns are Singular', example: 'The news is surprising. The advice was helpful.', clue: 'news, advice, information, furniture take singular verbs' }
          ]
        }
      ]
    }
  },

  paragraphs: {
    id: 'paragraphs',
    title: 'Paragraph Tricks',
    shortDesc: 'Solve jumbled sentences, find topic sentences, and spot the odd sentence out quickly.',
    iconName: 'FileText',
    cheatSheet: {
      overview: 'Read paragraph questions like a detective: look for pronouns, transition words, and logical sequence.',
      sections: [
        {
          title: 'Paragraph Structure & Flow',
          summary: 'Quick guide to paragraph exam items:',
          rules: [
            { rule: 'Topic Sentence', example: 'Introduces the main idea without relying on pronouns like "these" or "such".' },
            { rule: 'Pronoun References', example: '"This problem" must follow the sentence that defines the problem.' },
            { rule: 'Linking Words', example: 'However, Therefore, In addition, For instance signal logical relationships.' }
          ]
        }
      ]
    }
  },

  vocabulary: {
    id: 'vocabulary',
    title: 'Vocabulary',
    shortDesc: 'Learn high-frequency exam words through word families, roots, synonyms, and flashcards.',
    iconName: 'BookA',
    cheatSheet: {
      overview: 'Learn words in context and by word families rather than isolated lists.',
      sections: [
        {
          title: 'Vocabulary Strategies',
          summary: 'Techniques for scoring higher on vocabulary:',
          rules: [
            { rule: 'Prefixes & Suffixes', example: 'un- (not), re- (again), -tion (noun), -ify (verb).' },
            { rule: 'Common Confused Words', example: 'affect (verb) vs effect (noun); loose (not tight) vs lose (misplace).' },
            { rule: 'Context Clues', example: 'Look for contrast words ("although") or definition punctuation to deduce meaning.' }
          ]
        }
      ]
    }
  },

  spelling: {
    id: 'spelling',
    title: 'Spelling',
    shortDesc: 'Crack double consonants, silent letters, -ie vs -ei, and common entrance exam traps.',
    iconName: 'SpellCheck',
    cheatSheet: {
      overview: 'Spelling rules have clear patterns. Pay attention to consonant doubling and silent letters.',
      sections: [
        {
          title: 'Core Spelling Rules',
          summary: 'High-yield spelling principles:',
          rules: [
            { rule: 'Double Consonants', example: 'accommodate (2 c, 2 m), embarrass (2 r, 2 s), recommend (1 c, 2 m).' },
            { rule: 'I before E except after C', example: 'believe, relief vs receive, ceiling (exceptions: weird, their).' },
            { rule: '-y to -ies', example: 'city -> cities, fly -> flies (but monkey -> monkeys after a vowel).' }
          ]
        }
      ]
    }
  }
};

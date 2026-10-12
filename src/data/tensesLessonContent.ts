import { LessonItem } from '../types';

export const TENSES_LESSON_ITEMS: LessonItem[] = [
  // =========================================================================
  // LESSON 1: The Big Picture: The 2-Question System
  // =========================================================================
  {
    id: 'tenses-01',
    topicId: 'tenses',
    title: 'The Big Picture: The 2-Question System',
    subtitle: 'Solve any tense question with two simple questions instead of memorizing 12 names.',
    order: 1,
    explanationSteps: [
      {
        title: 'Do Not Memorize 12 Names',
        text: 'English has 12 tense names, but you never need to panic. Every tense is built from just two decisions: WHEN and WHAT SHAPE.',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'WHEN (Time Zone)', highlight: true, color: 'past' },
            { text: ' + ' },
            { text: 'WHAT SHAPE (Aspect)', highlight: true, color: 'present' },
            { text: ' = ' },
            { text: 'Right Tense', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Question 1: WHEN Did It Happen?',
        text: 'Look for the time marker in the sentence. Decide if the action belongs to the Past (finished), Present (now/routine), or Future (ahead).',
        visual: {
          type: 'timeline',
          items: [
            { label: 'Past', value: 'yesterday, in 2020, two hours ago', color: 'past' },
            { label: 'Present', value: 'every day, right now, since Monday', color: 'present' },
            { label: 'Future', value: 'tomorrow, next week, soon', color: 'future' }
          ]
        }
      },
      {
        title: 'Question 2: WHAT SHAPE Is The Action?',
        text: 'Is it a simple fact, an action in progress (-ing), or something completed before another point in time (perfect)?',
        visual: {
          type: 'chips',
          items: [
            { label: 'Simple', value: 'Fact, habit, single point' },
            { label: 'Continuous', value: 'In the middle of happening (-ing)' },
            { label: 'Perfect', value: 'Happened before another point' }
          ]
        }
      },
      {
        title: 'The 3-Step Exam Checklist',
        text: 'Step 1: Underline the time clue word. Step 2: Choose Past, Present, or Future. Step 3: Choose Simple, Continuous, or Perfect.',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Example Sentence', text: '"She is studying right now."' },
          rightSide: { label: 'Detection', text: 'Clue = "right now" (Present) + in progress = Present Continuous!' }
        }
      }
    ],
    rememberCard: {
      title: 'The Big Picture Rule',
      bullets: [
        'Always find the time clue word in the sentence first.',
        'Ask Question 1: Is this Past, Present, or Future?',
        'Ask Question 2: Is it a Fact (Simple), In Progress (Continuous), or Done Before (Perfect)?'
      ]
    },
    primaryPractice: [
      {
        id: 't01-p1',
        type: 'multiple_choice',
        prompt: 'In the sentence "We arrived at the station two hours ago", what is the time clue?',
        options: ['arrived', 'at the station', 'two hours ago', 'We'],
        correctAnswer: 2,
        explanation: '"Two hours ago" tells us exactly when the action finished in the past.'
      },
      {
        id: 't01-p2',
        type: 'bucket_sort',
        prompt: 'Sort these time clue words into their correct time zone.',
        buckets: ['Past Zone', 'Present Zone'],
        itemsToSort: [
          { text: 'yesterday', correctBucketIndex: 0 },
          { text: 'right now', correctBucketIndex: 1 },
          { text: 'last month', correctBucketIndex: 0 },
          { text: 'every day', correctBucketIndex: 1 }
        ],
        explanation: '"Yesterday" and "last month" belong to the Past; "right now" and "every day" belong to the Present.'
      },
      {
        id: 't01-p3',
        type: 'fill_gap',
        prompt: 'Look outside! The athletes _______ across the sports field right now.',
        options: ['are running', 'ran', 'run', 'have run'],
        correctAnswer: 'are running',
        explanation: '"Right now" and "Look!" indicate an action in progress, requiring Present Continuous ("are running").'
      },
      {
        id: 't01-p4',
        type: 'tap_wrong_word',
        prompt: 'Tap the word that makes this sentence incorrect for a finished past time:',
        words: ['She', 'visited', 'her', 'grandparents', 'tomorrow', '.'],
        wrongWordIndex: 4,
        correction: 'yesterday',
        explanation: '"Visited" is past tense, so "tomorrow" conflicts with it. It should be "yesterday".'
      }
    ],
    retryPractice: [
      {
        id: 't01-r1',
        type: 'multiple_choice',
        prompt: 'The campus library _______ at 08:00 every weekday morning.',
        options: ['opens', 'is opening', 'has opened', 'opened'],
        correctAnswer: 0,
        explanation: 'Scheduled timetables and repeating daily habits take the Present Simple ("opens").'
      },
      {
        id: 't01-r2',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the past time marker:',
        jumbledWords: ['yesterday.', 'published', 'findings', 'scientists', 'their', 'The'],
        correctSentenceWords: ['The', 'scientists', 'published', 'their', 'findings', 'yesterday.'],
        explanation: 'Specified past time ("yesterday") pairs with the Past Simple ("published").'
      },
      {
        id: 't01-r3',
        type: 'match_pairs',
        prompt: 'Match each time clue with its time zone:',
        pairs: [
          { left: 'in 2018', right: 'Past' },
          { left: 'at the moment', right: 'Present' },
          { left: 'next month', right: 'Future' }
        ],
        explanation: '"In 2018" is past, "at the moment" is present, and "next month" is future.'
      },
      {
        id: 't01-r4',
        type: 'fill_gap',
        prompt: 'By the time the fire brigade arrived, the security guards _______ the building.',
        options: ['had already evacuated', 'have already evacuated', 'evacuate', 'are evacuating'],
        correctAnswer: 'had already evacuated',
        explanation: 'An action completed before another past event requires the Past Perfect ("had already evacuated").'
      }
    ]
  },

  // =========================================================================
  // LESSON 2: Present Tenses: Facts, Now & Unfinished Time
  // =========================================================================
  {
    id: 'tenses-02',
    topicId: 'tenses',
    title: 'Present Tenses: Facts, Now & Unfinished Time',
    subtitle: 'Distinguish between habits, current moments, and actions connecting past to present.',
    order: 2,
    explanationSteps: [
      {
        title: 'Present Simple: Habits & Timetables',
        text: 'Use Present Simple for daily routines, permanent truths, and fixed timetables. Add -s for he/she/it.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Routine', value: 'She walks to work every day.' },
            { label: 'Fact', value: 'Water freezes at 0 degrees.' },
            { label: 'Timetable', value: 'The exam starts at 09:00.' }
          ]
        }
      },
      {
        title: 'Present Continuous: Right This Second',
        text: 'Use am/is/are + verb-ing for actions happening right now, or temporary situations happening this week.',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'Subject' },
            { text: ' + ' },
            { text: 'am / is / are', highlight: true, color: 'present' },
            { text: ' + ' },
            { text: 'verb-ing', highlight: true, color: 'present' }
          ]
        }
      },
      {
        title: 'Present Perfect: Past Touching Now',
        text: 'Use have/has + V3 when an action happened at an unstated time, or has a direct result in the present.',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Present Perfect', text: 'I have lost my key (I do not have it now).' },
          rightSide: { label: 'Past Simple', text: 'I lost my key yesterday (finished past).' }
        }
      },
      {
        title: 'Present Perfect Continuous: Duration',
        text: 'Use have/has been + verb-ing when you want to emphasize HOW LONG an activity has been continuing.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Formula', value: 'has / have been + verb-ing' },
            { label: 'Clues', value: 'since 2021, for three hours, all morning' },
            { label: 'Example', value: 'She has been reading for two hours.' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Present Tenses Rules',
      bullets: [
        'Present Simple = routines, facts, timetables ("every day").',
        'Present Continuous = happening right now ("at the moment").',
        'Present Perfect (Continuous) = connects past to present ("since / for").'
      ]
    },
    primaryPractice: [
      {
        id: 't02-p1',
        type: 'multiple_choice',
        prompt: 'The morning train to Oxford _______ from platform 3 every morning at 08:30.',
        options: ['departs', 'is departing', 'has departed', 'departed'],
        correctAnswer: 0,
        explanation: 'Scheduled public transport timetables use the Present Simple ("departs").'
      },
      {
        id: 't02-p2',
        type: 'fill_gap',
        prompt: 'Quiet, please! The students _______ an entrance exam in room 12 right now.',
        options: ['are taking', 'take', 'have taken', 'took'],
        correctAnswer: 'are taking',
        explanation: '"Right now" calls for the Present Continuous ("are taking").'
      },
      {
        id: 't02-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect verb in this sentence:',
        words: ['Maria', 'is', 'living', 'in', 'London', 'since', '2019', '.'],
        wrongWordIndex: 2,
        correction: 'has lived (or has been living)',
        explanation: 'With "since 2019", you cannot use Present Continuous. You must use Present Perfect ("has lived" or "has been living").'
      },
      {
        id: 't02-p4',
        type: 'sentence_builder',
        prompt: 'Build the sentence:',
        jumbledWords: ['hours', 'has', 'She', 'studied', 'for', 'two'],
        correctSentenceWords: ['She', 'has', 'studied', 'for', 'two', 'hours'],
        explanation: 'Present Perfect links the past duration to now: "She has studied for two hours."'
      }
    ],
    retryPractice: [
      {
        id: 't02-r1',
        type: 'multiple_choice',
        prompt: 'Dr. Taylor _______ at this hospital since she graduated five years ago.',
        options: ['works', 'is working', 'has worked', 'worked'],
        correctAnswer: 2,
        explanation: '"Since she graduated" connects that past point to the present, requiring Present Perfect ("has worked").'
      },
      {
        id: 't02-r2',
        type: 'fill_gap',
        prompt: 'Look at the chef! He _______ fresh pasta for tonight\'s dinner.',
        options: ['is preparing', 'prepares', 'prepared', 'has prepared'],
        correctAnswer: 'is preparing',
        explanation: '"Look!" signals an action occurring at this very moment in front of your eyes.'
      },
      {
        id: 't02-r3',
        type: 'match_pairs',
        prompt: 'Match each present tense with its typical clue:',
        pairs: [
          { left: 'Present Simple', right: 'always / every day' },
          { left: 'Present Continuous', right: 'right now / currently' },
          { left: 'Present Perfect Continuous', right: 'since / for hours' }
        ],
        explanation: 'Each present tense has its signature time clue.'
      },
      {
        id: 't02-r4',
        type: 'bucket_sort',
        prompt: 'Sort into Present Simple vs Present Continuous:',
        buckets: ['Present Simple', 'Present Continuous'],
        itemsToSort: [
          { text: 'Water boils at 100°C', correctBucketIndex: 0 },
          { text: 'I am reading page 40', correctBucketIndex: 1 },
          { text: 'The bus leaves at 6 PM', correctBucketIndex: 0 },
          { text: 'They are listening now', correctBucketIndex: 1 }
        ],
        explanation: 'General facts and timetables use Present Simple; ongoing actions use Present Continuous.'
      }
    ]
  },

  // =========================================================================
  // LESSON 3: Past Tenses: Points, Background & Earlier Events
  // =========================================================================
  {
    id: 'tenses-03',
    topicId: 'tenses',
    title: 'Past Tenses: Points, Background & Earlier Events',
    subtitle: 'Master the relationship between Past Simple, Past Continuous, and the #1 exam favorite: Past Perfect.',
    order: 3,
    explanationSteps: [
      {
        title: 'Past Simple: Finished Point',
        text: 'Use Past Simple for completed actions at a definite time in the past. Look for finished time words.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Form', value: 'verb + ed (or irregular like went, saw)' },
            { label: 'Clues', value: 'yesterday, in 2018, ago, last week' },
            { label: 'Example', value: 'The teacher checked our papers yesterday.' }
          ]
        }
      },
      {
        title: 'Past Continuous: Background Scene',
        text: 'Use was/were + verb-ing for an ongoing background action that was interrupted by a shorter action.',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Long Action (Continuous)', text: 'While I was reading the email...' },
          rightSide: { label: 'Short Interruption (Simple)', text: '...the computer shut down.' }
        }
      },
      {
        title: 'Past Perfect: The Earlier Past',
        text: 'When two events happened in the past, the one that happened EARLIER uses had + V3. This is the #1 tested past tense.',
        visual: {
          type: 'timeline',
          items: [
            { label: 'First (Earlier Past)', value: 'The train HAD LEFT', color: 'past' },
            { label: 'Second (Later Past)', value: 'We arrived at the station', color: 'past' },
            { label: 'Now', value: 'Present moment', color: 'present' }
          ]
        }
      },
      {
        title: 'Past Perfect Continuous: Earlier Duration',
        text: 'Use had been + verb-ing when you want to show how long an action was ongoing before another past event took place.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Formula', value: 'had been + verb-ing' },
            { label: 'Example', value: 'They had been waiting for an hour before the doctor called them.' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Past Tenses Rules',
      bullets: [
        'Past Simple = finished at a stated past time ("yesterday, in 2020").',
        'Past Continuous = action in progress interrupted ("while I was reading").',
        'Past Perfect = the EARLIER of two past actions ("had already left before we arrived").'
      ]
    },
    primaryPractice: [
      {
        id: 't03-p1',
        type: 'multiple_choice',
        prompt: 'By the time the rescue team arrived at the cabin, the hikers _______ the fire.',
        options: ['already put out', 'had already put out', 'have already put out', 'were already putting'],
        correctAnswer: 1,
        explanation: 'Putting out the fire happened BEFORE the rescue team arrived in the past. We use Past Perfect ("had already put out").'
      },
      {
        id: 't03-p2',
        type: 'fill_gap',
        prompt: 'While Samuel _______ his essay, his laptop battery died.',
        options: ['was typing', 'typed', 'had typed', 'has typed'],
        correctAnswer: 'was typing',
        explanation: '"While" introduces the ongoing background action in the past ("was typing").'
      },
      {
        id: 't03-p3',
        type: 'sentence_builder',
        prompt: 'Order the sentence correctly:',
        jumbledWords: ['before', 'had', 'left', 'He', 'noon'],
        correctSentenceWords: ['He', 'had', 'left', 'before', 'noon'],
        explanation: '"Had left" shows an action completed prior to the past time marker "noon".'
      },
      {
        id: 't03-p4',
        type: 'tap_wrong_word',
        prompt: 'Tap the wrong verb form:',
        words: ['We', 'have', 'met', 'the', 'director', 'two', 'days', 'ago', '.'],
        wrongWordIndex: 1,
        correction: 'met (remove have)',
        explanation: 'With a finished past time word like "two days ago", you must use Past Simple ("met"), never present perfect.'
      }
    ],
    retryPractice: [
      {
        id: 't03-r1',
        type: 'multiple_choice',
        prompt: 'When the teacher walked into the classroom, the students _______ their textbooks.',
        options: ['already opened', 'had already opened', 'have opened', 'were open'],
        correctAnswer: 1,
        explanation: 'Opening the books happened before the teacher walked in, requiring Past Perfect ("had already opened").'
      },
      {
        id: 't03-r2',
        type: 'fill_gap',
        prompt: 'Archaeologists _______ the ancient tomb in 1922.',
        options: ['discovered', 'have discovered', 'had discovered', 'were discovering'],
        correctAnswer: 'discovered',
        explanation: '"In 1922" is a specific completed past date, requiring Past Simple ("discovered").'
      },
      {
        id: 't03-r3',
        type: 'match_pairs',
        prompt: 'Match the sentence part with its tense function:',
        pairs: [
          { left: 'The lights went out', right: 'Single past event' },
          { left: 'While we were studying', right: 'Background ongoing action' },
          { left: 'Because we had forgotten the bill', right: 'Earlier cause in the past' }
        ],
        explanation: 'Notice how each tense handles a different relationship in past time.'
      },
      {
        id: 't03-r4',
        type: 'bucket_sort',
        prompt: 'Sort these examples into Past Simple vs Past Perfect:',
        buckets: ['Past Simple', 'Past Perfect'],
        itemsToSort: [
          { text: 'I graduated in 2021', correctBucketIndex: 0 },
          { text: 'I had graduated before moving', correctBucketIndex: 1 },
          { text: 'She visited Paris last week', correctBucketIndex: 0 },
          { text: 'She had visited Paris before 2015', correctBucketIndex: 1 }
        ],
        explanation: 'Single past points use Past Simple; actions before another past point use Past Perfect.'
      }
    ]
  },

  // =========================================================================
  // LESSON 4: Future Forms: Decisions, Evidence & Deadlines
  // =========================================================================
  {
    id: 'tenses-04',
    topicId: 'tenses',
    title: 'Future Forms: Decisions, Evidence & Deadlines',
    subtitle: 'Learn when to use "will", "be going to", Future Continuous, and Future Perfect.',
    order: 4,
    explanationSteps: [
      {
        title: 'Will vs Be Going To',
        text: 'Use "will" for sudden decisions, promises, and offers. Use "be going to" when you see clear physical evidence right now.',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Will (Spontaneous)', text: '"I will carry those heavy folders for you."' },
          rightSide: { label: 'Be Going To (Evidence)', text: '"Look at those clouds! It is going to snow."' }
        }
      },
      {
        title: 'Present Continuous for Fixed Arrangements',
        text: 'When a future plan is already organized with dates, people, or tickets booked, English commonly uses Present Continuous.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Example', value: 'We are flying to Rome next Thursday.' },
            { label: 'Clue', value: 'Tickets are booked, calendar arrangement is set.' }
          ]
        }
      },
      {
        title: 'Future Continuous: In Progress Then',
        text: 'Use will be + verb-ing for an action that will be in the middle of happening at a specific future moment.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Formula', value: 'will be + verb-ing' },
            { label: 'Clue', value: 'At this time tomorrow, this time next week' },
            { label: 'Example', value: 'At 10:00 tomorrow, she will be taking her entrance exam.' }
          ]
        }
      },
      {
        title: 'Future Perfect: The Future Deadline',
        text: 'Use will have + V3 for an action that will be finished BEFORE a specified future time or deadline.',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'By + future time' },
            { text: ' ➡️ ' },
            { text: 'will have', highlight: true, color: 'future' },
            { text: ' + ' },
            { text: 'past participle (V3)', highlight: true, color: 'future' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Future Forms Rules',
      bullets: [
        'Will = sudden choice, promise, offer.',
        'Be going to = prediction with present physical evidence.',
        'Future Perfect = finished by a deadline ("by 2026, by next month").'
      ]
    },
    primaryPractice: [
      {
        id: 't04-p1',
        type: 'multiple_choice',
        prompt: 'By the end of next month, the university _______ construction of the new science library.',
        options: ['will complete', 'will have completed', 'completes', 'has completed'],
        correctAnswer: 1,
        explanation: '"By the end of [future date]" requires the Future Perfect ("will have completed").'
      },
      {
        id: 't04-p2',
        type: 'fill_gap',
        prompt: 'Watch out! That ladder is wobbling; it _______ fall!',
        options: ['is going to', 'will', 'is falling', 'has fallen'],
        correctAnswer: 'is going to',
        explanation: 'We have clear present physical evidence (wobbling ladder), so we use "is going to".'
      },
      {
        id: 't04-p3',
        type: 'sentence_builder',
        prompt: 'Build the sentence:',
        jumbledWords: ['help', 'you', 'will', 'I', 'tomorrow'],
        correctSentenceWords: ['I', 'will', 'help', 'you', 'tomorrow'],
        explanation: '"Will" expresses an offer or promise: "I will help you tomorrow."'
      },
      {
        id: 't04-p4',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect word:',
        words: ['By', 'noon', 'tomorrow', ',', 'she', 'will', 'finished', 'her', 'test', '.'],
        wrongWordIndex: 6,
        correction: 'have finished',
        explanation: 'Future Perfect requires "will have finished", not just "will finished".'
      }
    ],
    retryPractice: [
      {
        id: 't04-r1',
        type: 'multiple_choice',
        prompt: 'At 15:00 tomorrow afternoon, our team _______ the championship match.',
        options: ['will be playing', 'will play', 'plays', 'played'],
        correctAnswer: 0,
        explanation: '"At 15:00 tomorrow afternoon" pinpoints a specific time when the action will be ongoing, requiring Future Continuous ("will be playing").'
      },
      {
        id: 't04-r2',
        type: 'fill_gap',
        prompt: 'The doorbell is ringing. - I _______ it!',
        options: ['will answer', 'am answering', 'am going to answer', 'answered'],
        correctAnswer: 'will answer',
        explanation: 'A spontaneous on-the-spot decision uses "will" ("I will answer it!").'
      },
      {
        id: 't04-r3',
        type: 'match_pairs',
        prompt: 'Match the future clue with its correct tense form:',
        pairs: [
          { left: 'By next year', right: 'will have + V3 (Future Perfect)' },
          { left: 'At this time tomorrow', right: 'will be + V-ing (Future Continuous)' },
          { left: 'Look at that dark sky!', right: 'is going to rain (Evidence)' }
        ],
        explanation: 'Notice how each clue directly signals its matching future form.'
      },
      {
        id: 't04-r4',
        type: 'bucket_sort',
        prompt: 'Sort into "Will" vs "Be Going To":',
        buckets: ['Use "Will"', 'Use "Be Going To"'],
        itemsToSort: [
          { text: 'I promise I will call you', correctBucketIndex: 0 },
          { text: 'He looks sick; he is going to vomit', correctBucketIndex: 1 },
          { text: 'The phone is ringing; I will get it', correctBucketIndex: 0 },
          { text: 'Look at the ice; she is going to slip', correctBucketIndex: 1 }
        ],
        explanation: 'Promises and instant decisions take "will"; present visible evidence takes "be going to".'
      }
    ]
  },

  // =========================================================================
  // LESSON 5: Clue Words Decoder: The Trigger Word Radar
  // =========================================================================
  {
    id: 'tenses-05',
    topicId: 'tenses',
    title: 'Clue Words Decoder: The Trigger Word Radar',
    subtitle: 'Underline the trigger word and unlock the exact tense required in under three seconds.',
    order: 5,
    explanationSteps: [
      {
        title: 'The Trigger Word Radar',
        text: 'Exam makers do not ask you to guess. They almost always plant a "trigger word" that demands one specific tense.',
        visual: {
          type: 'table',
          headers: ['Trigger Clue', 'Matching Tense', 'Quick Example'],
          rows: [
            ['By the time...', 'Past or Future Perfect', 'had arrived / will have arrived'],
            ['While...', 'Continuous (-ing)', 'was walking'],
            ['Since / For [duration]', 'Perfect Continuous', 'has been studying'],
            ['In [past year] / ago', 'Past Simple', 'graduated in 2021']
          ]
        }
      },
      {
        title: 'Since vs For',
        text: 'Use "since" with a starting point in time (since 2019, since 8 AM). Use "for" with a duration length (for 3 hours, for 5 years).',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Since (Starting Point)', text: 'since Monday, since 2015, since childhood' },
          rightSide: { label: 'For (Length of Duration)', text: 'for three days, for ten years, for a long time' }
        }
      },
      {
        title: 'Already, Yet, and Just',
        text: '"Already" means sooner than expected. "Just" means a few moments ago. "Yet" is used in questions and negatives.',
        visual: {
          type: 'chips',
          items: [
            { label: 'Already', value: 'I have already submitted my form.' },
            { label: 'Just', value: 'The teacher has just entered.' },
            { label: 'Yet', value: 'Have you finished your homework yet?' }
          ]
        }
      },
      {
        title: 'The "Ago" Trap',
        text: '"Ago" can ONLY be used with the Past Simple, never with the Present Perfect. Never say "has arrived two days ago".',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'Time amount + ago' },
            { text: ' ➡️ ' },
            { text: 'MUST BE PAST SIMPLE', highlight: true, color: 'past' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Clue Words Rules',
      bullets: [
        '"Since" = starting point; "For" = total duration.',
        '"By the time" = always requires a Perfect tense (had / will have).',
        '"Ago" and past dates strictly demand Past Simple (never have/has).'
      ]
    },
    primaryPractice: [
      {
        id: 't05-p1',
        type: 'multiple_choice',
        prompt: 'Professor Bennett has been researching marine biology _______ over fifteen years.',
        options: ['for', 'since', 'during', 'from'],
        correctAnswer: 0,
        explanation: '"Over fifteen years" is a total duration of time, which requires "for".'
      },
      {
        id: 't05-p2',
        type: 'fill_gap',
        prompt: 'The students have lived in this campus dormitory _______ last September.',
        options: ['since', 'for', 'ago', 'in'],
        correctAnswer: 'since',
        explanation: '"Last September" is a specific starting point in time, which requires "since".'
      },
      {
        id: 't05-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the word that creates an error:',
        words: ['I', 'have', 'seen', 'that', 'documentary', 'three', 'weeks', 'ago', '.'],
        wrongWordIndex: 1,
        correction: 'saw (remove have)',
        explanation: 'Because "three weeks ago" is a finished past time, we use Past Simple ("saw"), not "have seen".'
      },
      {
        id: 't05-p4',
        type: 'match_pairs',
        prompt: 'Match the time expression with "since" or "for":',
        pairs: [
          { left: '2018', right: 'since' },
          { left: 'four months', right: 'for' },
          { left: 'yesterday morning', right: 'since' }
        ],
        explanation: 'Starting points take "since"; time durations take "for".'
      }
    ],
    retryPractice: [
      {
        id: 't05-r1',
        type: 'multiple_choice',
        prompt: 'By the time the bell rang, the students _______ their essays.',
        options: ['had handed in', 'handed in', 'have handed in', 'hand in'],
        correctAnswer: 0,
        explanation: '"By the time [past action]" requires Past Perfect ("had handed in").'
      },
      {
        id: 't05-r2',
        type: 'sentence_builder',
        prompt: 'Build the correct sentence:',
        jumbledWords: ['since', 'working', 'He', 'has', 'been', 'morning'],
        correctSentenceWords: ['He', 'has', 'been', 'working', 'since', 'morning'],
        explanation: '"Since morning" acts as the starting point time clue with Present Perfect Continuous.'
      },
      {
        id: 't05-r3',
        type: 'fill_gap',
        prompt: 'Have you received your admission letter _______?',
        options: ['yet', 'already', 'since', 'just'],
        correctAnswer: 'yet',
        explanation: 'In negative sentences and questions about expected events, we use "yet".'
      },
      {
        id: 't05-r4',
        type: 'bucket_sort',
        prompt: 'Sort into "Since" vs "For":',
        buckets: ['Takes "Since"', 'Takes "For"'],
        itemsToSort: [
          { text: 'breakfast time', correctBucketIndex: 0 },
          { text: 'two decades', correctBucketIndex: 1 },
          { text: 'last Friday', correctBucketIndex: 0 },
          { text: 'ten minutes', correctBucketIndex: 1 }
        ],
        explanation: 'Points in time take "since"; periods of duration take "for".'
      }
    ]
  },

  // =========================================================================
  // LESSON 6: Time Clauses: The "No Will" Rule
  // =========================================================================
  {
    id: 'tenses-06',
    topicId: 'tenses',
    title: 'Time Clauses: The "No Will" Rule',
    subtitle: 'The #1 favorite exam trap: never use "will" immediately after words like when, as soon as, and before.',
    order: 6,
    explanationSteps: [
      {
        title: 'The Golden Rule of Time Clauses',
        text: 'When a sentence talks about the future, you CANNOT use "will" inside the time clause itself. Use Present Simple instead!',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Wrong (Exam Trap)', text: '❌ "As soon as she will arrive, we will start."' },
          rightSide: { label: 'Correct (Rule)', text: '✅ "As soon as she arrives, we will start."' }
        }
      },
      {
        title: 'The Time Clause Conjunctions',
        text: 'Memorize these words. Whenever you see one introducing a future condition, use the Present Simple:',
        visual: {
          type: 'chips',
          items: [
            { label: 'when' },
            { label: 'as soon as' },
            { label: 'before' },
            { label: 'after' },
            { label: 'until / till' },
            { label: 'once' }
          ]
        }
      },
      {
        title: 'Structure of the Sentence',
        text: 'The main clause takes "will", but the time clause takes Present Simple (or Present Perfect if completed).',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'Time Conjunction (When, As soon as)' },
            { text: ' + ' },
            { text: 'PRESENT SIMPLE', highlight: true, color: 'present' },
            { text: ', ' },
            { text: 'will + verb', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Another Exam Example',
        text: '"We will not leave until the rain stops." Notice that after "until", we say "stops", never "will stop".',
        visual: {
          type: 'chips',
          items: [
            { label: 'Main clause', value: 'We will not leave (Future with will)' },
            { label: 'Time clause', value: 'until the rain stops (Present Simple)' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Time Clauses Rules',
      bullets: [
        'Never use "will" after when, as soon as, before, after, until, or once.',
        'Use the Present Simple inside the time clause.',
        'The main clause keeps "will" for future meaning.'
      ]
    },
    primaryPractice: [
      {
        id: 't06-p1',
        type: 'multiple_choice',
        prompt: 'As soon as the examination supervisor _______ into the room, the test will begin.',
        options: ['will walk', 'walks', 'is walking', 'walked'],
        correctAnswer: 1,
        explanation: 'After "as soon as", English strictly requires the Present Simple ("walks") for future meanings, never "will".'
      },
      {
        id: 't06-p2',
        type: 'fill_gap',
        prompt: 'Please wait in the lobby until the doctor _______ your name.',
        options: ['calls', 'will call', 'is calling', 'called'],
        correctAnswer: 'calls',
        explanation: 'After "until", use the Present Simple ("calls") to describe a future event.'
      },
      {
        id: 't06-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the word that breaks the time clause rule:',
        words: ['When', 'you', 'will', 'finish', 'reading', ',', 'lend', 'me', 'the', 'book', '.'],
        wrongWordIndex: 2,
        correction: 'remove "will"',
        explanation: 'Do not use "will" after "when". It should be: "When you finish reading..."'
      },
      {
        id: 't06-p4',
        type: 'sentence_builder',
        prompt: 'Arrange the sentence correctly:',
        jumbledWords: ['leaves', 'call', 'we', 'will', 'Before', 'he', 'him'],
        correctSentenceWords: ['Before', 'he', 'leaves', 'we', 'will', 'call', 'him'],
        explanation: '"Before he leaves" uses Present Simple, followed by "we will call him".'
      }
    ],
    retryPractice: [
      {
        id: 't06-r1',
        type: 'multiple_choice',
        prompt: 'I will send you a confirmation email once I _______ the receipt.',
        options: ['will receive', 'receive', 'am receiving', 'received'],
        correctAnswer: 1,
        explanation: 'After "once", use the Present Simple ("receive") for future time.'
      },
      {
        id: 't06-r2',
        type: 'fill_gap',
        prompt: 'We will board the train after the passengers _______ off.',
        options: ['get', 'will get', 'got', 'are getting'],
        correctAnswer: 'get',
        explanation: 'After "after", use the Present Simple ("get") to refer to future completion.'
      },
      {
        id: 't06-r3',
        type: 'match_pairs',
        prompt: 'Match each time clause starter with its requirement:',
        pairs: [
          { left: 'as soon as', right: 'requires Present Simple (no will)' },
          { left: 'until', right: 'requires Present Simple (no will)' },
          { left: 'main clause', right: 'uses will + verb' }
        ],
        explanation: 'Time clauses never take "will"; the main clause handles the future marker.'
      },
      {
        id: 't06-r4',
        type: 'bucket_sort',
        prompt: 'Classify whether "will" is allowed in that clause:',
        buckets: ['"Will" is BANNED', '"Will" is ALLOWED'],
        itemsToSort: [
          { text: 'clause starting with "as soon as"', correctBucketIndex: 0 },
          { text: 'main result clause', correctBucketIndex: 1 },
          { text: 'clause starting with "until"', correctBucketIndex: 0 },
          { text: 'promise clause ("I promise I...")', correctBucketIndex: 1 }
        ],
        explanation: 'Time clauses forbid "will", while main and promise clauses allow it.'
      }
    ]
  },

  // =========================================================================
  // LESSON 7: Stative Verbs: Feelings, Ownership & Thinking
  // =========================================================================
  {
    id: 'tenses-07',
    topicId: 'tenses',
    title: 'Stative Verbs: Feelings, Ownership & Thinking',
    subtitle: 'Verbs that express states, possession, or mental thoughts NEVER take continuous (-ing) forms.',
    order: 7,
    explanationSteps: [
      {
        title: 'What Are Stative Verbs?',
        text: 'Stative verbs describe a state of being, not a physical action. Because states do not have an active duration, they do NOT use -ing.',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Action Verb (OK with -ing)', text: 'She is running. They are writing.' },
          rightSide: { label: 'Stative Verb (NO -ing)', text: '❌ She is knowing. ✅ She knows.' }
        }
      },
      {
        title: 'The 4 Categories of Stative Verbs',
        text: '1. Possession (belong, have, own). 2. Senses (taste, smell, hear). 3. Emotions (like, love, hate, prefer). 4. Thoughts (know, believe, understand).',
        visual: {
          type: 'table',
          headers: ['Category', 'Common Verbs', 'Correct Usage'],
          rows: [
            ['Possession', 'belong, own, possess', 'This book belongs to me.'],
            ['Emotions', 'love, hate, prefer, want', 'I prefer tea to coffee.'],
            ['Thoughts', 'know, believe, understand', 'He understands the rule.'],
            ['State', 'contain, consist of, weigh', 'The jar contains honey.']
          ]
        }
      },
      {
        title: 'Verbs With Dual Meaning',
        text: 'Some verbs can be stative OR action depending on meaning. "Have" = possession (stative: I have a pen) vs activity (action: I am having lunch).',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Stative Meaning (No -ing)', text: '"I have two brothers." (Possession)' },
          rightSide: { label: 'Action Meaning (-ing OK)', text: '"I am having breakfast." (Eating)' }
        }
      },
      {
        title: 'The Exam Trap with "Belong"',
        text: '"Belong" is one of the most frequently tested stative verbs on entrance exams. Never choose "is belonging"!',
        visual: {
          type: 'chips',
          items: [
            { label: 'Trap', value: '❌ "This notebook is belonging to Anna."' },
            { label: 'Correct', value: '✅ "This notebook belongs to Anna."' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Stative Verbs Rules',
      bullets: [
        'Stative verbs describe states, thoughts, feelings, and ownership.',
        'Never use continuous (-ing) forms with belong, believe, understand, prefer, or know.',
        'Use the simple tense even if the action is happening right now.'
      ]
    },
    primaryPractice: [
      {
        id: 't07-p1',
        type: 'multiple_choice',
        prompt: 'Excuse me, _______ this textbook to anyone sitting at this desk?',
        options: ['does this textbook belong', 'is this textbook belonging', 'has this textbook belonged', 'belongs this textbook'],
        correctAnswer: 0,
        explanation: '"Belong" is a stative verb and cannot be used in the continuous form. We say "Does it belong...".'
      },
      {
        id: 't07-p2',
        type: 'fill_gap',
        prompt: 'At the moment, I _______ every single explanation the teacher is giving.',
        options: ['understand', 'am understanding', 'have understood', 'was understanding'],
        correctAnswer: 'understand',
        explanation: 'Even with "at the moment", "understand" is a mental stative verb and stays in the simple form ("understand").'
      },
      {
        id: 't07-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb that is incorrectly used in the continuous form:',
        words: ['She', 'is', 'preferring', 'classical', 'music', 'over', 'pop', '.'],
        wrongWordIndex: 2,
        correction: 'prefers',
        explanation: '"Prefer" is an emotion/preference stative verb. It must be "She prefers".'
      },
      {
        id: 't07-p4',
        type: 'sentence_builder',
        prompt: 'Build the sentence correctly:',
        jumbledWords: ['knows', 'answer', 'Nobody', 'the', 'now'],
        correctSentenceWords: ['Nobody', 'knows', 'the', 'answer', 'now'],
        explanation: '"Know" is stative, so we use Present Simple ("knows"), even with "now".'
      }
    ],
    retryPractice: [
      {
        id: 't07-r1',
        type: 'multiple_choice',
        prompt: 'This antique leather bag _______ genuine brass locks.',
        options: ['features', 'is featuring', 'is having', 'is containing'],
        correctAnswer: 0,
        explanation: '"Feature" as a permanent state uses the simple form ("features").'
      },
      {
        id: 't07-r2',
        type: 'fill_gap',
        prompt: 'Do you _______ what time the main library closes today?',
        options: ['know', 'knowing', 'are knowing', 'have known'],
        correctAnswer: 'know',
        explanation: '"Know" is stative and cannot take -ing in standard English.'
      },
      {
        id: 't07-r3',
        type: 'match_pairs',
        prompt: 'Match the verb to its category:',
        pairs: [
          { left: 'belong, own', right: 'Possession (Stative)' },
          { left: 'run, write', right: 'Physical Action (Dynamic)' },
          { left: 'believe, understand', right: 'Mental State (Stative)' }
        ],
        explanation: 'Understanding the category helps you instantly spot whether -ing is allowed.'
      },
      {
        id: 't07-r4',
        type: 'bucket_sort',
        prompt: 'Sort into Stative (No -ing) vs Action (-ing Allowed):',
        buckets: ['Stative (No -ing)', 'Action (-ing OK)'],
        itemsToSort: [
          { text: 'belong', correctBucketIndex: 0 },
          { text: 'swim', correctBucketIndex: 1 },
          { text: 'prefer', correctBucketIndex: 0 },
          { text: 'build', correctBucketIndex: 1 }
        ],
        explanation: 'States and preferences cannot take continuous forms; physical actions can.'
      }
    ]
  },

  // =========================================================================
  // LESSON 8: Reported Speech: The Backshift Rule
  // =========================================================================
  {
    id: 'tenses-08',
    topicId: 'tenses',
    title: 'Reported Speech: The Backshift Rule',
    subtitle: 'When reporting what someone said in the past, shift the original tense back one step into the past.',
    order: 8,
    explanationSteps: [
      {
        title: 'The Tense Backshift Rule',
        text: 'When the reporting verb is in the past (said, told, announced), the verb inside the reported statement steps BACK one tense.',
        visual: {
          type: 'table',
          headers: ['Direct Speech', 'Reported Speech (Backshift)'],
          rows: [
            ['Present Simple (I am tired)', 'Past Simple (he was tired)'],
            ['Present Continuous (is raining)', 'Past Continuous (was raining)'],
            ['Past Simple (arrived yesterday)', 'Past Perfect (had arrived)'],
            ['Present Perfect (has left)', 'Past Perfect (had left)'],
            ['Will (will help)', 'Would (would help)']
          ]
        }
      },
      {
        title: 'Pronoun and Time Shifts',
        text: 'Besides the tense, time references also shift back: "now" becomes "then", "today" becomes "that day", "yesterday" becomes "the day before".',
        visual: {
          type: 'chips',
          items: [
            { label: 'now ➡️', value: 'then' },
            { label: 'tomorrow ➡️', value: 'the next day' },
            { label: 'yesterday ➡️', value: 'the day before' }
          ]
        }
      },
      {
        title: 'Said vs Told',
        text: '"Said" does NOT take a personal object ("He said that..."). "Told" MUST take a personal object ("He told ME that...").',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Said (No person)', text: '"She said that she was ready."' },
          rightSide: { label: 'Told (+ person)', text: '"She told us that she was ready."' }
        }
      },
      {
        title: 'Reporting Questions and Commands',
        text: 'Reported questions do NOT use question word order (do/did drops out). Commands use "to + infinitive": "He told us to be quiet."',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'Direct: "Please sit down."' },
            { text: ' ➡️ ' },
            { text: 'Reported: The teacher asked us to sit down.', highlight: true, color: 'past' }
          ]
        }
      }
    ],
    rememberCard: {
      title: 'Reported Speech Rules',
      bullets: [
        'Shift the tense back one step if the reporting verb is in the past (said, told).',
        'Present -> Past; Past / Present Perfect -> Past Perfect; Will -> Would.',
        'Use "said that..." or "told [someone] that...".'
      ]
    },
    primaryPractice: [
      {
        id: 't08-p1',
        type: 'multiple_choice',
        prompt: 'Direct: "I am working on my science assignment." In reported speech: Kevin said that he _______ on his assignment.',
        options: ['is working', 'was working', 'had worked', 'works'],
        correctAnswer: 1,
        explanation: 'Present Continuous ("am working") shifts back one step into Past Continuous ("was working").'
      },
      {
        id: 't08-p2',
        type: 'fill_gap',
        prompt: 'Direct: "We will finish the project tomorrow." Reported: They said that they _______ finish the project the following day.',
        options: ['would', 'will', 'can', 'shall'],
        correctAnswer: 'would',
        explanation: '"Will" shifts back into "would" in reported speech.'
      },
      {
        id: 't08-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect reporting verb:',
        words: ['The', 'guide', 'said', 'us', 'that', 'the', 'museum', 'was', 'closed', '.'],
        wrongWordIndex: 2,
        correction: 'told',
        explanation: 'When followed directly by a person ("us"), use "told", not "said".'
      },
      {
        id: 't08-p4',
        type: 'sentence_builder',
        prompt: 'Build the reported sentence:',
        jumbledWords: ['was', 'she', 'She', 'said', 'ready'],
        correctSentenceWords: ['She', 'said', 'she', 'was', 'ready'],
        explanation: 'Direct "I am ready" shifts to "She said she was ready."'
      }
    ],
    retryPractice: [
      {
        id: 't08-r1',
        type: 'multiple_choice',
        prompt: 'Direct: "I have seen this documentary before." Reported: David explained that he _______ that documentary before.',
        options: ['saw', 'had seen', 'has seen', 'was seeing'],
        correctAnswer: 1,
        explanation: 'Present Perfect ("have seen") backshifts into Past Perfect ("had seen").'
      },
      {
        id: 't08-r2',
        type: 'fill_gap',
        prompt: 'The instructor told the applicants _______ their answer sheets carefully.',
        options: ['to check', 'check', 'checking', 'checked'],
        correctAnswer: 'to check',
        explanation: 'Reported instructions and polite commands take the infinitive: "told [someone] to check".'
      },
      {
        id: 't08-r3',
        type: 'match_pairs',
        prompt: 'Match direct verbs to their reported backshift forms:',
        pairs: [
          { left: 'is writing', right: 'was writing' },
          { left: 'wrote', right: 'had written' },
          { left: 'will write', right: 'would write' }
        ],
        explanation: 'Notice how each tense steps back one level into the past.'
      },
      {
        id: 't08-r4',
        type: 'bucket_sort',
        prompt: 'Sort into Direct vs Reported tense pairs:',
        buckets: ['Direct Form', 'Reported Backshift Form'],
        itemsToSort: [
          { text: 'I am hungry', correctBucketIndex: 0 },
          { text: 'he was hungry', correctBucketIndex: 1 },
          { text: 'we will go', correctBucketIndex: 0 },
          { text: 'they would go', correctBucketIndex: 1 }
        ],
        explanation: 'Direct speech uses immediate present/future; reported speech steps back.'
      }
    ]
  },

  // =========================================================================
  // LESSON 9: Tricks, Traps & Wish Structures
  // =========================================================================
  {
    id: 'tenses-09',
    topicId: 'tenses',
    title: 'Tricks, Traps & Wish Structures',
    subtitle: 'The 3x4 map review, "I wish / If only" unreality, and the top entrance exam traps.',
    order: 9,
    explanationSteps: [
      {
        title: 'The 3x4 Complete Tense Map',
        text: '3 Time Zones (Past, Present, Future) multiplied by 4 Aspects (Simple, Continuous, Perfect, Perfect Continuous).',
        visual: {
          type: 'table',
          headers: ['Aspect', 'Past', 'Present', 'Future'],
          rows: [
            ['Simple', 'wrote', 'writes', 'will write'],
            ['Continuous', 'was writing', 'is writing', 'will be writing'],
            ['Perfect', 'had written', 'has written', 'will have written'],
            ['Perf. Cont.', 'had been writing', 'has been writing', 'will have been writing']
          ]
        }
      },
      {
        title: 'Wish and "If Only" for the Present',
        text: 'When you wish for something different right now, use the PAST tense. "I wish I had more time" (meaning: I do not have time now).',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'Wish for NOW' },
            { text: ' ➡️ ' },
            { text: 'Use Past Simple (had, knew, were)', highlight: true, color: 'past' }
          ]
        }
      },
      {
        title: 'Wish for the Past (Regret)',
        text: 'When expressing regret about a past action that cannot be changed, use the PAST PERFECT: "I wish I had studied harder."',
        visual: {
          type: 'formula',
          formulaTokens: [
            { text: 'Wish for PAST REGRET' },
            { text: ' ➡️ ' },
            { text: 'Use Past Perfect (had + V3)', highlight: true, color: 'past' }
          ]
        }
      },
      {
        title: '"Used to" vs "Be used to"',
        text: '"Used to + base verb" = past habit that stopped. "Be used to + -ing" = accustomed or familiar with something.',
        visual: {
          type: 'comparison',
          leftSide: { label: 'Used to (Past Habit)', text: '"I used to live in Manchester." (I don\'t now).' },
          rightSide: { label: 'Be used to (Accustomed)', text: '"She is used to waking up early." (Normal for her).' }
        }
      }
    ],
    rememberCard: {
      title: 'Tricks & Traps Summary',
      bullets: [
        'Wish for NOW uses Past Simple ("I wish I knew").',
        'Wish for PAST REGRET uses Past Perfect ("I wish I had known").',
        '"Used to do" = stopped habit; "Be used to doing" = accustomed.'
      ]
    },
    primaryPractice: [
      {
        id: 't09-p1',
        type: 'multiple_choice',
        prompt: 'I have so much paperwork today; I really wish I _______ more free time right now.',
        options: ['have', 'had', 'am having', 'will have'],
        correctAnswer: 1,
        explanation: 'A wish about an unreal present situation uses the Past Simple ("had").'
      },
      {
        id: 't09-p2',
        type: 'fill_gap',
        prompt: 'Elena failed the entrance exam last term. She wishes she _______ harder back then.',
        options: ['had studied', 'studied', 'studies', 'would study'],
        correctAnswer: 'had studied',
        explanation: 'A past regret about something that already happened uses the Past Perfect ("had studied").'
      },
      {
        id: 't09-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect word in this habit sentence:',
        words: ['He', 'is', 'used', 'to', 'wake', 'up', 'at', 'dawn', '.'],
        wrongWordIndex: 4,
        correction: 'waking',
        explanation: '"Be used to" (is used to) must be followed by a gerund (-ing): "waking up".'
      },
      {
        id: 't09-p4',
        type: 'sentence_builder',
        prompt: 'Build the wish sentence:',
        jumbledWords: ['I', 'were', 'wish', 'here', 'you'],
        correctSentenceWords: ['I', 'wish', 'you', 'were', 'here'],
        explanation: 'Formal subjunctive wish uses "were": "I wish you were here."'
      }
    ],
    retryPractice: [
      {
        id: 't09-r1',
        type: 'multiple_choice',
        prompt: 'When Arthur was a college student, he _______ ride his bicycle ten miles every morning.',
        options: ['used to', 'is used to', 'was used to', 'uses to'],
        correctAnswer: 0,
        explanation: 'A past routine habit that no longer happens takes "used to + base verb".'
      },
      {
        id: 't09-r2',
        type: 'fill_gap',
        prompt: 'If only we _______ the weather forecast before heading out on the hike yesterday!',
        options: ['had checked', 'checked', 'check', 'were checking'],
        correctAnswer: 'had checked',
        explanation: '"If only" expressing past regret requires the Past Perfect ("had checked").'
      },
      {
        id: 't09-r3',
        type: 'match_pairs',
        prompt: 'Match the wish structure with its timeframe:',
        pairs: [
          { left: 'I wish I had more time', right: 'Unreal present' },
          { left: 'I wish I had attended the lecture', right: 'Past regret' },
          { left: 'I wish it would stop raining', right: 'Desire for future change' }
        ],
        explanation: 'Each wish pattern corresponds to a specific grammatical timeframe.'
      },
      {
        id: 't09-r4',
        type: 'bucket_sort',
        prompt: 'Sort into "Past Habit" vs "Accustomed To":',
        buckets: ['Past Habit (used to do)', 'Accustomed To (be used to doing)'],
        itemsToSort: [
          { text: 'I used to play soccer', correctBucketIndex: 0 },
          { text: 'She is used to working late', correctBucketIndex: 1 },
          { text: 'They used to live in Paris', correctBucketIndex: 0 },
          { text: 'He is used to cold winters', correctBucketIndex: 1 }
        ],
        explanation: '"Used to + base verb" shows a past habit; "be used to + -ing/noun" shows familiarity.'
      }
    ]
  }
];

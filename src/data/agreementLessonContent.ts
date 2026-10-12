import { LessonItem } from '../types';

export const AGREEMENT_LESSON_ITEMS: LessonItem[] = [
  {
    id: 'sva-core-rule',
    topicId: 'agreement',
    title: 'Core Rule: Find the Real Subject',
    subtitle: 'Ignore prepositional phrases and intervening words',
    order: 1,
    explanationSteps: [
      {
        title: 'The Basic Principle',
        text: 'A singular subject takes a singular verb (ending in -s in Present Simple). A plural subject takes a plural verb (no -s).',
        visual: {
          type: 'comparison',
          title: 'Basic Agreement',
          leftSide: {
            label: 'Singular Subject',
            text: 'The student studies every evening.',
            tag: 'Subject (no s) -> Verb (+s)'
          },
          rightSide: {
            label: 'Plural Subject',
            text: 'The students study every evening.',
            tag: 'Subject (+s) -> Verb (no s)'
          }
        }
      },
      {
        title: 'Trap: Intervening Phrases',
        text: 'Words between the subject and the verb do NOT change the subject. Always cross out prepositional phrases starting with of, in, on, with, at.',
        visual: {
          type: 'formula',
          title: 'Cross Out The Middle',
          formulaTokens: [
            { text: 'The box', highlight: true, color: 'present' },
            { text: '[of old books]', highlight: false },
            { text: 'IS', highlight: true, color: 'future' },
            { text: 'heavy.', highlight: false }
          ]
        }
      },
      {
        title: 'Parenthetical Additions',
        text: 'Phrases like "as well as", "together with", "accompanied by", and "including" are not conjunctions. They do not make the subject plural.',
        visual: {
          type: 'chips',
          title: 'Ignore These In-Between Phrases',
          items: [
            { label: 'as well as', value: 'The teacher, as well as the students, is here.' },
            { label: 'together with', value: 'The captain, together with his crew, was rescued.' },
            { label: 'along with', value: 'The parcel, along with the letters, has arrived.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-c-p1',
        type: 'multiple_choice',
        prompt: 'The bouquet of red roses _____ a delightful fragrance.',
        options: ['has', 'have', 'are having', 'having'],
        correctAnswer: 0,
        explanation: 'The real subject is the singular "bouquet", not "roses". A singular noun takes "has".'
      },
      {
        id: 'sva-c-p2',
        type: 'fill_gap',
        prompt: 'The principal, along with several teachers, _____ attending the ceremony.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"Along with several teachers" is parenthetical. The subject is singular "principal", taking "is".'
      },
      {
        id: 'sva-c-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error in this sentence:',
        words: ['The', 'quality', 'of', 'these', 'organic', 'apples', 'are', 'exceptional.'],
        wrongWordIndex: 6,
        correction: 'is',
        explanation: 'The real subject is "quality" (singular), so the verb must be "is", not "are".'
      },
      {
        id: 'sva-c-p4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with correct agreement:',
        jumbledWords: ['broken.', 'The', 'clocks', 'of', 'wall', 'is', 'one'],
        correctSentenceWords: ['The', 'one', 'of', 'clocks', 'is', 'broken.'],
        explanation: 'Singular subject pairs with singular verb "is".'
      }
    ],
    retryPractice: [
      {
        id: 'sva-c-r1',
        type: 'multiple_choice',
        prompt: 'The cause of multiple road accidents in the district _____ yet to be determined.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: 'The subject is "cause" (singular), which takes "is". Do not get distracted by "accidents".'
      },
      {
        id: 'sva-c-r2',
        type: 'fill_gap',
        prompt: 'The mayor, accompanied by two bodyguards, _____ the building.',
        options: ['enters', 'enter', 'are entering', 'have entered'],
        correctAnswer: 0,
        explanation: 'Accompanied by phrases do not change singular subject "mayor" -> "enters".'
      },
      {
        id: 'sva-c-r3',
        type: 'bucket_sort',
        prompt: 'Sort sentences by correct verb form:',
        buckets: ['Takes "IS" (Singular)', 'Takes "ARE" (Plural)'],
        itemsToSort: [
          { text: 'The list of candidates', correctBucketIndex: 0 },
          { text: 'The candidates on the list', correctBucketIndex: 1 },
          { text: 'A basket of fresh oranges', correctBucketIndex: 0 },
          { text: 'The fresh oranges in the basket', correctBucketIndex: 1 }
        ],
        explanation: 'Find the head noun: "list" and "basket" are singular; "candidates" and "oranges" are plural.'
      },
      {
        id: 'sva-c-r4',
        type: 'multiple_choice',
        prompt: 'Which sentence has correct subject-verb agreement?',
        options: [
          'The discovery of new fossils provides crucial clues.',
          'The discovery of new fossils provide crucial clues.',
          'The discovery of new fossils are providing clues.',
          'The discoveries of the fossil provides clues.'
        ],
        correctAnswer: 0,
        explanation: 'Singular subject "discovery" correctly pairs with singular verb "provides".'
      }
    ],
    rememberCard: {
      title: 'Remember: Real Subject',
      bullets: [
        'Singular subject takes verb with -s (He works).',
        'Cross out prepositional phrases (of, in, with) to find the true head noun.',
        'Phrases like "as well as" and "along with" do NOT make a subject plural.'
      ]
    }
  },
  {
    id: 'sva-indefinite-pronouns',
    topicId: 'agreement',
    title: 'Indefinite Pronouns: The -one & -body Clan',
    subtitle: 'Each, every, everyone, nobody are ALWAYS singular',
    order: 2,
    explanationSteps: [
      {
        title: 'The Singular Rule',
        text: 'Words ending in -one, -body, and -thing, along with "each" and "every", are grammatically SINGULAR. They always take a singular verb.',
        visual: {
          type: 'chips',
          title: 'Always Singular Pronouns',
          items: [
            { label: '-one', value: 'everyone, someone, anyone, no one, each one' },
            { label: '-body', value: 'everybody, somebody, anybody, nobody' },
            { label: '-thing', value: 'everything, something, anything, nothing' },
            { label: 'Singles', value: 'each, every, either, neither' }
          ]
        }
      },
      {
        title: 'Trap: "Each of the..."',
        text: 'Even when followed by "of the [plural noun]", "EACH" remains the subject and demands a singular verb: "Each of the cars IS inspected".',
        visual: {
          type: 'comparison',
          title: 'Each of the Plurals Trap',
          leftSide: {
            label: 'Exam Error',
            text: 'Each of the participants were awarded.',
            tag: 'Wrong plural verb'
          },
          rightSide: {
            label: 'Correct Standard',
            text: 'Each of the participants WAS awarded.',
            tag: 'Singular verb required'
          }
        }
      },
      {
        title: 'Everyone Feels Plural, But Isn\'t',
        text: 'Conceptually "everyone" refers to all people, but grammatically it considers them one individual at a time: "Everyone HAS a dream", not "have".',
        visual: {
          type: 'chips',
          title: 'Mental Check',
          items: [
            { label: 'Think:', value: '"Every single person" = 1 person at a time' },
            { label: 'Use:', value: 'Singular verb: is, has, was, does, works' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-i-p1',
        type: 'multiple_choice',
        prompt: 'Everybody in the lecture hall _____ listening attentively to the speaker.',
        options: ['was', 'were', 'are', 'have been'],
        correctAnswer: 0,
        explanation: '"Everybody" is grammatically singular and requires "was".'
      },
      {
        id: 'sva-i-p2',
        type: 'fill_gap',
        prompt: 'Each of the submitted essays _____ evaluated by two independent examiners.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"Each" is the singular subject, demanding the singular verb "is".'
      },
      {
        id: 'sva-i-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error with the indefinite pronoun:',
        words: ['Neither', 'of', 'the', 'two', 'options', 'seem', 'viable.'],
        wrongWordIndex: 5,
        correction: 'seems',
        explanation: '"Neither" standing alone as subject is singular and takes "seems".'
      },
      {
        id: 'sva-i-p4',
        type: 'match_pairs',
        prompt: 'Match pronoun to its mandatory verb form:',
        pairs: [
          { left: 'Everyone', right: 'knows the schedule' },
          { left: 'Nobody', right: 'wants to leave early' },
          { left: 'Each of the athletes', right: 'trains daily' },
          { left: 'Nothing', right: 'was left behind' }
        ],
        explanation: 'All indefinite pronouns ending in -one, -body, -thing take singular verbs.'
      }
    ],
    retryPractice: [
      {
        id: 'sva-i-r1',
        type: 'multiple_choice',
        prompt: 'Someone in the office _____ left their umbrella behind.',
        options: ['has', 'have', 'are having', 'having'],
        correctAnswer: 0,
        explanation: '"Someone" is singular and takes "has".'
      },
      {
        id: 'sva-i-r2',
        type: 'fill_gap',
        prompt: 'Every student and teacher in the school _____ an ID badge.',
        options: ['wears', 'wear', 'are wearing', 'have worn'],
        correctAnswer: 0,
        explanation: 'When subjects are preceded by "every", the verb remains singular ("wears").'
      },
      {
        id: 'sva-i-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          'Each of the laptops has a warranty.',
          'Each of the laptops have a warranty.',
          'Every of the laptops have a warranty.',
          'Each laptops have a warranty.'
        ],
        correctAnswer: 0,
        explanation: '"Each of the laptops" has "Each" as singular head noun -> "has".'
      },
      {
        id: 'sva-i-r4',
        type: 'bucket_sort',
        prompt: 'Sort pronouns by agreement rules:',
        buckets: ['Always Singular Verb', 'Always Plural Verb'],
        itemsToSort: [
          { text: 'Everyone / Everybody', correctBucketIndex: 0 },
          { text: 'Both / Few / Several', correctBucketIndex: 1 },
          { text: 'Nobody / No one', correctBucketIndex: 0 },
          { text: 'Many / Others', correctBucketIndex: 1 }
        ],
        explanation: 'Indefinite pronouns with -one/-body are singular; both, few, several, many are plural.'
      }
    ],
    rememberCard: {
      title: 'Remember: Indefinite Pronouns',
      bullets: [
        'Everyone, somebody, nobody, each, neither are ALWAYS singular.',
        '"Each of the + plural noun" takes a SINGULAR verb (Each is).',
        '"Both, few, several, many" are the only plural indefinite pronouns.'
      ]
    }
  },
  {
    id: 'sva-correlatives',
    topicId: 'agreement',
    title: 'Either...Or & Proximity Rule',
    subtitle: 'Verb agrees with the CLOSER subject',
    order: 3,
    explanationSteps: [
      {
        title: 'The Proximity Rule',
        text: 'When subjects are connected by "either...or", "neither...nor", or "not only...but also", the verb must agree with the subject CLOSER to it.',
        visual: {
          type: 'formula',
          title: 'The Neighbor Rule',
          formulaTokens: [
            { text: 'Neither [Subject 1]', highlight: false },
            { text: 'nor', highlight: false },
            { text: '[Subject 2 (CLOSER)]', highlight: true, color: 'present' },
            { text: 'VERB (Agrees with Subject 2)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'See the Flip in Action',
        text: 'Observe how switching the order of the two subjects immediately flips the verb between singular and plural.',
        visual: {
          type: 'comparison',
          title: 'Proximity Shift',
          leftSide: {
            label: 'Closer is Plural',
            text: 'Neither the manager nor the assistants were present.',
            tag: 'Assistants were (Plural)'
          },
          rightSide: {
            label: 'Closer is Singular',
            text: 'Neither the assistants nor the manager was present.',
            tag: 'Manager was (Singular)'
          }
        }
      },
      {
        title: 'Not Only... But Also',
        text: 'The exact same proximity rule applies to "not only... but also": "Not only the students but also their instructor WAS delighted."',
        visual: {
          type: 'chips',
          title: 'Correlative Connectors',
          items: [
            { label: 'Either... or', value: 'Verb agrees with the noun after "or"' },
            { label: 'Neither... nor', value: 'Verb agrees with the noun after "nor"' },
            { label: 'Not only... but also', value: 'Verb agrees with the noun after "but also"' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-cor-p1',
        type: 'multiple_choice',
        prompt: 'Neither the director nor his assistants _____ available for comment today.',
        options: ['are', 'is', 'was', 'has been'],
        correctAnswer: 0,
        explanation: 'The closer subject to the verb is "assistants" (plural), so the verb must be "are".'
      },
      {
        id: 'sva-cor-p2',
        type: 'fill_gap',
        prompt: 'Either the faulty wiring or the power outlet _____ the fire.',
        options: ['caused', 'were causing', 'cause', 'are causing'],
        correctAnswer: 0,
        explanation: 'Singular closer noun "power outlet" agrees with the verb.'
      },
      {
        id: 'sva-cor-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error based on proximity:',
        words: ['Neither', 'the', 'passengers', 'nor', 'the', 'driver', 'were', 'injured.'],
        wrongWordIndex: 6,
        correction: 'was',
        explanation: 'The closer subject is singular "driver", so the verb must be "was", not "were".'
      },
      {
        id: 'sva-cor-p4',
        type: 'sentence_builder',
        prompt: 'Assemble the correlative sentence:',
        jumbledWords: ['present.', 'Neither', 'nor', 'was', 'the', 'teacher', 'the', 'student'],
        correctSentenceWords: ['Neither', 'the', 'teacher', 'nor', 'the', 'student', 'was', 'present.'],
        explanation: 'Closer subject "student" is singular and takes "was".'
      }
    ],
    retryPractice: [
      {
        id: 'sva-cor-r1',
        type: 'multiple_choice',
        prompt: 'Not only the coach but also the players _____ determined to win the tournament.',
        options: ['are', 'is', 'was', 'has been'],
        correctAnswer: 0,
        explanation: 'The subject after "but also" is "players" (plural), requiring "are".'
      },
      {
        id: 'sva-cor-r2',
        type: 'fill_gap',
        prompt: 'Either the captain or the co-pilot _____ the pre-flight checks.',
        options: ['conducts', 'conduct', 'are conducting', 'have conducted'],
        correctAnswer: 0,
        explanation: 'The closer noun "co-pilot" is singular, requiring "conducts".'
      },
      {
        id: 'sva-cor-r3',
        type: 'match_pairs',
        prompt: 'Match subject pairs to correct verb:',
        pairs: [
          { left: 'Neither the cat nor the dogs', right: 'are outside' },
          { left: 'Neither the dogs nor the cat', right: 'is outside' },
          { left: 'Either Mary or her sisters', right: 'have the key' },
          { left: 'Either her sisters or Mary', right: 'has the key' }
        ],
        explanation: 'The verb always matches the second noun closer to the verb.'
      },
      {
        id: 'sva-cor-r4',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly follows the proximity rule?',
        options: [
          'Neither the pillows nor the blanket is on the bed.',
          'Neither the pillows nor the blanket are on the bed.',
          'Neither the blanket nor the pillows is on the bed.',
          'Neither of pillows or blanket are on the bed.'
        ],
        correctAnswer: 0,
        explanation: 'The closer noun is singular "blanket", so the verb must be "is".'
      }
    ],
    rememberCard: {
      title: 'Remember: Proximity Rule',
      bullets: [
        'With either...or, neither...nor, not only...but also, look at the CLOSER noun.',
        'If the closer noun is singular, use a singular verb.',
        'If the closer noun is plural, use a plural verb.'
      ]
    }
  },
  {
    id: 'sva-and-vs-with',
    topicId: 'agreement',
    title: 'Compound Subjects: "And" vs "As well as"',
    subtitle: 'When 1 + 1 = 2, and when 1 + 1 stays 1',
    order: 4,
    explanationSteps: [
      {
        title: 'And Creates Plural',
        text: 'Two singular subjects joined by "AND" make a compound plural subject and take a plural verb: "A book and a pen ARE on the desk."',
        visual: {
          type: 'formula',
          title: 'The Compound Formula',
          formulaTokens: [
            { text: 'Subject 1', highlight: true, color: 'present' },
            { text: '+ AND +', highlight: false },
            { text: 'Subject 2', highlight: true, color: 'present' },
            { text: '= PLURAL VERB (ARE / HAVE)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Exception: Single Concept Pairs',
        text: 'When two nouns joined by "and" refer to a single dish, unit, or concept, they take a SINGULAR verb.',
        visual: {
          type: 'chips',
          title: 'Single Concept Idioms',
          items: [
            { label: 'Food unit', value: 'Bread and butter IS a classic breakfast.' },
            { label: 'Food unit', value: 'Fish and chips IS popular in Britain.' },
            { label: 'Single item', value: 'Slow and steady WINS the race.' }
          ]
        }
      },
      {
        title: 'And vs As Well As',
        text: 'Remember: "as well as", "together with", and "in addition to" are prepositional expressions, NOT "and". They do NOT add a second subject!',
        visual: {
          type: 'comparison',
          title: 'Crucial Exam Difference',
          leftSide: {
            label: 'Using AND (Plural)',
            text: 'The professor and his student ARE researching.',
            tag: '2 people = plural verb'
          },
          rightSide: {
            label: 'Using AS WELL AS (Singular)',
            text: 'The professor, as well as his student, IS researching.',
            tag: '1 subject = singular verb'
          }
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-and-p1',
        type: 'multiple_choice',
        prompt: 'The architect and the engineer _____ currently reviewing the building plans.',
        options: ['are', 'is', 'was', 'has been'],
        correctAnswer: 0,
        explanation: 'Two distinct subjects joined by "and" create a plural compound subject requiring "are".'
      },
      {
        id: 'sva-and-p2',
        type: 'fill_gap',
        prompt: 'Bacon and eggs _____ his favorite Sunday morning breakfast.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"Bacon and eggs" represents a single combined dish and takes the singular verb "is".'
      },
      {
        id: 'sva-and-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error with "along with":',
        words: ['The', 'minister,', 'along', 'with', 'his', 'aides,', 'have', 'resigned.'],
        wrongWordIndex: 6,
        correction: 'has',
        explanation: '"Along with his aides" does not make the subject plural. Singular "minister" takes "has resigned".'
      },
      {
        id: 'sva-and-p4',
        type: 'bucket_sort',
        prompt: 'Sort subjects into Singular vs Plural Verb requirement:',
        buckets: ['Singular Verb', 'Plural Verb'],
        itemsToSort: [
          { text: 'Bread and butter (single food)', correctBucketIndex: 0 },
          { text: 'The singer and the pianist', correctBucketIndex: 1 },
          { text: 'The manager, as well as the staff', correctBucketIndex: 0 },
          { text: 'The manager and the staff', correctBucketIndex: 1 }
        ],
        explanation: '"And" creates plurals; single-concept meals and "as well as" phrases stay singular.'
      }
    ],
    retryPractice: [
      {
        id: 'sva-and-r1',
        type: 'multiple_choice',
        prompt: 'Slow and steady _____ the race.',
        options: ['wins', 'win', 'are winning', 'have won'],
        correctAnswer: 0,
        explanation: '"Slow and steady" is treated as a single unified concept and takes "wins".'
      },
      {
        id: 'sva-and-r2',
        type: 'fill_gap',
        prompt: 'The author, together with the illustrator, _____ signing books.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"Together with" is parenthetical. The subject is singular "author", taking "is".'
      },
      {
        id: 'sva-and-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses a plural verb?',
        options: [
          'The car and the bicycle are parked outside.',
          'The car, as well as the bicycle, are parked outside.',
          'The car, together with the bicycle, are parked outside.',
          'The car along with the bicycle are parked outside.'
        ],
        correctAnswer: 0,
        explanation: 'Only the conjunction "and" links two subjects into a grammatical plural.'
      },
      {
        id: 'sva-and-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with as well as:',
        jumbledWords: ['well', 'ready.', 'as', 'he,', 'She,', 'as', 'is'],
        correctSentenceWords: ['She,', 'as', 'well', 'as', 'he,', 'is', 'ready.'],
        explanation: 'The true subject is singular "She", taking "is".'
      }
    ],
    rememberCard: {
      title: 'Remember: Compound Subjects',
      bullets: [
        'Subjects joined by AND take a plural verb (X and Y are).',
        'Single concept pairs (bacon and eggs, bread and butter) take a singular verb.',
        '"As well as" and "along with" do NOT make a subject plural.'
      ]
    }
  },
  {
    id: 'sva-collective-nouns',
    topicId: 'agreement',
    title: 'Collective Nouns & Inverted Sentences',
    subtitle: 'Team, committee, and "There is / There are"',
    order: 5,
    explanationSteps: [
      {
        title: 'Collective Nouns as One Unit',
        text: 'Collective nouns (team, committee, family, audience, government, jury) refer to a group acting as a single unit. In standard entrance exam English, they take a SINGULAR verb.',
        visual: {
          type: 'chips',
          title: 'Common Collective Nouns',
          items: [
            { label: 'Singular Unit', value: 'The committee meets every Tuesday.' },
            { label: 'Singular Unit', value: 'The jury has reached its verdict.' },
            { label: 'Singular Unit', value: 'The government is passing the bill.' }
          ]
        }
      },
      {
        title: 'There Is vs There Are',
        text: 'In sentences starting with "There", "There" is never the subject! Look AFTER the verb to find the real subject that dictates is or are.',
        visual: {
          type: 'comparison',
          title: 'Find the Subject After Verb',
          leftSide: {
            label: 'Singular Subject Follows',
            text: 'There is a severe flaw in the argument.',
            tag: 'Subject: "a flaw" (Singular)'
          },
          rightSide: {
            label: 'Plural Subject Follows',
            text: 'There are several flaws in the argument.',
            tag: 'Subject: "several flaws" (Plural)'
          }
        }
      },
      {
        title: 'Compound Subject After "There"',
        text: 'If a list of items follows "there", standard formal grammar agrees with the FIRST item: "There is an apple and two pears on the plate."',
        visual: {
          type: 'chips',
          title: 'List Agreement',
          items: [
            { label: 'First item singular:', value: 'There is a sofa and two chairs.' },
            { label: 'First item plural:', value: 'There are two chairs and a sofa.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-col-p1',
        type: 'multiple_choice',
        prompt: 'The research committee _____ submitted its annual report to the board.',
        options: ['has', 'have', 'are having', 'were having'],
        correctAnswer: 0,
        explanation: '"The committee" acts as a single entity (noted by the pronoun "its") and takes "has".'
      },
      {
        id: 'sva-col-p2',
        type: 'fill_gap',
        prompt: 'There _____ three urgent messages waiting in your inbox.',
        options: ['are', 'is', 'was', 'has been'],
        correctAnswer: 0,
        explanation: 'The real subject follows the verb: "three urgent messages" is plural, requiring "are".'
      },
      {
        id: 'sva-col-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error after "there":',
        words: ['There', 'is', 'several', 'reasons', 'for', 'the', 'project\'s', 'delay.'],
        wrongWordIndex: 1,
        correction: 'are',
        explanation: 'The subject is plural "several reasons", so the verb must be "are", not "is".'
      },
      {
        id: 'sva-col-p4',
        type: 'match_pairs',
        prompt: 'Match the sentence opener to the correct continuation:',
        pairs: [
          { left: 'There is', right: 'a discrepancy in the accounts' },
          { left: 'There are', right: 'several discrepancies in the accounts' },
          { left: 'The jury', right: 'has delivered its verdict' },
          { left: 'The audience', right: 'was applauding enthusiastically' }
        ],
        explanation: '"There is" pairs with singular; "There are" pairs with plural; collective units take singular verbs.'
      }
    ],
    retryPractice: [
      {
        id: 'sva-col-r1',
        type: 'multiple_choice',
        prompt: 'The school orchestra _____ practicing in the auditorium every afternoon.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"The orchestra" acts as one unified body, taking the singular verb "is".'
      },
      {
        id: 'sva-col-r2',
        type: 'fill_gap',
        prompt: 'There _____ a book and several notebooks on the desk.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: 'With "there", the verb agrees with the first item in the list: "a book" (singular) -> "is".'
      },
      {
        id: 'sva-col-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence has correct agreement with collective nouns?',
        options: [
          'The board of directors meets once every quarter.',
          'The board of directors meet once every quarter.',
          'There is many directors on the board.',
          'The board are meeting every quarter.'
        ],
        correctAnswer: 0,
        explanation: '"The board" is a singular collective unit taking "meets".'
      },
      {
        id: 'sva-col-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence starting with There:',
        jumbledWords: ['on', 'solutions', 'are', 'There', 'the', 'table.', 'several'],
        correctSentenceWords: ['There', 'are', 'several', 'solutions', 'on', 'the', 'table.'],
        explanation: 'Plural subject "several solutions" takes "There are".'
      }
    ],
    rememberCard: {
      title: 'Remember: Collectives & There',
      bullets: [
        'Collective nouns (team, committee, family) take a singular verb as one unit.',
        'In "There is / There are", the true subject is AFTER the verb.',
        'There is + singular noun; There are + plural noun.'
      ]
    }
  },
  {
    id: 'sva-deceptive-nouns',
    topicId: 'agreement',
    title: 'Deceptive Nouns: Plural Look, Singular Soul',
    subtitle: 'News, physics, scissors, and uncountable nouns',
    order: 6,
    explanationSteps: [
      {
        title: 'Nouns Ending in -S That Are Singular',
        text: 'Academic subjects, diseases, and the word "news" end in -s, but they are grammatically SINGULAR. They take a singular verb.',
        visual: {
          type: 'chips',
          title: 'Singular Nouns with -S',
          items: [
            { label: 'Subjects', value: 'Mathematics, Physics, Economics, Politics' },
            { label: 'Diseases', value: 'Measles, Mumps, Rabies' },
            { label: 'Communication', value: 'The news is encouraging.' }
          ]
        }
      },
      {
        title: 'Nouns That Are Always Plural',
        text: 'Tools and clothes consisting of two parts are ALWAYS plural: scissors, trousers, glasses, tweezers. However, "a pair of scissors" is SINGULAR!',
        visual: {
          type: 'comparison',
          title: 'Scissors vs A Pair Of',
          leftSide: {
            label: 'Plural Form',
            text: 'The scissors are in the drawer.',
            tag: 'Plural verb "are"'
          },
          rightSide: {
            label: 'With "A Pair Of"',
            text: 'A pair of scissors is on the desk.',
            tag: 'Head noun: "pair" (is)'
          }
        }
      },
      {
        title: 'Uncountable Traps',
        text: 'Information, furniture, luggage, advice, and baggage never take a plural -s and ALWAYS take a singular verb.',
        visual: {
          type: 'chips',
          title: 'Always Singular Uncountables',
          items: [
            { label: 'Information', value: 'The information is reliable (NOT informations are)' },
            { label: 'Furniture', value: 'The furniture was delivered on time.' },
            { label: 'Advice', value: 'Her advice has been very helpful.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-dec-p1',
        type: 'multiple_choice',
        prompt: 'The news regarding the peace negotiations _____ surprisingly positive.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"News" is always singular and requires the singular verb "is".'
      },
      {
        id: 'sva-dec-p2',
        type: 'fill_gap',
        prompt: 'A new pair of surgical scissors _____ ordered for the clinic.',
        options: ['was', 'were', 'are', 'have been'],
        correctAnswer: 0,
        explanation: 'When preceded by "A pair of", the head noun is singular "pair", requiring "was".'
      },
      {
        id: 'sva-dec-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error with the academic subject:',
        words: ['Economics', 'are', 'considered', 'a', 'challenging', 'university', 'major.'],
        wrongWordIndex: 1,
        correction: 'is',
        explanation: 'Academic subjects ending in -s (Economics, Physics) are singular and take "is".'
      },
      {
        id: 'sva-dec-p4',
        type: 'bucket_sort',
        prompt: 'Sort nouns by verb agreement:',
        buckets: ['Singular Verb (is / has)', 'Plural Verb (are / have)'],
        itemsToSort: [
          { text: 'Mathematics / Physics', correctBucketIndex: 0 },
          { text: 'Scissors / Trousers (alone)', correctBucketIndex: 1 },
          { text: 'Information / Furniture', correctBucketIndex: 0 },
          { text: 'Eyeglasses / Pliers (alone)', correctBucketIndex: 1 }
        ],
        explanation: 'Subjects/uncountables take singular verbs; two-part tools/garments take plural verbs.'
      }
    ],
    retryPractice: [
      {
        id: 'sva-dec-r1',
        type: 'multiple_choice',
        prompt: 'All the furniture in the conference room _____ modern and ergonomic.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"Furniture" is uncountable and strictly singular, taking "is".'
      },
      {
        id: 'sva-dec-r2',
        type: 'fill_gap',
        prompt: 'The scissors on the teacher\'s table _____ very sharp.',
        options: ['are', 'is', 'was', 'has been'],
        correctAnswer: 0,
        explanation: 'Without "a pair of", "scissors" takes the plural verb "are".'
      },
      {
        id: 'sva-dec-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence has NO agreement error?',
        options: [
          'The advice given by our consultants was invaluable.',
          'The advice given by our consultants were invaluable.',
          'The advices given by our consultants was invaluable.',
          'The advices given by our consultants were invaluable.'
        ],
        correctAnswer: 0,
        explanation: '"Advice" is uncountable (never "advices") and takes the singular verb "was".'
      },
      {
        id: 'sva-dec-r4',
        type: 'match_pairs',
        prompt: 'Match noun to correct verb phrase:',
        pairs: [
          { left: 'The news', right: 'was broadcast at 6 PM' },
          { left: 'The pliers', right: 'were left in the toolbox' },
          { left: 'A pair of trousers', right: 'was hung in the closet' },
          { left: 'Physics', right: 'is his favorite subject' }
        ],
        explanation: 'Two-part objects are plural; "a pair of" and academic subjects are singular.'
      }
    ],
    rememberCard: {
      title: 'Remember: Deceptive Nouns',
      bullets: [
        'News, physics, mathematics, economics are SINGULAR (take is/has).',
        'Scissors, glasses, trousers are PLURAL (unless with "a pair of").',
        'Information, furniture, luggage, advice are UNCOUNTABLE and singular.'
      ]
    }
  },
  {
    id: 'sva-quantifiers',
    topicId: 'agreement',
    title: 'Quantifiers: "A Number of" vs "The Number of"',
    subtitle: 'Fractions, percentages, and amount markers',
    order: 7,
    explanationSteps: [
      {
        title: 'The "Number of" Golden Rule',
        text: '"A number of" means "many" and takes a PLURAL verb. "The number of" refers to a specific total statistic and takes a SINGULAR verb.',
        visual: {
          type: 'comparison',
          title: 'The Great Exam Battle',
          leftSide: {
            label: 'A Number of (Many = Plural)',
            text: 'A number of students ARE waiting.',
            tag: 'Plural verb'
          },
          rightSide: {
            label: 'The Number of (Statistic = Singular)',
            text: 'The number of students IS increasing.',
            tag: 'Singular verb'
          }
        }
      },
      {
        title: 'Fractions and Percentages',
        text: 'With fractions, percentages, "some of", and "half of", look at the noun after "of"! If that noun is singular/uncountable, use singular. If plural, use plural.',
        visual: {
          type: 'table',
          title: 'Look After "Of"',
          headers: ['Expression', 'Noun After "Of"', 'Verb Agreement'],
          rows: [
            ['50% of the budget', 'budget (singular)', 'is spent'],
            ['50% of the employees', 'employees (plural)', 'are remote'],
            ['Half of the milk', 'milk (uncountable)', 'has spoiled'],
            ['Half of the apples', 'apples (plural)', 'have spoiled']
          ]
        }
      },
      {
        title: 'None Of: The Exam Rule',
        text: 'In formal exams, "None of" followed by an uncountable noun takes a singular verb. Followed by a plural noun, formal grammar prefers a singular verb ("None of them was chosen"), though plural is common informally.',
        visual: {
          type: 'chips',
          title: 'None Agreement',
          items: [
            { label: 'Uncountable', value: 'None of the money was stolen.' },
            { label: 'Formal exam rule', value: 'None of the candidates was selected.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-q-p1',
        type: 'multiple_choice',
        prompt: 'A number of international flights _____ delayed due to severe thunderstorms.',
        options: ['were', 'was', 'is', 'has been'],
        correctAnswer: 0,
        explanation: '"A number of" means many and always takes a plural verb ("were").'
      },
      {
        id: 'sva-q-p2',
        type: 'fill_gap',
        prompt: 'The number of applicants for the scholarship _____ risen sharply this year.',
        options: ['has', 'have', 'are', 'were'],
        correctAnswer: 0,
        explanation: '"The number of" denotes the specific total and takes the singular verb "has".'
      },
      {
        id: 'sva-q-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error with percentage:',
        words: ['Sixty', 'percent', 'of', 'the', 'project', 'budget', 'have', 'been', 'used.'],
        wrongWordIndex: 6,
        correction: 'has',
        explanation: 'The noun following "of" is singular ("budget"), so the verb must be "has", not "have".'
      },
      {
        id: 'sva-q-p4',
        type: 'bucket_sort',
        prompt: 'Sort phrases by verb agreement:',
        buckets: ['Takes Singular Verb', 'Takes Plural Verb'],
        itemsToSort: [
          { text: 'The number of participants', correctBucketIndex: 0 },
          { text: 'A number of participants', correctBucketIndex: 1 },
          { text: 'Three-quarters of the cake', correctBucketIndex: 0 },
          { text: 'Three-quarters of the students', correctBucketIndex: 1 }
        ],
        explanation: '"The number" is singular; "A number" is plural; fractions depend on the noun after "of".'
      }
    ],
    retryPractice: [
      {
        id: 'sva-q-r1',
        type: 'multiple_choice',
        prompt: 'The number of homeless families in the city _____ steadily declining.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: '"The number of" is singular and takes "is".'
      },
      {
        id: 'sva-q-r2',
        type: 'fill_gap',
        prompt: 'A number of scientists _____ published papers on this climate phenomenon.',
        options: ['have', 'has', 'is', 'was'],
        correctAnswer: 0,
        explanation: '"A number of" is plural and takes "have".'
      },
      {
        id: 'sva-q-r3',
        type: 'multiple_choice',
        prompt: 'Half of the fresh milk in the bottles _____ gone sour.',
        options: ['has', 'have', 'are', 'were'],
        correctAnswer: 0,
        explanation: 'Milk is uncountable, so "half of the milk" takes the singular verb "has".'
      },
      {
        id: 'sva-q-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with a fraction:',
        jumbledWords: ['were', 'the', 'absent.', 'of', 'Half', 'students'],
        correctSentenceWords: ['Half', 'of', 'the', 'students', 'were', 'absent.'],
        explanation: '"Students" is plural, so "Half of the students" takes "were".'
      }
    ],
    rememberCard: {
      title: 'Remember: Quantifiers',
      bullets: [
        'A number of = PLURAL verb (A number of people are).',
        'The number of = SINGULAR verb (The number of people is).',
        'Fractions and percentages agree with the noun directly after "of".'
      ]
    }
  },
  {
    id: 'sva-traps-relative',
    topicId: 'agreement',
    title: 'Tricks & Traps: "One of the... who"',
    subtitle: 'Relative clauses and units of measurement',
    order: 8,
    explanationSteps: [
      {
        title: 'The "One of the [Plural] Who" Trap',
        text: 'In "He is one of the doctors WHO work here", the relative pronoun "who" refers back to "doctors" (plural). Therefore, the verb is PLURAL.',
        visual: {
          type: 'comparison',
          title: 'Notice the Antecedent',
          leftSide: {
            label: 'One of the [Plural] who',
            text: 'She is one of the athletes who run fast.',
            tag: 'Athletes run (Plural verb)'
          },
          rightSide: {
            label: 'THE ONLY one who',
            text: 'She is the ONLY one of the athletes who runs.',
            tag: '"Only one" = Singular verb'
          }
        }
      },
      {
        title: 'Measurements, Money and Time',
        text: 'Periods of time, sums of money, and physical distances are thought of as a SINGLE unified quantity. They take a SINGULAR verb.',
        visual: {
          type: 'chips',
          title: 'Singular Quantities',
          items: [
            { label: 'Time', value: 'Ten years is a long time to wait.' },
            { label: 'Money', value: 'Five thousand dollars was donated.' },
            { label: 'Distance', value: 'Twenty miles is too far to walk.' }
          ]
        }
      },
      {
        title: 'Book Titles and Brand Names',
        text: 'Even if a book, movie, or company title ends in a plural noun, it is a single work and takes a singular verb: "Gulliver\'s Travels IS a classic novel."',
        visual: {
          type: 'chips',
          title: 'Titles as Units',
          items: [
            { label: 'Book Title', value: 'Great Expectations is written by Dickens.' },
            { label: 'Organization', value: 'The United Nations has issued a statement.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'sva-t-p1',
        type: 'multiple_choice',
        prompt: 'He is one of those dedicated scientists who _____ countless hours in the laboratory.',
        options: ['spend', 'spends', 'is spending', 'has spent'],
        correctAnswer: 0,
        explanation: '"Who" refers to "scientists" (plural), so the verb must be plural ("spend").'
      },
      {
        id: 'sva-t-p2',
        type: 'fill_gap',
        prompt: 'She is the only one of the applicants who _____ all entrance criteria.',
        options: ['meets', 'meet', 'are meeting', 'have met'],
        correctAnswer: 0,
        explanation: 'Because of "the ONLY one", the subject is singular and takes "meets".'
      },
      {
        id: 'sva-t-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error with the sum of money:',
        words: ['Ten', 'thousand', 'dollars', 'were', 'awarded', 'to', 'the', 'winner.'],
        wrongWordIndex: 3,
        correction: 'was',
        explanation: 'A sum of money represents a single total amount and takes the singular verb "was".'
      },
      {
        id: 'sva-t-p4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with measurement:',
        jumbledWords: ['a', 'run.', 'Five', 'is', 'long', 'distance', 'kilometers', 'to'],
        correctSentenceWords: ['Five', 'kilometers', 'is', 'a', 'long', 'distance', 'to', 'run.'],
        explanation: 'A distance of "Five kilometers" acts as a singular unit and takes "is".'
      }
    ],
    retryPractice: [
      {
        id: 'sva-t-r1',
        type: 'multiple_choice',
        prompt: 'Three years _____ too long to wait without any communication.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 0,
        explanation: 'A duration of time ("Three years") is treated as a single period and takes "is".'
      },
      {
        id: 'sva-t-r2',
        type: 'fill_gap',
        prompt: 'This is one of the rare novels that _____ won international acclaim.',
        options: ['have', 'has', 'is', 'was'],
        correctAnswer: 0,
        explanation: '"That" refers to the plural antecedent "novels", requiring "have".'
      },
      {
        id: 'sva-t-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence has correct agreement for titles and measurements?',
        options: [
          'Fifty pounds is quite heavy to carry on your back.',
          'Fifty pounds are quite heavy to carry on your back.',
          'Fifty pounds were quite heavy to carry on your back.',
          'Fifty pound are quite heavy to carry on your back.'
        ],
        correctAnswer: 0,
        explanation: 'Weight is treated as a single unit and takes the singular verb "is".'
      },
      {
        id: 'sva-t-r4',
        type: 'match_pairs',
        prompt: 'Match subject structure to verb:',
        pairs: [
          { left: 'One of the students who', right: 'participate in sports' },
          { left: 'The only one of the students who', right: 'participates in sports' },
          { left: 'Twenty miles', right: 'is a long distance' },
          { left: 'Fifty dollars', right: 'was stolen from the register' }
        ],
        explanation: '"One of the [plural] who" takes plural; "the only one who" and measurements take singular.'
      }
    ],
    rememberCard: {
      title: 'Remember: Advanced Agreement',
      bullets: [
        '"One of the [plural] who" takes a PLURAL verb.',
        '"The ONLY one of the [plural] who" takes a SINGULAR verb.',
        'Sums of money, time, distances, and book titles take SINGULAR verbs.'
      ]
    }
  }
];

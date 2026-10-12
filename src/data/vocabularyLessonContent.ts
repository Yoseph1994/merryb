import { LessonItem } from '../types';

export const VOCABULARY_LESSON_ITEMS: LessonItem[] = [
  {
    id: 'voc-word-roots',
    topicId: 'vocabulary',
    title: 'Word Families, Prefixes & Roots',
    subtitle: 'Unlock hundreds of words from single word roots',
    order: 1,
    explanationSteps: [
      {
        title: 'The Anatomy of an English Word',
        text: 'Most academic words have three parts: a prefix (changes direction or meaning), a root (holds the core definition), and a suffix (determines the part of speech).',
        visual: {
          type: 'formula',
          title: 'Word Anatomy',
          formulaTokens: [
            { text: 'PREFIX (re-, un-, dis-)', highlight: true, color: 'past' },
            { text: '+ ROOT (struct, dict, vid)', highlight: true, color: 'present' },
            { text: '+ SUFFIX (-ion, -able, -ly)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Roots You Must Know',
        text: 'Learn high-frequency Latin and Greek roots: "bene" means good (benefit, benevolent), "mal" means bad (malfunction, malicious), "chron" means time (chronic, chronological).',
        visual: {
          type: 'chips',
          title: 'High-Yield Roots',
          items: [
            { label: 'bene / bon', value: 'good, well (beneficial, bonus)' },
            { label: 'mal', value: 'bad, evil (malfunction, malpractice)' },
            { label: 'dict', value: 'to speak, say (predict, contradict)' },
            { label: 'struct', value: 'to build (construct, destructive)' }
          ]
        }
      },
      {
        title: 'Suffixes Change Word Class',
        text: 'Changing the ending shifts noun to verb to adjective: "create" (verb) -> "creation" (noun) -> "creative" (adjective) -> "creatively" (adverb).',
        visual: {
          type: 'table',
          title: 'Suffix Parts of Speech',
          headers: ['Suffix', 'Part of Speech', 'Sample Words'],
          rows: [
            ['-tion, -ment, -ity', 'Noun', 'pollution, government, clarity'],
            ['-ify, -ize, -ate', 'Verb', 'clarify, prioritize, motivate'],
            ['-able, -ous, -ive', 'Adjective', 'dependable, dangerous, effective'],
            ['-ly', 'Adverb', 'accurately, decisively, remarkably']
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-wr-p1',
        type: 'multiple_choice',
        prompt: 'The root "dict" means "to speak". What does the word "contradict" mean?',
        options: [
          'To speak against or state the opposite',
          'To speak loudly in public',
          'To repeat words silently',
          'To translate into ancient Greek'
        ],
        correctAnswer: 0,
        explanation: 'The prefix "contra" (against) + "dict" (speak) means to speak against or deny.'
      },
      {
        id: 'voc-wr-p2',
        type: 'fill_gap',
        prompt: 'Adding the suffix "-ify" transforms the adjective "clear" into the verb _____ .',
        options: ['clarify', 'clarity', 'clearly', 'clarification'],
        correctAnswer: 0,
        explanation: '"Clarify" is the verb form meaning to make clear.'
      },
      {
        id: 'voc-wr-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect word form in this sentence:',
        words: ['The', 'scientist', 'explained', 'the', 'theory', 'with', 'great', 'clearly.'],
        wrongWordIndex: 7,
        correction: 'clarity',
        explanation: 'After the preposition "with great", use the noun "clarity", not the adverb "clearly".'
      },
      {
        id: 'voc-wr-p4',
        type: 'match_pairs',
        prompt: 'Match root to its core meaning:',
        pairs: [
          { left: 'bene / bon', right: 'good or well' },
          { left: 'chron', right: 'time' },
          { left: 'struct', right: 'to build' },
          { left: 'mal', right: 'bad or evil' }
        ],
        explanation: 'Recognizing root families unlocks thousands of unknown exam words instantly.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-wr-r1',
        type: 'multiple_choice',
        prompt: 'The prefix "mal-" means "bad". Which word describes a machine that operates incorrectly?',
        options: ['Malfunction', 'Benefactor', 'Chronology', 'Contradiction'],
        correctAnswer: 0,
        explanation: '"Malfunction" means to fail to function properly.'
      },
      {
        id: 'voc-wr-r2',
        type: 'fill_gap',
        prompt: 'Events arranged in order of time are listed in _____ order.',
        options: ['chronological', 'beneficial', 'constructive', 'predictable'],
        correctAnswer: 0,
        explanation: '"Chronological" comes from the root "chron" meaning time.'
      },
      {
        id: 'voc-wr-r3',
        type: 'bucket_sort',
        prompt: 'Sort words by part of speech using their suffix clues:',
        buckets: ['Nouns (-tion / -ity / -ment)', 'Adjectives (-ive / -ous / -able)'],
        itemsToSort: [
          { text: 'Innovation / Prosperity', correctBucketIndex: 0 },
          { text: 'Effective / Hazardous', correctBucketIndex: 1 },
          { text: 'Development / Clarity', correctBucketIndex: 0 },
          { text: 'Remarkable / Decisive', correctBucketIndex: 1 }
        ],
        explanation: '-tion and -ment create nouns; -ive and -able create adjectives.'
      },
      {
        id: 'voc-wr-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence using the adjective form:',
        jumbledWords: ['a', 'presented', 'flexible', 'approach.', 'She'],
        correctSentenceWords: ['She', 'presented', 'a', 'flexible', 'approach.'],
        explanation: 'The adjective "flexible" describes the noun "approach".'
      }
    ],
    rememberCard: {
      title: 'Remember: Word Roots',
      bullets: [
        'Prefixes change direction (contra = against, bene = good, mal = bad).',
        'Suffixes determine parts of speech (-tion = noun, -ify = verb, -able = adj).',
        'One root unlocks an entire family of 5 to 10 vocabulary words.'
      ]
    }
  },
  {
    id: 'voc-context-clues',
    topicId: 'vocabulary',
    title: 'Context Clues: Deciphering Unknown Words',
    subtitle: 'Definition, contrast, example, and inference clues',
    order: 2,
    explanationSteps: [
      {
        title: 'Definition & Restatement Clues',
        text: 'Authors often define difficult words right in the sentence using commas, dashes, or words like "that is" or "which means".',
        visual: {
          type: 'comparison',
          title: 'Direct Restatement',
          leftSide: {
            label: 'Sentence with Clue',
            text: 'The animal is nocturnal—active only during the night.',
            tag: 'Dash defines the word'
          },
          rightSide: {
            label: 'Extracted Meaning',
            text: 'Nocturnal = active at night',
            tag: 'Immediate definition'
          }
        }
      },
      {
        title: 'Contrast Clues (The "Unlike" Trick)',
        text: 'Words like "unlike", "whereas", "although", and "in contrast" tell you that the unknown word means the EXACT OPPOSITE of the familiar word.',
        visual: {
          type: 'formula',
          title: 'The Contrast Equation',
          formulaTokens: [
            { text: 'Unlike his talkative brother,', highlight: false },
            { text: 'Liam was taciturn.', highlight: true, color: 'future' },
            { text: '(Opposite of talkative = quiet/reserved)', highlight: true, color: 'present' }
          ]
        }
      },
      {
        title: 'Example Clues',
        text: 'Phrases like "such as", "for instance", and "including" list concrete examples that reveal the general category of the unknown word.',
        visual: {
          type: 'chips',
          title: 'Example Markers',
          items: [
            { label: 'Example:', value: 'Piscivorous animals, such as otters, pelicans, and seals...' },
            { label: 'Deduction:', value: 'These animals all eat fish -> piscivorous means fish-eating.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-cc-p1',
        type: 'multiple_choice',
        prompt: 'Sentence: "Unlike her exuberant and outgoing sister, Elena was remarkably reserved." What does "exuberant" mean?',
        options: ['Full of cheerful, high energy', 'Silent and depressed', 'Extremely wealthy', 'Physically frail'],
        correctAnswer: 0,
        explanation: 'The contrast word "Unlike" shows that "exuberant" is the opposite of "reserved" (quiet).'
      },
      {
        id: 'voc-cc-p2',
        type: 'fill_gap',
        prompt: 'The patient suffered from acute pain—pain that was sudden, severe, and sharp. The dashes provide a _____ clue.',
        options: ['definition', 'conjunction', 'punctuation', 'negative'],
        correctAnswer: 0,
        explanation: 'Dashes and commas that state the meaning right away provide a definition/restatement clue.'
      },
      {
        id: 'voc-cc-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the signal word indicating that the two traits are opposites:',
        words: ['Although', 'Mark', 'was', 'thrifty,', 'his', 'brother', 'spent', 'recklessly.'],
        wrongWordIndex: 0,
        correction: 'Although (signal)',
        explanation: '"Although" signals a contrast clue that reveals "thrifty" means careful with money (opposite of reckless).'
      },
      {
        id: 'voc-cc-p4',
        type: 'match_pairs',
        prompt: 'Match clue type to its identifying marker:',
        pairs: [
          { left: 'Contrast Clue', right: 'unlike, however, on the other hand' },
          { left: 'Example Clue', right: 'such as, for instance, including' },
          { left: 'Definition Clue', right: 'that is, in other words, dashes (—)' },
          { left: 'Cause Clue', right: 'because, since, as a result of' }
        ],
        explanation: 'Identifying the signal words directs you to the exact method for deducing the definition.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-cc-r1',
        type: 'multiple_choice',
        prompt: 'Read: "Arboreal creatures, such as monkeys, squirrels, and tree frogs, spend most of their lives in branches." What does "arboreal" mean?',
        options: ['Living in trees', 'Living underwater', 'Flying in clouds', 'Active underground'],
        correctAnswer: 0,
        explanation: 'The examples (monkeys, squirrels, tree frogs in branches) provide an example clue: living in trees.'
      },
      {
        id: 'voc-cc-r2',
        type: 'fill_gap',
        prompt: 'When a sentence uses "whereas" or "in contrast", the unknown word is the _____ of the known word.',
        options: ['opposite', 'synonym', 'spelling', 'pronunciation'],
        correctAnswer: 0,
        explanation: 'Contrast linkers reveal an antonym or opposite meaning.'
      },
      {
        id: 'voc-cc-r3',
        type: 'bucket_sort',
        prompt: 'Sort signal words by clue type:',
        buckets: ['Contrast Clues (Opposite)', 'Example Clues (Category)'],
        itemsToSort: [
          { text: 'Unlike / In contrast to', correctBucketIndex: 0 },
          { text: 'Such as / For instance', correctBucketIndex: 1 },
          { text: 'Whereas / On the contrary', correctBucketIndex: 0 },
          { text: 'For example / Including', correctBucketIndex: 1 }
        ],
        explanation: 'Contrast markers provide opposites; example markers supply specific category members.'
      },
      {
        id: 'voc-cc-r4',
        type: 'multiple_choice',
        prompt: 'Sentence: "The arid climate caused crops to wither from lack of rain." What does "arid" mean?',
        options: ['Extremely dry', 'Very cold', 'Lush and humid', 'Crowded'],
        correctAnswer: 0,
        explanation: '"Lack of rain" and "wither" provide inference clues establishing that "arid" means dry.'
      }
    ],
    rememberCard: {
      title: 'Remember: Context Clues',
      bullets: [
        'Definition clues use dashes, commas, or "that is" to state meaning.',
        'Contrast clues (unlike, whereas) mean the OPPOSITE of the known word.',
        'Example clues (such as, including) reveal the broader category.'
      ]
    }
  },
  {
    id: 'voc-collocations',
    topicId: 'vocabulary',
    title: 'Academic Collocations: Natural Partnerships',
    subtitle: 'Make an effort, draw a conclusion, bear in mind',
    order: 3,
    explanationSteps: [
      {
        title: 'What is a Collocation?',
        text: 'A collocation is a pair or group of words that naturally go together in English. Native speakers and examiners expect these exact combinations.',
        visual: {
          type: 'comparison',
          title: 'Natural vs Unnatural Combinations',
          leftSide: {
            label: 'Natural Collocation (Correct)',
            text: 'Make an effort / Heavy rain / Fast food',
            tag: 'Expected in exams'
          },
          rightSide: {
            label: 'Unnatural (Wrong in Exams)',
            text: 'Do an effort / Strong rain / Quick food',
            tag: 'Sounds awkward'
          }
        }
      },
      {
        title: 'Make vs Do Collocations',
        text: '"Do" is for duties, actions, and repetitive tasks (do homework, do research, do business). "Make" is for creating, deciding, or producing a result (make a decision, make a mistake, make progress).',
        visual: {
          type: 'table',
          title: 'Make vs Do Pairs',
          headers: ['Use MAKE with', 'Use DO with'],
          rows: [
            ['make a decision', 'do research'],
            ['make an effort', 'do your best'],
            ['make an appointment', 'do business'],
            ['make progress', 'do homework']
          ]
        }
      },
      {
        title: 'High-Yield Academic Verbs',
        text: 'Examiners frequently test verbs paired with abstract nouns: "draw a conclusion" (not pull), "conduct an experiment" (not make), "pay attention" (not give).',
        visual: {
          type: 'chips',
          title: 'Academic Pairs',
          items: [
            { label: 'Conclusion', value: 'draw a conclusion / reach a conclusion' },
            { label: 'Experiment', value: 'conduct an experiment / carry out research' },
            { label: 'Mind', value: 'bear in mind / keep in mind' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-col-p1',
        type: 'multiple_choice',
        prompt: 'The research scientists need to _____ a series of controlled experiments.',
        options: ['conduct', 'make', 'create', 'build'],
        correctAnswer: 0,
        explanation: 'In academic English, one "conducts" or "carries out" an experiment, not makes.'
      },
      {
        id: 'voc-col-p2',
        type: 'fill_gap',
        prompt: 'Before finalizing the contract, please _____ in mind our budget limitations.',
        options: ['bear', 'carry', 'hold', 'make'],
        correctAnswer: 0,
        explanation: 'The standard collocation is "bear in mind" or "keep in mind" (meaning remember).'
      },
      {
        id: 'voc-col-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the unnatural verb collocation:',
        words: ['Students', 'must', 'do', 'an', 'effort', 'to', 'arrive', 'punctually.'],
        wrongWordIndex: 2,
        correction: 'make',
        explanation: 'The natural collocation is "make an effort", never "do an effort".'
      },
      {
        id: 'voc-col-p4',
        type: 'match_pairs',
        prompt: 'Match verb to its natural partner noun:',
        pairs: [
          { left: 'Draw', right: 'a conclusion' },
          { left: 'Conduct', right: 'an investigation' },
          { left: 'Commit', right: 'a crime' },
          { left: 'Pay', right: 'attention' }
        ],
        explanation: 'These verb-noun pairings are standard English collocations tested on exams.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-col-r1',
        type: 'multiple_choice',
        prompt: 'After reviewing the financial audit, the board _____ a final decision.',
        options: ['made', 'did', 'took', 'drew'],
        correctAnswer: 0,
        explanation: 'The standard collocation is "to make a decision".'
      },
      {
        id: 'voc-col-r2',
        type: 'fill_gap',
        prompt: 'Heavy _____ caused multiple flight delays across the airport network.',
        options: ['rain', 'windy', 'storming', 'clouds'],
        correctAnswer: 0,
        explanation: 'Rain is described as "heavy rain", not "thick" or "strong".'
      },
      {
        id: 'voc-col-r3',
        type: 'bucket_sort',
        prompt: 'Sort nouns into whether they collocate with MAKE or DO:',
        buckets: ['Collocates with MAKE', 'Collocates with DO'],
        itemsToSort: [
          { text: 'A mistake / An excuse', correctBucketIndex: 0 },
          { text: 'Research / Business', correctBucketIndex: 1 },
          { text: 'Progress / An appointment', correctBucketIndex: 0 },
          { text: 'Homework / Your best', correctBucketIndex: 1 }
        ],
        explanation: 'Make is for creating or deciding; Do is for work, duties, and tasks.'
      },
      {
        id: 'voc-col-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the collocation sentence:',
        jumbledWords: ['a', 'drew', 'The', 'conclusion.', 'detective', 'firm'],
        correctSentenceWords: ['The', 'detective', 'drew', 'a', 'firm', 'conclusion.'],
        explanation: '"Draw a conclusion" is the standard academic collocation.'
      }
    ],
    rememberCard: {
      title: 'Remember: Collocations',
      bullets: [
        'Make = decisions, mistakes, effort, progress.',
        'Do = research, homework, business, chores.',
        'Academic pairs: conduct an experiment, draw a conclusion, bear in mind.'
      ]
    }
  },
  {
    id: 'voc-phrasal-verbs',
    topicId: 'vocabulary',
    title: 'Must-Know Academic Phrasal Verbs',
    subtitle: 'Look into, carry out, call off, and bring about',
    order: 4,
    explanationSteps: [
      {
        title: 'Verb + Particle = New Meaning',
        text: 'A phrasal verb combines a base verb with a preposition or adverb (particle). The meaning of the pair is usually completely different from the base verb alone.',
        visual: {
          type: 'formula',
          title: 'Phrasal Verb Anatomy',
          formulaTokens: [
            { text: 'Verb (Look)', highlight: true, color: 'past' },
            { text: '+ Particle (into)', highlight: false },
            { text: '= New Meaning (Investigate)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Top 6 Academic Phrasal Verbs',
        text: 'These six verbs appear in almost every entrance exam reading and comprehension section:',
        visual: {
          type: 'table',
          title: 'Essential Exam Phrasal Verbs',
          headers: ['Phrasal Verb', 'Formal Meaning', 'Sample Sentence'],
          rows: [
            ['look into', 'investigate', 'The police will look into the matter.'],
            ['call off', 'cancel', 'The match was called off due to rain.'],
            ['put off', 'postpone / delay', 'Never put off studying until tomorrow.'],
            ['carry out', 'conduct / execute', 'They carried out the experiment.'],
            ['bring about', 'cause to happen', 'The treaty brought about peace.'],
            ['turn down', 'reject', 'She turned down the job offer.']
          ]
        }
      },
      {
        title: 'Separable vs Inseparable',
        text: 'When a pronoun (it, them) is used with a separable phrasal verb, the pronoun MUST go in the middle: "turn it down" (NOT "turn down it").',
        visual: {
          type: 'chips',
          title: 'Pronoun Placement Rule',
          items: [
            { label: 'Correct', value: 'call it off / put it off / turn it down' },
            { label: 'Exam Trap', value: 'call off it / turn down it (NEVER)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-pv-p1',
        type: 'multiple_choice',
        prompt: 'Due to severe weather conditions, the organizers decided to _____ the outdoor concert.',
        options: ['call off', 'put on', 'bring about', 'look into'],
        correctAnswer: 0,
        explanation: '"Call off" means to cancel an event that was previously scheduled.'
      },
      {
        id: 'voc-pv-p2',
        type: 'fill_gap',
        prompt: 'The investigative committee promised to _____ into the allegations of fraud.',
        options: ['look', 'take', 'make', 'do'],
        correctAnswer: 0,
        explanation: '"Look into" means to investigate thoroughly.'
      },
      {
        id: 'voc-pv-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect pronoun placement:',
        words: ['The', 'radio', 'was', 'too', 'loud,', 'so', 'she', 'turned', 'down', 'it.'],
        wrongWordIndex: 9,
        correction: 'turned it down',
        explanation: 'Pronouns must be placed between the verb and particle: "turned it down".'
      },
      {
        id: 'voc-pv-p4',
        type: 'match_pairs',
        prompt: 'Match phrasal verb to its formal one-word synonym:',
        pairs: [
          { left: 'Carry out', right: 'Execute or conduct' },
          { left: 'Put off', right: 'Postpone or delay' },
          { left: 'Bring about', right: 'Cause or generate' },
          { left: 'Turn down', right: 'Reject or refuse' }
        ],
        explanation: 'Entrance exams often ask you to replace formal words with their phrasal verb equivalents.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-pv-r1',
        type: 'multiple_choice',
        prompt: 'The new environmental legislation is expected to _____ major changes in industrial waste management.',
        options: ['bring about', 'call off', 'look into', 'run into'],
        correctAnswer: 0,
        explanation: '"Bring about" means to cause something to happen.'
      },
      {
        id: 'voc-pv-r2',
        type: 'fill_gap',
        prompt: 'Never _____ off until tomorrow what you can accomplish today.',
        options: ['put', 'take', 'call', 'give'],
        correctAnswer: 0,
        explanation: '"Put off" means to postpone or delay.'
      },
      {
        id: 'voc-pv-r3',
        type: 'bucket_sort',
        prompt: 'Sort phrasal verbs by their meaning:',
        buckets: ['Canceling or Postponing', 'Investigating or Executing'],
        itemsToSort: [
          { text: 'Call off / Put off', correctBucketIndex: 0 },
          { text: 'Look into / Carry out', correctBucketIndex: 1 },
          { text: 'Turn down / Postpone', correctBucketIndex: 0 },
          { text: 'Examine / Conduct', correctBucketIndex: 1 }
        ],
        explanation: 'Call off = cancel, put off = delay; look into = investigate, carry out = conduct.'
      },
      {
        id: 'voc-pv-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the phrasal verb sentence:',
        jumbledWords: ['out', 'carried', 'The', 'survey.', 'team', 'the'],
        correctSentenceWords: ['The', 'team', 'carried', 'out', 'the', 'survey.'],
        explanation: '"Carried out the survey" means executed the survey.'
      }
    ],
    rememberCard: {
      title: 'Remember: Phrasal Verbs',
      bullets: [
        'Look into = investigate; Carry out = execute/conduct.',
        'Call off = cancel; Put off = delay/postpone.',
        'Pronouns go in the middle (turn it down, NOT turn down it).'
      ]
    }
  },
  {
    id: 'voc-confused-words',
    topicId: 'vocabulary',
    title: 'Commonly Confused Word Pairs',
    subtitle: 'Affect vs Effect, Lose vs Loose, Advice vs Advise',
    order: 5,
    explanationSteps: [
      {
        title: 'Affect (Verb) vs Effect (Noun)',
        text: 'AFFECT with an "A" is an Action (verb = to influence). EFFECT with an "E" is the End-result (noun = the outcome).',
        visual: {
          type: 'comparison',
          title: 'The "RAVEN" Memory Trick',
          leftSide: {
            label: 'Affect = Verb',
            text: 'The weather will affect our travel plans.',
            tag: 'Action verb'
          },
          rightSide: {
            label: 'Effect = Noun',
            text: 'The medicine had an immediate effect.',
            tag: 'End-result noun'
          }
        }
      },
      {
        title: 'Lose vs Loose',
        text: 'LOSE (one O) is a verb meaning to misplace or suffer defeat. LOOSE (two Os) is an adjective meaning not tight or unbound (like loose clothing).',
        visual: {
          type: 'chips',
          title: 'Memory Clue',
          items: [
            { label: 'Lose (1 O)', value: 'Did you lose your keys? (Verb)' },
            { label: 'Loose (2 Os)', value: 'The screw on the door is loose. (Adjective)' }
          ]
        }
      },
      {
        title: 'Other Classic Exam Pairs',
        text: 'Advice (noun with -c-) vs Advise (verb with -s-). Principal (school head / primary) vs Principle (moral truth/rule). Compliment (praise) vs Complement (complete).',
        visual: {
          type: 'table',
          title: 'Confused Pairs Guide',
          headers: ['Word', 'Part of Speech', 'Meaning'],
          rows: [
            ['Advice / Advise', 'Noun / Verb', 'Guidance / To offer guidance'],
            ['Principal / Principle', 'Noun/Adj / Noun', 'School head or main / Moral rule'],
            ['Compliment / Complement', 'Noun / Noun/Verb', 'Praise / Item that completes']
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-cw-p1',
        type: 'multiple_choice',
        prompt: 'The severe drought will severely _____ the regional agricultural harvest.',
        options: ['affect', 'effect', 'effected', 'affecting'],
        correctAnswer: 0,
        explanation: 'We need the verb meaning to influence: "affect" (with an A).'
      },
      {
        id: 'voc-cw-p2',
        type: 'fill_gap',
        prompt: 'Be careful not to _____ your boarding pass while walking through the terminal.',
        options: ['lose', 'loose', 'loosing', 'loss'],
        correctAnswer: 0,
        explanation: '"Lose" (with one "o") is the verb meaning to misplace.'
      },
      {
        id: 'voc-cw-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the confused homophone error:',
        words: ['He', 'refused', 'to', 'compromise', 'his', 'moral', 'principals.'],
        wrongWordIndex: 6,
        correction: 'principles',
        explanation: 'A fundamental moral rule is a "principle". A "principal" is the head of a school.'
      },
      {
        id: 'voc-cw-p4',
        type: 'match_pairs',
        prompt: 'Match word to its correct grammatical identity:',
        pairs: [
          { left: 'Advice', right: 'Noun (guidance offered)' },
          { left: 'Advise', right: 'Verb (to give guidance)' },
          { left: 'Loose', right: 'Adjective (not tight)' },
          { left: 'Lose', right: 'Verb (to misplace)' }
        ],
        explanation: 'Distinguishing parts of speech prevents careless spelling mistakes on exams.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-cw-r1',
        type: 'multiple_choice',
        prompt: 'The new tax policy had an immediate positive _____ on economic growth.',
        options: ['effect', 'affect', 'effective', 'affection'],
        correctAnswer: 0,
        explanation: 'Preceded by "positive", we need the noun outcome: "effect" (with an E).'
      },
      {
        id: 'voc-cw-r2',
        type: 'fill_gap',
        prompt: 'The counselor will _____ students on university admissions requirements.',
        options: ['advise', 'advice', 'advising', 'advicer'],
        correctAnswer: 0,
        explanation: '"Advise" (with an s) is the verb meaning to provide recommendations.'
      },
      {
        id: 'voc-cw-r3',
        type: 'bucket_sort',
        prompt: 'Sort words by part of speech:',
        buckets: ['Nouns', 'Verbs'],
        itemsToSort: [
          { text: 'Effect / Advice', correctBucketIndex: 0 },
          { text: 'Affect / Advise', correctBucketIndex: 1 },
          { text: 'Principle / Loss', correctBucketIndex: 0 },
          { text: 'Lose / Compliment (action)', correctBucketIndex: 1 }
        ],
        explanation: 'Effect and advice are nouns; affect and advise are verbs.'
      },
      {
        id: 'voc-cw-r4',
        type: 'multiple_choice',
        prompt: 'Choose the sentence with NO confused word errors:',
        options: [
          'The wine complements the cheese perfectly.',
          'The wine compliments the cheese perfectly.',
          'The loose screw will cause you to loose the shelf.',
          'His moral principals are questionable.'
        ],
        correctAnswer: 0,
        explanation: '"Complement" means to complete or go well together.'
      }
    ],
    rememberCard: {
      title: 'Remember: Confused Words',
      bullets: [
        'Affect = Action/Verb; Effect = End-result/Noun.',
        'Lose = misplace (one O); Loose = not tight (two Os).',
        'Advice = noun; Advise = verb; Principle = moral rule.'
      ]
    }
  },
  {
    id: 'voc-formal-register',
    topicId: 'vocabulary',
    title: 'Formal vs Informal Exam Register',
    subtitle: 'Replacing conversational slang with academic vocabulary',
    order: 6,
    explanationSteps: [
      {
        title: 'Why Register Matters',
        text: 'Entrance exams test formal academic English. Conversational shortcuts, colloquial expressions, and casual phrasal verbs must be replaced with their formal equivalents.',
        visual: {
          type: 'comparison',
          title: 'Register Shift',
          leftSide: {
            label: 'Informal / Spoken (Avoid)',
            text: 'The kids got a lot of free stuff.',
            tag: 'Casual conversation'
          },
          rightSide: {
            label: 'Formal Exam Standard',
            text: 'The children obtained numerous complimentary items.',
            tag: 'Academic register'
          }
        }
      },
      {
        title: 'High-Frequency Conversions',
        text: 'Replace basic everyday verbs with precise academic terms in writing and reading sections.',
        visual: {
          type: 'table',
          title: 'Informal to Formal Conversion Table',
          headers: ['Casual / Informal', 'Formal Academic Equivalent'],
          rows: [
            ['ask for', 'request'],
            ['look into', 'investigate / examine'],
            ['get', 'obtain / acquire / receive'],
            ['put off', 'postpone / defer'],
            ['a lot of', 'substantial / numerous / considerable'],
            ['about', 'approximately / roughly']
          ]
        }
      },
      {
        title: 'Avoid Contractions in Formal Writing',
        text: 'In formal academic essays, never use contractions: write "do not" instead of "don\'t", and "cannot" instead of "can\'t".',
        visual: {
          type: 'chips',
          title: 'Writing Conventions',
          items: [
            { label: 'Informal:', value: 'don\'t, won\'t, can\'t, it\'s' },
            { label: 'Formal:', value: 'do not, will not, cannot, it is' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-fr-p1',
        type: 'multiple_choice',
        prompt: 'Choose the most FORMAL word to replace "get": "Students must _____ official approval before leaving campus."',
        options: ['obtain', 'grab', 'pick up', 'catch'],
        correctAnswer: 0,
        explanation: '"Obtain" is the precise formal equivalent of "get" in academic contexts.'
      },
      {
        id: 'voc-fr-p2',
        type: 'fill_gap',
        prompt: 'The delegates gathered to discuss _____ 500 environmental proposals.',
        options: ['approximately', 'about like', 'kind of', 'around roughly'],
        correctAnswer: 0,
        explanation: '"Approximately" is the standard academic term for numbers and estimations.'
      },
      {
        id: 'voc-fr-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the informal colloquial word in this formal report:',
        words: ['The', 'committee', 'reviewed', 'a', 'bunch', 'of', 'financial', 'records.'],
        wrongWordIndex: 4,
        correction: 'numerous',
        explanation: '"A bunch of" is conversational slang; use "numerous" or "a multitude of" in formal writing.'
      },
      {
        id: 'voc-fr-p4',
        type: 'match_pairs',
        prompt: 'Match informal expression to its formal partner:',
        pairs: [
          { left: 'Ask for', right: 'Request' },
          { left: 'Look into', right: 'Investigate' },
          { left: 'A lot of', right: 'Substantial amount of' },
          { left: 'Put off', right: 'Postpone' }
        ],
        explanation: 'Elevating conversational terms to formal vocabulary is essential for exam success.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-fr-r1',
        type: 'multiple_choice',
        prompt: 'Which sentence demonstrates the most appropriate FORMAL academic register?',
        options: [
          'The research team investigated the anomalous data thoroughly.',
          'The team checked out the weird numbers carefully.',
          'The guys looked at the strange stuff a lot.',
          'The researchers kind of figured out the data.'
        ],
        correctAnswer: 0,
        explanation: 'Option A uses precise vocabulary ("investigated", "anomalous data") without conversational fillers.'
      },
      {
        id: 'voc-fr-r2',
        type: 'fill_gap',
        prompt: 'The applicant was required to _____ documentation verifying her degree.',
        options: ['submit', 'hand in', 'drop off', 'pass over'],
        correctAnswer: 0,
        explanation: '"Submit" is the formal register standard for official documents.'
      },
      {
        id: 'voc-fr-r3',
        type: 'bucket_sort',
        prompt: 'Sort phrases into Formal Register vs Casual Register:',
        buckets: ['Formal Academic', 'Casual / Informal'],
        itemsToSort: [
          { text: 'Demonstrate / Acquire', correctBucketIndex: 0 },
          { text: 'Show off / Pick up', correctBucketIndex: 1 },
          { text: 'Substantial / Feasible', correctBucketIndex: 0 },
          { text: 'Pretty big / Doable', correctBucketIndex: 1 }
        ],
        explanation: 'Demonstrate, acquire, substantial are formal; show off, doable are conversational.'
      },
      {
        id: 'voc-fr-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the formal academic statement:',
        jumbledWords: ['investigated', 'anomalies.', 'The', 'auditors', 'all'],
        correctSentenceWords: ['The', 'auditors', 'investigated', 'all', 'anomalies.'],
        explanation: 'Uses formal academic vocabulary: "auditors investigated anomalies".'
      }
    ],
    rememberCard: {
      title: 'Remember: Formal Register',
      bullets: [
        'Replace get -> obtain; ask for -> request; put off -> postpone.',
        'Replace a lot of -> substantial; about -> approximately.',
        'Avoid contractions (use "do not", "cannot") in academic prose.'
      ]
    }
  },
  {
    id: 'voc-synonyms-nuances',
    topicId: 'vocabulary',
    title: 'High-Yield Synonyms & Subtle Nuances',
    subtitle: 'Denotation vs connotation: when similar words are NOT identical',
    order: 7,
    explanationSteps: [
      {
        title: 'Denotation vs Connotation',
        text: 'Denotation is the dictionary definition. Connotation is the emotional feeling or social judgment attached to the word (positive, negative, or neutral).',
        visual: {
          type: 'comparison',
          title: 'Connotation Spectrum',
          leftSide: {
            label: 'Positive Connotation',
            text: 'Frugal / Thrifty (Smart with money)',
            tag: 'Admirable trait'
          },
          rightSide: {
            label: 'Negative Connotation',
            text: 'Stingy / Cheap (Selfish with money)',
            tag: 'Unpleasant trait'
          }
        }
      },
      {
        title: 'Famous vs Notorious',
        text: 'Both mean "widely known". But "famous" is known for greatness or achievement, while "notorious" is known for bad deeds, crimes, or scandals.',
        visual: {
          type: 'chips',
          title: 'Famous vs Notorious',
          items: [
            { label: 'Famous', value: 'A famous neurosurgeon or Nobel laureate' },
            { label: 'Notorious', value: 'A notorious bank robber or counterfeit artist' }
          ]
        }
      },
      {
        title: 'Difficult vs Arduous',
        text: 'A math puzzle can be "difficult". But an ascent up Mount Everest or a 10-year legal struggle is "arduous" (requiring grueling, prolonged physical or mental labor).',
        visual: {
          type: 'chips',
          title: 'Intensity Degrees',
          items: [
            { label: 'Difficult:', value: 'Hard to solve or understand' },
            { label: 'Arduous:', value: 'Exhausting, requiring immense sustained endurance' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-sn-p1',
        type: 'multiple_choice',
        prompt: 'The outlaw was _____ throughout the territory for robbing stagecoaches.',
        options: ['notorious', 'celebrated', 'esteemed', 'renowned'],
        correctAnswer: 0,
        explanation: '"Notorious" means widely known specifically for negative or villainous actions.'
      },
      {
        id: 'voc-sn-p2',
        type: 'fill_gap',
        prompt: 'The hikers completed an _____ 14-hour trek across the snowy mountain pass.',
        options: ['arduous', 'easy', 'ordinary', 'casual'],
        correctAnswer: 0,
        explanation: '"Arduous" accurately conveys grueling, exhausting, sustained physical effort.'
      },
      {
        id: 'voc-sn-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the word with an inappropriately insulting connotation in this tribute:',
        words: ['The', 'philanthropist', 'was', 'admired', 'for', 'her', 'stingy', 'lifestyle.'],
        wrongWordIndex: 6,
        correction: 'frugal',
        explanation: '"Stingy" has an offensive connotation; "frugal" conveys commendable simplicity and thrift.'
      },
      {
        id: 'voc-sn-p4',
        type: 'match_pairs',
        prompt: 'Match word to its nuanced connotation:',
        pairs: [
          { left: 'Notorious', right: 'Famous for wrongdoing or crime' },
          { left: 'Renowned', right: 'Famous for honorable achievement' },
          { left: 'Meticulous', right: 'Showing great care and attention to detail' },
          { left: 'Pedantic', right: 'Obsessed with petty, annoying rules' }
        ],
        explanation: 'Nuance choices evaluate your depth of vocabulary understanding on exams.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-sn-r1',
        type: 'multiple_choice',
        prompt: 'Which word has a POSITIVE connotation when describing someone who carefully watches their spending?',
        options: ['Thrifty', 'Miserly', 'Stingy', 'Cheap'],
        correctAnswer: 0,
        explanation: '"Thrifty" praises careful budgeting, while miserly and stingy are critical and negative.'
      },
      {
        id: 'voc-sn-r2',
        type: 'fill_gap',
        prompt: 'The architect was praised for her _____ attention to every structural blueprint.',
        options: ['meticulous', 'careless', 'hasty', 'superficial'],
        correctAnswer: 0,
        explanation: '"Meticulous" conveys thoroughness and high precision.'
      },
      {
        id: 'voc-sn-r3',
        type: 'bucket_sort',
        prompt: 'Sort words by positive vs negative connotation:',
        buckets: ['Positive Connotation', 'Negative Connotation'],
        itemsToSort: [
          { text: 'Renowned / Courageous', correctBucketIndex: 0 },
          { text: 'Notorious / Reckless', correctBucketIndex: 1 },
          { text: 'Meticulous / Frugal', correctBucketIndex: 0 },
          { text: 'Pedantic / Stingy', correctBucketIndex: 1 }
        ],
        explanation: 'Connotations reflect the attitude and tone associated with each word.'
      },
      {
        id: 'voc-sn-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the nuanced adjective:',
        jumbledWords: ['a', 'scientist.', 'renowned', 'She', 'is'],
        correctSentenceWords: ['She', 'is', 'a', 'renowned', 'scientist.'],
        explanation: '"Renowned" praises celebrated academic achievement.'
      }
    ],
    rememberCard: {
      title: 'Remember: Vocabulary Nuance',
      bullets: [
        'Famous = celebrated for good; Notorious = known for bad.',
        'Frugal = smartly careful; Stingy = selfishly unwilling to spend.',
        'Difficult = hard; Arduous = exhausting and grueling.'
      ]
    }
  },
  {
    id: 'voc-idioms-context',
    topicId: 'vocabulary',
    title: 'Idioms in Context: Figurative Language',
    subtitle: 'Common exam idioms decoded through textual clues',
    order: 8,
    explanationSteps: [
      {
        title: 'What is an Idiom?',
        text: 'An idiom is a phrase whose meaning cannot be understood from the literal words alone. "Bite the bullet" has nothing to do with teeth or ammunition; it means to face a tough situation bravely.',
        visual: {
          type: 'comparison',
          title: 'Literal vs Idiomatic',
          leftSide: {
            label: 'Literal Reading',
            text: 'Burn the midnight oil = lighting a petroleum lamp',
            tag: 'Literal (Incorrect)'
          },
          rightSide: {
            label: 'Idiomatic Meaning',
            text: 'Burn the midnight oil = studying or working late into the night',
            tag: 'Figurative (Correct)'
          }
        }
      },
      {
        title: 'Top 6 Exam Idioms',
        text: 'These figurative expressions frequently appear in dialogues and comprehension passages:',
        visual: {
          type: 'table',
          title: 'Must-Know Exam Idioms',
          headers: ['Idiom', 'Meaning', 'Sample Context'],
          rows: [
            ['burn the midnight oil', 'work/study late at night', 'She burned the midnight oil before the exam.'],
            ['see eye to eye', 'agree with someone', 'They rarely see eye to eye on politics.'],
            ['a blessing in disguise', 'a good thing that seemed bad at first', 'Losing that job was a blessing in disguise.'],
            ['hit the nail on the head', 'describe exactly what is true', 'Her analysis hit the nail on the head.'],
            ['once in a blue moon', 'very rarely', 'He visits his hometown once in a blue moon.'],
            ['break the ice', 'make people feel comfortable', 'A friendly joke helped break the ice.']
          ]
        }
      },
      {
        title: 'Never Interpret Idioms Word-for-Word',
        text: 'Examiners always create trap options that describe the literal physical objects in the idiom (nails, bullets, ice, oil). Always reject these literal distractors.',
        visual: {
          type: 'chips',
          title: 'Exam Eliminator',
          items: [
            { label: 'Reject Instantly:', value: 'Options that describe hammers, freezing ice cubes, or actual bullets' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'voc-id-p1',
        type: 'multiple_choice',
        prompt: 'When Sarah remarked that the company suffered from poor internal communication, her colleague said she "hit the nail on the head." What does this mean?',
        options: [
          'She described the exact truth with great accuracy',
          'She damaged the office furniture with a hammer',
          'She blamed the wrong department',
          'She refused to comment on the problem'
        ],
        correctAnswer: 0,
        explanation: '"Hit the nail on the head" idiomatically means to be completely accurate or correct.'
      },
      {
        id: 'voc-id-p2',
        type: 'fill_gap',
        prompt: 'Missing that train turned out to be a _____ in disguise, as it allowed me to meet my future business partner.',
        options: ['blessing', 'fortune', 'miracle', 'gift'],
        correctAnswer: 0,
        explanation: 'The idiom is "a blessing in disguise" (an apparent misfortune that results in good).'
      },
      {
        id: 'voc-id-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the literal distractor in this explanation:',
        words: ['Breaking', 'the', 'ice', 'means', 'shattering', 'frozen', 'water', 'on', 'a', 'lake.'],
        wrongWordIndex: 4,
        correction: 'easing social tension',
        explanation: 'Idioms are figurative; "break the ice" means to ease social awkwardness, not freeze water.'
      },
      {
        id: 'voc-id-p4',
        type: 'match_pairs',
        prompt: 'Match idiom to its figurative meaning:',
        pairs: [
          { left: 'Burn the midnight oil', right: 'Work or study late into the night' },
          { left: 'See eye to eye', right: 'Agree completely with someone' },
          { left: 'Once in a blue moon', right: 'Happening very rarely' },
          { left: 'Bite the bullet', right: 'Endure an unpleasant situation bravely' }
        ],
        explanation: 'Mastering these classic figurative idioms guarantees quick comprehension on entrance exams.'
      }
    ],
    retryPractice: [
      {
        id: 'voc-id-r1',
        type: 'multiple_choice',
        prompt: 'The two diplomats simply could not "see eye to eye" on the border treaty. What does this mean?',
        options: [
          'They could not reach an agreement',
          'They had poor eyesight',
          'They refused to look at each other in person',
          'They wore dark sunglasses'
        ],
        correctAnswer: 0,
        explanation: '"To see eye to eye" means to agree.'
      },
      {
        id: 'voc-id-r2',
        type: 'fill_gap',
        prompt: 'Because she lives across the continent, she visits her grandparents once in a _____ moon.',
        options: ['blue', 'red', 'full', 'new'],
        correctAnswer: 0,
        explanation: '"Once in a blue moon" means very rarely.'
      },
      {
        id: 'voc-id-r3',
        type: 'bucket_sort',
        prompt: 'Sort phrases by figurative meaning:',
        buckets: ['Relates to Agreement / Truth', 'Relates to Time / Rarity'],
        itemsToSort: [
          { text: 'See eye to eye / Hit the nail on the head', correctBucketIndex: 0 },
          { text: 'Once in a blue moon / In the nick of time', correctBucketIndex: 1 },
          { text: 'On the same page / True to word', correctBucketIndex: 0 },
          { text: 'Burn the midnight oil / At the eleventh hour', correctBucketIndex: 1 }
        ],
        explanation: 'Categorizing idioms by theme accelerates retention and exam recall.'
      },
      {
        id: 'voc-id-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the idiomatic sentence:',
        jumbledWords: ['oil.', 'the', 'midnight', 'burned', 'She'],
        correctSentenceWords: ['She', 'burned', 'the', 'midnight', 'oil.'],
        explanation: '"She burned the midnight oil" means she studied late into the night.'
      }
    ],
    rememberCard: {
      title: 'Remember: Idioms in Context',
      bullets: [
        'Idioms are figurative; always reject literal physical answer choices.',
        'Hit the nail on the head = exactly right; See eye to eye = agree.',
        'Burn the midnight oil = study late; A blessing in disguise = hidden luck.'
      ]
    }
  }
];

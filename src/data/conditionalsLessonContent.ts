import { LessonItem } from '../types';

export const CONDITIONALS_LESSON_ITEMS: LessonItem[] = [
  {
    id: 'cond-big-picture',
    topicId: 'conditionals',
    title: 'Big Picture: The If Formula',
    subtitle: 'Condition + Result architecture and comma rules',
    order: 1,
    explanationSteps: [
      {
        title: 'Two Halves of One Thought',
        text: 'Every conditional sentence contains two parts: the IF-clause (the condition) and the MAIN clause (the result). One cannot stand alone without the other in meaning.',
        visual: {
          type: 'formula',
          title: 'Sentence Structure',
          formulaTokens: [
            { text: 'IF CLAUSE (Condition)', highlight: true, color: 'past' },
            { text: '+', highlight: false },
            { text: 'MAIN CLAUSE (Result)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'The Comma Rule',
        text: 'When the IF-clause comes first, place a comma after it. When the main clause comes first, do not use a comma.',
        visual: {
          type: 'comparison',
          title: 'Punctuation Rule',
          leftSide: {
            label: 'If First (Comma Needed)',
            text: 'If you study daily, you will pass.',
            tag: 'Comma used'
          },
          rightSide: {
            label: 'Result First (No Comma)',
            text: 'You will pass if you study daily.',
            tag: 'No comma'
          }
        }
      },
      {
        title: 'The 4 Core Tiers',
        text: 'Zero = 100% truth. First = real future possibility. Second = imaginary present. Third = past regret. Each tier shifts back in time.',
        visual: {
          type: 'table',
          title: 'The 4 Conditional Tiers',
          headers: ['Tier', 'Condition Clause', 'Main Result Clause', 'Meaning'],
          rows: [
            ['Zero', 'Present Simple', 'Present Simple', 'Facts & science'],
            ['First', 'Present Simple', 'will + verb', 'Real future plan'],
            ['Second', 'Past Simple', 'would + verb', 'Dream / unreal now'],
            ['Third', 'had + V3', 'would have + V3', 'Past regret']
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-bp-p1',
        type: 'multiple_choice',
        prompt: 'Which sentence uses correct punctuation?',
        options: [
          'If you leave early you will catch the bus.',
          'If you leave early, you will catch the bus.',
          'You will catch the bus, if you leave early.',
          'If, you leave early you will catch the bus.'
        ],
        correctAnswer: 1,
        explanation: 'When the if-clause starts the sentence, a comma separates it from the main result clause.'
      },
      {
        id: 'cond-bp-p2',
        type: 'fill_gap',
        prompt: 'If the laboratory receives the shipment today, they _____ testing immediately.',
        options: ['will begin', 'began', 'would begin', 'had begun'],
        correctAnswer: 0,
        explanation: 'First Conditional: Present Simple in the if-clause pairs with "will + base verb" in the result.'
      },
      {
        id: 'cond-bp-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the unnecessary comma:',
        words: ['We', 'will', 'arrive', 'on', 'time,', 'if', 'the', 'train', 'runs.'],
        wrongWordIndex: 4,
        correction: 'time',
        explanation: 'Do not put a comma before "if" when the main result clause comes first.'
      },
      {
        id: 'cond-bp-p4',
        type: 'match_pairs',
        prompt: 'Match each condition to its logical result:',
        pairs: [
          { left: 'If you heat ice above 0°C', right: 'it turns into liquid water.' },
          { left: 'If she leaves right now', right: 'she will catch the morning train.' },
          { left: 'If I won the grand prize', right: 'I would travel around the world.' },
          { left: 'If we had booked earlier', right: 'we would have secured front-row seats.' }
        ],
        explanation: 'Clause matching trains you to pair verb forms accurately across all conditional patterns.'
      }
    ],
    retryPractice: [
      {
        id: 'cond-bp-r1',
        type: 'multiple_choice',
        prompt: 'We will proceed with the outdoor ceremony _____ the rain stops by noon.',
        options: [
          'if',
          'unless',
          'despite',
          'because of'
        ],
        correctAnswer: 0,
        explanation: '"If" correctly introduces the conditional clause without requiring a comma when the result clause precedes it.'
      },
      {
        id: 'cond-bp-r2',
        type: 'fill_gap',
        prompt: 'If water freezes, it _____ ice.',
        options: ['becomes', 'will became', 'would became', 'becoming'],
        correctAnswer: 0,
        explanation: 'Zero conditional expresses scientific fact: Present Simple + Present Simple.'
      },
      {
        id: 'cond-bp-r3',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the if-clause first:',
        jumbledWords: ['we', 'rains,', 'If', 'stay', 'it', 'inside.'],
        correctSentenceWords: ['If', 'it', 'rains,', 'we', 'stay', 'inside.'],
        explanation: 'The if-clause opens the sentence, followed by a comma, then the main clause.'
      },
      {
        id: 'cond-bp-r4',
        type: 'bucket_sort',
        prompt: 'Sort clauses into Condition vs Result:',
        buckets: ['Condition Clause', 'Result Clause'],
        itemsToSort: [
          { text: 'If you study tonight', correctBucketIndex: 0 },
          { text: 'you will feel confident', correctBucketIndex: 1 },
          { text: 'if the alarm sounds', correctBucketIndex: 0 },
          { text: 'we leave the building', correctBucketIndex: 1 }
        ],
        explanation: 'The clause with "if" introduces the condition; the other clause describes the result.'
      }
    ],
    rememberCard: {
      title: 'Remember: If Structure',
      bullets: [
        'A conditional always pairs a condition with a result.',
        'If first = comma needed. Result first = no comma.',
        'Tiers shift back in time as reality decreases.'
      ]
    }
  },
  {
    id: 'cond-zero',
    topicId: 'conditionals',
    title: 'Zero Conditional: Facts & Habits',
    subtitle: 'Always true: Present Simple in both clauses',
    order: 2,
    explanationSteps: [
      {
        title: 'Formula: Present + Present',
        text: 'Use Zero Conditional for scientific truths, natural laws, and automatic habits. Whenever condition X occurs, result Y 100% happens.',
        visual: {
          type: 'formula',
          title: 'Zero Conditional Formula',
          formulaTokens: [
            { text: 'IF / WHEN', highlight: true, color: 'neutral' },
            { text: '+ Present Simple', highlight: true, color: 'present' },
            { text: ',', highlight: false },
            { text: 'Present Simple', highlight: true, color: 'present' }
          ]
        }
      },
      {
        title: 'If Equals When',
        text: 'In Zero Conditional, you can replace "if" with "when" without changing the meaning because the result is a guaranteed fact.',
        visual: {
          type: 'comparison',
          title: 'Interchangeable Words',
          leftSide: {
            label: 'Using IF',
            text: 'If you heat ice, it melts.',
            tag: 'Scientific fact'
          },
          rightSide: {
            label: 'Using WHEN',
            text: 'When you heat ice, it melts.',
            tag: 'Same exact meaning'
          }
        }
      },
      {
        title: 'Exam Trap: Never Use "Will"',
        text: 'Entrance exams often tempt you with "will" here. Do not say "If you heat ice, it will melt". For general laws, keep both sides in Present Simple.',
        visual: {
          type: 'chips',
          title: 'Keep Both Sides Simple Present',
          items: [
            { label: 'Condition', value: 'If you press the button (Present)' },
            { label: 'Result', value: 'the bell rings (Present)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-z-p1',
        type: 'multiple_choice',
        prompt: 'If you mix red and yellow, you _____ orange.',
        options: ['will get', 'get', 'got', 'would get'],
        correctAnswer: 1,
        explanation: 'Scientific facts use Zero Conditional: Present Simple in both halves.'
      },
      {
        id: 'cond-z-p2',
        type: 'fill_gap',
        prompt: 'When people eat too much sugar, their energy _____ quickly.',
        options: ['drops', 'will drop', 'would drop', 'dropped'],
        correctAnswer: 0,
        explanation: 'Universal biological habits use Present Simple on both sides.'
      },
      {
        id: 'cond-z-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the incorrect modal in this general law:',
        words: ['If', 'plants', 'lack', 'sunlight,', 'they', 'will', 'die.'],
        wrongWordIndex: 5,
        correction: 'die',
        explanation: 'For universal natural laws, use Zero Conditional ("they die"), not future "will".'
      },
      {
        id: 'cond-z-p4',
        type: 'sentence_builder',
        prompt: 'Build the Zero Conditional rule:',
        jumbledWords: ['boils.', 'reaches', '100°C,', 'When', 'water', 'it'],
        correctSentenceWords: ['When', 'water', 'reaches', '100°C,', 'it', 'boils.'],
        explanation: 'Both clauses use the Present Simple for physical constants.'
      }
    ],
    retryPractice: [
      {
        id: 'cond-z-r1',
        type: 'multiple_choice',
        prompt: 'If oil is poured onto water, it _____ on the surface.',
        options: ['floats', 'will float', 'would float', 'floating'],
        correctAnswer: 0,
        explanation: 'Zero Conditional states a physical law: Present Simple ("floats").'
      },
      {
        id: 'cond-z-r2',
        type: 'fill_gap',
        prompt: 'Babies cry if they _____ hungry.',
        options: ['are', 'will be', 'would be', 'were'],
        correctAnswer: 0,
        explanation: 'General human truth: Present Simple ("are").'
      },
      {
        id: 'cond-z-r3',
        type: 'bucket_sort',
        prompt: 'Sort sentences into Grammatically Correct vs Contains Grammar Error:',
        buckets: ['Grammatically Correct', 'Contains Grammar Error'],
        itemsToSort: [
          { text: 'If you heat water to 100°C, it boils.', correctBucketIndex: 0 },
          { text: 'If it will rain tomorrow, we stay home.', correctBucketIndex: 1 },
          { text: 'When water freezes, it expands.', correctBucketIndex: 0 },
          { text: 'If she leaves early, she would catch the bus.', correctBucketIndex: 1 }
        ],
        explanation: 'Never use "will" in the if-clause; Zero Conditional pairs Present Simple with Present Simple.'
      },
      {
        id: 'cond-z-r4',
        type: 'multiple_choice',
        prompt: '_____ water reaches 100°C under normal atmospheric pressure, it boils.',
        options: ['When', 'Unless', 'Although', 'Despite'],
        correctAnswer: 0,
        explanation: '"When" or "If" correctly introduces invariable scientific facts in the Zero Conditional.'
      }
    ],
    rememberCard: {
      title: 'Remember: Zero Conditional',
      bullets: [
        'Formula: If + Present Simple, Present Simple.',
        'Use for natural laws, scientific facts, and regular habits.',
        'No "will" needed because the result is 100% certain.'
      ]
    }
  },
  {
    id: 'cond-first',
    topicId: 'conditionals',
    title: 'First Conditional: Real Future',
    subtitle: 'Real possibilities: If + Present, will + base verb',
    order: 3,
    explanationSteps: [
      {
        title: 'Formula: Present + Future',
        text: 'Use the First Conditional for realistic possibilities in the future. The condition is in the Present Simple, but the result uses "will + base verb".',
        visual: {
          type: 'formula',
          title: 'First Conditional Formula',
          formulaTokens: [
            { text: 'IF', highlight: true, color: 'neutral' },
            { text: '+ Present Simple', highlight: true, color: 'present' },
            { text: ',', highlight: false },
            { text: 'WILL + Base Verb', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'The Golden Rule: Never "Will" in If',
        text: 'The most common entrance exam mistake is putting "will" inside the if-clause. Never write "If it will rain"! Always write "If it rains".',
        visual: {
          type: 'comparison',
          title: 'Avoid The Double-Will Trap',
          leftSide: {
            label: 'Wrong (Exam Trap)',
            text: 'If she will call, I will answer.',
            tag: 'Never will in if'
          },
          rightSide: {
            label: 'Correct',
            text: 'If she calls, I will answer.',
            tag: 'Present in if-clause'
          }
        }
      },
      {
        title: 'Modal Variations',
        text: 'Instead of "will", you can use modal verbs like "can", "may", or an imperative (command) in the main result clause.',
        visual: {
          type: 'chips',
          title: 'Alternative Result Modals',
          items: [
            { label: 'Can', value: 'If you finish early, you can leave.' },
            { label: 'May', value: 'If the weather improves, we may go out.' },
            { label: 'Imperative', value: 'If you need assistance, press the bell.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-f-p1',
        type: 'multiple_choice',
        prompt: 'If it _____ tomorrow, the outdoor match will be postponed.',
        options: ['rains', 'will rain', 'rained', 'would rain'],
        correctAnswer: 0,
        explanation: 'The if-clause takes Present Simple ("rains"), even when referring to tomorrow.'
      },
      {
        id: 'cond-f-p2',
        type: 'fill_gap',
        prompt: 'If you submit the paper today, the professor _____ it by Monday.',
        options: ['will review', 'reviews', 'reviewed', 'would review'],
        correctAnswer: 0,
        explanation: 'First conditional result clause takes "will + base verb".'
      },
      {
        id: 'cond-f-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the exam error in the if-clause:',
        words: ['If', 'you', 'will', 'arrive', 'late,', 'call', 'my', 'office.'],
        wrongWordIndex: 2,
        correction: 'arrive',
        explanation: 'Never use "will" in the if-clause. Use the Present Simple: "If you arrive late".'
      },
      {
        id: 'cond-f-p4',
        type: 'sentence_builder',
        prompt: 'Form the First Conditional warning:',
        jumbledWords: ['hurry,', 'miss', 'If', 'you', 'will', 'you', 'don\'t', 'the', 'train.'],
        correctSentenceWords: ['If', 'you', 'don\'t', 'hurry,', 'you', 'will', 'miss', 'the', 'train.'],
        explanation: 'Present Simple negative ("don\'t hurry") pairs with "will miss".'
      }
    ],
    retryPractice: [
      {
        id: 'cond-f-r1',
        type: 'multiple_choice',
        prompt: 'We will miss our flight if the taxi _____ arrive soon.',
        options: ['doesn\'t', 'won\'t', 'didn\'t', 'wouldn\'t'],
        correctAnswer: 0,
        explanation: 'The if-clause requires Present Simple negative: "doesn\'t arrive".'
      },
      {
        id: 'cond-f-r2',
        type: 'fill_gap',
        prompt: 'If you feel tired during the exam, _____ a deep breath.',
        options: ['take', 'will take', 'would take', 'taking'],
        correctAnswer: 0,
        explanation: 'An imperative (command) can serve as the result clause in a First Conditional.'
      },
      {
        id: 'cond-f-r3',
        type: 'multiple_choice',
        prompt: 'Choose the grammatically correct First Conditional sentence:',
        options: [
          'If the manager will approve the budget, we will start.',
          'If the manager approves the budget, we will start.',
          'If the manager approved the budget, we will start.',
          'If the manager will approve the budget, we start.'
        ],
        correctAnswer: 1,
        explanation: 'If-clause has Present Simple ("approves"); main clause has "will start".'
      },
      {
        id: 'cond-f-r4',
        type: 'match_pairs',
        prompt: 'Match condition to result:',
        pairs: [
          { left: 'If she passes the exam,', right: 'she will celebrate with family.' },
          { left: 'If the price drops,', right: 'we will purchase the tickets.' },
          { left: 'If the battery dies,', right: 'plug it into the charger.' },
          { left: 'If they invite us,', right: 'we might attend the seminar.' }
        ],
        explanation: 'Present conditions lead to future results with will, may, or imperative.'
      }
    ],
    rememberCard: {
      title: 'Remember: First Conditional',
      bullets: [
        'Formula: If + Present Simple, will + base verb.',
        'Rule 1: Never put "will" inside the if-clause.',
        'Can use may, can, or commands in the result clause.'
      ]
    }
  },
  {
    id: 'cond-second',
    topicId: 'conditionals',
    title: 'Second Conditional: Imaginary Present',
    subtitle: 'Unreal dreams: If + Past Simple, would + base verb',
    order: 4,
    explanationSteps: [
      {
        title: 'Formula: Past Simple + Would',
        text: 'Use the Second Conditional for hypothetical, imaginary, or impossible situations in the PRESENT or FUTURE. It is a dream world.',
        visual: {
          type: 'formula',
          title: 'Second Conditional Formula',
          formulaTokens: [
            { text: 'IF', highlight: true, color: 'neutral' },
            { text: '+ Past Simple', highlight: true, color: 'past' },
            { text: ',', highlight: false },
            { text: 'WOULD + Base Verb', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'The "Were" Rule for All Persons',
        text: 'In formal English and entrance exams, use WERE for all subjects (I, he, she, it). "If I was you" is considered informal; "If I WERE you" is the standard.',
        visual: {
          type: 'comparison',
          title: 'Subjunctive "Were"',
          leftSide: {
            label: 'Informal / Exam Trap',
            text: 'If she was here, she would help.',
            tag: 'Avoid in exams'
          },
          rightSide: {
            label: 'Formal & Exam Standard',
            text: 'If she were here, she would help.',
            tag: '100% correct'
          }
        }
      },
      {
        title: 'Would vs Could vs Might',
        text: '"Would" indicates intention or definite outcome. "Could" indicates ability. "Might" indicates possibility.',
        visual: {
          type: 'chips',
          title: 'Modals in Second Conditional',
          items: [
            { label: 'Would', value: 'If I had time, I would read more.' },
            { label: 'Could', value: 'If I lived nearby, I could walk to school.' },
            { label: 'Might', value: 'If you asked politely, he might agree.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-s-p1',
        type: 'multiple_choice',
        prompt: 'If I _____ you, I would accept the scholarship immediately.',
        options: ['were', 'was', 'am', 'will be'],
        correctAnswer: 0,
        explanation: 'In formal conditional grammar, use "were" for all subjects in unreal conditions.'
      },
      {
        id: 'cond-s-p2',
        type: 'fill_gap',
        prompt: 'If he spoke fluent French, he _____ for international jobs.',
        options: ['would apply', 'will apply', 'applied', 'applies'],
        correctAnswer: 0,
        explanation: 'Second conditional main clause takes "would + base verb".'
      },
      {
        id: 'cond-s-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the verb error in the if-clause:',
        words: ['If', 'she', 'would', 'have', 'more', 'confidence,', 'she', 'would', 'speak.'],
        wrongWordIndex: 2,
        correction: 'had',
        explanation: 'Never use "would" in the if-clause. Use Past Simple: "If she had more confidence".'
      },
      {
        id: 'cond-s-p4',
        type: 'sentence_builder',
        prompt: 'Build the hypothetical advice sentence:',
        jumbledWords: ['consult', 'I', 'were', 'I', 'would', 'a', 'If', 'doctor.', 'you,'],
        correctSentenceWords: ['If', 'I', 'were', 'you,', 'I', 'would', 'consult', 'a', 'doctor.'],
        explanation: '"If I were you, I would consult a doctor" is the classic advice structure.'
      }
    ],
    retryPractice: [
      {
        id: 'cond-s-r1',
        type: 'multiple_choice',
        prompt: 'What would you do if you _____ a million dollars in your yard?',
        options: ['found', 'find', 'will find', 'would find'],
        correctAnswer: 0,
        explanation: 'Hypothetical question requires Past Simple ("found") in the if-clause.'
      },
      {
        id: 'cond-s-r2',
        type: 'fill_gap',
        prompt: 'If this laptop were lighter, I _____ it to the library every day.',
        options: ['would carry', 'carried', 'will carry', 'carry'],
        correctAnswer: 0,
        explanation: 'Second conditional: If + were ..., would carry.'
      },
      {
        id: 'cond-s-r3',
        type: 'multiple_choice',
        prompt: 'If it _____ so cold today, we could eat lunch in the courtyard.',
        options: ['weren\'t', 'isn\'t', 'won\'t be', 'wouldn\'t be'],
        correctAnswer: 0,
        explanation: 'Negative unreal present takes "weren\'t".'
      },
      {
        id: 'cond-s-r4',
        type: 'bucket_sort',
        prompt: 'Sort into Real Possibility (1st) vs Imaginary (2nd):',
        buckets: ['Real Future (1st)', 'Imaginary Present (2nd)'],
        itemsToSort: [
          { text: 'If I win the lottery, I will buy a car.', correctBucketIndex: 0 },
          { text: 'If I were invisible, I would explore the world.', correctBucketIndex: 1 },
          { text: 'If you study tonight, you will pass.', correctBucketIndex: 0 },
          { text: 'If he had wings, he would fly home.', correctBucketIndex: 1 }
        ],
        explanation: 'First conditional is feasible; second conditional is purely hypothetical or impossible.'
      }
    ],
    rememberCard: {
      title: 'Remember: Second Conditional',
      bullets: [
        'Formula: If + Past Simple, would + base verb.',
        'Use "were" instead of "was" for all persons (If I were you).',
        'Describes imaginary present or improbable future situations.'
      ]
    }
  },
  {
    id: 'cond-third',
    topicId: 'conditionals',
    title: 'Third Conditional: Past Regrets',
    subtitle: 'Impossible past: If + had V3, would have V3',
    order: 5,
    explanationSteps: [
      {
        title: 'Formula: Past Perfect + Would Have V3',
        text: 'Use Third Conditional for situations in the past that did NOT happen. It expresses regret, relief, or speculation about history.',
        visual: {
          type: 'formula',
          title: 'Third Conditional Formula',
          formulaTokens: [
            { text: 'IF', highlight: true, color: 'neutral' },
            { text: '+ HAD + V3', highlight: true, color: 'past' },
            { text: ',', highlight: false },
            { text: 'WOULD HAVE + V3', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'The Reality Behind the Words',
        text: 'Every Third Conditional sentence has an implied real-world truth that is the complete opposite of the condition.',
        visual: {
          type: 'comparison',
          title: 'Unreal Sentence vs Reality',
          leftSide: {
            label: 'Conditional Sentence',
            text: 'If I had left earlier, I would have caught the train.',
            tag: 'Hypothetical'
          },
          rightSide: {
            label: 'Historical Reality',
            text: 'I left late, and I missed the train.',
            tag: 'What actually happened'
          }
        }
      },
      {
        title: 'Contraction Watch: "Would of" is Wrong',
        text: 'In spoken English, "would have" sounds like "would of". Writing "would of" or "could of" is a catastrophic spelling and grammar error on exams.',
        visual: {
          type: 'chips',
          title: 'Correct Contractions',
          items: [
            { label: 'Correct', value: 'would have / would\'ve' },
            { label: 'Fatal Error', value: 'would of (NEVER use)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-t-p1',
        type: 'multiple_choice',
        prompt: 'If she had known the deadline, she _____ the project on Friday.',
        options: ['would have submitted', 'would submit', 'submitted', 'will have submitted'],
        correctAnswer: 0,
        explanation: 'Third conditional result requires "would have + V3" (would have submitted).'
      },
      {
        id: 'cond-t-p2',
        type: 'fill_gap',
        prompt: 'If we _____ the weather forecast, we wouldn\'t have gone hiking.',
        options: ['had checked', 'checked', 'have checked', 'would have checked'],
        correctAnswer: 0,
        explanation: 'If-clause in Third Conditional takes Past Perfect: "had checked".'
      },
      {
        id: 'cond-t-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the severe grammar error in the result clause:',
        words: ['He', 'would', 'of', 'passed', 'the', 'test', 'if', 'he', 'had', 'studied.'],
        wrongWordIndex: 2,
        correction: 'have',
        explanation: 'Never write "would of". The correct modal auxiliary is "would have".'
      },
      {
        id: 'cond-t-p4',
        type: 'sentence_builder',
        prompt: 'Assemble the Third Conditional regret:',
        jumbledWords: ['have', 'won.', 'We', 'would', 'had', 'scored,', 'if', 'he'],
        correctSentenceWords: ['We', 'would', 'have', 'won.', 'if', 'he', 'had', 'scored,'],
        explanation: 'Pairs "would have won" with "if he had scored".'
      }
    ],
    retryPractice: [
      {
        id: 'cond-t-r1',
        type: 'multiple_choice',
        prompt: 'If the firefighter had not arrived promptly, the house _____ down completely.',
        options: ['would have burned', 'would burn', 'burned', 'had burned'],
        correctAnswer: 0,
        explanation: 'Past hypothetical result requires "would have burned".'
      },
      {
        id: 'cond-t-r2',
        type: 'fill_gap',
        prompt: 'They wouldn\'t have lost their way if they _____ their GPS.',
        options: ['had turned on', 'turned on', 'turn on', 'would turn on'],
        correctAnswer: 0,
        explanation: 'If-clause requires Past Perfect: "had turned on".'
      },
      {
        id: 'cond-t-r3',
        type: 'match_pairs',
        prompt: 'Match Third Conditional to actual reality:',
        pairs: [
          { left: 'If she had set an alarm, she wouldn\'t have been late.', right: 'She did not set an alarm and was late.' },
          { left: 'If we had taken the highway, we would have arrived faster.', right: 'We took the local road and arrived slowly.' },
          { left: 'If he had saved money, he could have bought the car.', right: 'He did not save money and could not buy it.' },
          { left: 'If it hadn\'t rained, we would have played tennis.', right: 'It rained, so we did not play tennis.' }
        ],
        explanation: 'Third conditional represents the exact reverse of historical reality.'
      },
      {
        id: 'cond-t-r4',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly avoids "would" in the if-clause?',
        options: [
          'If you would have called, I would have answered.',
          'If you had called, I would have answered.',
          'If you called, I would of answered.',
          'If you had called, I will answer.'
        ],
        correctAnswer: 1,
        explanation: 'The if-clause uses "had called", never "would have called".'
      }
    ],
    rememberCard: {
      title: 'Remember: Third Conditional',
      bullets: [
        'Formula: If + had + V3, would have + V3.',
        'Refers to an unchangeable event in the past (regret or relief).',
        'Never write "would of" or put "would have" in the if-clause.'
      ]
    }
  },
  {
    id: 'cond-mixed',
    topicId: 'conditionals',
    title: 'Mixed Conditionals: Crossing Time Zones',
    subtitle: 'Connecting past actions with present results',
    order: 6,
    explanationSteps: [
      {
        title: 'Why Mix Conditionals?',
        text: 'In real life, a past decision often changes our present situation, or an ongoing personality trait influenced a past choice. That is a Mixed Conditional.',
        visual: {
          type: 'timeline',
          title: 'Crossing Past and Present',
          items: [
            { label: 'Past Event (Had + V3)', color: 'past' },
            { label: 'Present Result (Would + Verb)', color: 'present' }
          ]
        }
      },
      {
        title: 'Type 1: Past Action -> Present State',
        text: 'Formula: If + Past Perfect, WOULD + Base Verb. "If I had taken that job last year (past), I would live in London now (present)."',
        visual: {
          type: 'comparison',
          title: 'Mixed Type 1',
          leftSide: {
            label: 'Condition in Past',
            text: 'If I had eaten breakfast,',
            tag: 'Past Perfect'
          },
          rightSide: {
            label: 'Result in Present',
            text: 'I wouldn\'t be hungry right now.',
            tag: 'Would + Base Verb'
          }
        }
      },
      {
        title: 'Type 2: General Trait -> Past Action',
        text: 'Formula: If + Past Simple (general trait), WOULD HAVE + V3. "If he weren\'t so timid (always true), he would have asked her out yesterday (past).',
        visual: {
          type: 'chips',
          title: 'Look for Time Clues',
          items: [
            { label: 'Clue: "now / today"', value: 'Points to present result (would + verb)' },
            { label: 'Clue: "yesterday / then"', value: 'Points to past result (would have + V3)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-m-p1',
        type: 'multiple_choice',
        prompt: 'If I had accepted that offer last year, I _____ in New York today.',
        options: ['would be working', 'would have worked', 'will work', 'had worked'],
        correctAnswer: 0,
        explanation: 'Past condition ("last year") with present result ("today") takes "would be working" (Mixed Type 1).'
      },
      {
        id: 'cond-m-p2',
        type: 'fill_gap',
        prompt: 'If she weren\'t so afraid of heights, she _____ skydiving with us last weekend.',
        options: ['would have gone', 'would go', 'will go', 'had gone'],
        correctAnswer: 0,
        explanation: 'Permanent present trait ("weren\'t so afraid") with past event ("last weekend") takes "would have gone".'
      },
      {
        id: 'cond-m-p3',
        type: 'multiple_choice',
        prompt: 'Notice the time clue "right now": If he _____ his wallet at home, he would have cash right now.',
        options: ['hadn\'t forgotten', 'didn\'t forget', 'hasn\'t forgotten', 'wouldn\'t forget'],
        correctAnswer: 0,
        explanation: 'The past action requires Past Perfect ("hadn\'t forgotten") to explain the present lack of cash.'
      },
      {
        id: 'cond-m-p4',
        type: 'bucket_sort',
        prompt: 'Sort into Standard Third Conditional vs Mixed Conditional:',
        buckets: ['Standard 3rd (Past/Past)', 'Mixed (Past/Present)'],
        itemsToSort: [
          { text: 'If I had studied, I would have passed yesterday.', correctBucketIndex: 0 },
          { text: 'If I had studied medicine, I would be a doctor now.', correctBucketIndex: 1 },
          { text: 'If they had taken the map, they wouldn\'t have got lost.', correctBucketIndex: 0 },
          { text: 'If he had saved his bonus, he wouldn\'t be in debt today.', correctBucketIndex: 1 }
        ],
        explanation: 'Sentences ending in "now/today" describing current states are Mixed Conditionals.'
      }
    ],
    retryPractice: [
      {
        id: 'cond-m-r1',
        type: 'multiple_choice',
        prompt: 'If you had listened to my instructions, you _____ in this mess right now.',
        options: ['wouldn\'t be', 'wouldn\'t have been', 'won\'t be', 'hadn\'t been'],
        correctAnswer: 0,
        explanation: 'The clue "right now" demands present result modal: "wouldn\'t be".'
      },
      {
        id: 'cond-m-r2',
        type: 'fill_gap',
        prompt: 'If we _____ the early flight yesterday, we would be resting on the beach now.',
        options: ['had caught', 'caught', 'catch', 'would catch'],
        correctAnswer: 0,
        explanation: 'Past action requires "had caught" to link with the present result ("now").'
      },
      {
        id: 'cond-m-r3',
        type: 'multiple_choice',
        prompt: 'Which time words signal a Mixed Conditional result?',
        options: [
          'right now / today / at present',
          'yesterday / two days ago',
          'in 1995 / previously',
          'last month / then'
        ],
        correctAnswer: 0,
        explanation: 'Words showing current state ("right now, today") after a past "had + V3" condition signal Mixed.'
      },
      {
        id: 'cond-m-r4',
        type: 'sentence_builder',
        prompt: 'Build the mixed sentence:',
        jumbledWords: ['now.', 'be', 'fluent', 'had', 'practiced,', 'I', 'would', 'If', 'I'],
        correctSentenceWords: ['If', 'I', 'had', 'practiced,', 'I', 'would', 'be', 'fluent', 'now.'],
        explanation: 'Past condition ("had practiced") connects to present outcome ("would be fluent now").'
      }
    ],
    rememberCard: {
      title: 'Remember: Mixed Conditionals',
      bullets: [
        'Connects a past action with a present result (or vice versa).',
        'Look for clues like "now" or "today" in the result clause.',
        'Past condition = had + V3; Present result = would + base verb.'
      ]
    }
  },
  {
    id: 'cond-alternatives',
    topicId: 'conditionals',
    title: 'Words that Replace "If"',
    subtitle: 'Unless, provided that, as long as, in case, otherwise',
    order: 7,
    explanationSteps: [
      {
        title: 'Unless Means "If Not"',
        text: 'Unless already carries a negative meaning. Never use another negative with unless: "Unless you study" means "If you do not study".',
        visual: {
          type: 'comparison',
          title: 'The "Unless" Equation',
          leftSide: {
            label: 'Using UNLESS',
            text: 'Unless you hurry, you will miss it.',
            tag: 'Already negative'
          },
          rightSide: {
            label: 'Equivalent with IF NOT',
            text: 'If you do not hurry, you will miss it.',
            tag: 'Identical meaning'
          }
        }
      },
      {
        title: 'Provided That / As Long As',
        text: 'These phrases mean "only on the condition that". They emphasize a strict requirement for the outcome to happen.',
        visual: {
          type: 'chips',
          title: 'Condition Markers',
          items: [
            { label: 'Provided that', value: 'You may enter provided that you show your ID.' },
            { label: 'As long as', value: 'We will support you as long as you work honestly.' }
          ]
        }
      },
      {
        title: 'In Case vs If',
        text: '"In case" means doing something as a precaution beforehand. "If" means doing something only after the condition happens.',
        visual: {
          type: 'comparison',
          title: 'Precaution vs Reaction',
          leftSide: {
            label: 'In Case (Precaution First)',
            text: 'Take an umbrella in case it rains.',
            tag: 'Take it before rain starts'
          },
          rightSide: {
            label: 'If (Reaction Later)',
            text: 'Open the umbrella if it rains.',
            tag: 'Open it only when rain falls'
          }
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-a-p1',
        type: 'multiple_choice',
        prompt: 'You cannot enter the examination hall _____ you present your student badge.',
        options: ['unless', 'if', 'as long as', 'in case'],
        correctAnswer: 0,
        explanation: '"Unless" means "if you do not present". It provides the necessary negative condition.'
      },
      {
        id: 'cond-a-p2',
        type: 'fill_gap',
        prompt: 'Take some bottled water with you _____ you get thirsty during the hike.',
        options: ['in case', 'unless', 'provided', 'otherwise'],
        correctAnswer: 0,
        explanation: '"In case" expresses a precaution taken before the potential need arises.'
      },
      {
        id: 'cond-a-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the double-negative error with "unless":',
        words: ['Unless', 'you', 'don\'t', 'practice', 'daily,', 'you', 'will', 'forget.'],
        wrongWordIndex: 2,
        correction: 'practice',
        explanation: '"Unless" already means "if not". Adding "don\'t" creates an ungrammatical double negative.'
      },
      {
        id: 'cond-a-p4',
        type: 'match_pairs',
        prompt: 'Match connector to its functional meaning:',
        pairs: [
          { left: 'Unless', right: 'If not (negative condition)' },
          { left: 'In case', right: 'As a precaution beforehand' },
          { left: 'Provided that', right: 'Only on this exact condition' },
          { left: 'Otherwise', right: 'If not, this bad thing will happen' }
        ],
        explanation: 'Each connector has a distinct logic and exam usage.'
      }
    ],
    retryPractice: [
      {
        id: 'cond-a-r1',
        type: 'multiple_choice',
        prompt: 'You can borrow my car _____ you promise to return it with a full tank.',
        options: ['as long as', 'unless', 'in case', 'otherwise'],
        correctAnswer: 0,
        explanation: '"As long as" means "only on the condition that".'
      },
      {
        id: 'cond-a-r2',
        type: 'fill_gap',
        prompt: 'Submit your application now; _____, you will lose your eligibility.',
        options: ['otherwise', 'unless', 'in case', 'as long as'],
        correctAnswer: 0,
        explanation: '"Otherwise" means "if you don\'t do this, a negative consequence follows".'
      },
      {
        id: 'cond-a-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "in case"?',
        options: [
          'I took a jacket in case the temperature dropped at night.',
          'I will wear my jacket in case it will drop.',
          'I don\'t take a jacket in case unless.',
          'In case you don\'t wear a jacket, you freeze.'
        ],
        correctAnswer: 0,
        explanation: '"In case" is paired with the potential situation as a precaution.'
      },
      {
        id: 'cond-a-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with unless:',
        jumbledWords: ['arrive', 'will', 'Unless', 'on', 'he', 'miss', 'he', 'time,', 'it.'],
        correctSentenceWords: ['Unless', 'he', 'arrives', 'on', 'time,', 'he', 'will', 'miss', 'it.'],
        explanation: 'Unless + Present Simple, will + base verb.'
      }
    ],
    rememberCard: {
      title: 'Remember: If Alternatives',
      bullets: [
        'Unless = if not (never use a negative verb after unless).',
        'In case = doing something beforehand as a precaution.',
        'Provided that / As long as = only on this condition.'
      ]
    }
  },
  {
    id: 'cond-inversion-traps',
    topicId: 'conditionals',
    title: 'Inversion & Exam Traps',
    subtitle: 'Had I known, Were I you, Should you need',
    order: 8,
    explanationSteps: [
      {
        title: 'Drop "If" and Invert the Subject',
        text: 'In formal literature and exams, you can drop "IF" and put the auxiliary verb first. This is called conditional inversion.',
        visual: {
          type: 'table',
          title: 'The 3 Standard Inversions',
          headers: ['Standard Clause', 'Inverted Equivalent', 'Tier'],
          rows: [
            ['If you should need help', 'Should you need help', 'First Conditional'],
            ['If I were in your place', 'Were I in your place', 'Second Conditional'],
            ['If I had known earlier', 'Had I known earlier', 'Third Conditional']
          ]
        }
      },
      {
        title: 'Negative Inversion: "Had we not..."',
        text: 'When inverting a negative sentence, do NOT contract "Hadn\'t". Always write "Had we not arrived" rather than "Hadn\'t we arrived".',
        visual: {
          type: 'comparison',
          title: 'Negative Inversion Rule',
          leftSide: {
            label: 'Formal Standard',
            text: 'Had he not intervened, ...',
            tag: 'Uncontracted "not"'
          },
          rightSide: {
            label: 'Incorrect in Formal Exam',
            text: 'Hadn\'t he intervened, ...',
            tag: 'Avoid contracted form'
          }
        }
      },
      {
        title: 'The Number One Trap: "If I would have"',
        text: 'Never use "would have" in the condition clause! In exams, this is the #1 trick distractor. The condition is always "had + V3".',
        visual: {
          type: 'chips',
          title: 'The Ultimate Exam Trap',
          items: [
            { label: 'Fatal Error', value: 'If I would have known (NEVER)' },
            { label: 'Correct', value: 'If I had known / Had I known' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'cond-i-p1',
        type: 'multiple_choice',
        prompt: '_____ any questions arise during the exam, please raise your hand.',
        options: ['Should', 'If should', 'Were', 'Had'],
        correctAnswer: 0,
        explanation: '"Should any questions arise" is the formal inversion for "If any questions should arise".'
      },
      {
        id: 'cond-i-p2',
        type: 'fill_gap',
        prompt: '_____ I known about the road closure, I would have taken the detour.',
        options: ['Had', 'Have', 'Were', 'Did'],
        correctAnswer: 0,
        explanation: '"Had I known" is the inverted form of "If I had known".'
      },
      {
        id: 'cond-i-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the fatal error in this inverted clause:',
        words: ['Hadn\'t', 'she', 'warned', 'us,', 'we', 'would', 'have', 'failed.'],
        wrongWordIndex: 0,
        correction: 'Had she not',
        explanation: 'In formal inverted conditionals, do not contract "hadn\'t". Use "Had she not warned us".'
      },
      {
        id: 'cond-i-p4',
        type: 'sentence_builder',
        prompt: 'Build the formal inverted advice:',
        jumbledWords: ['you,', 'Were', 'I', 'accept.', 'would', 'I'],
        correctSentenceWords: ['Were', 'I', 'you,', 'I', 'would', 'accept.'],
        explanation: '"Were I you" is the inverted version of "If I were you".'
      }
    ],
    retryPractice: [
      {
        id: 'cond-i-r1',
        type: 'multiple_choice',
        prompt: '_____ he to ask for your opinion, what would you say?',
        options: ['Were', 'Was', 'Had', 'Should'],
        correctAnswer: 0,
        explanation: '"Were he to ask" is the formal inverted form of "If he were to ask" (Second Conditional).'
      },
      {
        id: 'cond-i-r2',
        type: 'fill_gap',
        prompt: 'Had the alarm sounded earlier, everyone _____ safely.',
        options: ['would have evacuated', 'would evacuate', 'will evacuate', 'had evacuated'],
        correctAnswer: 0,
        explanation: 'Inversion with "Had + V3" represents a Third Conditional and takes "would have + V3".'
      },
      {
        id: 'cond-i-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence has NO grammatical error?',
        options: [
          'If I would have studied harder, I would have passed.',
          'Had I studied harder, I would have passed.',
          'Had I study harder, I would pass.',
          'Were I studied harder, I would have passed.'
        ],
        correctAnswer: 1,
        explanation: '"Had I studied harder" correctly inverts "If I had studied harder".'
      },
      {
        id: 'cond-i-r4',
        type: 'match_pairs',
        prompt: 'Match regular condition to its inverted partner:',
        pairs: [
          { left: 'If you need assistance', right: 'Should you need assistance' },
          { left: 'If I were in charge', right: 'Were I in charge' },
          { left: 'If they had invited us', right: 'Had they invited us' },
          { left: 'If she had not called', right: 'Had she not called' }
        ],
        explanation: 'Inversions drop "if" and place Should, Were, or Had at the start.'
      }
    ],
    rememberCard: {
      title: 'Remember: Inversion & Traps',
      bullets: [
        'Drop "if" and start with Should (1st), Were (2nd), or Had (3rd).',
        'In negative inversions, never contract (Had he not, NOT Hadn\'t he).',
        'NEVER write "if I would have" in the condition clause!'
      ]
    }
  }
];

import { LessonItem } from '../types';

export const SPELLING_LESSON_ITEMS: LessonItem[] = [
  {
    id: 'spell-plurals',
    topicId: 'spelling',
    title: 'Plural Spelling Rules & Irregulars',
    subtitle: '-s, -es, -ves, and Greek/Latin plurals',
    order: 1,
    explanationSteps: [
      {
        title: 'When to Add -ES',
        text: 'Add -ES when a singular noun ends in a hissing sound: -s, -ss, -sh, -ch, -x, or -z. This extra "e" creates a pronounceable vowel syllable.',
        visual: {
          type: 'chips',
          title: 'Add -ES Endings',
          items: [
            { label: '-x', value: 'box -> boxes / fox -> foxes' },
            { label: '-ch', value: 'watch -> watches / match -> matches' },
            { label: '-sh', value: 'dish -> dishes / brush -> brushes' },
            { label: '-ss', value: 'class -> classes / glass -> glasses' }
          ]
        }
      },
      {
        title: 'Nouns Ending in -F or -FE',
        text: 'Most nouns ending in -f or -fe change the ending to -VES: knife -> knives, leaf -> leaves, life -> lives, wife -> wives. Exceptions: roof -> roofs, chef -> chefs.',
        visual: {
          type: 'comparison',
          title: '-f to -ves Rule',
          leftSide: {
            label: 'Changes to -VES',
            text: 'leaf -> leaves / knife -> knives / half -> halves',
            tag: 'Standard change'
          },
          rightSide: {
            label: 'Exceptions (Keep -f)',
            text: 'roof -> roofs / chef -> chefs / cliff -> cliffs',
            tag: 'Add -s only'
          }
        }
      },
      {
        title: 'Academic Greek & Latin Plurals',
        text: 'Exam favorite: words of Greek and Latin origin do not follow -s rules. Memorize: criterion -> criteria, phenomenon -> phenomena, analysis -> analyses, crisis -> crises.',
        visual: {
          type: 'table',
          title: 'Latin / Greek Exam Plurals',
          headers: ['Singular Form', 'Plural Form', 'Rule Pattern'],
          rows: [
            ['criterion', 'criteria', '-on changes to -a'],
            ['phenomenon', 'phenomena', '-on changes to -a'],
            ['analysis', 'analyses', '-is changes to -es'],
            ['crisis', 'crises', '-is changes to -es'],
            ['hypothesis', 'hypotheses', '-is changes to -es']
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-pl-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct plural form of "criterion":',
        options: ['criteria', 'criterions', 'criterias', 'criterionies'],
        correctAnswer: 0,
        explanation: 'In academic Greek/Latin roots, "criterion" becomes "criteria" (plural).'
      },
      {
        id: 'spell-pl-p2',
        type: 'fill_gap',
        prompt: 'Autumn arrived and colorful _____ fell from the oak trees.',
        options: ['leaves', 'leafs', 'leafes', 'leave'],
        correctAnswer: 0,
        explanation: 'The plural of "leaf" changes -f to -ves: "leaves".'
      },
      {
        id: 'spell-pl-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled plural noun:',
        words: ['The', 'chefs', 'repaired', 'the', 'leaking', 'rooves', 'yesterday.'],
        wrongWordIndex: 5,
        correction: 'roofs',
        explanation: '"Roof" is an exception that takes standard -s: "roofs", not "rooves".'
      },
      {
        id: 'spell-pl-p4',
        type: 'match_pairs',
        prompt: 'Match singular to its correct plural form:',
        pairs: [
          { left: 'Analysis', right: 'Analyses' },
          { left: 'Phenomenon', right: 'Phenomena' },
          { left: 'Knife', right: 'Knives' },
          { left: 'Crisis', right: 'Crises' }
        ],
        explanation: 'Academic irregular plurals are tested repeatedly on English entrance exams.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-pl-r1',
        type: 'multiple_choice',
        prompt: 'What is the correct plural form of "hypothesis"?',
        options: ['hypotheses', 'hypothesises', 'hypothesas', 'hypothesi'],
        correctAnswer: 0,
        explanation: 'Greek loanwords ending in -is become -es: "hypotheses".'
      },
      {
        id: 'spell-pl-r2',
        type: 'fill_gap',
        prompt: 'The laboratory observed multiple unusual natural _____ during the solar eclipse.',
        options: ['phenomena', 'phenomenons', 'phenomenas', 'phenomenon'],
        correctAnswer: 0,
        explanation: 'The plural of "phenomenon" is "phenomena".'
      },
      {
        id: 'spell-pl-r3',
        type: 'bucket_sort',
        prompt: 'Sort singular nouns by their plural transformation:',
        buckets: ['Change -is to -es', 'Change -on to -a'],
        itemsToSort: [
          { text: 'Crisis -> Crises', correctBucketIndex: 0 },
          { text: 'Criterion -> Criteria', correctBucketIndex: 1 },
          { text: 'Analysis -> Analyses', correctBucketIndex: 0 },
          { text: 'Phenomenon -> Phenomena', correctBucketIndex: 1 }
        ],
        explanation: 'Analysis and crisis become analyses and crises; criterion and phenomenon become criteria and phenomena.'
      },
      {
        id: 'spell-pl-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the plural noun:',
        jumbledWords: ['were', 'All', 'carefully.', 'examined', 'criteria'],
        correctSentenceWords: ['All', 'criteria', 'were', 'carefully.', 'examined'],
        explanation: 'Plural "criteria" agrees with plural "were".'
      }
    ],
    rememberCard: {
      title: 'Remember: Plural Rules',
      bullets: [
        'Add -es after hissing sounds (-s, -ss, -sh, -ch, -x, -z).',
        'Most -f words become -ves (knives, leaves), but roofs and chefs keep -f.',
        'Academic roots: criterion -> criteria, analysis -> analyses.'
      ]
    }
  },
  {
    id: 'spell-doubling',
    topicId: 'spelling',
    title: 'Doubling Consonants: The 1-1-1 Rule',
    subtitle: 'When to double the final letter before a suffix',
    order: 2,
    explanationSteps: [
      {
        title: 'The 1-1-1 Doubling Formula',
        text: 'In 1-syllable words, double the final consonant if it has 1 vowel followed by 1 consonant before a vowel suffix (-ing, -ed, -er): run -> running, stop -> stopped, big -> bigger.',
        visual: {
          type: 'formula',
          title: 'The 1-1-1 Check',
          formulaTokens: [
            { text: '1 Syllable (stop)', highlight: true, color: 'past' },
            { text: '+ 1 Vowel (o)', highlight: true, color: 'present' },
            { text: '+ 1 Consonant (p)', highlight: true, color: 'future' },
            { text: '= Double (stopped)', highlight: true, color: 'present' }
          ]
        }
      },
      {
        title: 'Two-Syllable Words: The Stress Test',
        text: 'For 2-syllable words, double ONLY if the stress is on the SECOND syllable: beGIN -> beginning, reFER -> referred. If stress is on the first syllable, DO NOT double: HAPpen -> happening, VI-sit -> visited.',
        visual: {
          type: 'comparison',
          title: 'Stress Determines Doubling',
          leftSide: {
            label: 'Stress on 2nd Syllable (Double)',
            text: 'pre-FER -> preferring / oc-CUR -> occurred',
            tag: 'Stress is at the end'
          },
          rightSide: {
            label: 'Stress on 1st Syllable (No Doubling)',
            text: 'BEN-e-fit -> benefited / OF-fer -> offered',
            tag: 'Stress is at start'
          }
        }
      },
      {
        title: 'The British English "L" Exception',
        text: 'In British English (the standard for entrance exams), a final "L" doubles before a vowel suffix regardless of stress: travel -> travelling, cancel -> cancelled, model -> modelling.',
        visual: {
          type: 'chips',
          title: 'British Double "L"',
          items: [
            { label: 'British Standard', value: 'travelling, cancelled, modelled (double l)' },
            { label: 'American Variant', value: 'traveling, canceled, modeled (single l)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-db-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling in British English:',
        options: ['occurring', 'occuring', 'ocuring', 'occurringe'],
        correctAnswer: 0,
        explanation: 'In "occur", stress is on the second syllable (oc-CUR), so the \'r\' doubles before -ing.'
      },
      {
        id: 'spell-db-p2',
        type: 'fill_gap',
        prompt: 'All train services between the two cities were _____ due to heavy snow.',
        options: ['cancelled', 'canceled', 'canceld', 'cancelling'],
        correctAnswer: 0,
        explanation: 'In standard British English, final "l" doubles: "cancelled".'
      },
      {
        id: 'spell-db-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled word where doubling was done incorrectly:',
        words: ['The', 'patient', 'benefitted', 'enormously', 'from', 'the', 'new', 'therapy.'],
        wrongWordIndex: 2,
        correction: 'benefited',
        explanation: 'The stress in "BEN-e-fit" is on the first syllable, so the \'t\' is NOT doubled: "benefited".'
      },
      {
        id: 'spell-db-p4',
        type: 'match_pairs',
        prompt: 'Match base verb to correct doubled/non-doubled form:',
        pairs: [
          { left: 'Refer', right: 'Referred (stress on 2nd syllable)' },
          { left: 'Happen', right: 'Happened (stress on 1st syllable)' },
          { left: 'Begin', right: 'Beginning (stress on 2nd syllable)' },
          { left: 'Visit', right: 'Visiting (stress on 1st syllable)' }
        ],
        explanation: 'Checking syllable stress tells you instantly whether to double the final consonant.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-db-r1',
        type: 'multiple_choice',
        prompt: 'Choose the correctly spelled word:',
        options: ['preferred', 'prefered', 'preferrd', 'preffered'],
        correctAnswer: 0,
        explanation: 'Stress is on the second syllable (pre-FER), so the \'r\' doubles: "preferred".'
      },
      {
        id: 'spell-db-r2',
        type: 'fill_gap',
        prompt: 'She spent three weeks _____ across the European continent.',
        options: ['travelling', 'traveling', 'travaling', 'travelled'],
        correctAnswer: 0,
        explanation: 'British standard doubles the final \'l\': "travelling".'
      },
      {
        id: 'spell-db-r3',
        type: 'bucket_sort',
        prompt: 'Sort verbs by whether they double the consonant before -ed:',
        buckets: ['Doubles Final Consonant', 'Does NOT Double Consonant'],
        itemsToSort: [
          { text: 'Admit -> Admitted', correctBucketIndex: 0 },
          { text: 'Open -> Opened', correctBucketIndex: 1 },
          { text: 'Occur -> Occurred', correctBucketIndex: 0 },
          { text: 'Offer -> Offered', correctBucketIndex: 1 }
        ],
        explanation: 'Admit and occur have stress on the final syllable; open and offer have stress on the first.'
      },
      {
        id: 'spell-db-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the doubled consonant:',
        jumbledWords: ['suddenly.', 'The', 'incident', 'occurred', 'quite'],
        correctSentenceWords: ['The', 'incident', 'occurred', 'quite', 'suddenly.'],
        explanation: '"Occurred" is spelled with double \'c\' and double \'r\'.'
      }
    ],
    rememberCard: {
      title: 'Remember: Doubling Rule',
      bullets: [
        '1-1-1 rule: 1 syllable + 1 vowel + 1 consonant = double (stop -> stopped).',
        '2 syllables: double ONLY if stress is on the END (preferred vs offered).',
        'British English: final "L" always doubles (travelling, cancelled).'
      ]
    }
  },
  {
    id: 'spell-silent-e',
    topicId: 'spelling',
    title: 'Dropping Silent "E"',
    subtitle: 'Vowel suffixes drop it, consonant suffixes keep it',
    order: 3,
    explanationSteps: [
      {
        title: 'Drop "E" Before Vowel Suffixes',
        text: 'When adding a suffix that begins with a VOWEL (-ing, -able, -ous, -ed), DROP the silent "e": hope -> hoping, write -> writing, desire -> desirable, fame -> famous.',
        visual: {
          type: 'formula',
          title: 'Drop Formula',
          formulaTokens: [
            { text: 'Base with Silent E (hope)', highlight: true, color: 'past' },
            { text: '+ Vowel Suffix (-ing)', highlight: true, color: 'present' },
            { text: '= Drop E (hoping)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Keep "E" Before Consonant Suffixes',
        text: 'When adding a suffix that begins with a CONSONANT (-ful, -ment, -less, -ly), KEEP the silent "e": hope -> hopeful, safe -> safety, arrange -> arrangement.',
        visual: {
          type: 'comparison',
          title: 'Vowel vs Consonant Suffix',
          leftSide: {
            label: 'Vowel Suffix (Drop E)',
            text: 'care + ing = caring / use + able = usable',
            tag: 'Drop silent e'
          },
          rightSide: {
            label: 'Consonant Suffix (Keep E)',
            text: 'care + ful = careful / use + less = useless',
            tag: 'Keep silent e'
          }
        }
      },
      {
        title: 'Crucial Exception: Soft "C" and "G"',
        text: 'Keep the silent "e" after soft "c" and "g" before suffixes starting with "a" or "o" to preserve the soft sound: noticeable, courageous, changeable (NOT noticable).',
        visual: {
          type: 'chips',
          title: 'Soft C and G Keepers',
          items: [
            { label: 'Noticeable', value: 'keeps e so c sounds like "s"' },
            { label: 'Courageous', value: 'keeps e so g sounds like "j"' },
            { label: 'Changeable', value: 'keeps e so g sounds like "j"' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-se-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the adjective formed from "notice":',
        options: ['noticeable', 'noticable', 'noticeble', 'notiseable'],
        correctAnswer: 0,
        explanation: 'Keep the \'e\' after soft \'c\' before -able to preserve the soft "s" sound: "noticeable".'
      },
      {
        id: 'spell-se-p2',
        type: 'fill_gap',
        prompt: 'The firefighter performed a _____ act by entering the blazing building.',
        options: ['courageous', 'couragous', 'courageus', 'couragus'],
        correctAnswer: 0,
        explanation: 'Keep the \'e\' after soft \'g\' to preserve the soft "j" sound: "courageous".'
      },
      {
        id: 'spell-se-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled word with silent e:',
        words: ['She', 'was', 'writting', 'a', 'comprehensive', 'study', 'guide.'],
        wrongWordIndex: 2,
        correction: 'writing',
        explanation: 'Drop the silent \'e\' in "write" before the vowel suffix -ing: "writing" (single t).'
      },
      {
        id: 'spell-se-p4',
        type: 'match_pairs',
        prompt: 'Match base word to its correct suffix form:',
        pairs: [
          { left: 'Hope + -ful', right: 'Hopeful (keep e before consonant)' },
          { left: 'Hope + -ing', right: 'Hoping (drop e before vowel)' },
          { left: 'Notice + -able', right: 'Noticeable (exception: keep e for soft c)' },
          { left: 'Safe + -ty', right: 'Safety (keep e before consonant)' }
        ],
        explanation: 'Vowel suffixes drop \'e\', consonant suffixes keep \'e\', and soft c/g exceptions keep \'e\'.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-se-r1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the word formed from "change" + "-able":',
        options: ['changeable', 'changable', 'changeble', 'changible'],
        correctAnswer: 0,
        explanation: 'Keep the \'e\' to maintain the soft "j" sound of the \'g\': "changeable".'
      },
      {
        id: 'spell-se-r2',
        type: 'fill_gap',
        prompt: 'The manager completed the final room _____ for the delegates.',
        options: ['arrangement', 'arrangment', 'arrangemant', 'arrangment'],
        correctAnswer: 0,
        explanation: 'Before the consonant suffix -ment, keep the silent \'e\': "arrangement".'
      },
      {
        id: 'spell-se-r3',
        type: 'bucket_sort',
        prompt: 'Sort words by whether silent "e" was kept or dropped:',
        buckets: ['Kept Silent E', 'Dropped Silent E'],
        itemsToSort: [
          { text: 'Noticeable / Courageous', correctBucketIndex: 0 },
          { text: 'Hoping / Writing', correctBucketIndex: 1 },
          { text: 'Peaceful / Safety', correctBucketIndex: 0 },
          { text: 'Desirable / Usable', correctBucketIndex: 1 }
        ],
        explanation: 'Consonant suffixes and soft c/g words keep \'e\'; standard vowel suffixes drop \'e\'.'
      },
      {
        id: 'spell-se-r4',
        type: 'multiple_choice',
        prompt: 'Which word drops the silent "e" correctly?',
        options: ['desirable', 'desireable', 'desirble', 'desireing'],
        correctAnswer: 0,
        explanation: 'Drop silent \'e\' in "desire" before -able: "desirable".'
      }
    ],
    rememberCard: {
      title: 'Remember: Silent E',
      bullets: [
        'Drop "e" before vowel suffixes (write -> writing, desire -> desirable).',
        'Keep "e" before consonant suffixes (hope -> hopeful, safe -> safety).',
        'Exceptions: KEEP "e" for soft c/g before a/o (noticeable, courageous).'
      ]
    }
  },
  {
    id: 'spell-y-rule',
    topicId: 'spelling',
    title: 'The "Y" to "I" Transformation Rule',
    subtitle: 'Consonant + Y changes to I, Vowel + Y stays',
    order: 4,
    explanationSteps: [
      {
        title: 'Consonant + Y Changes to I',
        text: 'When a word ends in a consonant followed by "y", change "y" to "i" before adding suffixes (-es, -ed, -er, -ly, -ness): study -> studies, happy -> happiness, carry -> carried.',
        visual: {
          type: 'formula',
          title: 'The Y to I Equation',
          formulaTokens: [
            { text: 'Consonant + Y (happy)', highlight: true, color: 'past' },
            { text: '+ Suffix (-ness)', highlight: true, color: 'present' },
            { text: '= Change to I (happiness)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'The -ING Exception (No Double II)',
        text: 'Keep the "y" when adding -ing so English doesn\'t end up with an awkward double "ii": study -> studying, cry -> crying, fly -> flying.',
        visual: {
          type: 'comparison',
          title: 'The -ing Exception',
          leftSide: {
            label: 'Standard Suffix (Change to I)',
            text: 'study + ed = studied / study + es = studies',
            tag: 'Y becomes I'
          },
          rightSide: {
            label: 'With -ING (Keep Y)',
            text: 'study + ing = studying (NOT studiing)',
            tag: 'Avoid double ii'
          }
        }
      },
      {
        title: 'Vowel + Y Words Stay as Y',
        text: 'If a vowel comes before "y", the "y" NEVER changes: play -> played, enjoy -> enjoyed, key -> keys, boy -> boys.',
        visual: {
          type: 'chips',
          title: 'Vowel + Y Keeps Y',
          items: [
            { label: 'play + ed', value: 'played (NOT plaid)' },
            { label: 'enjoy + ment', value: 'enjoyment' },
            { label: 'delay + ed', value: 'delayed' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-yr-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of "busy" + "-ness":',
        options: ['business', 'busyness', 'busines', 'buisness'],
        correctAnswer: 0,
        explanation: 'Consonant \'s\' + \'y\' changes to \'i\': "business".'
      },
      {
        id: 'spell-yr-p2',
        type: 'fill_gap',
        prompt: 'She spent the entire evening _____ for her upcoming chemistry exam.',
        options: ['studying', 'studiing', 'studyng', 'studing'],
        correctAnswer: 0,
        explanation: 'Before -ing, keep the \'y\' to avoid double \'ii\': "studying".'
      },
      {
        id: 'spell-yr-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled word with a vowel + y ending:',
        words: ['They', 'enjoid', 'the', 'musical', 'performance', 'immensely.'],
        wrongWordIndex: 1,
        correction: 'enjoyed',
        explanation: 'In "enjoy", a vowel precedes \'y\', so \'y\' does not change: "enjoyed".'
      },
      {
        id: 'spell-yr-p4',
        type: 'match_pairs',
        prompt: 'Match base word to its transformed suffix partner:',
        pairs: [
          { left: 'Beauty + -ful', right: 'Beautiful (y becomes i)' },
          { left: 'Play + -ed', right: 'Played (vowel + y stays)' },
          { left: 'Carry + -ing', right: 'Carrying (keep y before -ing)' },
          { left: 'Happy + -ly', right: 'Happily (y becomes i)' }
        ],
        explanation: 'Consonant+y shifts to i; vowel+y stays; -ing always keeps y.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-yr-r1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of "rely" + "-able":',
        options: ['reliable', 'relyable', 'relieble', 'relible'],
        correctAnswer: 0,
        explanation: 'Consonant \'l\' + \'y\' changes to \'i\': "reliable".'
      },
      {
        id: 'spell-yr-r2',
        type: 'fill_gap',
        prompt: 'The young child was _____ loudly in the supermarket aisle.',
        options: ['crying', 'criing', 'cryng', 'cried'],
        correctAnswer: 0,
        explanation: 'Before -ing, preserve the \'y\': "crying".'
      },
      {
        id: 'spell-yr-r3',
        type: 'bucket_sort',
        prompt: 'Sort base words by what happens when adding -ed:',
        buckets: ['Changes Y to I (studied)', 'Keeps Y (played)'],
        itemsToSort: [
          { text: 'Cry -> Cried', correctBucketIndex: 0 },
          { text: 'Stay -> Stayed', correctBucketIndex: 1 },
          { text: 'Marry -> Married', correctBucketIndex: 0 },
          { text: 'Obey -> Obeyed', correctBucketIndex: 1 }
        ],
        explanation: 'Consonant+y changes to i; vowel+y keeps y.'
      },
      {
        id: 'spell-yr-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the correct spelling:',
        jumbledWords: ['solved', 'easily.', 'was', 'The', 'puzzle'],
        correctSentenceWords: ['The', 'puzzle', 'was', 'easily.', 'solved'],
        explanation: '"Easy" becomes "easily" (y changes to i before -ly).'
      }
    ],
    rememberCard: {
      title: 'Remember: The Y Rule',
      bullets: [
        'Consonant + Y changes to I before suffixes (happy -> happily).',
        'Vowel + Y stays as Y (play -> played, enjoy -> enjoyment).',
        'Always keep Y before -ing to avoid double "ii" (studying, crying).'
      ]
    }
  },
  {
    id: 'spell-i-before-e',
    topicId: 'spelling',
    title: '"I Before E Except After C"',
    subtitle: 'The rhyme, the rule, and the 6 dangerous exceptions',
    order: 5,
    explanationSteps: [
      {
        title: 'The Classic Rhyme',
        text: '"I before E, except after C, or when sounded like A, as in neighbor and weigh." This covers 90% of words with the ee sound.',
        visual: {
          type: 'comparison',
          title: 'Standard Rule',
          leftSide: {
            label: 'I Before E (Standard)',
            text: 'believe / achieve / relief / niece / piece',
            tag: 'IE pattern'
          },
          rightSide: {
            label: 'Except After C',
            text: 'receive / deceive / ceiling / receipt',
            tag: 'EI after letter C'
          }
        }
      },
      {
        title: 'Sounding Like "A"',
        text: 'When the letters make an "ay" sound (like "day"), they are always spelled EI: neighbor, weigh, freight, veil, reign.',
        visual: {
          type: 'chips',
          title: 'Sounding Like "A"',
          items: [
            { label: 'Weigh', value: 'weigh, weight, weighty' },
            { label: 'Neighbor', value: 'neighbor, neighborhood' },
            { label: 'Freight', value: 'freight, veil, reign' }
          ]
        }
      },
      {
        title: 'The 6 "Weird" Exceptions You Must Memorize',
        text: 'Examiners specifically target the words that BREAK the rule. Memorize these six demons: WEIRD, SEIZE, FOREIGN, HEIGHT, LEISURE, NEITHER.',
        visual: {
          type: 'chips',
          title: 'The 6 Rule Breakers',
          items: [
            { label: 'Weird', value: 'w-e-i-r-d (breaks rule)' },
            { label: 'Seize', value: 's-e-i-z-e (breaks rule)' },
            { label: 'Foreign', value: 'f-o-r-e-i-g-n (breaks rule)' },
            { label: 'Leisure', value: 'l-e-i-s-u-r-e (breaks rule)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-ie-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the document confirming payment:',
        options: ['receipt', 'reciept', 'receit', 'reseipt'],
        correctAnswer: 0,
        explanation: 'Follows "except after C": r-e-c-e-i-p-t (with silent p).'
      },
      {
        id: 'spell-ie-p2',
        type: 'fill_gap',
        prompt: 'With hard work and determination, you will _____ your goals.',
        options: ['achieve', 'acheive', 'achiieve', 'acheeve'],
        correctAnswer: 0,
        explanation: 'Follows "I before E": a-c-h-i-e-v-e.'
      },
      {
        id: 'spell-ie-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled rule-breaker in this sentence:',
        words: ['The', 'detective', 'noticed', 'a', 'wierd', 'shadow', 'in', 'the', 'alley.'],
        wrongWordIndex: 4,
        correction: 'weird',
        explanation: '"Weird" is a famous exception spelled w-e-i-r-d, NOT w-i-e-r-d.'
      },
      {
        id: 'spell-ie-p4',
        type: 'match_pairs',
        prompt: 'Match word to its spelling rule reason:',
        pairs: [
          { left: 'Believe', right: 'Standard: I before E' },
          { left: 'Ceiling', right: 'After C: EI pattern' },
          { left: 'Weigh', right: 'Sounds like A: EI pattern' },
          { left: 'Seize', right: 'Rule breaker exception: EI' }
        ],
        explanation: 'Identifying the rule reason eliminates second-guessing on exams.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-ie-r1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the word meaning not domestic:',
        options: ['foreign', 'foriegn', 'forign', 'forein'],
        correctAnswer: 0,
        explanation: '"Foreign" is an exception spelled f-o-r-e-i-g-n (with silent g).'
      },
      {
        id: 'spell-ie-r2',
        type: 'fill_gap',
        prompt: 'Police were authorized to _____ the illegal contraband at customs.',
        options: ['seize', 'sieze', 'seeze', 'seaze'],
        correctAnswer: 0,
        explanation: '"Seize" is an exception spelled s-e-i-z-e.'
      },
      {
        id: 'spell-ie-r3',
        type: 'bucket_sort',
        prompt: 'Sort words by whether they use IE or EI:',
        buckets: ['Spelled with IE', 'Spelled with EI'],
        itemsToSort: [
          { text: 'Believe / Achieve', correctBucketIndex: 0 },
          { text: 'Receive / Ceiling', correctBucketIndex: 1 },
          { text: 'Relief / Piece', correctBucketIndex: 0 },
          { text: 'Weird / Foreign', correctBucketIndex: 1 }
        ],
        explanation: 'Standard "ee" words use IE; words after C or exceptions use EI.'
      },
      {
        id: 'spell-ie-r4',
        type: 'multiple_choice',
        prompt: 'Choose the sentence with correct spelling:',
        options: [
          'Neither neighbor received the package.',
          'Neither nieghbor recieved the package.',
          'Niether neighbor received the package.',
          'Neither neighbor recieved the package.'
        ],
        correctAnswer: 0,
        explanation: 'Neither (exception EI), neighbor (sounds like A: EI), received (after C: EI).'
      }
    ],
    rememberCard: {
      title: 'Remember: I Before E',
      bullets: [
        'I before E (believe, achieve, relief).',
        'Except after C (receive, ceiling, receipt).',
        'Memorize the 6 exceptions: WEIRD, SEIZE, FOREIGN, HEIGHT, LEISURE, NEITHER.'
      ]
    }
  },
  {
    id: 'spell-silent-letters',
    topicId: 'spelling',
    title: 'Silent Letters Decoder',
    subtitle: 'Silent K, B, W, G, L, and P explained',
    order: 6,
    explanationSteps: [
      {
        title: 'Why Are Letters Silent?',
        text: 'Silent letters are historical fossils from Old English, Latin, and French. Centuries ago they were pronounced, but while pronunciation simplified, spelling remained frozen.',
        visual: {
          type: 'chips',
          title: 'Common Silent Letter Families',
          items: [
            { label: 'Silent K', value: 'knife, knight, know, knee' },
            { label: 'Silent B', value: 'debt, doubt, subtle, climb, thumb' },
            { label: 'Silent W', value: 'write, wrist, sword, answer' },
            { label: 'Silent G', value: 'sign, foreign, campaign, design' }
          ]
        }
      },
      {
        title: 'Silent B & Subtle Traps',
        text: 'The "b" is silent after "m" (climb, thumb, bomb) and before "t" (debt, doubt, subtle). Writing "det" or "dout" is an instant exam fail.',
        visual: {
          type: 'comparison',
          title: 'Silent B Words',
          leftSide: {
            label: 'Silent B Before T',
            text: 'debt / doubt / subtle',
            tag: 'Pronounced det, dout, sut-tle'
          },
          rightSide: {
            label: 'Silent B After M',
            text: 'climb / thumb / bomb / comb',
            tag: 'Pronounced clime, thum'
          }
        }
      },
      {
        title: 'Silent P and Greek Roots',
        text: 'Initial "p" is silent before "s" and "n" in words of Greek medical and psychological origin: psychology, psychiatrist, pneumonia. Also silent in the common word "receipt".',
        visual: {
          type: 'chips',
          title: 'Silent P Examples',
          items: [
            { label: 'Psychology', value: 'p is silent (pronounced sy-col-o-gy)' },
            { label: 'Pneumonia', value: 'p is silent (pronounced new-mo-nia)' },
            { label: 'Receipt', value: 'p is silent (pronounced re-ceet)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-sl-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the word meaning delicate or faint:',
        options: ['subtle', 'suttle', 'subtule', 'sutle'],
        correctAnswer: 0,
        explanation: '"Subtle" contains a silent \'b\': s-u-b-t-l-e.'
      },
      {
        id: 'spell-sl-p2',
        type: 'fill_gap',
        prompt: 'The government launched a nationwide anti-smoking _____ in schools.',
        options: ['campaign', 'campain', 'campagne', 'campaing'],
        correctAnswer: 0,
        explanation: '"Campaign" contains a silent \'g\': c-a-m-p-a-i-g-n.'
      },
      {
        id: 'spell-sl-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled word missing its silent letter:',
        words: ['He', 'repaid', 'his', 'entire', 'bank', 'det', 'within', 'two', 'years.'],
        wrongWordIndex: 5,
        correction: 'debt',
        explanation: 'Must include the silent \'b\': "debt", not "det".'
      },
      {
        id: 'spell-sl-p4',
        type: 'match_pairs',
        prompt: 'Match word to its silent letter:',
        pairs: [
          { left: 'Doubt', right: 'Silent B' },
          { left: 'Foreign', right: 'Silent G' },
          { left: 'Knight', right: 'Silent K' },
          { left: 'Receipt', right: 'Silent P' }
        ],
        explanation: 'Recognizing which letter is silent fixes spelling memory instantly.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-sl-r1',
        type: 'multiple_choice',
        prompt: 'Which word contains a SILENT "P"?',
        options: ['Psychology', 'Postpone', 'Paragraph', 'Propose'],
        correctAnswer: 0,
        explanation: 'In "Psychology", the initial \'P\' before \'s\' is silent.'
      },
      {
        id: 'spell-sl-r2',
        type: 'fill_gap',
        prompt: 'Always request an official _____ whenever you pay for goods in cash.',
        options: ['receipt', 'reciept', 'receit', 'reseit'],
        correctAnswer: 0,
        explanation: '"Receipt" is spelled r-e-c-e-i-p-t (with silent p).'
      },
      {
        id: 'spell-sl-r3',
        type: 'bucket_sort',
        prompt: 'Sort words by their silent letter:',
        buckets: ['Contains Silent B', 'Contains Silent W'],
        itemsToSort: [
          { text: 'Debt / Subtle', correctBucketIndex: 0 },
          { text: 'Sword / Answer', correctBucketIndex: 1 },
          { text: 'Doubt / Climb', correctBucketIndex: 0 },
          { text: 'Wrist / Write', correctBucketIndex: 1 }
        ],
        explanation: 'Debt, subtle, doubt have silent b; sword, answer, wrist have silent w.'
      },
      {
        id: 'spell-sl-r4',
        type: 'sentence_builder',
        prompt: 'Assemble the sentence with the silent letter word:',
        jumbledWords: ['cleared', 'the', 'bank', 'debt.', 'She'],
        correctSentenceWords: ['She', 'cleared', 'the', 'bank', 'debt.'],
        explanation: '"Debt" contains a silent \'b\'.'
      }
    ],
    rememberCard: {
      title: 'Remember: Silent Letters',
      bullets: [
        'Silent B: debt, doubt, subtle, climb, thumb.',
        'Silent G: foreign, campaign, sign, design.',
        'Silent P: receipt, psychology, pneumonia.'
      ]
    }
  },
  {
    id: 'spell-homophones',
    topicId: 'spelling',
    title: 'The Homophone Trap',
    subtitle: 'Their/There/They\'re, Its/It\'s, and Sight/Site/Cite',
    order: 7,
    explanationSteps: [
      {
        title: 'Their vs There vs They\'re',
        text: 'THEIR = possession (their car). THERE = location/direction (put it over there). THEY\'RE = contraction of "they are" (they\'re coming today).',
        visual: {
          type: 'table',
          title: 'The "There" Triplet',
          headers: ['Word', 'Grammar Category', 'Example'],
          rows: [
            ['Their', 'Possessive adjective', 'Their house is on the corner.'],
            ['There', 'Location / Dummy subject', 'Stand over there. There is a book.'],
            ['They\'re', 'Contraction (they are)', 'They\'re studying for the exam.']
          ]
        }
      },
      {
        title: 'Its vs It\'s',
        text: 'IT\'S with an apostrophe ALWAYS means "it is" or "it has". ITS without an apostrophe is a possessive pronoun: "The dog wagged ITS tail."',
        visual: {
          type: 'comparison',
          title: 'The Apostrophe Test',
          leftSide: {
            label: 'It\'s (Contraction)',
            text: 'It\'s raining outside. (= It is raining)',
            tag: 'Replace with "it is"'
          },
          rightSide: {
            label: 'Its (Possession)',
            text: 'The company changed its policy.',
            tag: 'Cannot say "it is policy"'
          }
        }
      },
      {
        title: 'Sight vs Site vs Cite',
        text: 'SIGHT = vision or view (a beautiful sight). SITE = location or website (building site). CITE = to quote a source in academic research (cite your references).',
        visual: {
          type: 'chips',
          title: 'Academic Homophones',
          items: [
            { label: 'Sight', value: 'vision, optical ability' },
            { label: 'Site', value: 'physical location or web URL' },
            { label: 'Cite', value: 'to quote or reference an academic author' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-hp-p1',
        type: 'multiple_choice',
        prompt: 'The university purchased a new construction _____ for the science faculty.',
        options: ['site', 'sight', 'cite', 'cyte'],
        correctAnswer: 0,
        explanation: '"Site" refers to a physical plot of land or location.'
      },
      {
        id: 'spell-hp-p2',
        type: 'fill_gap',
        prompt: 'The university updated _____ admission guidelines for international students.',
        options: ['its', 'it\'s', 'its\'', 'itself'],
        correctAnswer: 0,
        explanation: 'Possession requires "its" without an apostrophe. "It\'s" would mean "it is".'
      },
      {
        id: 'spell-hp-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the homophone error in this academic citation instruction:',
        words: ['Students', 'must', 'sight', 'at', 'least', 'three', 'scholarly', 'articles.'],
        wrongWordIndex: 2,
        correction: 'cite',
        explanation: 'To quote an academic source is to "cite", not "sight" (vision).'
      },
      {
        id: 'spell-hp-p4',
        type: 'match_pairs',
        prompt: 'Match homophone to its correct definition:',
        pairs: [
          { left: 'They\'re', right: 'Contraction of "they are"' },
          { left: 'Their', right: 'Possessive (belonging to them)' },
          { left: 'There', right: 'Location or dummy subject' },
          { left: 'It\'s', right: 'Contraction of "it is"' }
        ],
        explanation: 'Mastering these three-way homophones stops the most common exam spelling errors.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-hp-r1',
        type: 'multiple_choice',
        prompt: 'The mountain summit at sunrise was a breathtaking _____ .',
        options: ['sight', 'site', 'cite', 'scight'],
        correctAnswer: 0,
        explanation: '"Sight" refers to a visual view or scene.'
      },
      {
        id: 'spell-hp-r2',
        type: 'fill_gap',
        prompt: '_____ planning to announce their decision tomorrow morning.',
        options: ['They\'re', 'Their', 'There', 'There\'re'],
        correctAnswer: 0,
        explanation: '"They\'re" is the contraction of "They are".'
      },
      {
        id: 'spell-hp-r3',
        type: 'bucket_sort',
        prompt: 'Sort sentences by whether they need ITS or IT\'S:',
        buckets: ['Needs "ITS" (Possessive)', 'Needs "IT\'S" (It is)'],
        itemsToSort: [
          { text: 'The cat licked ___ paws.', correctBucketIndex: 0 },
          { text: '___ time to begin the exam.', correctBucketIndex: 1 },
          { text: 'The tree lost all ___ leaves.', correctBucketIndex: 0 },
          { text: '___ an undeniable fact.', correctBucketIndex: 1 }
        ],
        explanation: 'If "it is" fits smoothly, use IT\'S; if showing ownership, use ITS.'
      },
      {
        id: 'spell-hp-r4',
        type: 'multiple_choice',
        prompt: 'Which sentence uses homophones 100% CORRECTLY?',
        options: [
          'They left their books over there because it\'s raining.',
          'They left there books over their because its raining.',
          'They left they\'re books over there because it\'s raining.',
          'They left their books over they\'re because its raining.'
        ],
        correctAnswer: 0,
        explanation: 'Their (possession), there (location), it\'s (it is raining).'
      }
    ],
    rememberCard: {
      title: 'Remember: Homophones',
      bullets: [
        'They\'re = they are; Their = possession; There = location.',
        'It\'s = it is; Its = possession (no apostrophe for ownership).',
        'Site = location/URL; Sight = vision; Cite = quote sources.'
      ]
    }
  },
  {
    id: 'spell-uk-us-misspelled',
    topicId: 'spelling',
    title: 'Top Misspelled Words & UK vs US Variants',
    subtitle: 'Definitely, accommodation, embarrassment, and colour/color',
    order: 8,
    explanationSteps: [
      {
        title: 'British vs American Conventions',
        text: 'In standard entrance exams, British spelling is the formal benchmark. Notice the key regular differences:',
        visual: {
          type: 'table',
          title: 'UK vs US Spelling Shifts',
          headers: ['Pattern', 'British English (Exam Default)', 'American Variant'],
          rows: [
            ['-our vs -or', 'colour, flavour, honour', 'color, flavor, honor'],
            ['-re vs -er', 'centre, theatre, metre', 'center, theater, meter'],
            ['-ise / -yse', 'organise, analyse, paralyse', 'organize, analyze, paralyze'],
            ['-ll- vs -l-', 'travelling, cancelled', 'traveling, canceled']
          ]
        }
      },
      {
        title: 'The Top 5 Exam Demon Words',
        text: 'These five words cause 60% of all spelling errors in entrance exams:',
        visual: {
          type: 'chips',
          title: 'The Top 5 Demons',
          items: [
            { label: 'Definitely', value: 'd-e-f-i-n-i-t-e-l-y (NO "a")' },
            { label: 'Accommodation', value: 'double c, double m (a-c-c-o-m-m-o-d-a-t-i-o-n)' },
            { label: 'Embarrassment', value: 'double r, double s (e-m-b-a-r-r-a-s-s-m-e-n-t)' },
            { label: 'Separate', value: 's-e-p-a-r-a-t-e ("a rat" in the middle)' },
            { label: 'Necessary', value: 'one c, two s\'s (1 collar, 2 socks)' }
          ]
        }
      },
      {
        title: 'The "A RAT" Memory Trick',
        text: 'Never write "seperate". Remember: there is "A RAT" in sep-A-RAT-e! This simple visual device guarantees you will never misspell this word again.',
        visual: {
          type: 'formula',
          title: 'Separate Formula',
          formulaTokens: [
            { text: 'SEP', highlight: false },
            { text: '+ A RAT +', highlight: true, color: 'future' },
            { text: 'E', highlight: false },
            { text: '= SEPARATE', highlight: true, color: 'present' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'spell-uk-p1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the word meaning without doubt:',
        options: ['definitely', 'definately', 'definitly', 'defanately'],
        correctAnswer: 0,
        explanation: '"Definitely" has an "i" in the middle (from "finite"), never an "a".'
      },
      {
        id: 'spell-uk-p2',
        type: 'fill_gap',
        prompt: 'The hotel provides comfortable _____ for visiting delegates.',
        options: ['accommodation', 'accomodation', 'acommodation', 'acomodation'],
        correctAnswer: 0,
        explanation: '"Accommodation" has DOUBLE C and DOUBLE M: a-c-c-o-m-m-o-d-a-t-i-o-n.'
      },
      {
        id: 'spell-uk-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the misspelled word in this sentence:',
        words: ['Please', 'keep', 'these', 'two', 'folders', 'seperate', 'from', 'each', 'other.'],
        wrongWordIndex: 5,
        correction: 'separate',
        explanation: 'Remember "a rat" in the middle: s-e-p-a-r-a-t-e.'
      },
      {
        id: 'spell-uk-p4',
        type: 'match_pairs',
        prompt: 'Match word to its spelling mnemonic:',
        pairs: [
          { left: 'Separate', right: 'Contains "a rat" in the middle' },
          { left: 'Necessary', right: '1 collar (c) and 2 socks (ss)' },
          { left: 'Embarrassment', right: 'Double R and double S' },
          { left: 'Definitely', right: 'Rooted in "finite" (has an i)' }
        ],
        explanation: 'Spelling mnemonics prevent slip-ups on the most commonly failed words.'
      }
    ],
    retryPractice: [
      {
        id: 'spell-uk-r1',
        type: 'multiple_choice',
        prompt: 'Choose the correct spelling of the noun formed from "embarrass":',
        options: ['embarrassment', 'embarassment', 'embarrasment', 'embarasment'],
        correctAnswer: 0,
        explanation: '"Embarrassment" has DOUBLE R and DOUBLE S.'
      },
      {
        id: 'spell-uk-r2',
        type: 'fill_gap',
        prompt: 'It is _____ to complete all fields marked with an asterisk.',
        options: ['necessary', 'neccessary', 'necessery', 'necesary'],
        correctAnswer: 0,
        explanation: '"Necessary" has one C and double S: n-e-c-e-s-s-a-r-y.'
      },
      {
        id: 'spell-uk-r3',
        type: 'bucket_sort',
        prompt: 'Sort spellings into British English vs American English standard:',
        buckets: ['British Standard (Exam Default)', 'American Variant'],
        itemsToSort: [
          { text: 'Colour / Flavour', correctBucketIndex: 0 },
          { text: 'Color / Flavor', correctBucketIndex: 1 },
          { text: 'Centre / Theatre', correctBucketIndex: 0 },
          { text: 'Center / Theater', correctBucketIndex: 1 }
        ],
        explanation: 'British standard uses -our and -re; American English uses -or and -er.'
      },
      {
        id: 'spell-uk-r4',
        type: 'multiple_choice',
        prompt: 'Which word is spelled 100% CORRECTLY?',
        options: ['privilege', 'priviledge', 'privelege', 'privlege'],
        correctAnswer: 0,
        explanation: '"Privilege" has no "d": p-r-i-v-i-l-e-g-e.'
      }
    ],
    rememberCard: {
      title: 'Remember: Spelling Demons',
      bullets: [
        'Definitely has an "i" (no "a"): d-e-f-i-n-i-t-e-l-y.',
        'Accommodation = double c, double m; Embarrassment = double r, double s.',
        'Separate has "a rat" in the middle: s-e-p-a-r-a-t-e.'
      ]
    }
  }
];

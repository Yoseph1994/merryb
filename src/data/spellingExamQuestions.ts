import { ExamQuestion } from '../types';

export const SPELLING_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 'sq-01',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'easy',
    question: 'Choose the word that is spelled correctly:',
    options: ['definitely', 'definately', 'definitly', 'definetely'],
    correctAnswerIndex: 0,
    explanation: '"Definitely" comes from the Latin root "finite" and contains no letter "a": d-e-f-i-n-i-t-e-l-y.'
  },
  {
    id: 'sq-02',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'easy',
    question: 'The university provides subsidized _____ for postgraduate researchers.',
    options: ['accommodation', 'accomodation', 'acommodation', 'acomodation'],
    correctAnswerIndex: 0,
    explanation: '"Accommodation" has two C\'s and two M\'s: a-c-c-o-m-m-o-d-a-t-i-o-n.'
  },
  {
    id: 'sq-03',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'easy',
    question: 'Please place the financial statements into a _____ folder.',
    options: ['separate', 'seperate', 'separete', 'separit'],
    correctAnswerIndex: 0,
    explanation: 'Remember the mnemonic "a rat in separate": s-e-p-a-r-a-t-e.'
  },
  {
    id: 'sq-04',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'medium',
    question: 'He felt intense _____ after tripping over the microphone cable on stage.',
    options: ['embarrassment', 'embarassment', 'embarrasment', 'embarasment'],
    correctAnswerIndex: 0,
    explanation: '"Embarrassment" requires double R and double S: e-m-b-a-r-r-a-s-s-m-e-n-t.'
  },
  {
    id: 'sq-05',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'medium',
    question: 'Wearing safety goggles is strictly _____ in the chemistry laboratory.',
    options: ['necessary', 'neccessary', 'necessery', 'necesary'],
    correctAnswerIndex: 0,
    explanation: '"Necessary" has one C and two S\'s: n-e-c-e-s-s-a-r-y.'
  },
  {
    id: 'sq-06',
    topicId: 'spelling',
    lessonItemId: 'spell-plurals',
    difficulty: 'easy',
    question: 'The committee developed four strict _____ for evaluating scholarship candidates.',
    options: ['criteria', 'criterions', 'criterias', 'criterionies'],
    correctAnswerIndex: 0,
    explanation: 'The academic plural of the Greek root "criterion" is "criteria".'
  },
  {
    id: 'sq-07',
    topicId: 'spelling',
    lessonItemId: 'spell-plurals',
    difficulty: 'medium',
    question: 'Astronomers observed several rare solar _____ through the high-powered telescope.',
    options: ['phenomena', 'phenomenons', 'phenomenas', 'phenomenon'],
    correctAnswerIndex: 0,
    explanation: 'The Greek root plural of "phenomenon" is "phenomena".'
  },
  {
    id: 'sq-08',
    topicId: 'spelling',
    lessonItemId: 'spell-plurals',
    difficulty: 'medium',
    question: 'The financial consultancy conducted in-depth _____ of three global corporations.',
    options: ['analyses', 'analysises', 'analysies', 'analysi'],
    correctAnswerIndex: 0,
    explanation: 'Nouns ending in -is become -es in the plural: "analyses".'
  },
  {
    id: 'sq-09',
    topicId: 'spelling',
    lessonItemId: 'spell-doubling',
    difficulty: 'medium',
    question: 'Choose the correct British English spelling:',
    options: ['travelling', 'traveling', 'travaling', 'travalled'],
    correctAnswerIndex: 0,
    explanation: 'Under British spelling standards, a final "L" doubles before vowel suffixes: "travelling".'
  },
  {
    id: 'sq-10',
    topicId: 'spelling',
    lessonItemId: 'spell-doubling',
    difficulty: 'medium',
    question: 'The sudden system shutdown _____ at 3:15 PM yesterday.',
    options: ['occurred', 'ocurred', 'occured', 'ocured'],
    correctAnswerIndex: 0,
    explanation: 'Stress is on the second syllable of "occur", so both C and R are doubled: "occurred".'
  },
  {
    id: 'sq-11',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-e',
    difficulty: 'medium',
    question: 'There was a _____ improvement in her spoken fluency after one month of daily practice.',
    options: ['noticeable', 'noticable', 'noticeble', 'notiseable'],
    correctAnswerIndex: 0,
    explanation: 'Keep the silent \'e\' after soft \'c\' before -able to preserve the soft sound: "noticeable".'
  },
  {
    id: 'sq-12',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-e',
    difficulty: 'medium',
    question: 'The crew demonstrated _____ leadership during the emergency evacuation.',
    options: ['courageous', 'couragous', 'courageus', 'couragus'],
    correctAnswerIndex: 0,
    explanation: 'Keep the silent \'e\' after soft \'g\' before -ous: "courageous".'
  },
  {
    id: 'sq-13',
    topicId: 'spelling',
    lessonItemId: 'spell-y-rule',
    difficulty: 'easy',
    question: 'She took pride in the neatness and clarity of her study _____ .',
    options: ['business', 'busyness', 'busines', 'buisness'],
    correctAnswerIndex: 0,
    explanation: '"Busy" + "-ness" changes \'y\' to \'i\': "business".'
  },
  {
    id: 'sq-14',
    topicId: 'spelling',
    lessonItemId: 'spell-y-rule',
    difficulty: 'easy',
    question: 'He is currently _____ for the civil service entrance exam.',
    options: ['studying', 'studiing', 'studyng', 'studing'],
    correctAnswerIndex: 0,
    explanation: 'Keep the \'y\' before -ing to prevent an awkward double "ii": "studying".'
  },
  {
    id: 'sq-15',
    topicId: 'spelling',
    lessonItemId: 'spell-i-before-e',
    difficulty: 'easy',
    question: 'Always ask the cashier for a printed _____ before leaving the store.',
    options: ['receipt', 'reciept', 'receit', 'reseipt'],
    correctAnswerIndex: 0,
    explanation: 'Follows "except after C" (EI) with a silent P: r-e-c-e-i-p-t.'
  },
  {
    id: 'sq-16',
    topicId: 'spelling',
    lessonItemId: 'spell-i-before-e',
    difficulty: 'medium',
    question: 'Which of the following is a famous rule-breaker exception spelled with "EI"?',
    options: ['weird', 'wield', 'shield', 'thief'],
    correctAnswerIndex: 0,
    explanation: '"Weird" is an irregular exception spelled w-e-i-r-d, breaking "I before E".'
  },
  {
    id: 'sq-17',
    topicId: 'spelling',
    lessonItemId: 'spell-i-before-e',
    difficulty: 'medium',
    question: 'Customs officials had legal authority to _____ the undeclared luxury goods.',
    options: ['seize', 'sieze', 'seeze', 'seaze'],
    correctAnswerIndex: 0,
    explanation: '"Seize" breaks the standard rule and is spelled s-e-i-z-e.'
  },
  {
    id: 'sq-18',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-letters',
    difficulty: 'easy',
    question: 'The diplomat settled his family\'s longstanding financial _____ in full.',
    options: ['debt', 'det', 'depbt', 'debit'],
    correctAnswerIndex: 0,
    explanation: '"Debt" contains a silent \'b\': d-e-b-t.'
  },
  {
    id: 'sq-19',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-letters',
    difficulty: 'medium',
    question: 'There was a _____ difference in tone between the draft and final speech.',
    options: ['subtle', 'suttle', 'subtule', 'sutle'],
    correctAnswerIndex: 0,
    explanation: '"Subtle" contains a silent \'b\': s-u-b-t-l-e.'
  },
  {
    id: 'sq-20',
    topicId: 'spelling',
    lessonItemId: 'spell-homophones',
    difficulty: 'easy',
    question: 'The university council announced that _____ tuition fees would remain unchanged.',
    options: ['their', 'there', 'they\'re', 'there\'s'],
    correctAnswerIndex: 0,
    explanation: 'Possession belonging to them is spelled "their".'
  },
  {
    id: 'sq-21',
    topicId: 'spelling',
    lessonItemId: 'spell-homophones',
    difficulty: 'easy',
    question: 'The organization celebrated _____ centenary anniversary last week.',
    options: ['its', 'it\'s', 'its\'', 'itself'],
    correctAnswerIndex: 0,
    explanation: 'Possessive pronoun "its" has no apostrophe.'
  },
  {
    id: 'sq-22',
    topicId: 'spelling',
    lessonItemId: 'spell-homophones',
    difficulty: 'medium',
    question: 'Scholars must accurately _____ every source cited in the literature review.',
    options: ['cite', 'site', 'sight', 'cyte'],
    correctAnswerIndex: 0,
    explanation: '"Cite" (with c) means to quote or reference academic evidence.'
  },
  {
    id: 'sq-23',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'hard',
    question: 'Having access to clean drinking water should be a universal human right, not a luxury _____ .',
    options: ['privilege', 'priviledge', 'privelege', 'privlege'],
    correctAnswerIndex: 0,
    explanation: '"Privilege" contains no letter "d": p-r-i-v-i-l-e-g-e.'
  },
  {
    id: 'sq-24',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'hard',
    question: 'The drum section played a steady, hypnotic _____ throughout the concert.',
    options: ['rhythm', 'rythm', 'rhytm', 'rhythem'],
    correctAnswerIndex: 0,
    explanation: '"Rhythm" is spelled r-h-y-t-h-m (two h\'s, no vowels except y).'
  },
  {
    id: 'sq-25',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'hard',
    question: 'All survey respondents were asked to complete a 10-page research _____ .',
    options: ['questionnaire', 'questionaire', 'questionair', 'questionnare'],
    correctAnswerIndex: 0,
    explanation: '"Questionnaire" has double N: q-u-e-s-t-i-o-n-n-a-i-r-e.'
  },
  {
    id: 'sq-26',
    topicId: 'spelling',
    lessonItemId: 'spell-plurals',
    difficulty: 'easy',
    question: 'The kitchen staff replaced all blunt carving _____ with stainless steel models.',
    options: ['knives', 'knifes', 'knive', 'knifees'],
    correctAnswerIndex: 0,
    explanation: 'Nouns ending in -fe change to -ves: "knives".'
  },
  {
    id: 'sq-27',
    topicId: 'spelling',
    lessonItemId: 'spell-doubling',
    difficulty: 'medium',
    question: 'The candidate _____ that he had made errors during the initial press conference.',
    options: ['admitted', 'admited', 'admittid', 'admitid'],
    correctAnswerIndex: 0,
    explanation: 'Stress is on the second syllable of "admit", so \'t\' doubles: "admitted".'
  },
  {
    id: 'sq-28',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-e',
    difficulty: 'easy',
    question: 'The teacher praised her students for maintaining a _____ classroom environment.',
    options: ['peaceful', 'peacful', 'peacefull', 'peacfull'],
    correctAnswerIndex: 0,
    explanation: 'Before the consonant suffix -ful, keep the silent \'e\': "peaceful".'
  },
  {
    id: 'sq-29',
    topicId: 'spelling',
    lessonItemId: 'spell-i-before-e',
    difficulty: 'easy',
    question: 'A good scientist will never accept a conclusion without empirical _____ .',
    options: ['belief', 'beleif', 'belife', 'beleife'],
    correctAnswerIndex: 0,
    explanation: 'Follows "I before E": b-e-l-i-e-f.'
  },
  {
    id: 'sq-30',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-letters',
    difficulty: 'easy',
    question: 'The company launched an extensive advertising _____ across social media platforms.',
    options: ['campaign', 'campain', 'campagne', 'campaing'],
    correctAnswerIndex: 0,
    explanation: '"Campaign" contains a silent \'g\': c-a-m-p-a-i-g-n.'
  },
  {
    id: 'sq-31',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'medium',
    question: 'In standard British English, how is the word meaning "the middle" spelled?',
    options: ['centre', 'center', 'centur', 'centar'],
    correctAnswerIndex: 0,
    explanation: 'British English standard uses -re: "centre".'
  },
  {
    id: 'sq-32',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'medium',
    question: 'Choose the British English spelling for the noun meaning tint or hue:',
    options: ['colour', 'color', 'collor', 'colore'],
    correctAnswerIndex: 0,
    explanation: 'British English uses -our: "colour".'
  },
  {
    id: 'sq-33',
    topicId: 'spelling',
    lessonItemId: 'spell-homophones',
    difficulty: 'easy',
    question: 'The architects visited the construction _____ to inspect foundation footings.',
    options: ['site', 'sight', 'cite', 'cyte'],
    correctAnswerIndex: 0,
    explanation: '"Site" is a physical location or parcel of land.'
  },
  {
    id: 'sq-34',
    topicId: 'spelling',
    lessonItemId: 'spell-y-rule',
    difficulty: 'easy',
    question: 'The children played _____ in the garden throughout the afternoon.',
    options: ['happily', 'happyly', 'happiely', 'hapily'],
    correctAnswerIndex: 0,
    explanation: '"Happy" + "-ly" changes \'y\' to \'i\': "happily".'
  },
  {
    id: 'sq-35',
    topicId: 'spelling',
    lessonItemId: 'spell-doubling',
    difficulty: 'medium',
    question: 'Which of the following words correctly does NOT double the consonant before -ed?',
    options: ['visited', 'visitted', 'refered', 'admiting'],
    correctAnswerIndex: 0,
    explanation: 'In "visit", stress is on the FIRST syllable (VI-sit), so \'t\' does NOT double: "visited".'
  },
  {
    id: 'sq-36',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-e',
    difficulty: 'medium',
    question: 'The weather in the mountain highlands is notoriously _____ during April.',
    options: ['changeable', 'changable', 'changeble', 'changible'],
    correctAnswerIndex: 0,
    explanation: 'Keep \'e\' after soft \'g\' before -able: "changeable".'
  },
  {
    id: 'sq-37',
    topicId: 'spelling',
    lessonItemId: 'spell-i-before-e',
    difficulty: 'medium',
    question: 'The plaster on the living room _____ had begun to crack.',
    options: ['ceiling', 'cieling', 'ceeling', 'cealing'],
    correctAnswerIndex: 0,
    explanation: 'Follows "except after C": c-e-i-l-i-n-g.'
  },
  {
    id: 'sq-38',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-letters',
    difficulty: 'easy',
    question: 'Medieval armor protected the brave _____ from enemy arrows.',
    options: ['knight', 'nite', 'kight', 'knite'],
    correctAnswerIndex: 0,
    explanation: '"Knight" contains silent \'k\' and silent \'gh\': k-n-i-g-h-t.'
  },
  {
    id: 'sq-39',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'hard',
    question: 'The manufacturers offer a two-year _____ on all replacement parts.',
    options: ['guarantee', 'garantee', 'gaurantee', 'garentee'],
    correctAnswerIndex: 0,
    explanation: '"Guarantee" is spelled g-u-a-r-a-n-t-e-e.'
  },
  {
    id: 'sq-40',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'hard',
    question: 'Heavy flooding in the southern valleys is an annual _____ .',
    options: ['occurrence', 'occurrance', 'occurrancy', 'ocurrence'],
    correctAnswerIndex: 0,
    explanation: '"Occurrence" has double C, double R, and ends in -ence: o-c-c-u-r-r-e-n-c-e.'
  },
  {
    id: 'sq-41',
    topicId: 'spelling',
    lessonItemId: 'spell-plurals',
    difficulty: 'medium',
    question: 'During times of economic _____ , governments often subsidize small businesses.',
    options: ['crises', 'crisises', 'crisas', 'crisi'],
    correctAnswerIndex: 0,
    explanation: 'The plural form of "crisis" is "crises" (Greek root). '
  },
  {
    id: 'sq-42',
    topicId: 'spelling',
    lessonItemId: 'spell-homophones',
    difficulty: 'easy',
    question: 'We walked _____ the grand monument on our way to the theater.',
    options: ['past', 'passed', 'pass', 'paste'],
    correctAnswerIndex: 0,
    explanation: '"Past" is the preposition meaning beyond in space or time.'
  },
  {
    id: 'sq-43',
    topicId: 'spelling',
    lessonItemId: 'spell-silent-letters',
    difficulty: 'medium',
    question: 'The clinical psychologist treated patients suffering from acute _____ .',
    options: ['pneumonia', 'neumonia', 'pneunomia', 'numonia'],
    correctAnswerIndex: 0,
    explanation: '"Pneumonia" begins with a silent \'P\': p-n-e-u-m-o-n-i-a.'
  },
  {
    id: 'sq-44',
    topicId: 'spelling',
    lessonItemId: 'spell-uk-us-misspelled',
    difficulty: 'medium',
    question: 'In standard British spelling, which verb ending is preferred for "to examine"?',
    options: ['analyse', 'analyze', 'analise', 'analize'],
    correctAnswerIndex: 0,
    explanation: 'British standard uses -yse: "analyse".'
  },
  {
    id: 'sq-45',
    topicId: 'spelling',
    lessonItemId: 'spell-i-before-e',
    difficulty: 'medium',
    question: 'The mountain climbers measured the exact _____ of the cliff.',
    options: ['height', 'hight', 'hieght', 'heighth'],
    correctAnswerIndex: 0,
    explanation: '"Height" is an irregular exception spelled h-e-i-g-h-t.'
  }
];

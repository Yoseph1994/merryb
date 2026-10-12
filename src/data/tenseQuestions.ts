export interface TenseQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0 = A, 1 = B, 2 = C, 3 = D
  explanation: string;
  tenseTested: string;
}

export const TENSE_QUESTIONS: TenseQuestion[] = [
  {
    id: 'tense-01',
    question: 'Ethiopian Airlines Flight ET 700 _______ from Addis Ababa Bole International Airport every evening at 23:15.',
    options: ['departs', 'is departing', 'has departed', 'departed'],
    correctAnswer: 0,
    explanation: 'We use the Present Simple ("departs") for scheduled timetables and recurring flight routines. The time clue "every evening" indicates a fixed, repeated schedule.',
    tenseTested: 'Present Simple (Timetables & Routines)'
  },
  {
    id: 'tense-02',
    question: 'The cabin crew _______ the pre-flight safety equipment demonstration right now, so please remain seated.',
    options: ['conducts', 'are conducting', 'have conducted', 'had conducted'],
    correctAnswer: 1,
    explanation: 'The time marker "right now" signals an activity in progress at this exact moment. Present Continuous ("are conducting") is required.',
    tenseTested: 'Present Continuous (Actions Happening Now)'
  },
  {
    id: 'tense-03',
    question: 'The flight attendant noticed that a passenger _______ his passport in the seat pocket after disembarking yesterday.',
    options: ['leaves', 'has left', 'had left', 'was leaving'],
    correctAnswer: 2,
    explanation: 'The passenger left the passport before the flight attendant noticed it in the past. We use the Past Perfect ("had left") for an action completed before another past event ("noticed").',
    tenseTested: 'Past Perfect (Action Before Past Action)'
  },
  {
    id: 'tense-04',
    question: 'Senior Flight Attendant Sara _______ for Ethiopian Airlines since 2019.',
    options: ['is working', 'works', 'has been working', 'worked'],
    correctAnswer: 2,
    explanation: 'The time clue "since 2019" describes an action that started in the past and continues into the present. Present Perfect Continuous ("has been working") emphasizes continuous duration up to now.',
    tenseTested: 'Present Perfect Continuous (Duration Since Past)'
  },
  {
    id: 'tense-05',
    question: 'While the captain _______ the cruising altitude announcement, moderate turbulence suddenly occurred.',
    options: ['made', 'was making', 'has made', 'makes'],
    correctAnswer: 1,
    explanation: 'The time conjunction "While" indicates an ongoing action in the past ("was making") that was interrupted by a sudden completed past action ("occurred").',
    tenseTested: 'Past Continuous (Interrupted Past Action)'
  },
  {
    id: 'tense-06',
    question: 'By the time the aircraft touches down in Paris tomorrow morning, the passengers _______ for over seven hours.',
    options: ['will be sleeping', 'will have been flying', 'flew', 'have flown'],
    correctAnswer: 1,
    explanation: '"By the time..." combined with a future reference ("tomorrow morning") and an ongoing duration ("for over seven hours") calls for the Future Perfect Continuous ("will have been flying").',
    tenseTested: 'Future Perfect Continuous (Duration Before Future Event)'
  },
  {
    id: 'tense-07',
    question: 'The ground crew _______ all checked baggage into the cargo hold before boarding commenced.',
    options: ['had loaded', 'has loaded', 'was loading', 'loaded'],
    correctAnswer: 0,
    explanation: 'The loading of baggage was completed prior to the commencement of boarding in the past. We use Past Perfect ("had loaded") with "before [past event]".',
    tenseTested: 'Past Perfect (Completed Before Past Action)'
  },
  {
    id: 'tense-08',
    question: 'As soon as the fasten seatbelt sign _______ off, the flight attendants will begin the beverage service.',
    options: ['will turn', 'turns', 'is turning', 'turned'],
    correctAnswer: 1,
    explanation: 'In time clauses introduced by "as soon as", "when", or "before", we must use the Present Simple ("turns") to express future time, never "will".',
    tenseTested: 'Present Simple in Future Time Clauses'
  },
  {
    id: 'tense-09',
    question: 'If the passenger had notified us earlier about her nut allergy, the catering team _______ an alternative meal.',
    options: ['prepared', 'will prepare', 'would have prepared', 'had prepared'],
    correctAnswer: 2,
    explanation: 'Third conditional (unreal past): "If + past perfect (had notified)... would have + past participle (would have prepared)".',
    tenseTested: 'Third Conditional (Unreal Past)'
  },
  {
    id: 'tense-10',
    question: 'At this exact time tomorrow, the cabin crew recruits _______ their ditching drill in the training pool.',
    options: ['perform', 'will be performing', 'have performed', 'performed'],
    correctAnswer: 1,
    explanation: 'The specific time phrase "At this exact time tomorrow" refers to an action that will be in progress at a precise point in the future, requiring the Future Continuous ("will be performing").',
    tenseTested: 'Future Continuous (Action in Progress in Future)'
  },
  {
    id: 'tense-11',
    question: 'Ethiopian Airlines _______ its inaugural commercial flight with the Boeing 787 Dreamliner in 2012.',
    options: ['operated', 'has operated', 'operates', 'had operated'],
    correctAnswer: 0,
    explanation: 'When a sentence specifies a completed, definite past time ("in 2012"), we must use the Past Simple ("operated"), never the present perfect.',
    tenseTested: 'Past Simple (Definite Past Time)'
  },
  {
    id: 'tense-12',
    question: 'The purser confirmed that the cleaning team _______ the cabin before boarding began.',
    options: ['already sanitized', 'had already sanitized', 'has already sanitized', 'was already sanitizing'],
    correctAnswer: 1,
    explanation: 'The sanitizing occurred prior to the past moment when boarding began. In past narrative contexts, "already" with a past reference requires the Past Perfect ("had already sanitized").',
    tenseTested: 'Past Perfect with Already'
  },
  {
    id: 'tense-13',
    question: 'Look at the passenger in seat 14B; he looks extremely pale and dizzy, I think he _______ faint.',
    options: ['is going to', 'will', 'faints', 'has fainted'],
    correctAnswer: 0,
    explanation: 'We use "be going to" ("is going to faint") when making a prediction based on present physical evidence ("he looks extremely pale").',
    tenseTested: 'Be Going To (Prediction from Present Evidence)'
  },
  {
    id: 'tense-14',
    question: 'The cadet _______ three aviation security assessments this week, and her final test is on Friday.',
    options: ['completed', 'has completed', 'had completed', 'completes'],
    correctAnswer: 1,
    explanation: 'The time expression "this week" represents an unfinished time period that is still underway. We use the Present Perfect ("has completed") for completed actions in an unfinished time frame.',
    tenseTested: 'Present Perfect (Unfinished Time Period)'
  },
  {
    id: 'tense-15',
    question: 'By the end of this month, Cadet Merry _______ her initial cabin safety and emergency procedures training.',
    options: ['will complete', 'will have completed', 'completes', 'has completed'],
    correctAnswer: 1,
    explanation: 'The time marker "By the end of [future date]" requires the Future Perfect ("will have completed") to describe an action that will be completed prior to a future deadline.',
    tenseTested: 'Future Perfect (Completed Before Future Deadline)'
  },
  {
    id: 'tense-16',
    question: 'If severe turbulence _______ during meal service, flight attendants immediately stow and lock all service carts.',
    options: ['occurs', 'occurred', 'will occur', 'is occurring'],
    correctAnswer: 0,
    explanation: 'This is a Zero Conditional stating a standard aviation operating procedure and universal rule: "If + Present Simple... Present Simple".',
    tenseTested: 'Zero Conditional (Facts & Standard Procedures)'
  },
  {
    id: 'tense-17',
    question: 'When the purser inspected the rear galley, the coffee brewer _______ unusual smoke.',
    options: ['emitted', 'was emitting', 'has emitted', 'emits'],
    correctAnswer: 1,
    explanation: 'The emission of smoke was an ongoing action in progress at the exact moment the purser inspected the galley, requiring the Past Continuous ("was emitting").',
    tenseTested: 'Past Continuous (Action in Progress at Specific Past Time)'
  },
  {
    id: 'tense-18',
    question: 'Excuse me sir, this overhead bin _______ exclusively for emergency medical gear and cannot hold passenger baggage.',
    options: ['is belonging', 'belongs', 'has been belonging', 'belonged'],
    correctAnswer: 1,
    explanation: '"Belong" is a stative verb expressing permanent possession/purpose and is never used in continuous (-ing) tenses in standard English.',
    tenseTested: 'Present Simple with Stative Verbs'
  },
  {
    id: 'tense-19',
    question: 'The gate manager announced that the inbound aircraft _______ delayed due to thick fog in Frankfurt.',
    options: ['has been', 'had been', 'is being', 'will be'],
    correctAnswer: 1,
    explanation: 'In reported speech with a past reporting verb ("announced"), an earlier delay shifts back into the Past Perfect ("had been delayed").',
    tenseTested: 'Past Perfect in Reported Speech'
  },
  {
    id: 'tense-20',
    question: 'I _______ to working 14-hour long-haul flights yet, but the senior crew reassure me I will adapt soon.',
    options: ['am not used', 'did not use', 'used not', 'do not use'],
    correctAnswer: 0,
    explanation: '"Be used to + noun/gerund" means to be accustomed to something. "I am not used to working..." expresses that she is not yet accustomed to this flight schedule.',
    tenseTested: 'Be Used To (Accustomed To)'
  }
];

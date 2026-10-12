import { ExamQuestion } from '../types';

export const AGREEMENT_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 'aq-01',
    topicId: 'agreement',
    lessonItemId: 'sva-core-rule',
    difficulty: 'easy',
    question: 'The shipment of fragile laboratory instruments _____ arrived safely at the port.',
    options: ['has', 'have', 'are', 'were'],
    correctAnswerIndex: 0,
    explanation: 'The real head noun is singular "shipment", which agrees with "has", not the plural object "instruments".'
  },
  {
    id: 'aq-02',
    topicId: 'agreement',
    lessonItemId: 'sva-indefinite-pronouns',
    difficulty: 'easy',
    question: 'Each of the participants _____ required to complete a safety declaration.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Each" is grammatically singular and takes the singular verb "is".'
  },
  {
    id: 'aq-03',
    topicId: 'agreement',
    lessonItemId: 'sva-correlatives',
    difficulty: 'easy',
    question: 'Neither the manager nor the staff members _____ informed about the policy change.',
    options: ['were', 'was', 'is', 'has been'],
    correctAnswerIndex: 0,
    explanation: 'With "neither...nor", the verb agrees with the closer subject: "staff members" (plural) takes "were".'
  },
  {
    id: 'aq-04',
    topicId: 'agreement',
    lessonItemId: 'sva-and-vs-with',
    difficulty: 'easy',
    question: 'The CEO, as well as the board members, _____ attending the annual gala.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"As well as" introduces a parenthetical phrase. The singular head subject is "CEO", taking "is".'
  },
  {
    id: 'aq-05',
    topicId: 'agreement',
    lessonItemId: 'sva-collective-nouns',
    difficulty: 'easy',
    question: 'The research committee _____ decided to postpone the grant deadline.',
    options: ['has', 'have', 'are having', 'were having'],
    correctAnswerIndex: 0,
    explanation: 'The collective noun "committee" acts as a single body and takes "has".'
  },
  {
    id: 'aq-06',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'easy',
    question: 'The news regarding the technological breakthrough _____ broadcast across the nation.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"News" ends in -s but is strictly singular, taking "was".'
  },
  {
    id: 'aq-07',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'The number of applicants for the pilot training program _____ increased tenfold.',
    options: ['has', 'have', 'are', 'were'],
    correctAnswerIndex: 0,
    explanation: '"The number of" refers to a specific metric and is singular, taking "has".'
  },
  {
    id: 'aq-08',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'A number of delegates _____ expressed concerns regarding the environmental treaty.',
    options: ['have', 'has', 'is', 'was'],
    correctAnswerIndex: 0,
    explanation: '"A number of" functions like "many" and takes a plural verb ("have").'
  },
  {
    id: 'aq-09',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'hard',
    question: 'She is one of those rare students who _____ fluent in four foreign languages.',
    options: ['are', 'is', 'was', 'has been'],
    correctAnswerIndex: 0,
    explanation: '"Who" refers to the plural antecedent "students", demanding the plural verb "are".'
  },
  {
    id: 'aq-10',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'hard',
    question: 'He is the only one of the applicants who _____ previous managerial experience.',
    options: ['possesses', 'possess', 'are possessing', 'have possessed'],
    correctAnswerIndex: 0,
    explanation: 'The modifier "the only one" narrows the subject to a single individual, taking "possesses".'
  },
  {
    id: 'aq-11',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'medium',
    question: 'Twenty kilometers _____ considered a grueling distance for an amateur runner.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'Distances, periods of time, and weights are considered single unified quantities taking "is".'
  },
  {
    id: 'aq-12',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'easy',
    question: 'Mathematics _____ his most demanding subject in secondary school.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'Names of sciences and academic disciplines (mathematics, physics) are singular.'
  },
  {
    id: 'aq-13',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'medium',
    question: 'A pair of sharp tailor\'s scissors _____ found beneath the sewing table.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'With "A pair of", the head noun is singular "pair", requiring "was".'
  },
  {
    id: 'aq-14',
    topicId: 'agreement',
    lessonItemId: 'sva-collective-nouns',
    difficulty: 'easy',
    question: 'There _____ several grammatical inconsistencies in the draft document.',
    options: ['are', 'is', 'was', 'has been'],
    correctAnswerIndex: 0,
    explanation: 'In sentences starting with "There", the verb agrees with the subject following it ("inconsistencies" = plural).'
  },
  {
    id: 'aq-15',
    topicId: 'agreement',
    lessonItemId: 'sva-and-vs-with',
    difficulty: 'medium',
    question: 'Bread and butter _____ served with every hot bowl of soup.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Bread and butter" forms a single traditional food combination and takes singular "is".'
  },
  {
    id: 'aq-16',
    topicId: 'agreement',
    lessonItemId: 'sva-correlatives',
    difficulty: 'medium',
    question: 'Neither the passengers nor the pilot _____ aware of the impending turbulence.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'The closer subject to the verb is singular "pilot", which demands "was".'
  },
  {
    id: 'aq-17',
    topicId: 'agreement',
    lessonItemId: 'sva-indefinite-pronouns',
    difficulty: 'easy',
    question: 'Everyone in the research department _____ a designated security clearance code.',
    options: ['has', 'have', 'are having', 'were having'],
    correctAnswerIndex: 0,
    explanation: '"Everyone" is grammatically singular and takes "has".'
  },
  {
    id: 'aq-18',
    topicId: 'agreement',
    lessonItemId: 'sva-core-rule',
    difficulty: 'medium',
    question: 'The cause of the unexpected power outages _____ under active investigation.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'The subject is singular "cause", not plural "outages". Thus "is" is correct.'
  },
  {
    id: 'aq-19',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'Seventy percent of the forest area _____ destroyed by the wildfire.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'With percentages, look at the noun after "of": singular "area" takes "was".'
  },
  {
    id: 'aq-20',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'Seventy percent of the endangered animals _____ successfully relocated.',
    options: ['were', 'was', 'is', 'has been'],
    correctAnswerIndex: 0,
    explanation: 'The noun after "of" is plural "animals", requiring plural "were".'
  },
  {
    id: 'aq-21',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'easy',
    question: 'All the furniture in the old Victorian mansion _____ hand-carved mahogany.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Furniture" is an uncountable noun and always takes a singular verb ("was").'
  },
  {
    id: 'aq-22',
    topicId: 'agreement',
    lessonItemId: 'sva-core-rule',
    difficulty: 'hard',
    question: 'The introduction of strict new hygiene protocols _____ reduced workplace infections.',
    options: ['has', 'have', 'are', 'were'],
    correctAnswerIndex: 0,
    explanation: 'The subject is singular "introduction", taking "has reduced".'
  },
  {
    id: 'aq-23',
    topicId: 'agreement',
    lessonItemId: 'sva-correlatives',
    difficulty: 'medium',
    question: 'Not only the students but also the professor _____ fascinated by the findings.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'The subject closer to the verb is singular "professor", taking "was".'
  },
  {
    id: 'aq-24',
    topicId: 'agreement',
    lessonItemId: 'sva-indefinite-pronouns',
    difficulty: 'easy',
    question: 'Nobody in the two competing teams _____ willing to concede defeat.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Nobody" is singular and takes "was".'
  },
  {
    id: 'aq-25',
    topicId: 'agreement',
    lessonItemId: 'sva-and-vs-with',
    difficulty: 'medium',
    question: 'The captain, together with all crew members, _____ commended for bravery.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Together with" is parenthetical. The subject is singular "captain" -> "was".'
  },
  {
    id: 'aq-26',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'hard',
    question: 'Five thousand dollars _____ an exorbitant price for a refurbished laptop.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'A sum of money functions as a single monetary unit and takes singular "is".'
  },
  {
    id: 'aq-27',
    topicId: 'agreement',
    lessonItemId: 'sva-collective-nouns',
    difficulty: 'medium',
    question: 'The jury _____ sequestered until a unanimous verdict is reached.',
    options: ['remains', 'remain', 'are remaining', 'have remained'],
    correctAnswerIndex: 0,
    explanation: 'Collective nouns acting as one unified institution take singular "remains".'
  },
  {
    id: 'aq-28',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'easy',
    question: 'Economics _____ taught as a compulsory subject in the business faculty.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Economics" is a singular academic subject, taking "is".'
  },
  {
    id: 'aq-29',
    topicId: 'agreement',
    lessonItemId: 'sva-core-rule',
    difficulty: 'easy',
    question: 'Choose the sentence that demonstrates CORRECT subject-verb agreement:',
    options: [
      'The box of assorted chocolates contains twenty pieces.',
      'The box of assorted chocolates contain twenty pieces.',
      'The box of assorted chocolates are containing twenty pieces.',
      'The boxes of assorted chocolate contains twenty pieces.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Singular subject "box" matches singular verb "contains".'
  },
  {
    id: 'aq-30',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'None of the counterfeit money _____ accepted by the automated deposit kiosk.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Money" is uncountable, so "none of the money" takes singular "was".'
  },
  {
    id: 'aq-31',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'medium',
    question: 'The tailor said the scissors _____ too blunt to cut the heavy canvas.',
    options: ['were', 'was', 'is', 'has been'],
    correctAnswerIndex: 0,
    explanation: '"Scissors" without "a pair of" is plural and takes "were".'
  },
  {
    id: 'aq-32',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'hard',
    question: 'Gulliver\'s Travels _____ a masterpiece of political satire written by Jonathan Swift.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'A book title is a singular creative work and takes the singular verb "is".'
  },
  {
    id: 'aq-33',
    topicId: 'agreement',
    lessonItemId: 'sva-correlatives',
    difficulty: 'medium',
    question: 'Either your login credentials or your browser cache _____ causing the glitch.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'The closer subject is singular "browser cache", requiring "is".'
  },
  {
    id: 'aq-34',
    topicId: 'agreement',
    lessonItemId: 'sva-indefinite-pronouns',
    difficulty: 'easy',
    question: 'Neither of the proposals _____ approved by the finance committee.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Neither" as a standalone subject is grammatically singular and takes "was".'
  },
  {
    id: 'aq-35',
    topicId: 'agreement',
    lessonItemId: 'sva-core-rule',
    difficulty: 'hard',
    question: 'The variety of species inhabiting the marine reserve _____ astonishing.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'The head noun is singular "variety", demanding "is".'
  },
  {
    id: 'aq-36',
    topicId: 'agreement',
    lessonItemId: 'sva-collective-nouns',
    difficulty: 'easy',
    question: 'There _____ a pencil, an eraser, and two notebooks on the desk.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanation: 'In a list after "there", formal grammar agrees with the first item: "a pencil" -> "is".'
  },
  {
    id: 'aq-37',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'A large number of volunteers _____ registered for the charity marathon.',
    options: ['have', 'has', 'is', 'was'],
    correctAnswerIndex: 0,
    explanation: '"A number of" is equivalent to "many" and takes plural "have".'
  },
  {
    id: 'aq-38',
    topicId: 'agreement',
    lessonItemId: 'sva-and-vs-with',
    difficulty: 'easy',
    question: 'Both the pianist and the violinist _____ enthusiastically applauded.',
    options: ['were', 'was', 'is', 'has been'],
    correctAnswerIndex: 0,
    explanation: '"Both... and" always coordinates two items into a grammatical plural ("were").'
  },
  {
    id: 'aq-39',
    topicId: 'agreement',
    lessonItemId: 'sva-deceptive-nouns',
    difficulty: 'easy',
    question: 'The advice she received from senior advisors _____ instrumental in her victory.',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswerIndex: 0,
    explanation: '"Advice" is uncountable and singular, taking "was".'
  },
  {
    id: 'aq-40',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'hard',
    question: 'This is one of the most critical decisions that _____ ever faced this company.',
    options: ['have', 'has', 'is', 'was'],
    correctAnswerIndex: 0,
    explanation: '"That" modifies the plural noun "decisions", requiring the plural verb "have".'
  },
  {
    id: 'aq-41',
    topicId: 'agreement',
    lessonItemId: 'sva-traps-relative',
    difficulty: 'hard',
    question: 'Ten years _____ passed since the peace agreement was signed.',
    options: ['have', 'has', 'is', 'was'],
    correctAnswerIndex: 0,
    explanation: 'When years are considered individually as passing units of time, "Ten years have passed" is standard.'
  },
  {
    id: 'aq-42',
    topicId: 'agreement',
    lessonItemId: 'sva-indefinite-pronouns',
    difficulty: 'easy',
    question: 'Somebody _____ forgotten to lock the laboratory door.',
    options: ['has', 'have', 'are', 'were'],
    correctAnswerIndex: 0,
    explanation: '"Somebody" is singular and takes "has".'
  },
  {
    id: 'aq-43',
    topicId: 'agreement',
    lessonItemId: 'sva-correlatives',
    difficulty: 'medium',
    question: 'Either the supervisor or the technicians _____ the final inspection report.',
    options: ['sign', 'signs', 'is signing', 'has signed'],
    correctAnswerIndex: 0,
    explanation: 'The closer subject is plural "technicians", requiring the plural verb "sign".'
  },
  {
    id: 'aq-44',
    topicId: 'agreement',
    lessonItemId: 'sva-core-rule',
    difficulty: 'medium',
    question: 'The presence of heavy security guards _____ the crowd from entering.',
    options: ['prevents', 'prevent', 'are preventing', 'have prevented'],
    correctAnswerIndex: 0,
    explanation: 'The true singular subject is "presence", taking "prevents".'
  },
  {
    id: 'aq-45',
    topicId: 'agreement',
    lessonItemId: 'sva-quantifiers',
    difficulty: 'medium',
    question: 'Two-thirds of the registered voters _____ cast their ballots by noon.',
    options: ['had', 'was', 'is', 'has'],
    correctAnswerIndex: 0,
    explanation: 'Plural "voters" after the fraction takes the plural auxiliary "had".'
  }
];

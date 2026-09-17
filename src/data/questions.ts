import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ==========================================
  // GRAMMAR & SENTENCE STRUCTURE (45 Questions)
  // ==========================================
  {
    id: 'g-01',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Neither the captain nor the flight attendants _______ informed about the unexpected gate change.',
    options: ['was', 'were', 'has been', 'is'],
    correctAnswer: 1,
    explanation: 'When subject terms are joined by "neither... nor", the verb agrees with the closer subject. Here, "the flight attendants" is plural, so we use the plural verb "were".',
    context: 'Subject-Verb Agreement'
  },
  {
    id: 'g-02',
    category: 'grammar',
    difficulty: 'easy',
    question: 'Passengers _______ fasten their seatbelts whenever the fasten seatbelt sign is illuminated.',
    options: ['might', 'must', 'could', 'would'],
    correctAnswer: 1,
    explanation: '"Must" expresses a mandatory safety obligation required by aviation regulations.',
    context: 'Modal Verbs for Safety'
  },
  {
    id: 'g-03',
    category: 'grammar',
    difficulty: 'medium',
    question: 'By the time Ethiopian Airlines Flight ET 502 landed in London, the ground crew _______ for two hours.',
    options: ['is waiting', 'had been waiting', 'has waited', 'waits'],
    correctAnswer: 1,
    explanation: 'The past perfect continuous ("had been waiting") indicates an ongoing action that occurred before another past event ("landed").',
    context: 'Verb Tenses (Past Perfect Continuous)'
  },
  {
    id: 'g-04',
    category: 'grammar',
    difficulty: 'hard',
    question: 'If the passenger _______ earlier about their dietary restriction, we would have prepared a kosher meal.',
    options: ['notified', 'has notified', 'had notified', 'would notify'],
    correctAnswer: 2,
    explanation: 'Third conditional (unreal past): "If + past perfect (had notified)... would have + past participle".',
    context: 'Conditionals (Third Conditional)'
  },
  {
    id: 'g-05',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The purser asked the passenger, "Could you please stow your bag?" In reported speech: The purser asked the passenger _______.',
    options: [
      'to stow their bag',
      'that he stows his bag',
      'can he stow his bag',
      'stowing his bag please'
    ],
    correctAnswer: 0,
    explanation: 'Polite requests in indirect speech change to the infinitive form: "asked [someone] to [verb]".',
    context: 'Reported Speech'
  },
  {
    id: 'g-06',
    category: 'grammar',
    difficulty: 'easy',
    question: 'We will be departing _______ runway 07R in approximately ten minutes.',
    options: ['at', 'on', 'from', 'in'],
    correctAnswer: 2,
    explanation: 'In aviation and travel English, an aircraft departs "from" a specific runway or origin airport.',
    context: 'Prepositions of Direction'
  },
  {
    id: 'g-07',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Each of the emergency exits _______ equipped with an inflatable evacuation slide.',
    options: ['are', 'is', 'were', 'have been'],
    correctAnswer: 1,
    explanation: '"Each" is an indefinite pronoun that takes a singular verb ("is"), even though "emergency exits" is plural.',
    context: 'Indefinite Pronoun Agreement'
  },
  {
    id: 'g-08',
    category: 'grammar',
    difficulty: 'hard',
    question: 'Scarcely _______ the safety demonstration when sudden turbulence occurred.',
    options: [
      'we completed',
      'had we completed',
      'did we complete',
      'we had completed'
    ],
    correctAnswer: 1,
    explanation: 'When a negative or restrictive adverbial ("Scarcely", "Hardly", "No sooner") begins a clause, negative inversion is required ("had we completed").',
    context: 'Inversion for Emphasis'
  },
  {
    id: 'g-09',
    category: 'grammar',
    difficulty: 'easy',
    question: 'The Boeing 787 Dreamliner has been flying smoothly _______ over four hours.',
    options: ['since', 'for', 'during', 'while'],
    correctAnswer: 1,
    explanation: 'We use "for" with a duration of time ("over four hours"), while "since" refers to a specific starting point in time.',
    context: 'Prepositions of Time'
  },
  {
    id: 'g-10',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The flight attendant spoke _______ to the anxious elderly passenger.',
    options: ['calm', 'calmly', 'more calm', 'calmness'],
    correctAnswer: 1,
    explanation: 'An adverb ("calmly") modifies the verb "spoke" to describe the manner of speaking.',
    context: 'Adjective vs. Adverb'
  },
  {
    id: 'g-11',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Ethiopian Airlines prides _______ on providing world-class hospitality and safety.',
    options: ['it', 'its', 'itself', 'himself'],
    correctAnswer: 2,
    explanation: 'The reflexive pronoun "itself" refers back to the singular collective entity "Ethiopian Airlines".',
    context: 'Reflexive Pronouns'
  },
  {
    id: 'g-12',
    category: 'grammar',
    difficulty: 'medium',
    question: 'You haven\'t misplaced your boarding pass, _______?',
    options: ['did you', 'have you', 'haven\'t you', 'weren\'t you'],
    correctAnswer: 1,
    explanation: 'With a negative main clause ("haven\'t misplaced"), the tag question must be positive and mirror the auxiliary verb ("have you?").',
    context: 'Question Tags'
  },
  {
    id: 'g-13',
    category: 'grammar',
    difficulty: 'hard',
    question: 'It is essential that every crew member _______ in uniform before the pre-flight briefing.',
    options: ['is', 'be', 'are', 'must be'],
    correctAnswer: 1,
    explanation: 'The subjunctive mood follows mandative expressions like "It is essential that...": base form "be" without "s".',
    context: 'Subjunctive Mood'
  },
  {
    id: 'g-14',
    category: 'grammar',
    difficulty: 'easy',
    question: 'Please place all smaller personal belongings _______ the seat in front of you.',
    options: ['under', 'down', 'below of', 'beneath to'],
    correctAnswer: 0,
    explanation: 'The standard aviation announcement phrase is "under the seat in front of you".',
    context: 'Prepositions of Position'
  },
  {
    id: 'g-15',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The safety manuals were distributed _______ the cabin crew members before takeoff.',
    options: ['between', 'among', 'into', 'with'],
    correctAnswer: 1,
    explanation: '"Among" is used when distributing or discussing relationships within a group of more than two individuals.',
    context: 'Prepositions (Between vs. Among)'
  },
  {
    id: 'g-16',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Had the weather conditions improved, our flight _______ on schedule.',
    options: [
      'would depart',
      'will depart',
      'would have departed',
      'departed'
    ],
    correctAnswer: 2,
    explanation: 'Inverted third conditional ("Had [it] improved" = "If it had improved") pairs with "would have departed".',
    context: 'Inverted Conditionals'
  },
  {
    id: 'g-17',
    category: 'grammar',
    difficulty: 'easy',
    question: 'Excuse me sir, _______ I offer you a warm towel before service begins?',
    options: ['May', 'Must', 'Should', 'Ought'],
    correctAnswer: 0,
    explanation: '"May I..." is the most courteous and standard international flight attendant phrasing for offering service.',
    context: 'Polite Modal Verbs'
  },
  {
    id: 'g-18',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The lead flight attendant asked the junior crew _______ they had completed the galley check.',
    options: ['weather', 'whether', 'wether', 'that if'],
    correctAnswer: 1,
    explanation: '"Whether" is the conjunction used in reported yes/no questions ("whether they had completed...").',
    context: 'Conjunctions & Confusing Words'
  },
  {
    id: 'g-19',
    category: 'grammar',
    difficulty: 'hard',
    question: 'The captain, accompanied by the co-pilot and navigator, _______ entered the terminal building.',
    options: ['have', 'has', 'are', 'were'],
    correctAnswer: 1,
    explanation: 'Parenthetical phrases like "accompanied by..." do not change the number of the true subject ("The captain" - singular). Therefore, "has entered" is correct.',
    context: 'Intervening Phrases'
  },
  {
    id: 'g-20',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Neither the passengers nor the pilot _______ aware of the minor mechanical glitch until landing.',
    options: ['was', 'were', 'are', 'been'],
    correctAnswer: 0,
    explanation: 'In "neither... nor", the verb agrees with the closer noun ("the pilot" - singular), so "was" is correct.',
    context: 'Subject-Verb Agreement'
  },
  {
    id: 'g-21',
    category: 'grammar',
    difficulty: 'easy',
    question: 'All portable electronic devices should be switched _______ flight mode during taxi and takeoff.',
    options: ['to', 'into', 'for', 'with'],
    correctAnswer: 0,
    explanation: 'The phrasal verb collocated with devices is "switched to [a mode]".',
    context: 'Prepositions'
  },
  {
    id: 'g-22',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The passenger demanded _______ the airline manager immediately upon arrival.',
    options: ['seeing', 'to see', 'see', 'to have seen'],
    correctAnswer: 1,
    explanation: 'The verb "demand" takes an infinitive complement: "demanded to see".',
    context: 'Gerund vs. Infinitive'
  },
  {
    id: 'g-23',
    category: 'grammar',
    difficulty: 'hard',
    question: 'Not only _______ punctual, but the cabin crew was also remarkably attentive.',
    options: [
      'the flight was',
      'was the flight',
      'did the flight',
      'the flight had'
    ],
    correctAnswer: 1,
    explanation: 'Correlative conjunction "Not only..." at the beginning of a clause requires subject-auxiliary inversion ("was the flight").',
    context: 'Correlative Inversion'
  },
  {
    id: 'g-24',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The number of transit passengers arriving in Addis Ababa Bole _______ consistently increasing.',
    options: ['are', 'is', 'were', 'have been'],
    correctAnswer: 1,
    explanation: '"The number of..." takes a singular verb ("is"), in contrast to "A number of...", which takes a plural verb.',
    context: 'The Number vs. A Number'
  },
  {
    id: 'g-25',
    category: 'grammar',
    difficulty: 'easy',
    question: 'This overhead bin is _______ small to accommodate that large trolley suitcase.',
    options: ['so', 'too', 'very', 'much'],
    correctAnswer: 1,
    explanation: '"Too + adjective + to-infinitive" indicates an excessive condition preventing an action ("too small to accommodate").',
    context: 'Adverbial Intensifiers'
  },

  // ==========================================
  // SPELLING & ERROR DETECTION (40 Questions)
  // ==========================================
  {
    id: 's-01',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correctly spelled word describing hotel or seating provisions:',
    options: ['Acommodation', 'Accomodation', 'Accommodation', 'Acomodation'],
    correctAnswer: 2,
    explanation: '"Accommodation" has double \'c\' and double \'m\'. A classic exam trap!',
    context: 'Double Consonants Trap'
  },
  {
    id: 's-02',
    category: 'spelling',
    difficulty: 'easy',
    question: 'Select the correct spelling for air movement that causes bumpy flights:',
    options: ['Turbulance', 'Turbulence', 'Turbulens', 'Turbulense'],
    correctAnswer: 1,
    explanation: '"Turbulence" ends with -ence, not -ance.',
    context: 'Aviation Vocabulary'
  },
  {
    id: 's-03',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Identify the word with correct spelling:',
    options: ['Liaison', 'Liason', 'Liasion', 'Liaisonn'],
    correctAnswer: 0,
    explanation: '"Liaison" (referring to communication coordination between departments) has two \'i\'s: L-I-A-I-S-O-N.',
    context: 'Silent Vowels & French Roots'
  },
  {
    id: 's-04',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for a detailed flight travel plan:',
    options: ['Itinerary', 'Itinery', 'Itinerery', 'Ittinerary'],
    correctAnswer: 0,
    explanation: '"Itinerary" has the pattern I-T-I-N-E-R-A-R-Y.',
    context: 'Travel Terminology'
  },
  {
    id: 's-05',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Which word is spelled correctly to mean dedicated, careful, and thorough?',
    options: ['Consciencious', 'Conscientious', 'Conscintious', 'Consciencous'],
    correctAnswer: 1,
    explanation: '"Conscientious" comes from science/conscience and is spelled C-O-N-S-C-I-E-N-T-I-O-U-S.',
    context: 'Cabin Crew Trait'
  },
  {
    id: 's-06',
    category: 'spelling',
    difficulty: 'easy',
    question: 'Select the correct spelling:',
    options: ['Baggage', 'Bagage', 'Baggadge', 'Bagadge'],
    correctAnswer: 0,
    explanation: '"Baggage" has double \'g\' and ends with -age.',
    context: 'Airport Terminology'
  },
  {
    id: 's-07',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for airline staff members:',
    options: ['Personal', 'Personnel', 'Personel', 'Personell'],
    correctAnswer: 1,
    explanation: '"Personnel" (double \'n\', ending in -el) refers to the staff or workforce of an organization.',
    context: 'Confusing Homophones'
  },
  {
    id: 's-08',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Identify the sentence with NO spelling errors:',
    options: [
      'The flight attendent helped the elderly lady with her carry-on.',
      'The flight attendant helped the elderly lady with her carry-on.',
      'The flight attendent helped the eldurly lady with her carry-on.',
      'The flight attendant helped the elderly lady with her cary-on.'
    ],
    correctAnswer: 1,
    explanation: '"Attendant" ends with -ant (not -ent), "elderly" is E-L-D-E-R-L-Y, and "carry-on" has double \'r\'.',
    context: 'Sentence Proofreading'
  },
  {
    id: 's-09',
    category: 'spelling',
    difficulty: 'easy',
    question: 'Select the correctly spelled word for the walkway between seats:',
    options: ['Isle', 'Aisle', 'Aile', 'Ilse'],
    correctAnswer: 1,
    explanation: 'An "aisle" is a passage between rows of seats in an aircraft. An "isle" is a small island.',
    context: 'Homophones'
  },
  {
    id: 's-10',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for without any doubt:',
    options: ['Definately', 'Definetly', 'Definitely', 'Definitly'],
    correctAnswer: 2,
    explanation: '"Definitely" contains "finite" inside it: D-E-F-I-N-I-T-E-L-Y. There is no \'a\'.',
    context: 'Common Misspellings'
  },
  {
    id: 's-11',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Select the correct spelling for professional polite behavior:',
    options: ['Etiquette', 'Etikette', 'Ettiquette', 'Etiquete'],
    correctAnswer: 0,
    explanation: '"Etiquette" is spelled with a single \'t\' in the first syllable, and ends with -ette.',
    context: 'Hospitality Standards'
  },
  {
    id: 's-12',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling:',
    options: ['Occured', 'Occurred', 'Ocurred', 'Ocured'],
    correctAnswer: 1,
    explanation: 'The past tense of "occur" doubles the \'r\': O-C-C-U-R-R-E-D.',
    context: 'Verb Inflection'
  },
  {
    id: 's-13',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Which of the following words is spelled INCORRECTLY?',
    options: ['Privilege', 'Maintenance', 'Separation', 'Hygene'],
    correctAnswer: 3,
    explanation: '"Hygiene" is misspelled as "Hygene". The correct spelling is H-Y-G-I-E-N-E.',
    context: 'Spot-the-Error'
  },
  {
    id: 's-14',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for showing deep politeness and respect:',
    options: ['Courteous', 'Curteous', 'Courteus', 'Courteos'],
    correctAnswer: 0,
    explanation: '"Courteous" is spelled C-O-U-R-T-E-O-U-S.',
    context: 'Customer Service Vocabulary'
  },
  {
    id: 's-15',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for a safety breathing mask apparatus:',
    options: ['Oxygen', 'Oxigen', 'Oxygene', 'Oxygan'],
    correctAnswer: 0,
    explanation: '"Oxygen" is spelled O-X-Y-G-E-N.',
    context: 'Safety Gear'
  },
  {
    id: 's-16',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Select the correct spelling:',
    options: ['Maneuver', 'Manoever', 'Manuever', 'Maneuvre'],
    correctAnswer: 0,
    explanation: 'Standard American English spelling is "Maneuver" (British English is "Manoeuvre"). In international tests, M-A-N-E-U-V-E-R is standard.',
    context: 'Aviation English'
  },
  {
    id: 's-17',
    category: 'spelling',
    difficulty: 'easy',
    question: 'Which option correctly spells the document for boarding an aircraft?',
    options: ['Bording pass', 'Boarding pass', 'Boording pass', 'Bordeng pass'],
    correctAnswer: 1,
    explanation: '"Boarding" is spelled B-O-A-R-D-I-N-G.',
    context: 'Essential Flight Terms'
  },
  {
    id: 's-18',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for items in the cabin overhead storage:',
    options: ['Compártment', 'Compartment', 'Compartmant', 'Comportment'],
    correctAnswer: 1,
    explanation: '"Compartment" ends in -ment: C-O-M-P-A-R-T-M-E-N-T.',
    context: 'Cabin Features'
  },
  {
    id: 's-19',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Identify the word with correct spelling:',
    options: ['Guaranty', 'Guarantee', 'Garantee', 'Gaurantee'],
    correctAnswer: 1,
    explanation: '"Guarantee" has G-U-A-R-A-N-T-E-E.',
    context: 'Service Commitments'
  },
  {
    id: 's-20',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Which word is spelled correctly?',
    options: ['Embarrass', 'Embaras', 'Embarass', 'Embarras'],
    correctAnswer: 0,
    explanation: '"Embarrass" has double \'r\' and double \'s\': E-M-B-A-R-R-A-S-S.',
    context: 'Double Consonants Trap'
  },

  // ==========================================
  // VOCABULARY & AVIATION TERMS (45 Questions)
  // ==========================================
  {
    id: 'v-01',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'What is the closest synonym for "DISEMBARK"?',
    options: ['Board', 'Alight', 'Stow', 'Transit'],
    correctAnswer: 1,
    explanation: 'To "disembark" means to leave or step off an aircraft or ship; "alight" is a formal synonym for exiting or descending from a vehicle.',
    context: 'Aviation Synonyms'
  },
  {
    id: 'v-02',
    category: 'vocabulary',
    difficulty: 'easy',
    question: 'The aircraft kitchen where meals and beverages are prepared is called the:',
    options: ['Pantry', 'Cockpit', 'Galley', 'Hold'],
    correctAnswer: 2,
    explanation: 'In aviation terminology, the kitchen area on an airplane is universally known as the "galley".',
    context: 'Aircraft Anatomy'
  },
  {
    id: 'v-03',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'Which word is the opposite (antonym) of "TRANQUIL"?',
    options: ['Serene', 'Chaotic', 'Calm', 'Placid'],
    correctAnswer: 1,
    explanation: '"Tranquil" means peaceful and calm. Its opposite is "chaotic" or turbulent.',
    context: 'Cabin Atmosphere'
  },
  {
    id: 'v-04',
    category: 'vocabulary',
    difficulty: 'hard',
    question: 'The senior flight attendant who oversees cabin safety and crew performance is the:',
    options: ['First Officer', 'Purser', 'Marshal', 'Dispatcher'],
    correctAnswer: 1,
    explanation: 'The "Purser" (or In-Flight Service Manager) is the chief cabin attendant responsible for the cabin crew and passenger welfare.',
    context: 'Crew Hierarchy'
  },
  {
    id: 'v-05',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'A flight attendant must remain "VIGILANT" during night flights. "Vigilant" means:',
    options: ['Sleepy', 'Watchful and alert', 'Strict', 'Fast'],
    correctAnswer: 1,
    explanation: '"Vigilant" means keeping careful watch for possible danger, irregularities, or passengers in need of assistance.',
    context: 'Flight Attendant Competencies'
  },
  {
    id: 'v-06',
    category: 'vocabulary',
    difficulty: 'easy',
    question: 'What does the acronym "ETA" stand for in flight operations?',
    options: [
      'Estimated Time of Arrival',
      'Emergency Takeoff Altitude',
      'Electronic Ticket Access',
      'Ethiopian Terminal Agency'
    ],
    correctAnswer: 0,
    explanation: 'ETA stands for "Estimated Time of Arrival".',
    context: 'Standard Aviation Acronyms'
  },
  {
    id: 'v-07',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'When an airline representative goes "above and beyond", it means they:',
    options: [
      'Fly at a higher cruising altitude',
      'Exceed expectations to provide outstanding service',
      'Ignore rules for passenger comfort',
      'Work overtime without permission'
    ],
    correctAnswer: 1,
    explanation: 'The idiom "go above and beyond" means to do much more than what is strictly required or expected to satisfy a customer.',
    context: 'Customer Care Idioms'
  },
  {
    id: 'v-08',
    category: 'vocabulary',
    difficulty: 'hard',
    question: 'Select the best synonym for "EXPEDITE":',
    options: ['Delay', 'Hasten', 'Postpone', 'Halt'],
    correctAnswer: 1,
    explanation: 'To "expedite" means to accelerate or make a process happen much faster. "Hasten" is the direct synonym.',
    context: 'Formal Service Vocabulary'
  },
  {
    id: 'v-09',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'A passenger with a connecting flight to another destination without leaving the airport is in:',
    options: ['Deportation', 'Immigration', 'Transit', 'Customs'],
    correctAnswer: 2,
    explanation: '"Transit" refers to passing through an intermediate hub (like Addis Ababa Bole) on the way to a final destination.',
    context: 'Passenger Journeys'
  },
  {
    id: 'v-10',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'What does it mean to "DE-ESCALATE" a tense situation with an upset passenger?',
    options: [
      'Escort them to the cockpit',
      'Reduce tension and calm the situation down',
      'Demand that they apologize immediately',
      'Report them to law enforcement without speaking'
    ],
    correctAnswer: 1,
    explanation: '"De-escalate" means to diffuse hostility, lower emotional intensity, and resolve conflicts peacefully through calm listening and empathy.',
    context: 'Conflict Resolution'
  },
  {
    id: 'v-11',
    category: 'vocabulary',
    difficulty: 'easy',
    question: 'The official document listing all passengers and cargo on a flight is the:',
    options: ['Manifest', 'Invoice', 'Menu', 'Logbook'],
    correctAnswer: 0,
    explanation: 'A "passenger manifest" is the official list containing the details of all passengers on board a flight.',
    context: 'Flight Operations'
  },
  {
    id: 'v-12',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'Which word describes a person who is culturally sensitive, polite, and well-mannered?',
    options: ['Diplomatic', 'Hostile', 'Indifferent', 'Assertive'],
    correctAnswer: 0,
    explanation: '"Diplomatic" means skilled in dealing with people sensitively and tactfully, an essential quality for international cabin crew.',
    context: 'Crew Qualities'
  },
  {
    id: 'v-13',
    category: 'vocabulary',
    difficulty: 'hard',
    question: 'Choose the correct meaning of "COMPLACENCY" in flight safety:',
    options: [
      'Extreme physical exhaustion',
      'A feeling of quiet satisfaction that can lead to unawareness of dangers',
      'A high state of preparedness',
      'Strict adherence to company checklists'
    ],
    correctAnswer: 1,
    explanation: '"Complacency" in aviation safety refers to an uncritical satisfaction with how things are, often leading to overlooked safety risks.',
    context: 'Aviation Safety Psychology'
  },
  {
    id: 'v-14',
    category: 'vocabulary',
    difficulty: 'easy',
    question: 'A flight with no layovers between departure and arrival is described as:',
    options: ['Direct / Non-stop', 'Round trip', 'Charter', 'Red-eye'],
    correctAnswer: 0,
    explanation: 'A flight that travels between two cities without any intermediate stops is called a "non-stop" or direct flight.',
    context: 'Flight Types'
  },
  {
    id: 'v-15',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'The phrasal verb "to touch down" means:',
    options: ['To refuel the plane', 'To land on the runway', 'To open the exits', 'To board the flight'],
    correctAnswer: 1,
    explanation: '"Touch down" is an aviation phrase meaning the moment an aircraft lands and its landing gear makes contact with the runway.',
    context: 'Aviation Phrasal Verbs'
  },

  // ==========================================
  // SITUATIONAL JUDGMENT & CABIN CREW (40 Questions)
  // ==========================================
  {
    id: 'sc-01',
    category: 'situational',
    difficulty: 'medium',
    question: 'During takeoff, a passenger insists on standing up to retrieve a jacket from the overhead bin. What is the most appropriate crew response?',
    options: [
      'Shout loudly at the passenger so everyone hears.',
      'Calmly and firmly instruct the passenger to sit down immediately and explain the safety danger of movement during takeoff.',
      'Ignore the passenger until the seatbelt sign turns off.',
      'Ask other passengers to physically push them back into their seat.'
    ],
    correctAnswer: 1,
    explanation: 'Safety is paramount. The crew must communicate with calm authority, immediate clarity, and professional firmness without escalating panics.',
    context: 'Cabin Safety Compliance'
  },
  {
    id: 'sc-02',
    category: 'situational',
    difficulty: 'easy',
    question: 'Complete the official Ethiopian Airlines boarding greeting: "Ladies and gentlemen, welcome _______ Ethiopian Airlines, a member of Star Alliance."',
    options: ['aboard', 'into', 'towards', 'inside'],
    correctAnswer: 0,
    explanation: '"Welcome aboard" is the universally standard aviation welcoming announcement.',
    context: 'In-Flight Passenger Announcement'
  },
  {
    id: 'sc-03',
    category: 'situational',
    difficulty: 'medium',
    question: 'A passenger expresses immense anxiety about flying through slight turbulence. Which response exhibits professional empathy?',
    options: [
      '"You shouldn\'t worry, planes rarely crash because of turbulence."',
      '"I understand this feels uncomfortable, but our captain is experienced and our aircraft is designed to handle this safely. I\'ll check on you shortly."',
      '"Everyone else is quiet, so please remain calm."',
      '"Just close your eyes and don\'t talk until we land."'
    ],
    correctAnswer: 1,
    explanation: 'Professional empathy acknowledges their feeling ("I understand this feels uncomfortable"), reassures with facts, and offers ongoing attentive presence.',
    context: 'Passenger Empathy & Care'
  },
  {
    id: 'sc-04',
    category: 'situational',
    difficulty: 'hard',
    question: 'A passenger discovers that their pre-ordered special meal (e.g. Halal or Diabetic) is not on board due to a catering oversight. How should you handle it?',
    options: [
      'Inform the passenger that catering made a mistake and there is nothing you can do.',
      'Apologize sincerely, investigate what suitable ingredients are available in business class or crew meals, and offer a heartfelt alternative.',
      'Suggest that the passenger wait until the flight lands in six hours.',
      'Advise the passenger to file a formal complaint online.'
    ],
    correctAnswer: 1,
    explanation: 'World-class hospitality requires taking ownership on behalf of the airline, apologizing genuinely, and proactively seeking a thoughtful culinary solution.',
    context: 'Service Recovery'
  },
  {
    id: 'sc-05',
    category: 'situational',
    difficulty: 'medium',
    question: 'During descent, a passenger refuses to return their seatback to the upright position. What should you say?',
    options: [
      '"Sir, aviation safety regulations require all seatbacks upright to ensure a clear evacuation path for you and the passenger behind you. May I assist you?"',
      '"You must do this right now or I will report you to the police."',
      '"Don\'t you know how an airplane works?"',
      '"Fine, but if something happens it\'s your fault."'
    ],
    correctAnswer: 0,
    explanation: 'Polite, informative explanations framing safety rules around passenger protection are the standard protocol for compliant cabin crew.',
    context: 'Pre-Landing Safety Briefing'
  },
  {
    id: 'sc-06',
    category: 'situational',
    difficulty: 'hard',
    question: 'A passenger suddenly complains of severe chest tightness and difficulty breathing at 35,000 feet. What is your immediate course of action?',
    options: [
      'Offer them a hot cup of tea and ask them to rest.',
      'Notify the lead purser and captain immediately, administer supplementary oxygen, and request a medical doctor via the PA announcement.',
      'Wait twenty minutes to see if the symptoms subside naturally.',
      'Direct the passenger to lie down on the floor in the aisle.'
    ],
    correctAnswer: 1,
    explanation: 'Suspected cardiac emergencies require immediate notification of flight deck / purser, administering first aid oxygen, and paging medical professionals.',
    context: 'In-Flight Medical Emergency'
  },
  {
    id: 'sc-07',
    category: 'situational',
    difficulty: 'easy',
    question: 'When pouring hot coffee or tea for a passenger seated at an aisle seat, safe practice requires you to:',
    options: [
      'Reach completely across the lap of the passenger next to them.',
      'Never pass hot beverages across passengers; place the cup on the tray table directly or hand it securely with cup handle pointed towards them.',
      'Pour the coffee while the beverage trolley is in motion.',
      'Fill the cup completely to the brim to show generosity.'
    ],
    correctAnswer: 1,
    explanation: 'To prevent dangerous burns and scalding during sudden turbulence, never pour over passengers and never fill cups to the brim.',
    context: 'In-Flight Service Safety'
  },
  {
    id: 'sc-08',
    category: 'situational',
    difficulty: 'medium',
    question: 'In an unexpected rapid cabin depressurization, what is the cabin crew member\'s first duty?',
    options: [
      'Immediately put on the nearest oxygen mask first before assisting passengers.',
      'Run through the aisle helping children put on their masks first.',
      'Check if the pilot has announced the descent.',
      'Collect all loose food trays from the passengers.'
    ],
    correctAnswer: 0,
    explanation: 'Crew members must secure their own oxygen mask first to remain conscious; otherwise hypoxia will incapacitate them within seconds.',
    context: 'Emergency Decompression Protocol'
  },
  {
    id: 'sc-09',
    category: 'situational',
    difficulty: 'medium',
    question: 'Complete the pre-departure announcement: "In the unlikely event of an emergency landing on water, life vests are located _______ your seat."',
    options: ['beneath / under', 'above', 'behind', 'inside the pocket of'],
    correctAnswer: 0,
    explanation: 'Life vests for passengers are typically stowed under / beneath the passenger seat.',
    context: 'Safety Announcement Terminology'
  },
  {
    id: 'sc-10',
    category: 'situational',
    difficulty: 'hard',
    question: 'Two passengers are arguing heatedly over reclining seat space and armrest ownership. What is the most constructive de-escalation technique?',
    options: [
      'Take sides with the passenger who paid for the ticket earlier.',
      'Separate the dispute by listening attentively to each person individually without taking sides, and explore seating re-assignment if space allows.',
      'Tell both passengers that they are causing a scene and must remain silent.',
      'Threaten to divert the plane immediately.'
    ],
    correctAnswer: 1,
    explanation: 'Active listening without taking sides, validating their perspectives, and offering practical solutions (like reseating) de-escalates interpersonal cabin conflict.',
    context: 'Conflict Management'
  },
  // Additional High-Yield Exam Questions
  {
    id: 'g-26',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The crew members were praised for _______ quick response during the precautionary landing.',
    options: ['there', 'their', 'they\'re', 'theirs'],
    correctAnswer: 1,
    explanation: '"Their" is the third-person plural possessive pronoun referring to the crew members.',
    context: 'Homophones'
  },
  {
    id: 'g-27',
    category: 'grammar',
    difficulty: 'hard',
    question: 'Seldom _______ such calm professionalism displayed during a severe thunderstorm.',
    options: ['one sees', 'has one seen', 'one has seen', 'did one saw'],
    correctAnswer: 1,
    explanation: 'Negative/restrictive adverbial "Seldom" triggering subject-auxiliary inversion: "has one seen".',
    context: 'Negative Inversion'
  },
  {
    id: 'g-28',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The flight attendant recommended that the passenger _______ some water to stay hydrated.',
    options: ['drinks', 'drink', 'drank', 'drinking'],
    correctAnswer: 1,
    explanation: 'Subjunctive mood after verbs of recommendation ("recommended that he drink..."). Base form of the verb.',
    context: 'Subjunctive'
  },
  {
    id: 'g-29',
    category: 'grammar',
    difficulty: 'easy',
    question: 'We look forward _______ welcoming you aboard our modern fleet again.',
    options: ['for', 'to', 'at', 'with'],
    correctAnswer: 1,
    explanation: 'The fixed phrasal idiom is "look forward to + gerund" ("look forward to welcoming").',
    context: 'Phrasal Collocations'
  },
  {
    id: 'g-30',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Neither the pilot nor the co-pilots _______ able to detect the turbulence on radar.',
    options: ['was', 'were', 'is', 'has been'],
    correctAnswer: 1,
    explanation: 'With "neither... nor", the verb agrees with the closer subject ("co-pilots" - plural), hence "were".',
    context: 'Proximity Agreement'
  },
  {
    id: 's-21',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Select the correct spelling for a formal evaluation questionnaire:',
    options: ['Questionaire', 'Questionnaire', 'Questionair', 'Questionnair'],
    correctAnswer: 1,
    explanation: '"Questionnaire" is spelled with double \'n\': Q-U-E-S-T-I-O-N-N-A-I-R-E.',
    context: 'Double Consonants'
  },
  {
    id: 's-22',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Identify the correctly spelled word for keeping things apart:',
    options: ['Seperate', 'Separate', 'Seperat', 'Separete'],
    correctAnswer: 1,
    explanation: '"Separate" has two \'a\'s: S-E-P-A-R-A-T-E. Remember: there is "a rat" in separate!',
    context: 'Common Misspellings'
  },
  {
    id: 's-23',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for essential and needed:',
    options: ['Neccessary', 'Necessary', 'Necesary', 'Necassary'],
    correctAnswer: 1,
    explanation: '"Necessary" has one \'c\' and double \'s\': N-E-C-E-S-S-A-R-Y.',
    context: 'Spelling Rule'
  },
  {
    id: 's-24',
    category: 'spelling',
    difficulty: 'easy',
    question: 'Select the correct spelling for an official certificate or authorization:',
    options: ['License', 'Lisense', 'Licencee', 'Lisenze'],
    correctAnswer: 0,
    explanation: 'In general American / international usage, "License" is standard.',
    context: 'Regulatory Words'
  },
  {
    id: 's-25',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Select the correct spelling for items of various kinds mixed together:',
    options: ['Miscelaneous', 'Miscellaneous', 'Miscellanous', 'Miscelanous'],
    correctAnswer: 1,
    explanation: '"Miscellaneous" has double \'l\': M-I-S-C-E-L-L-A-N-E-O-U-S.',
    context: 'Complex Vocabulary'
  },
  {
    id: 'v-16',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'The term "JET LAG" refers to:',
    options: [
      'Engine trouble on a jet',
      'Fatigue caused by travelling rapidly across multiple time zones',
      'A delay at the departure gate',
      'Baggage arriving late'
    ],
    correctAnswer: 1,
    explanation: '"Jet lag" is circadian rhythm disruption caused by crossing multiple time zones quickly.',
    context: 'Travel Health'
  },
  {
    id: 'v-17',
    category: 'vocabulary',
    difficulty: 'hard',
    question: 'What is the meaning of "CONSCIENTIOUS"?',
    options: [
      'Aware and awake',
      'Wishing to do one\'s work thoroughly and honestly',
      'Quick-tempered',
      'Hesitant to make decisions'
    ],
    correctAnswer: 1,
    explanation: '"Conscientious" describes a person who takes great care to do things properly, thoroughly, and reliably.',
    context: 'Personality Traits'
  },
  {
    id: 'v-18',
    category: 'vocabulary',
    difficulty: 'easy',
    question: 'What is the baggage weight "ALLOWANCE"?',
    options: [
      'The money paid to staff',
      'The permitted amount of luggage a passenger can carry without extra fee',
      'The time taken to board the plane',
      'The size of the runway'
    ],
    correctAnswer: 1,
    explanation: 'Luggage "allowance" is the specified quantity or weight permitted per ticket.',
    context: 'Airport Logistics'
  },
  {
    id: 'v-19',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'The phrase "at your earliest convenience" means:',
    options: [
      'Only when you are tired',
      'As soon as you are comfortably able to',
      'Never',
      'At midnight'
    ],
    correctAnswer: 1,
    explanation: '"At your earliest convenience" is an extremely polite business English phrase meaning as promptly as possible.',
    context: 'Polite Phrases'
  },
  {
    id: 'v-20',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'What does "STERILE COCKPIT" mean in aviation procedures?',
    options: [
      'A cockpit that has been chemically disinfected',
      'A phase of flight below 10,000 feet where all non-essential communication is strictly prohibited',
      'A flight simulator room',
      'A cockpit without any food allowed'
    ],
    correctAnswer: 1,
    explanation: 'The "Sterile Cockpit Rule" prohibits non-safety related conversation or cabin calls during critical phases of flight (taxi, takeoff, landing below 10,000 ft).',
    context: 'Aviation Safety Terms'
  },
  {
    id: 'sc-11',
    category: 'situational',
    difficulty: 'easy',
    question: 'A passenger drops their red wine on their white trousers during unexpected movement. What should the attendant do first?',
    options: [
      'Tell them it was their fault for not holding the glass.',
      'Immediately provide sparkling water and napkins, apologize for the inconvenience, and offer stain remover or assistance.',
      'Walk away and pretend not to notice.',
      'Ask other passengers to look away.'
    ],
    correctAnswer: 1,
    explanation: 'Immediate empathy, quick courteous action with napkins and sparkling water, and sincere service recovery.',
    context: 'In-Flight Mishap'
  },
  {
    id: 'sc-12',
    category: 'situational',
    difficulty: 'medium',
    question: 'When asked by a curious passenger why the aircraft is circling in a holding pattern before Addis Ababa Bole, what is the best response?',
    options: [
      '"The pilot is lost, we don\'t know where the runway is."',
      '"Air traffic control has asked us to circle temporarily to ensure adequate spacing between arriving flights. We will touch down safely shortly."',
      '"You don\'t need to know technical details, just stay seated."',
      '"The airport might be closed due to an emergency."'
    ],
    correctAnswer: 1,
    explanation: 'Cabin crew must provide calm, accurate, and non-alarmist reassurance highlighting standard air traffic control spacing.',
    context: 'Passenger Reassurance'
  },
  // ==========================================
  // ADDITIONAL BATCH: GRAMMAR (15 Questions)
  // ==========================================
  {
    id: 'g-31',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The captain ordered that all cabin crew members _______ to their jump seats immediately.',
    options: ['returned', 'return', 'returns', 'returning'],
    correctAnswer: 1,
    explanation: 'Mandative subjunctive following verbs of command ("ordered that..."): uses the base form "return".',
    context: 'Subjunctive Mood'
  },
  {
    id: 'g-32',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Either the lead flight attendant or her assistants _______ responsible for checking the emergency exits.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: 'With "either... or", the verb agrees with the closer subject ("assistants" - plural), hence "are".',
    context: 'Subject-Verb Agreement'
  },
  {
    id: 'g-33',
    category: 'grammar',
    difficulty: 'easy',
    question: 'She has been working as a flight attendant with Ethiopian Airlines _______ 2021.',
    options: ['for', 'since', 'during', 'from'],
    correctAnswer: 1,
    explanation: '"Since" indicates the starting point of an action that continues into the present.',
    context: 'Prepositions of Time'
  },
  {
    id: 'g-34',
    category: 'grammar',
    difficulty: 'hard',
    question: 'Little _______ that the flight would be diverted to Nairobi due to fog.',
    options: ['did the passengers know', 'the passengers knew', 'have the passengers known', 'had the passengers know'],
    correctAnswer: 0,
    explanation: 'Negative/restrictive adverbial "Little" at the head of a clause triggers inversion: auxiliary "did" + subject + base verb.',
    context: 'Negative Inversion'
  },
  {
    id: 'g-35',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Passengers are requested _______ their seatbelts low and tight across their lap.',
    options: ['fastening', 'to fasten', 'fasten', 'fastened'],
    correctAnswer: 1,
    explanation: 'Passive verb "are requested" is followed by a to-infinitive ("to fasten").',
    context: 'Infinitives'
  },
  {
    id: 'g-36',
    category: 'grammar',
    difficulty: 'medium',
    question: 'Between you and _______, Ethiopian Airlines has the most modern fleet in Africa.',
    options: ['I', 'me', 'myself', 'mine'],
    correctAnswer: 1,
    explanation: '"Between" is a preposition, so objective case pronouns must be used ("between you and me").',
    context: 'Pronoun Case'
  },
  {
    id: 'g-37',
    category: 'grammar',
    difficulty: 'hard',
    question: 'If only we _______ about the severe headwind before calculating fuel reserves.',
    options: ['knew', 'had known', 'have known', 'know'],
    correctAnswer: 1,
    explanation: '"If only" expressing past regret requires the past perfect ("had known").',
    context: 'Past Wishes & Regrets'
  },
  {
    id: 'g-38',
    category: 'grammar',
    difficulty: 'easy',
    question: 'Would you mind _______ your seat upright for landing, madam?',
    options: ['put', 'to put', 'putting', 'placed'],
    correctAnswer: 2,
    explanation: 'The polite formula "Would you mind..." is always followed by a gerund (-ing form).',
    context: 'Gerund after "Mind"'
  },
  {
    id: 'g-39',
    category: 'grammar',
    difficulty: 'medium',
    question: 'The purser, along with the captain and ground handlers, _______ inspecting the cargo manifest.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: 'Intervening phrase "along with..." does not change the singular subject "The purser", so singular verb "is" is correct.',
    context: 'Intervening Phrases'
  },
  {
    id: 'g-40',
    category: 'grammar',
    difficulty: 'medium',
    question: 'By this time tomorrow, Flight ET 800 _______ in Frankfurt.',
    options: ['will land', 'will have landed', 'lands', 'is landing'],
    correctAnswer: 1,
    explanation: 'Future perfect ("will have landed") is used for an action completed before a specific future time ("By this time tomorrow").',
    context: 'Future Perfect Tense'
  },
  // ==========================================
  // ADDITIONAL BATCH: SPELLING (12 Questions)
  // ==========================================
  {
    id: 's-26',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for a waiting line of people or aircraft:',
    options: ['Queue', 'Que', 'Quene', 'Qeue'],
    correctAnswer: 0,
    explanation: '"Queue" is spelled Q-U-E-U-E.',
    context: 'Airport Words'
  },
  {
    id: 's-27',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Select the correctly spelled word for an instrument measuring air pressure or fuel:',
    options: ['Guage', 'Gauge', 'Gage', 'Gawge'],
    correctAnswer: 1,
    explanation: '"Gauge" has the \'a\' before the \'u\': G-A-U-G-E.',
    context: 'Technical Aviation Terms'
  },
  {
    id: 's-28',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for lines running alongside each other equally spaced:',
    options: ['Paralel', 'Parallel', 'Parrallel', 'Parralel'],
    correctAnswer: 1,
    explanation: '"Parallel" has one \'r\' and double \'l\': P-A-R-A-L-L-E-L.',
    context: 'Runway Layouts'
  },
  {
    id: 's-29',
    category: 'spelling',
    difficulty: 'easy',
    question: 'Select the correct spelling for something that provides ease and suitability:',
    options: ['Convinience', 'Convenience', 'Conveniance', 'Conveinience'],
    correctAnswer: 1,
    explanation: '"Convenience" has -ience: C-O-N-V-E-N-I-E-N-C-E.',
    context: 'Customer Service Words'
  },
  {
    id: 's-30',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Identify the word with the correct spelling:',
    options: ['Manouver', 'Manoeuvre', 'Manouver', 'Manuevre'],
    correctAnswer: 1,
    explanation: 'In British / International English, "Manoeuvre" is spelled M-A-N-O-E-U-V-R-E.',
    context: 'International Aviation'
  },
  {
    id: 's-31',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling for a formal recommendation:',
    options: ['Recomendation', 'Recommendation', 'Recommedation', 'Reccommendation'],
    correctAnswer: 1,
    explanation: '"Recommendation" has one \'c\' and double \'m\': R-E-C-O-M-M-E-N-D-A-T-I-O-N.',
    context: 'Recruitment Forms'
  },
  {
    id: 's-32',
    category: 'spelling',
    difficulty: 'medium',
    question: 'Select the correct spelling:',
    options: ['Foreign', 'Foriegn', 'Forein', 'Foreing'],
    correctAnswer: 0,
    explanation: '"Foreign" is spelled F-O-R-E-I-G-N (exceptions to the "i before e" rule).',
    context: 'International Passports'
  },
  {
    id: 's-33',
    category: 'spelling',
    difficulty: 'hard',
    question: 'Which word is spelled INCORRECTLY?',
    options: ['Discipline', 'Conscience', 'Exaggerate', 'Rithm'],
    correctAnswer: 3,
    explanation: '"Rhythm" is misspelled as "Rithm". The correct spelling is R-H-Y-T-H-M.',
    context: 'Error Identification'
  },
  // ==========================================
  // ADDITIONAL BATCH: VOCABULARY (10 Questions)
  // ==========================================
  {
    id: 'v-21',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'The main central body structure of an aircraft holding passengers and crew is the:',
    options: ['Fuselage', 'Nacelle', 'Empennage', 'Aileron'],
    correctAnswer: 0,
    explanation: 'The "fuselage" is the primary structural body of an airplane containing the cockpit and passenger cabin.',
    context: 'Aviation Anatomy'
  },
  {
    id: 'v-22',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'What is the aviation procedure known as "CROSSCHECK"?',
    options: [
      'Checking luggage twice at customs',
      'One crew member verifying that another crew member has properly armed/disarmed the emergency doors',
      'Pilots switching navigation screens',
      'Counting passengers during boarding'
    ],
    correctAnswer: 1,
    explanation: '"Doors to arrival and crosscheck" means verifying that the opposite cabin door has been placed into the safe disarmed position.',
    context: 'Standard Operating Procedures'
  },
  {
    id: 'v-23',
    category: 'vocabulary',
    difficulty: 'hard',
    question: 'The medical condition caused by an insufficient supply of oxygen in body tissues at high altitude is:',
    options: ['Hypothermia', 'Hypoxia', 'Hyperglycemia', 'Anemia'],
    correctAnswer: 1,
    explanation: '"Hypoxia" is oxygen deficiency in blood and body tissues, a primary danger during cabin decompression.',
    context: 'Aviation Physiology'
  },
  {
    id: 'v-24',
    category: 'vocabulary',
    difficulty: 'easy',
    question: 'An emergency landing of an aircraft on a body of water is called:',
    options: ['Docking', 'Ditching', 'Sinking', 'Gliding'],
    correctAnswer: 1,
    explanation: 'In international aviation, "ditching" specifically refers to a controlled forced landing on water.',
    context: 'Emergency Vocabulary'
  },
  {
    id: 'v-25',
    category: 'vocabulary',
    difficulty: 'medium',
    question: 'The international radio distress signal used for urgent, life-threatening emergencies is:',
    options: ['MAYDAY', 'PAN-PAN', 'SECURITY', 'ROGER'],
    correctAnswer: 0,
    explanation: '"MAYDAY" (derived from French "m\'aider" - help me) is the distress signal indicating imminent danger to life or aircraft.',
    context: 'Emergency Communication'
  },
  // ==========================================
  // ADDITIONAL BATCH: SITUATIONAL (8 Questions)
  // ==========================================
  {
    id: 'sc-13',
    category: 'situational',
    difficulty: 'medium',
    question: 'You notice smoke drifting from beneath an airplane lavatory door during cruise flight. What is your immediate priority?',
    options: [
      'Open the door wide immediately to see what is burning.',
      'Check the door for heat with the back of your hand, inform the flight deck and other crew immediately, and retrieve the halon fire extinguisher and PBE (protective breathing equipment).',
      'Wait five minutes to see if the smoke detector resets.',
      'Ask the passengers in row 30 if they smelled anything.'
    ],
    correctAnswer: 1,
    explanation: 'Standard fire drill: feel door with back of hand for heat, alert crew/cockpit immediately, don PBE, and prepare Halon extinguisher.',
    context: 'Cabin Fire Emergency Drill'
  },
  {
    id: 'sc-14',
    category: 'situational',
    difficulty: 'easy',
    question: 'A parent travelling with an infant is struggling to warm milk during boarding. How should you assist?',
    options: [
      'Microwave the bottle on high heat for three minutes in the galley.',
      'Offer to warm the bottle safely by placing it into a container of warm (not boiling) water, testing temperature before returning it.',
      'Advise the parent that baby milk is not permitted on the plane.',
      'Tell them to wait until after takeoff in two hours.'
    ],
    correctAnswer: 1,
    explanation: 'Safe heating prevents severe scald burns to infants. Microwaves create dangerous hot spots; warm water bath is protocol.',
    context: 'Special Passenger Care'
  },
  {
    id: 'sc-15',
    category: 'situational',
    difficulty: 'hard',
    question: 'An intoxicated passenger becomes verbally aggressive towards another traveller. What is the most effective protocol?',
    options: [
      'Offer the intoxicated passenger free alcoholic drinks to keep them sleepy.',
      'Discontinue alcohol service discreetly, address the passenger in a calm, firm, and non-confrontational manner, and notify the senior purser/captain if behavior persists.',
      'Physically push the passenger into the rear galley.',
      'Tell other passengers to shout back at him.'
    ],
    correctAnswer: 1,
    explanation: 'Cut off alcohol tactfully, de-escalate without aggression, protect fellow passengers, and alert the Purser if behavior escalates to Level 1/2 disruption.',
    context: 'Unruly Passenger Protocol'
  }
];

export const DAILY_MOTIVATIONAL_QUOTES = [
  {
    quote: "The sky is not the limit; it is where your dream begins. You were born to wear those golden wings.",
    author: "Ethiopian Airlines Spirit"
  },
  {
    quote: "Every master was once a beginner. Keep your chin high, your smile warm, and your heart confident.",
    author: "Aviation Wisdom"
  },
  {
    quote: "Poise, kindness, and grace under pressure—you already carry every quality of a world-class flight attendant.",
    author: "Cabin Crew Creed"
  },
  {
    quote: "Addis Ababa Bole to the capitals of the world. One step, one question at a time, you are getting closer.",
    author: "SkyWings ET"
  },
  {
    quote: "Believe in yourself as much as those who admire your grace and brilliance do. You\'ve got this!",
    author: "With Deep Support"
  }
];

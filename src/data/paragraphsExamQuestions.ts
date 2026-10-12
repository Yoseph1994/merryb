import { ExamQuestion } from '../types';

export const PARAGRAPHS_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 'pq-01',
    topicId: 'paragraphs',
    lessonItemId: 'para-main-idea',
    difficulty: 'easy',
    question: 'Read the sentence: "Early morning sunlight triggers serotonin production, regulates sleep cycles, and sharpens alertness for the day." What is the main idea?',
    options: [
      'Morning sunlight provides essential biological benefits for energy and sleep.',
      'Serotonin is the only hormone responsible for mental health.',
      'Night owls are unable to succeed in morning work.',
      'Artificial lights have no effect on human physiology.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A synthesizes all three benefits into a single cohesive main idea without making unsupported extreme claims.'
  },
  {
    id: 'pq-02',
    topicId: 'paragraphs',
    lessonItemId: 'para-reordering',
    difficulty: 'easy',
    question: 'Which of the following sentences would make the most suitable OPENING sentence for a paragraph?',
    options: [
      'Urban green spaces have been shown to reduce municipal temperatures significantly.',
      'However, these trees require frequent maintenance from city workers.',
      'Consequently, residents enjoy cleaner air and reduced noise levels.',
      'This cooling effect is especially noticeable during summer heatwaves.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A introduces the core noun phrase "Urban green spaces" without relying on pronouns or contrast linkers.'
  },
  {
    id: 'pq-03',
    topicId: 'paragraphs',
    lessonItemId: 'para-odd-one-out',
    difficulty: 'medium',
    question: 'Identify the sentence that breaks paragraph unity: (1) Honeybees navigate using polarized sunlight. (2) They communicate nectar locations through a waggle dance. (3) Honey prices have fluctuated sharply in local supermarkets. (4) This complex communication enables hive efficiency.',
    options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
    correctAnswerIndex: 0,
    explanation: 'Sentence 3 discusses commercial food market prices, which is an irrelevant tangent to the scientific study of bee navigation and communication.'
  },
  {
    id: 'pq-04',
    topicId: 'paragraphs',
    lessonItemId: 'para-missing-sentence',
    difficulty: 'medium',
    question: 'Where does the sentence "These innovative filtering devices remove microplastics efficiently." best fit?\n\nOcean pollution has reached critical levels worldwide. [1] Marine biologists recently deployed specialized nylon traps along the coastline. [2] As ocean currents pass through the harbor, marine life is shielded from synthetic debris. [3] Government regulators hope this initiative inspires regional adoption. [4]',
    options: ['Slot [2]', 'Slot [1]', 'Slot [3]', 'Slot [4]'],
    correctAnswerIndex: 0,
    explanation: '"These innovative filtering devices" refers directly back to the "specialized nylon traps" deployed in the preceding sentence, placing it at Slot [2].'
  },
  {
    id: 'pq-05',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'easy',
    question: 'The committee approved the preliminary budget; _____, they requested a detailed breakdown of equipment expenditures.',
    options: ['however', 'therefore', 'consequently', 'as a result'],
    correctAnswerIndex: 0,
    explanation: 'Approving the budget while demanding caveats is a contrast, requiring "however".'
  },
  {
    id: 'pq-06',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'easy',
    question: '_____ the torrential rain, the marathon runners completed the 42-kilometer course.',
    options: ['Despite', 'Although', 'Even though', 'Whereas'],
    correctAnswerIndex: 0,
    explanation: '"The torrential rain" is a noun phrase, which requires the preposition "Despite", not a conjunction like "Although".'
  },
  {
    id: 'pq-07',
    topicId: 'paragraphs',
    lessonItemId: 'para-inference-vs-fact',
    difficulty: 'medium',
    question: 'Passage: "The archeologist dusted the tablet carefully and noted identical cuneiform symbols to those found in Babylon." What can be logically inferred?',
    options: [
      'There was cultural or communicative contact between the two ancient regions.',
      'The tablet was manufactured in modern Europe.',
      'The archeologist was the first person to learn cuneiform.',
      'Babylonian civilization possessed electricity.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Identical writing systems in two locations logically infer historic contact or cultural transmission.'
  },
  {
    id: 'pq-08',
    topicId: 'paragraphs',
    lessonItemId: 'para-tone-purpose',
    difficulty: 'easy',
    question: 'A passage objectively outlines the clinical trial phases of a new vaccine, presenting survival rates and side effects neutrally. What is the author\'s tone?',
    options: ['Objective and informative', 'Skeptical and dismissive', 'Enthusiastic and celebratory', 'Hostile and defensive'],
    correctAnswerIndex: 0,
    explanation: 'Neutral presentation of scientific methodology and statistics represents an objective, informative tone.'
  },
  {
    id: 'pq-09',
    topicId: 'paragraphs',
    lessonItemId: 'para-main-idea',
    difficulty: 'medium',
    question: 'Read the passage: "Electric vehicles, expanded bicycle lanes, and high-speed commuter rail networks have transformed municipal commuting. Together, these modern transit initiatives reduce carbon emissions and ease downtown traffic congestion." What is the main idea?',
    options: [
      'Integrated sustainable transit options provide broad environmental and urban benefits.',
      'Electric vehicle sales grew by 35% in dense metropolitan regions.',
      'Bicycle commuting is the only practical transportation choice for city residents.',
      'High-speed commuter trains are completely free of operating costs.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A synthesizes all three sustainable initiatives and their shared environmental and urban benefits.'
  },
  {
    id: 'pq-10',
    topicId: 'paragraphs',
    lessonItemId: 'para-reordering',
    difficulty: 'hard',
    question: 'Arrange logically: (1) Over decades, this pressure transforms organic material into coal. (2) Ancient swamps were buried under layers of sediment. (3) This vital fossil fuel powered the Industrial Revolution.',
    options: ['(2) - (1) - (3)', '(1) - (2) - (3)', '(3) - (2) - (1)', '(2) - (3) - (1)'],
    correctAnswerIndex: 0,
    explanation: 'Geological burial happens first (2), geological transformation follows (1), and the modern historical significance concludes (3).'
  },
  {
    id: 'pq-11',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'medium',
    question: 'The laboratory experiment failed to yield consistent data; _____, the research team repeated the trials with a larger sample.',
    options: ['therefore', 'nevertheless', 'moreover', 'on the contrary'],
    correctAnswerIndex: 0,
    explanation: 'Repeating the trial is the direct logical outcome of inconsistent data, requiring "therefore".'
  },
  {
    id: 'pq-12',
    topicId: 'paragraphs',
    lessonItemId: 'para-odd-one-out',
    difficulty: 'medium',
    question: 'Find the odd sentence in an essay on "The Benefits of Bicycles in Cities": (1) Cycling lowers greenhouse gas emissions. (2) It reduces traffic congestion in dense downtown corridors. (3) Early penny-farthing bicycles had a giant front wheel. (4) Daily commuting by bike improves cardiovascular fitness.',
    options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
    correctAnswerIndex: 0,
    explanation: 'Sentence 3 is a historical trivia tangent that breaks the argumentative unity of modern urban cycling benefits.'
  },
  {
    id: 'pq-13',
    topicId: 'paragraphs',
    lessonItemId: 'para-inference-vs-fact',
    difficulty: 'hard',
    question: 'Passage: "When the announcement was read, the room fell dead silent, and several senior managers walked out without taking their folders." What is the most plausible inference?',
    options: [
      'The announcement delivered unwelcome or shocking news to the managers.',
      'The managers had a previously scheduled flight to attend.',
      'The managers were thrilled with the announcement.',
      'The meeting room had lost electrical power.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Sudden silence and leaving without belongings logically indicates shock or severe dismay.'
  },
  {
    id: 'pq-14',
    topicId: 'paragraphs',
    lessonItemId: 'para-tone-purpose',
    difficulty: 'medium',
    question: 'An editorial argues: "Local authorities must enact stricter penalties on polluters before our reservoir becomes irreparably toxic." What is the author\'s purpose?',
    options: ['To persuade readers and officials to take immediate action', 'To amuse readers with a local anecdote', 'To describe the chemical composition of water', 'To praise the local municipal government'],
    correctAnswerIndex: 0,
    explanation: 'Use of urgent imperatives ("must enact") and calls to action characterizes persuasive writing.'
  },
  {
    id: 'pq-15',
    topicId: 'paragraphs',
    lessonItemId: 'para-missing-sentence',
    difficulty: 'hard',
    question: 'Which sentence logically fills the blank?\n\n"The prototype solar panel demonstrated unprecedented conversion efficiency in field tests. ________ On the other hand, its complex manufacturing process remained too costly for immediate commercial release."',
    options: [
      'Researchers celebrated its exceptional ability to generate electricity from diffuse sunlight.',
      'The company had suffered severe financial losses during the preceding decade.',
      'Solar energy was initially harnessed using reflective mirrors in ancient times.',
      'Consumers frequently complain about the aesthetic appearance of residential roofs.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The transition "On the other hand" sets up a contrast with prohibitive manufacturing costs, requiring the blank to state a positive technical achievement.'
  },
  {
    id: 'pq-16',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'easy',
    question: 'She is an accomplished pianist; _____, she has published two award-winning collections of poetry.',
    options: ['furthermore', 'however', 'consequently', 'otherwise'],
    correctAnswerIndex: 0,
    explanation: '"Furthermore" adds an additional complementary artistic achievement.'
  },
  {
    id: 'pq-17',
    topicId: 'paragraphs',
    lessonItemId: 'para-main-idea',
    difficulty: 'easy',
    question: 'Read the paragraph: "Daily physical exercise strengthens the cardiovascular system, improves mood regulation through endorphin release, and promotes restorative sleep." Which sentence provides the most effective CONCLUDING sentence?',
    options: [
      'Ultimately, regular physical activity serves as an indispensable pillar of overall health.',
      'Furthermore, the first modern Olympic games took place in Athens in 1896.',
      'However, specialized athletic footwear can be purchased at suburban shopping malls.',
      'Nevertheless, refined sugar consumption remains high in western countries.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A synthesizes all three health benefits and provides a strong, unified conclusion to the paragraph.'
  },
  {
    id: 'pq-18',
    topicId: 'paragraphs',
    lessonItemId: 'para-reordering',
    difficulty: 'medium',
    question: 'Which of the following sentences is the most appropriate OPENING sentence for a passage on arctic wildlife?',
    options: [
      'Arctic terns undertake one of the longest annual migrations of any bird species on Earth.',
      'They subsequently migrate south toward Antarctica for the winter.',
      'Consequently, these polar journeys demand extraordinary physical endurance.',
      'For this reason, researchers track their flight paths using miniature satellite transmitters.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A introduces the subject "Arctic terns" directly without relying on pronouns ("They") or transition linkers.'
  },
  {
    id: 'pq-19',
    topicId: 'paragraphs',
    lessonItemId: 'para-inference-vs-fact',
    difficulty: 'medium',
    question: 'Passage: "Preliminary clinical trials indicated that patients experienced noticeable symptom relief, though long-term efficacy remains under investigation." What can be logically inferred?',
    options: [
      'The treatment demonstrates encouraging initial results but requires continued scientific study.',
      'The drug provides a permanent cure for all related illnesses without side effects.',
      'The treatment proved completely ineffective in clinical settings.',
      'The medical regulatory board has banned the medication from pharmacy distribution.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Noticeable relief paired with ongoing investigation logically infers encouraging initial findings that still require further study.'
  },
  {
    id: 'pq-20',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'medium',
    question: '_____ the project was funded adequately, it suffered from severe administrative delays.',
    options: ['Although', 'Despite', 'In spite of', 'Because'],
    correctAnswerIndex: 0,
    explanation: '"Although" correctly introduces the subordinate clause with a subject and verb ("the project was funded").'
  },
  {
    id: 'pq-21',
    topicId: 'paragraphs',
    lessonItemId: 'para-odd-one-out',
    difficulty: 'easy',
    question: 'Find the odd sentence in a paragraph on "Volcanic Eruptions": (1) Magma rises through weaknesses in the Earth\'s crust. (2) Pressure builds until volcanic gases explode outward. (3) Hawaii is a popular holiday destination for honeymooners. (4) Ash clouds from eruptions can block sunlight for weeks.',
    options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
    correctAnswerIndex: 0,
    explanation: 'Sentence 3 discusses tourism and honeymoons, which is an off-topic tangent in a geology passage.'
  },
  {
    id: 'pq-22',
    topicId: 'paragraphs',
    lessonItemId: 'para-tone-purpose',
    difficulty: 'medium',
    question: 'An author repeatedly writes: "The author\'s reasoning is based on dubious assumptions and unsupported claims." What is the tone?',
    options: ['Critical and skeptical', 'Sympathetic and apologetic', 'Apathetic and indifferent', 'Overjoyed and festive'],
    correctAnswerIndex: 0,
    explanation: 'Calling assumptions dubious and claims unsupported displays a critical, skeptical tone.'
  },
  {
    id: 'pq-23',
    topicId: 'paragraphs',
    lessonItemId: 'para-missing-sentence',
    difficulty: 'hard',
    question: 'Sentence to insert: "Consequently, the city council imposed mandatory water rationing." Where does it best fit?\n\nA severe heatwave settled over the river valley in late July. [1] Within three weeks, the municipal reservoir dropped to less than twenty percent capacity. [2] Residents were prohibited from watering lawns and washing vehicles until rainfall replenished supplies. [3] Meteorological forecasts predicted dry conditions for the remainder of the summer. [4]',
    options: ['Slot [2]', 'Slot [1]', 'Slot [3]', 'Slot [4]'],
    correctAnswerIndex: 0,
    explanation: 'The critical reservoir drop in [1] directly triggers the rationing in [2], which is immediately followed by specific bans on watering lawns.'
  },
  {
    id: 'pq-24',
    topicId: 'paragraphs',
    lessonItemId: 'para-main-idea',
    difficulty: 'medium',
    question: 'Read: "A balanced diet fuels mental focus. Quality sleep repairs cellular damage. Daily movement regulates insulin sensitivity." What title best reflects the main idea?',
    options: [
      'The Interconnected Pillars of Physical and Mental Health',
      'Why Sleep is the Only Requirement for Longevity',
      'The Dangers of High Insulin Levels',
      'How to Prepare Balanced Meals on a Budget'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A embraces diet, sleep, and exercise together as unified pillars of overall well-being.'
  },
  {
    id: 'pq-25',
    topicId: 'paragraphs',
    lessonItemId: 'para-reordering',
    difficulty: 'hard',
    question: 'Arrange logically: (1) As a result of this discovery, doctors began washing their hands between surgeries. (2) In the 1840s, Ignaz Semmelweis noticed higher maternal mortality in specific hospital wards. (3) Postoperative infections plummeted drastically across European hospitals.',
    options: ['(2) - (1) - (3)', '(1) - (2) - (3)', '(3) - (2) - (1)', '(2) - (3) - (1)'],
    correctAnswerIndex: 0,
    explanation: 'Observation first (2), resulting behavior change next (1), and the final statistical medical outcome last (3).'
  },
  {
    id: 'pq-26',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'easy',
    question: 'He did not prepare for the interview; _____, he arrived thirty minutes late.',
    options: ['moreover', 'nevertheless', 'on the other hand', 'instead'],
    correctAnswerIndex: 0,
    explanation: '"Moreover" adds a second compounding negative fact to the initial negative statement.'
  },
  {
    id: 'pq-27',
    topicId: 'paragraphs',
    lessonItemId: 'para-inference-vs-fact',
    difficulty: 'medium',
    question: 'Passage: "Unlike earlier expeditions, the 1911 team carried specialized rations, relied on sledge dogs, and mapped wind shelters." What can be inferred about earlier expeditions?',
    options: [
      'Earlier expeditions were less adequately equipped for polar survival.',
      'Earlier expeditions all arrived at the South Pole safely.',
      'Earlier expeditions traveled exclusively by airplane.',
      'Earlier expeditions had unlimited financial resources.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Highlighting the superior rations and preparations of 1911 logically implies previous attempts lacked those advantages.'
  },
  {
    id: 'pq-28',
    topicId: 'paragraphs',
    lessonItemId: 'para-odd-one-out',
    difficulty: 'medium',
    question: 'Identify the odd sentence in a text on "The Physics of Bridges": (1) Suspension bridges distribute tension through steel cables. (2) Arch bridges dissipate load outward toward abutments. (3) Painting bridges red increases their aesthetic appeal to tourists. (4) Engineers calculate wind resonance to prevent catastrophic collapse.',
    options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
    correctAnswerIndex: 0,
    explanation: 'Sentences 1, 2, and 4 analyze structural engineering and physics. Sentence 3 is an irrelevant aesthetic comment.'
  },
  {
    id: 'pq-29',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'medium',
    question: 'The prototype demonstrated remarkable energy efficiency. _____, its manufacturing costs were deemed unsustainable.',
    options: ['However', 'Therefore', 'Furthermore', 'Similarly'],
    correctAnswerIndex: 0,
    explanation: 'High efficiency contrasted with unsustainable cost requires the contrast adverb "However".'
  },
  {
    id: 'pq-30',
    topicId: 'paragraphs',
    lessonItemId: 'para-tone-purpose',
    difficulty: 'easy',
    question: 'What is the tone of a passage describing how a laboratory technician methodically calibrated spectrometers step by step?',
    options: ['Procedural and matter-of-fact', 'Melodramatic and anxious', 'Humorous and whimsical', 'Confrontational and angry'],
    correctAnswerIndex: 0,
    explanation: 'Step-by-step description of technical calibration is procedural and matter-of-fact.'
  },
  {
    id: 'pq-31',
    topicId: 'paragraphs',
    lessonItemId: 'para-main-idea',
    difficulty: 'medium',
    question: 'Passage: "Archaeological excavations at the coastal cave revealed bone hooks, stone net sinkers, and deep-water fish skeletons dating to 20,000 BCE." What is the main finding of the text?',
    options: [
      'Prehistoric coastal communities possessed the tools and skills for offshore marine fishing.',
      'Bone hooks were the only hunting instruments used during the entire Ice Age.',
      'Cave dwellers refused to consume any terrestrial animals.',
      'Ancient oceans had far higher salinity levels than modern seas.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A summarizes the presence of hooks, sinkers, and deep-water fish bones without making extreme or irrelevant assumptions.'
  },
  {
    id: 'pq-32',
    topicId: 'paragraphs',
    lessonItemId: 'para-missing-sentence',
    difficulty: 'hard',
    question: 'Which sentence logically leads into the following statement?\n\n"________ Such extreme climatic shifts have disrupted agricultural cycles worldwide."',
    options: [
      'Recent decades have witnessed prolonged droughts alternating with unprecedented flash flooding.',
      'Local farmers often purchase diesel tractors from authorized regional distributors.',
      'Chemical fertilizers contain nitrogen and phosphorus to stimulate crop growth.',
      'University agricultural programs offer undergraduate degrees in soil science.'
    ],
    correctAnswerIndex: 0,
    explanation: '"Such extreme climatic shifts" refers directly back to droughts alternating with flash flooding.'
  },
  {
    id: 'pq-33',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'easy',
    question: 'The applicant was fluent in three languages; _____, she held a master\'s degree in international relations.',
    options: ['in addition', 'nevertheless', 'on the contrary', 'otherwise'],
    correctAnswerIndex: 0,
    explanation: '"In addition" smoothly adds another positive credential.'
  },
  {
    id: 'pq-34',
    topicId: 'paragraphs',
    lessonItemId: 'para-reordering',
    difficulty: 'medium',
    question: 'Arrange the sentences in logical chronological sequence:\n(1) These observations prompted him to formulate the theory of natural selection.\n(2) In 1831, Charles Darwin boarded HMS Beagle for a five-year global survey.\n(3) During the voyage, he meticulously cataloged distinctive species on the Galápagos Islands.',
    options: ['(2) - (3) - (1)', '(1) - (2) - (3)', '(3) - (2) - (1)', '(2) - (1) - (3)'],
    correctAnswerIndex: 0,
    explanation: 'Boarding the ship (2) precedes observations during the voyage (3), which leads to formulating the theory (1).'
  },
  {
    id: 'pq-35',
    topicId: 'paragraphs',
    lessonItemId: 'para-odd-one-out',
    difficulty: 'easy',
    question: 'Identify the odd sentence: (1) Renewable energy sources include solar, wind, and geothermal power. (2) They emit virtually zero greenhouse gases during operation. (3) Coal mining caused severe respiratory illnesses in the 19th century. (4) Transitioning to these green sources mitigates climate risks.',
    options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
    correctAnswerIndex: 0,
    explanation: 'Sentence 3 brings up historical coal mining diseases, deviating from the focus on modern renewable energy benefits.'
  },
  {
    id: 'pq-36',
    topicId: 'paragraphs',
    lessonItemId: 'para-inference-vs-fact',
    difficulty: 'hard',
    question: 'Passage: "Although the manuscript was dated 1450, spectroscopic ink analysis revealed synthetic pigments invented in 1930." What is the logical deduction?',
    options: [
      'The manuscript is a modern forgery rather than a 15th-century original.',
      'Synthetic pigments existed during the Middle Ages.',
      'The spectroscopic machine was malfunctioning.',
      'The author of the manuscript lived for 500 years.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Modern 20th-century ink on a supposedly medieval document logically proves it is a modern forgery.'
  },
  {
    id: 'pq-37',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'medium',
    question: 'He invested heavily in risky stocks; _____, he lost a significant portion of his savings.',
    options: ['as a result', 'nevertheless', 'furthermore', 'in contrast'],
    correctAnswerIndex: 0,
    explanation: 'Losing savings is the direct consequence of risky investing -> "as a result".'
  },
  {
    id: 'pq-38',
    topicId: 'paragraphs',
    lessonItemId: 'para-tone-purpose',
    difficulty: 'medium',
    question: 'An author discusses both the economic growth brought by factory automation and the resulting displacement of manual workers. What is the author doing?',
    options: ['Weighing and evaluating both sides of an issue', 'Unconditionally celebrating technological progress', 'Demanding the total destruction of all computers', 'Satirizing industrial workers'],
    correctAnswerIndex: 0,
    explanation: 'Examining both benefits and detriments is an objective evaluation of both sides.'
  },
  {
    id: 'pq-39',
    topicId: 'paragraphs',
    lessonItemId: 'para-main-idea',
    difficulty: 'easy',
    question: 'Which sentence would make the most effective TOPIC SENTENCE for a paragraph detailing searchable online archives, high-resolution scans, and remote access to rare historical manuscripts?',
    options: [
      'Digital technology has fundamentally expanded public accessibility to rare historical archives.',
      'Papyrus manuscripts were commonly rolled into scrolls in ancient Egyptian libraries.',
      'Librarians must complete postgraduate studies in archival preservation.',
      'Internet broadband providers charge fluctuating monthly subscription fees.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Option A introduces the unifying theme of digital technology enhancing archive accessibility.'
  },
  {
    id: 'pq-40',
    topicId: 'paragraphs',
    lessonItemId: 'para-missing-sentence',
    difficulty: 'hard',
    question: 'Sentence to insert: "This disparity in funding prompted widespread student protests." Where does it best fit?\n\nA state audit revealed that suburban academies received double the budget allocation of inner-city schools. [1] Campus demonstrations erupted across the capital, with thousands demanding equitable funding. [2] In response, municipal authorities convened an emergency oversight committee. [3] A revised education budget was passed three weeks later. [4]',
    options: ['Slot [1]', 'Slot [2]', 'Slot [3]', 'Slot [4]'],
    correctAnswerIndex: 0,
    explanation: 'The sentence directly explains the immediate outcome of the funding audit (Slot [1]), leading into campus demonstrations (Slot [2]).'
  },
  {
    id: 'pq-41',
    topicId: 'paragraphs',
    lessonItemId: 'para-reordering',
    difficulty: 'hard',
    question: 'Which of the following sentences cannot logically serve as the OPENING sentence of a paragraph?',
    options: [
      'Furthermore, these policy adjustments failed to curb rising inflation.',
      'Economic stability requires balanced fiscal and monetary governance.',
      'In 2008, a major banking collapse affected financial markets worldwide.',
      'Economists analyze consumer spending patterns to forecast quarterly growth.'
    ],
    correctAnswerIndex: 0,
    explanation: '"Furthermore" and "these policy adjustments" both rely on previously stated information, making it impossible as an opening sentence.'
  },
  {
    id: 'pq-42',
    topicId: 'paragraphs',
    lessonItemId: 'para-odd-one-out',
    difficulty: 'medium',
    question: 'Find the odd sentence in a paragraph on "Coral Bleaching": (1) Elevated sea temperatures cause corals to expel symbiotic algae. (2) Without algae, corals lose their vibrant colors and turn white. (3) Scuba diving equipment can be rented along coastal beaches. (4) Prolonged bleaching often leads to widespread reef mortality.',
    options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
    correctAnswerIndex: 0,
    explanation: 'Sentence 3 discusses equipment rental for tourists, breaking the ecological focus on reef bleaching.'
  },
  {
    id: 'pq-43',
    topicId: 'paragraphs',
    lessonItemId: 'para-linking-words',
    difficulty: 'easy',
    question: '_____ knowing the potential risks involved, the rescue team volunteered for the mission.',
    options: ['Despite', 'Although', 'Even though', 'Whereas'],
    correctAnswerIndex: 0,
    explanation: '"Knowing" is a gerund (-ing verb form acting as a noun phrase), requiring the preposition "Despite".'
  },
  {
    id: 'pq-44',
    topicId: 'paragraphs',
    lessonItemId: 'para-tone-purpose',
    difficulty: 'medium',
    question: 'If a passage concludes: "Consumers are strongly advised to inspect product labels carefully to avoid toxic additives", the purpose is:',
    options: ['To caution and advise the audience', 'To mock the consumers', 'To entertain children', 'To narrate an ancient legend'],
    correctAnswerIndex: 0,
    explanation: 'Explicitly warning consumers against hazards serves to caution and advise.'
  },
  {
    id: 'pq-45',
    topicId: 'paragraphs',
    lessonItemId: 'para-inference-vs-fact',
    difficulty: 'easy',
    question: 'Passage: "When the conductor tapped his baton, the audience immediately ceased whispering, programs rustled into laps, and all eyes turned toward the raised podium." What can be logically inferred?',
    options: [
      'The musical performance was about to begin.',
      'An emergency building evacuation was underway.',
      'The concert hall had lost electrical power.',
      'The audience was dissatisfied with the orchestra.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The conductor tapping his baton, the audience quieting down, and looking at the podium logically indicates the performance is starting.'
  }
];

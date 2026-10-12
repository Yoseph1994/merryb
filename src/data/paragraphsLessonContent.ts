import { LessonItem } from '../types';

export const PARAGRAPHS_LESSON_ITEMS: LessonItem[] = [
  {
    id: 'para-main-idea',
    topicId: 'paragraphs',
    title: 'Main Idea & The Topic Sentence',
    subtitle: 'Spotting the umbrella thought and avoiding narrow traps',
    order: 1,
    explanationSteps: [
      {
        title: 'The Umbrella Concept',
        text: 'The main idea is the umbrella under which every other sentence in the paragraph fits. If a sentence does not directly support it, it does not belong in the paragraph.',
        visual: {
          type: 'comparison',
          title: 'Main Idea vs Supporting Detail',
          leftSide: {
            label: 'Main Idea (Umbrella)',
            text: 'Sleep deprivation impairs multiple cognitive functions.',
            tag: 'Broad, core thesis'
          },
          rightSide: {
            label: 'Supporting Detail (Spoke)',
            text: 'Reaction time slows by 30% after 24 sleepless hours.',
            tag: 'Specific data point'
          }
        }
      },
      {
        title: 'Where to Find the Topic Sentence',
        text: 'In 80% of exam passages, the topic sentence is either Sentence 1 (introducing the thesis) or Sentence 2 (after a brief hook). Occasionally, it appears as a summary conclusion.',
        visual: {
          type: 'chips',
          title: 'Prime Locations',
          items: [
            { label: 'Sentence 1', value: 'Direct statement of purpose' },
            { label: 'Sentence 2', value: 'Clarification after an opening hook' },
            { label: 'Final Sentence', value: 'Concluding summary synthesis' }
          ]
        }
      },
      {
        title: 'The "Too Narrow" Exam Trap',
        text: 'Examiners always create a distractor option that is 100% true according to the passage, but mentions only ONE single supporting detail rather than the whole passage.',
        visual: {
          type: 'chips',
          title: 'Exam Traps to Avoid',
          items: [
            { label: 'Too Narrow', value: 'Focuses on only one sentence or statistic' },
            { label: 'Too Broad', value: 'Extends far beyond the text into universal claims' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-mi-p1',
        type: 'multiple_choice',
        prompt: 'Read: "Urban trees reduce air pollution, provide shade that cools city temperatures, and enhance mental well-being for residents." What is the main idea?',
        options: [
          'Urban trees provide multiple critical environmental and health benefits.',
          'Shade from urban trees significantly cools summer temperatures.',
          'Air pollution is the biggest hazard in modern cities.',
          'Mental well-being depends entirely on nature.'
        ],
        correctAnswer: 0,
        explanation: 'Option A is the true umbrella statement covering all three specific points mentioned.'
      },
      {
        id: 'para-mi-p2',
        type: 'fill_gap',
        prompt: 'Read: "A balanced diet provides essential vitamins, promotes metabolic stability, and strengthens immune defense." This passage emphasizes that balanced nutrition _____ overall physical health.',
        options: ['supports', 'diminishes', 'replaces', 'neglects'],
        correctAnswer: 0,
        explanation: 'The sentence outlines the multiple supporting health benefits of balanced nutrition.'
      },
      {
        id: 'para-mi-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the word that makes this answer choice dangerously extreme:',
        words: ['The', 'passage', 'proves', 'that', 'exercise', 'always', 'prevents', 'all', 'illness.'],
        wrongWordIndex: 5,
        correction: 'often',
        explanation: 'Extreme words like "always" and "all" are classic exam traps in reading comprehension.'
      },
      {
        id: 'para-mi-p4',
        type: 'match_pairs',
        prompt: 'Match each sentence from a text on honeybees to its paragraph role:',
        pairs: [
          { left: 'Honeybees perform vital ecological roles.', right: 'Topic Sentence (Main Idea)' },
          { left: 'They pollinate 70% of food crops.', right: 'Supporting Evidence' },
          { left: 'In 2020, colonies declined by 12%.', right: 'Specific Statistic' },
          { left: 'Protecting hives is thus crucial.', right: 'Concluding Takeaway' }
        ],
        explanation: 'Recognizing these distinct roles allows you to identify main ideas quickly on exams.'
      }
    ],
    retryPractice: [
      {
        id: 'para-mi-r1',
        type: 'multiple_choice',
        prompt: 'Read: "Modern smartphones have transformed communication. They enable real-time video calls, provide instant translation across languages, and link global communities effortlessly." What is the main idea?',
        options: [
          'Smartphones have revolutionized how humans communicate globally.',
          'Smartphones offer real-time video calls.',
          'Language barriers no longer exist anywhere.',
          'Instant translation apps are the most expensive software.'
        ],
        correctAnswer: 0,
        explanation: 'Option A covers the whole passage; Option B is merely one supporting detail.'
      },
      {
        id: 'para-mi-r2',
        type: 'fill_gap',
        prompt: 'Read: "Early seafaring navigators charted voyages using constellations, ocean currents, and prevailing trade winds." What is the main idea? Ancient navigators used diverse natural clues to _____ ocean voyages.',
        options: ['guide', 'avoid', 'delay', 'prohibit'],
        correctAnswer: 0,
        explanation: 'The sentence illustrates that navigators relied on constellations, currents, and winds to guide voyages.'
      },
      {
        id: 'para-mi-r3',
        type: 'bucket_sort',
        prompt: 'Sort statements into Main Idea vs Supporting Detail:',
        buckets: ['Main Idea (Umbrella)', 'Supporting Detail'],
        itemsToSort: [
          { text: 'Renewable energy adoption brings vital economic benefits.', correctBucketIndex: 0 },
          { text: 'Solar installations created 15,000 jobs last year.', correctBucketIndex: 1 },
          { text: 'Regular cardiovascular exercise protects heart health.', correctBucketIndex: 0 },
          { text: 'Walking 30 minutes daily lowers blood pressure by 8%.', correctBucketIndex: 1 }
        ],
        explanation: 'Main ideas make generalized claims; supporting details provide concrete facts and numbers.'
      },
      {
        id: 'para-mi-r4',
        type: 'multiple_choice',
        prompt: 'Read: "Urban parks provide vital green spaces for city dwellers. They offer quiet areas for relaxation, trees that filter air pollution, and safe recreational fields for children." Which sentence is the TOPIC SENTENCE?',
        options: [
          'Urban parks provide vital green spaces for city dwellers.',
          'They offer quiet areas for relaxation.',
          'Trees that filter air pollution.',
          'Safe recreational fields for children.'
        ],
        correctAnswer: 0,
        explanation: 'The first sentence states the central umbrella idea that all other sentences develop.'
      }
    ],
    rememberCard: {
      title: 'Remember: Main Idea',
      bullets: [
        'The main idea is the umbrella that covers ALL sentences in the paragraph.',
        'Beware of "Too Narrow" options that repeat true facts from only one line.',
        'Reject options with extreme words like "always", "never", or "completely".'
      ]
    }
  },
  {
    id: 'para-reordering',
    topicId: 'paragraphs',
    title: 'Reordering Jumbled Sentences',
    subtitle: 'Pronoun chains, time order, and opening clues',
    order: 2,
    explanationSteps: [
      {
        title: 'Step 1: Find the Independent Opener',
        text: 'The first sentence CANNOT start with a pronoun (he, they, it), a demonstrative (this, these), or a contrast linker (however, therefore). It must introduce a standalone noun.',
        visual: {
          type: 'comparison',
          title: 'Opening Sentence Clues',
          leftSide: {
            label: 'Cannot Be Sentence 1',
            text: 'However, this method required extensive calibration.',
            tag: 'Has "However" & "this method"'
          },
          rightSide: {
            label: 'Valid Opener',
            text: 'In 1928, Alexander Fleming discovered penicillin.',
            tag: 'Independent proper noun'
          }
        }
      },
      {
        title: 'Step 2: Follow the Pronoun Chain',
        text: 'A noun must ALWAYS appear before the pronoun that refers back to it: "Dr. Evans" before "he", "the solar panels" before "they".',
        visual: {
          type: 'formula',
          title: 'Noun to Pronoun Sequence',
          formulaTokens: [
            { text: 'Full Noun Introduced', highlight: true, color: 'present' },
            { text: '->', highlight: false },
            { text: 'Pronoun / Demonstrative (he, they, this)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Step 3: Chronology & Cause-Effect',
        text: 'Look for chronological markers (initially -> subsequently -> finally) and logical cause before effect (it rained -> the match was canceled).',
        visual: {
          type: 'chips',
          title: 'Logical Sequence Markers',
          items: [
            { label: 'Time Order', value: 'Initially -> Later -> Eventually' },
            { label: 'Cause & Effect', value: 'Due to severe frost -> crops were damaged' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-ro-p1',
        type: 'multiple_choice',
        prompt: 'Which sentence is the most suitable OPENING sentence for a paragraph?',
        options: [
          'Archaeologists recently unearthed a 3,000-year-old tomb in the valley.',
          'However, these artifacts were severely damaged by water.',
          'This discovery surprised the entire research expedition.',
          'Therefore, they decided to halt excavation until spring.'
        ],
        correctAnswer: 0,
        explanation: 'Option A introduces the core subject independently without relying on back-referencing pronouns or transition words.'
      },
      {
        id: 'para-ro-p2',
        type: 'fill_gap',
        prompt: 'The laboratory experiment yielded inconsistent data; _____, the researchers repeated the trials with a larger sample.',
        options: ['therefore', 'otherwise', 'nevertheless', 'whereas'],
        correctAnswer: 0,
        explanation: 'Repeating the trial is the direct logical outcome of inconsistent data, requiring "therefore".'
      },
      {
        id: 'para-ro-p3',
        type: 'sentence_builder',
        prompt: 'Order the narrative chronologically:',
        jumbledWords: ['graduated.', 'enrolled', 'Sarah', 'Four', 'she', 'years', 'later,', 'in', 'college.'],
        correctSentenceWords: ['Sarah', 'enrolled', 'in', 'college.', 'Four', 'years', 'later,', 'she', 'graduated.'],
        explanation: 'Enrollment happens first, followed by the time marker "Four years later, she graduated".'
      },
      {
        id: 'para-ro-p4',
        type: 'match_pairs',
        prompt: 'Match reference clue to its preceding partner:',
        pairs: [
          { left: '"This innovative device"', right: 'Follows: "engineers built a compact sensor"' },
          { left: '"Consequently, he resigned"', right: 'Follows: "the minister faced heavy criticism"' },
          { left: '"Eventually, it succeeded"', right: 'Follows: "the team attempted multiple trials"' },
          { left: '"These endangered animals"', right: 'Follows: "protecting snow leopards"' }
        ],
        explanation: 'Demonstrative phrases ("this device", "these animals") must directly track their antecedent nouns.'
      }
    ],
    retryPractice: [
      {
        id: 'para-ro-r1',
        type: 'multiple_choice',
        prompt: 'Which of the following sentences cannot logically serve as the OPENING sentence of a paragraph?',
        options: [
          'Consequently, the international symposium was postponed until April.',
          'Severe blizzards disrupted flight schedules across northern Europe.',
          'Astronomers observed a rare solar eclipse through the mountain telescope.',
          'The museum opened a new wing dedicated to ancient Mediterranean ceramics.'
        ],
        correctAnswer: 0,
        explanation: '"Consequently" explicitly indicates an outcome resulting from a prior circumstance, so it cannot open a paragraph.'
      },
      {
        id: 'para-ro-r2',
        type: 'fill_gap',
        prompt: 'Read: "Scientists introduced a colony of bees into the orchard. Soon, _____ began pollinating the apple blossoms."',
        options: ['they', 'it', 'he', 'she'],
        correctAnswer: 0,
        explanation: 'The plural noun "bees" takes the subject pronoun "they".'
      },
      {
        id: 'para-ro-r3',
        type: 'bucket_sort',
        prompt: 'Sort sentences into Opening Sentences vs Following Sentences:',
        buckets: ['Valid Opening Sentence', 'Must Follow Another Sentence'],
        itemsToSort: [
          { text: 'Honeybees play a pivotal role in pollinating agricultural crops.', correctBucketIndex: 0 },
          { text: 'Moreover, their population has declined sharply since 2010.', correctBucketIndex: 1 },
          { text: 'As a result of this decline, fruit harvests dropped.', correctBucketIndex: 1 },
          { text: 'The Great Barrier Reef is the world\'s largest coral system.', correctBucketIndex: 0 }
        ],
        explanation: 'Opening sentences introduce the full noun; following sentences use linkers like "Moreover" or "this decline".'
      },
      {
        id: 'para-ro-r4',
        type: 'multiple_choice',
        prompt: 'Arrange in logical sequence: (1) He tested it on bacterial cultures. (2) Fleming discovered penicillin in 1928. (3) This breakthrough revolutionized medicine.',
        options: [
          '(2) - (1) - (3)',
          '(1) - (2) - (3)',
          '(3) - (2) - (1)',
          '(2) - (3) - (1)'
        ],
        correctAnswer: 0,
        explanation: 'Discovery first (2), testing next (1), then the broad historical significance (3).'
      }
    ],
    rememberCard: {
      title: 'Remember: Sentence Reordering',
      bullets: [
        'Sentence 1 never starts with "this", "he", "however", or "therefore".',
        'Full nouns must appear BEFORE pronouns that replace them.',
        'Follow logical cause-and-effect and chronological timelines.'
      ]
    }
  },
  {
    id: 'para-odd-one-out',
    topicId: 'paragraphs',
    title: 'Spotting the Odd Sentence Out',
    subtitle: 'Finding the sentence that violates paragraph unity',
    order: 3,
    explanationSteps: [
      {
        title: 'Paragraph Unity',
        text: 'Every unified paragraph focuses on ONE specific topic. The odd sentence out is usually related to the general field, but deviates from the specific focus of the passage.',
        visual: {
          type: 'comparison',
          title: 'The Unity Test',
          leftSide: {
            label: 'Unified Sentences (Topic: Coffee Health Effects)',
            text: 'Caffeine enhances alertness. Studies show it lowers stroke risk.',
            tag: 'On focus: health benefits'
          },
          rightSide: {
            label: 'Odd Sentence Out',
            text: 'Brazil is the largest exporter of raw coffee beans.',
            tag: 'Off-topic: economics/geography'
          }
        }
      },
      {
        title: 'Three Types of Odd Sentences',
        text: '1. The Tangent (same subject, different topic). 2. The Tone Shift (formal analysis interrupted by personal complaint). 3. The Time Jump (past history suddenly interrupted by an unrelated modern complaint).',
        visual: {
          type: 'chips',
          title: 'Odd Sentence Categories',
          items: [
            { label: 'The Tangent', value: 'Discusses farming methods in a cooking recipe' },
            { label: 'The Tone Shift', value: 'Emotional opinion inside scientific research' },
            { label: 'The Contradiction', value: 'Directly refutes the main thesis without transition' }
          ]
        }
      },
      {
        title: 'The Elimination Technique',
        text: 'Summarize each sentence in 3 words. The sentence whose 3 words do not share the exact same thematic thread is the odd one out.',
        visual: {
          type: 'chips',
          title: '3-Word Summary Method',
          items: [
            { label: 'S1', value: 'Whales communicate songs' },
            { label: 'S2', value: 'Songs travel miles' },
            { label: 'S3', value: 'Shark fin trade (ODD)' },
            { label: 'S4', value: 'Calves learn melodies' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-odd-p1',
        type: 'multiple_choice',
        prompt: 'Identify the ODD sentence: (1) Regular reading expands vocabulary. (2) It enhances critical thinking and empathy. (3) Printing presses were invented in Germany in the 15th century. (4) Furthermore, it lowers cognitive decline in older adults.',
        options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
        correctAnswer: 0,
        explanation: 'Sentences 1, 2, and 4 focus on the personal benefits of reading. Sentence 3 is a historical fact about printing technology.'
      },
      {
        id: 'para-odd-p2',
        type: 'fill_gap',
        prompt: 'Identify the odd sentence: "(1) Renewable energy systems generate electricity cleanly. (2) Solar panel costs have plummeted. (3) Local coal mines were profitable in 1890. (4) Consequently, solar adoption is surging." Sentence 3 breaks the _____ of the text.',
        options: ['unity', 'spelling', 'pronunciation', 'length'],
        correctAnswer: 0,
        explanation: 'Sentence 3 brings up 19th-century coal mines, breaking the paragraph unity of modern solar energy.'
      },
      {
        id: 'para-odd-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the off-topic subject in this medical passage summary:',
        words: ['Vaccines', 'stimulate', 'antibodies,', 'prevent', 'epidemics,', 'and', 'attract', 'airline', 'tourists.'],
        wrongWordIndex: 7,
        correction: 'save lives',
        explanation: '"Airline tourists" is completely off-topic in a passage regarding vaccine immunology.'
      },
      {
        id: 'para-odd-p4',
        type: 'match_pairs',
        prompt: 'Match passage theme to the sentence that breaks its unity:',
        pairs: [
          { left: 'Theme: Electric car battery lifespan', right: 'Odd: "Gasoline prices fluctuated last summer."' },
          { left: 'Theme: Benefits of meditation', right: 'Odd: "Cushions can be bought online cheaply."' },
          { left: 'Theme: Solar power efficiency', right: 'Odd: "Sunburns are common at the beach."' },
          { left: 'Theme: Deep sea animal adaptations', right: 'Odd: "Cruise ships have luxurious cabins."' }
        ],
        explanation: 'Each odd sentence shares an incidental keyword but completely abandons the analytical theme.'
      }
    ],
    retryPractice: [
      {
        id: 'para-odd-r1',
        type: 'multiple_choice',
        prompt: 'Which sentence breaks unity? (1) Ancient Roman aqueducts brought fresh water from distant mountains. (2) They relied solely on gravity to keep water flowing. (3) Roman gladiators fought in large arenas. (4) This advanced engineering marvel sustained growing cities.',
        options: ['Sentence 3', 'Sentence 1', 'Sentence 2', 'Sentence 4'],
        correctAnswer: 0,
        explanation: 'The passage is strictly about Roman aqueduct engineering. Gladiatorial combat is an irrelevant tangent.'
      },
      {
        id: 'para-odd-r2',
        type: 'fill_gap',
        prompt: 'Identify the odd sentence: (1) Cacti store water in thick stems. (2) Their leaves are sharp spines. (3) Sand dunes shift in strong winds. (4) Shallow roots capture rare rain. Sentence _____ is the odd sentence.',
        options: ['3', '1', '2', '4'],
        correctAnswer: 0,
        explanation: 'Sentence 3 discusses shifting sand dunes rather than biological plant adaptations.'
      },
      {
        id: 'para-odd-r3',
        type: 'bucket_sort',
        prompt: 'Sort sentences for a paragraph on "Sleep and Memory Consolidation":',
        buckets: ['Belongs in Paragraph', 'Odd Sentence Out'],
        itemsToSort: [
          { text: 'During deep sleep, the brain reorganizes daytime memories.', correctBucketIndex: 0 },
          { text: 'Memory retention drops significantly after sleepless nights.', correctBucketIndex: 0 },
          { text: 'Mattress stores often hold clearance sales in August.', correctBucketIndex: 1 },
          { text: 'Coffee was first cultivated in ancient Ethiopia.', correctBucketIndex: 1 }
        ],
        explanation: 'Commercial sales and unrelated crop histories break the neurological scientific focus.'
      },
      {
        id: 'para-odd-r4',
        type: 'multiple_choice',
        prompt: 'Find the odd sentence in a paragraph about desert reptile survival: (1) Desert lizards burrow underground to escape scorching midday heat. (2) Their specialized scales minimize moisture loss through evaporation. (3) Highway speed limits in desert regions are monitored by radar. (4) They emerge at dawn and dusk when temperatures are moderate.',
        options: [
          'Sentence 3',
          'Sentence 1',
          'Sentence 2',
          'Sentence 4'
        ],
        correctAnswer: 0,
        explanation: 'Sentence 3 refers to highway traffic laws, breaking the zoological focus on reptile survival mechanisms.'
      }
    ],
    rememberCard: {
      title: 'Remember: Odd Sentence Out',
      bullets: [
        'A unified paragraph has exactly ONE specific focus.',
        'Watch for tangents: shared keyword, but different direction.',
        'Notice tone shifts: personal rants inside neutral facts.'
      ]
    }
  },
  {
    id: 'para-missing-sentence',
    topicId: 'paragraphs',
    title: 'The Missing Sentence Insertion Trick',
    subtitle: 'Look left for ties and look right for transitions',
    order: 4,
    explanationSteps: [
      {
        title: 'The Two-Way Link Rule',
        text: 'A missing sentence must connect in BOTH directions. It must relate logically to the sentence immediately preceding it (Look Left) AND smoothly introduce the sentence following it (Look Right).',
        visual: {
          type: 'formula',
          title: 'The Bridge Technique',
          formulaTokens: [
            { text: 'Preceding Sentence (Left)', highlight: true, color: 'past' },
            { text: '<-> [INSERTION SLOT] <->', highlight: true, color: 'present' },
            { text: 'Following Sentence (Right)', highlight: true, color: 'future' }
          ]
        }
      },
      {
        title: 'Look for Anchor Words',
        text: 'If the inserted sentence has "These recommendations...", the preceding sentence MUST list recommendations. If the following sentence begins with "However...", the inserted sentence must provide the contrasting idea.',
        visual: {
          type: 'chips',
          title: 'Anchor Word Clues',
          items: [
            { label: 'Left Clue', value: 'References an idea mentioned right before it' },
            { label: 'Right Clue', value: 'Sets up a noun or transition that follows directly' }
          ]
        }
      },
      {
        title: 'Read It Aloud Mentally',
        text: 'After placing the sentence into a test slot [A, B, C, or D], read the 3-sentence sequence together. The logic must flow seamlessly without any awkward intellectual gap.',
        visual: {
          type: 'comparison',
          title: 'Testing The Slot',
          leftSide: {
            label: 'Wrong Slot',
            text: 'Creates an abrupt disconnect with neighboring ideas.',
            tag: 'Jarring transition'
          },
          rightSide: {
            label: 'Correct Slot',
            text: 'Acts as a natural bridge between left and right.',
            tag: 'Seamless bridge'
          }
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-ms-p1',
        type: 'multiple_choice',
        prompt: 'Where does the sentence "These miniature sensors transmit data directly to a satellite." best fit?\n\nWildlife biologists attached tracking devices to migrating caribou. [1] As the herd traverses arctic tundra, environmental information is gathered continually. [2] Researchers can thus monitor herd movements in real time. [3] This technology has revolutionized conservation efforts. [4]',
        options: ['Slot [1]', 'Slot [2]', 'Slot [3]', 'Slot [4]'],
        correctAnswer: 0,
        explanation: '"These miniature sensors" links directly to the "tracking devices" mentioned in the first sentence (Slot [1]).'
      },
      {
        id: 'para-ms-p2',
        type: 'fill_gap',
        prompt: 'Insert the logical transition: "The team failed to secure private venture capital. _____, government research grants allowed them to proceed with trials."',
        options: ['However', 'Therefore', 'Furthermore', 'Similarly'],
        correctAnswer: 0,
        explanation: 'Failing to secure capital contrasted with receiving government grants requires "However".'
      },
      {
        id: 'para-ms-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the missing demonstrative anchor that bridges the preceding idea:',
        words: ['Scientists', 'proposed', 'two', 'theories.', 'Consequently,', 'an', 'theory', 'gained', 'support.'],
        wrongWordIndex: 5,
        correction: 'the latter',
        explanation: 'To bridge with "two theories", reference words like "the former" or "the latter" are required.'
      },
      {
        id: 'para-ms-p4',
        type: 'match_pairs',
        prompt: 'Match inserted sentence lead-in to its required previous context:',
        pairs: [
          { left: '"This financial deficit..."', right: 'Preceding: mentions losses of $5 million' },
          { left: '"Despite these precautions..."', right: 'Preceding: describes installing security locks' },
          { left: '"Such extreme temperatures..."', right: 'Preceding: notes winter lows of -40°C' },
          { left: '"On the other hand, critics argue..."', right: 'Preceding: praises the program\'s success' }
        ],
        explanation: 'Anchor nouns and contrast words must precisely mirror the context on the left.'
      }
    ],
    retryPractice: [
      {
        id: 'para-ms-r1',
        type: 'multiple_choice',
        prompt: 'Which sentence logically precedes: "However, this unexpected finding puzzled the geneticists."?',
        options: [
          'Initial DNA sequencing revealed gene mutations never before documented in the species.',
          'Laboratory electricity bills were paid promptly at the beginning of each quarter.',
          'University students frequently study in the campus cafeteria on weekends.',
          'Scientific glass beakers should be washed thoroughly after chemical experiments.'
        ],
        correctAnswer: 0,
        explanation: '"This unexpected finding" directly refers to novel gene mutations introduced in the preceding sentence.'
      },
      {
        id: 'para-ms-r2',
        type: 'fill_gap',
        prompt: 'Read: "Engineers constructed massive concrete seawalls along the harbor. _____ barriers shielded coastal neighborhoods during the hurricane."',
        options: ['These', 'This', 'That', 'An'],
        correctAnswer: 0,
        explanation: 'The plural noun "barriers" refers back to the seawalls, requiring the plural demonstrative "These".'
      },
      {
        id: 'para-ms-r3',
        type: 'multiple_choice',
        prompt: 'Which transition word in an inserted sentence signals an opposing argument?',
        options: ['Conversely', 'Furthermore', 'Consequently', 'Similarly'],
        correctAnswer: 0,
        explanation: '"Conversely" signals a direct contrast to the preceding sentence.'
      },
      {
        id: 'para-ms-r4',
        type: 'bucket_sort',
        prompt: 'Sort transitions by their relationship to the preceding sentence:',
        buckets: ['Signals Contrast (Opposite)', 'Signals Addition (More)'],
        itemsToSort: [
          { text: 'In contrast / On the contrary', correctBucketIndex: 0 },
          { text: 'Furthermore / In addition', correctBucketIndex: 1 },
          { text: 'However / Nonetheless', correctBucketIndex: 0 },
          { text: 'Moreover / Additionally', correctBucketIndex: 1 }
        ],
        explanation: 'Transitions show exact directional relationships with the preceding context.'
      }
    ],
    rememberCard: {
      title: 'Remember: Missing Sentence',
      bullets: [
        'Check left: what previous noun does this sentence refer back to?',
        'Check right: does the next sentence flow naturally from this one?',
        'Look for demonstratives (this, these, such) as connecting anchors.'
      ]
    }
  },
  {
    id: 'para-linking-words',
    topicId: 'paragraphs',
    title: 'Linking Words & Transition Decoders',
    subtitle: 'Contrast, addition, cause, result, and sequence',
    order: 5,
    explanationSteps: [
      {
        title: 'The Navigation System of Writing',
        text: 'Linking words tell the reader where the argument is turning. Choosing the wrong transition completely breaks the logic of the passage.',
        visual: {
          type: 'table',
          title: 'The 4 Main Transition Families',
          headers: ['Family', 'Purpose', 'Key Transition Words'],
          rows: [
            ['Contrast', 'Show opposite or twist', 'However, nevertheless, although, whereas'],
            ['Addition', 'Add supporting point', 'Furthermore, moreover, in addition, besides'],
            ['Cause / Result', 'Show outcome', 'Therefore, consequently, as a result, thus'],
            ['Sequence', 'Show time or step', 'Initially, subsequently, eventually, finally']
          ]
        }
      },
      {
        title: 'Although vs However',
        text: '"Although" is a subordinating conjunction joining two clauses in one sentence with a comma. "However" is an adverb starting a new sentence or preceded by a semicolon.',
        visual: {
          type: 'comparison',
          title: 'Punctuation & Structure',
          leftSide: {
            label: 'Although (One sentence)',
            text: 'Although it rained, we enjoyed the match.',
            tag: 'Subordinate clause + comma'
          },
          rightSide: {
            label: 'However (New sentence / Semicolon)',
            text: 'It rained heavily. However, we enjoyed the match.',
            tag: 'Capital + comma after'
          }
        }
      },
      {
        title: 'Despite vs In Spite Of',
        text: '"Despite" and "In spite of" are prepositions. They must be followed by a NOUN or an -ING verb, NEVER a full subject + verb clause (unless using "the fact that").',
        visual: {
          type: 'chips',
          title: 'Preposition Rules',
          items: [
            { label: 'Correct', value: 'Despite the storm, the flight landed.' },
            { label: 'Correct', value: 'Despite feeling tired, she studied.' },
            { label: 'Fatal Error', value: 'Despite it was storming (NEVER)' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-lw-p1',
        type: 'multiple_choice',
        prompt: 'The research team faced severe budget cuts. _____, they completed the trials ahead of schedule.',
        options: ['Nevertheless', 'Furthermore', 'Consequently', 'Similarly'],
        correctAnswer: 0,
        explanation: 'Completing trials despite budget cuts is an unexpected contrast, requiring "Nevertheless".'
      },
      {
        id: 'para-lw-p2',
        type: 'fill_gap',
        prompt: '_____ the severe weather conditions, the rescue helicopter landed safely.',
        options: ['Despite', 'Although', 'Even though', 'Whereas'],
        correctAnswer: 0,
        explanation: '"The severe weather conditions" is a noun phrase, requiring the preposition "Despite".'
      },
      {
        id: 'para-lw-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the grammar error after "despite":',
        words: ['Despite', 'he', 'was', 'exhausted,', 'David', 'finished', 'the', 'marathon.'],
        wrongWordIndex: 0,
        correction: 'Although',
        explanation: 'Before a full clause ("he was exhausted"), use conjunction "Although", not preposition "Despite".'
      },
      {
        id: 'para-lw-p4',
        type: 'match_pairs',
        prompt: 'Match transition word to its logic:',
        pairs: [
          { left: 'Moreover', right: 'Adds an extra supportive argument' },
          { left: 'Consequently', right: 'Shows a direct logical result' },
          { left: 'Whereas', right: 'Contrasts two parallel facts' },
          { left: 'Subsequently', right: 'Indicates the next event in time' }
        ],
        explanation: 'Each linking word enforces a strict rhetorical direction.'
      }
    ],
    retryPractice: [
      {
        id: 'para-lw-r1',
        type: 'multiple_choice',
        prompt: 'The applicant has extensive experience in accounting; _____, she is fluent in German and French.',
        options: ['furthermore', 'however', 'consequently', 'otherwise'],
        correctAnswer: 0,
        explanation: '"Furthermore" introduces an additional positive qualification to support the application.'
      },
      {
        id: 'para-lw-r2',
        type: 'fill_gap',
        prompt: 'The factory failed safety inspections; _____, production was halted immediately.',
        options: ['therefore', 'nevertheless', 'in addition', 'on the contrary'],
        correctAnswer: 0,
        explanation: 'Halting production is the direct consequence of failing safety checks -> "therefore".'
      },
      {
        id: 'para-lw-r3',
        type: 'multiple_choice',
        prompt: 'Which sentence uses "Although" with correct grammar and punctuation?',
        options: [
          'Although the test was difficult, she achieved the highest score.',
          'Although the test was difficult. She achieved the highest score.',
          'The test was difficult, although, she achieved the highest score.',
          'Although she was difficult the test.'
        ],
        correctAnswer: 0,
        explanation: '"Although [clause], [main clause]" is the standard subordinate structure.'
      },
      {
        id: 'para-lw-r4',
        type: 'bucket_sort',
        prompt: 'Sort transitions by function:',
        buckets: ['Cause & Effect (Result)', 'Addition of Ideas'],
        itemsToSort: [
          { text: 'As a result / Consequently', correctBucketIndex: 0 },
          { text: 'In addition / Besides', correctBucketIndex: 1 },
          { text: 'Thus / Therefore', correctBucketIndex: 0 },
          { text: 'Moreover / Furthermore', correctBucketIndex: 1 }
        ],
        explanation: 'Therefore and consequently show results; moreover and furthermore add points.'
      }
    ],
    rememberCard: {
      title: 'Remember: Linking Words',
      bullets: [
        'Contrast: However (starts sentence), Although (needs comma clause), Despite (needs noun).',
        'Result: Therefore, consequently, as a result (show effect).',
        'Addition: Furthermore, moreover, in addition (add another supportive layer).'
      ]
    }
  },
  {
    id: 'para-inference-vs-fact',
    topicId: 'paragraphs',
    title: 'Inference vs Stated Fact',
    subtitle: 'Logical deduction vs extreme distractor traps',
    order: 6,
    explanationSteps: [
      {
        title: 'What is an Inference?',
        text: 'An inference is a logical deduction based strictly on clues in the text. It is NOT directly quoted, but it is 100% supported by evidence. It is never a wild guess.',
        visual: {
          type: 'comparison',
          title: 'Fact vs Inference',
          leftSide: {
            label: 'Stated Fact',
            text: 'He carried an umbrella and wet boots.',
            tag: 'Directly stated in passage'
          },
          rightSide: {
            label: 'Valid Inference',
            text: 'It had been raining outside.',
            tag: 'Reasonable deduction'
          }
        }
      },
      {
        title: 'The Extreme Words Trap',
        text: 'In multiple-choice reading exams, answer choices containing absolute words are almost always WRONG distractors. The passage will usually state a nuance or tendency.',
        visual: {
          type: 'chips',
          title: 'Danger: Extreme Absolute Words',
          items: [
            { label: 'Extreme / Suspicious', value: 'always, never, all, none, impossible, entirely' },
            { label: 'Moderate / Likely Correct', value: 'tends to, often, suggests, may, usually, largely' }
          ]
        }
      },
      {
        title: 'Don\'t Bring Outside Knowledge',
        text: 'Exam passages test reading comprehension, not your general trivia. Even if an answer choice is scientifically true in the real world, if the passage does not support it, it is INCORRECT.',
        visual: {
          type: 'chips',
          title: 'The Text is Your Universe',
          items: [
            { label: 'Golden Rule', value: 'If the text doesn\'t say or imply it, it doesn\'t exist.' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-inf-p1',
        type: 'multiple_choice',
        prompt: 'Passage: "When the orchestra finished the symphony, the entire auditorium rose to their feet and continued clapping for ten minutes." What can be logically inferred?',
        options: [
          'The audience deeply appreciated the musical performance.',
          'The concert was the longest ever performed in the city.',
          'All audience members play musical instruments.',
          'The orchestra will perform an encore tomorrow night.'
        ],
        correctAnswer: 0,
        explanation: 'A standing ovation of ten minutes directly supports high appreciation. The other options make unsupported external claims.'
      },
      {
        id: 'para-inf-p2',
        type: 'fill_gap',
        prompt: 'Passage: "Archaeologists discovered charcoal deposits alongside crushed animal bones in the hearth layers." Early humans processed food and game near the _____ pit.',
        options: ['fire', 'water', 'burial', 'tool'],
        correctAnswer: 0,
        explanation: 'Charcoal deposits and hearth layers logically indicate a fire pit.'
      },
      {
        id: 'para-inf-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the extreme word that invalidates this inference:',
        words: ['The', 'data', 'implies', 'that', 'diet', 'is', 'the', 'only', 'factor', 'in', 'longevity.'],
        wrongWordIndex: 7,
        correction: 'a significant',
        explanation: 'The word "only" creates an extreme, unscientific absolute claim.'
      },
      {
        id: 'para-inf-p4',
        type: 'match_pairs',
        prompt: 'Match passage statement to reasonable inference:',
        pairs: [
          { left: '"The room was dark and desks were dusty."', right: 'Inference: The room had been abandoned for some time.' },
          { left: '"She glanced repeatedly at her wristwatch."', right: 'Inference: She was anxious about time or an appointment.' },
          { left: '"He shivered and tightened his scarf."', right: 'Inference: The temperature around him was very cold.' },
          { left: '"The engine sputtered and smoke billowed."', right: 'Inference: The vehicle suffered mechanical failure.' }
        ],
        explanation: 'Valid inferences follow directly and conservatively from specific textual evidence.'
      }
    ],
    retryPractice: [
      {
        id: 'para-inf-r1',
        type: 'multiple_choice',
        prompt: 'Passage: "Despite weeks of negotiations, both diplomatic delegations left the summit without issuing a joint communique or signing any trade agreements." What is implied?',
        options: [
          'The summit concluded without reaching a consensus.',
          'Both countries will immediately declare war.',
          'Diplomacy will never be attempted again.',
          'The delegates refused to speak to each other from the first day.'
        ],
        correctAnswer: 0,
        explanation: 'Leaving without agreements directly implies no consensus was reached. War or permanent hostility are wild extremes.'
      },
      {
        id: 'para-inf-r2',
        type: 'fill_gap',
        prompt: 'Passage: "The laboratory refrigerator thermometer read 18°C instead of the mandated 4°C, and several bacterial cultures showed abnormal fungal growth." The cooling system _____ , compromising the samples.',
        options: ['failed', 'improved', 'accelerated', 'surpassed'],
        correctAnswer: 0,
        explanation: 'An 18°C reading instead of 4°C indicates the cooling system failed.'
      },
      {
        id: 'para-inf-r3',
        type: 'bucket_sort',
        prompt: 'Sort options into Safe Nuanced Statements vs Risky Extreme Traps:',
        buckets: ['Safe Nuanced (Often Correct)', 'Risky Extreme (Trap)'],
        itemsToSort: [
          { text: 'The study suggests that stress may contribute to fatigue.', correctBucketIndex: 0 },
          { text: 'The study proves that stress always causes all diseases.', correctBucketIndex: 1 },
          { text: 'Technological change tends to influence employment patterns.', correctBucketIndex: 0 },
          { text: 'Technology has completely eliminated human labor forever.', correctBucketIndex: 1 }
        ],
        explanation: 'Words like "suggests", "may", and "tends to" are the hallmark of correct academic answers.'
      },
      {
        id: 'para-inf-r4',
        type: 'multiple_choice',
        prompt: 'Passage: "Recent ice core data indicates that carbon dioxide concentrations fluctuated sharply between glacial periods, yet temperatures followed with a slight lag." What does the core data demonstrate?',
        options: [
          'A close temporal relationship between atmospheric carbon dioxide and temperature shifts.',
          'Glacial periods always lasted exactly ten million years.',
          'Carbon dioxide is completely harmless to polar ice.',
          'Temperature changes never had any effect on planetary ice.'
        ],
        correctAnswer: 0,
        explanation: 'The data logically demonstrates a temporal relationship between atmospheric CO2 and temperature.'
      }
    ],
    rememberCard: {
      title: 'Remember: Inferences',
      bullets: [
        'An inference is a logical deduction strictly supported by text clues.',
        'Beware of absolute words: always, never, only, completely.',
        'Never rely on outside knowledge; stay inside the passage boundaries.'
      ]
    }
  },
  {
    id: 'para-tone-purpose',
    topicId: 'paragraphs',
    title: 'Author\'s Purpose & Tone',
    subtitle: 'Informative, critical, persuasive, or objective',
    order: 7,
    explanationSteps: [
      {
        title: 'Author\'s Purpose (Why Did They Write It?)',
        text: 'The purpose is the author\'s main goal: to inform (explain facts neutrally), to persuade (convince reader of a viewpoint), to criticize (point out flaws), or to evaluate (weigh pros and cons).',
        visual: {
          type: 'chips',
          title: 'Purpose Categories',
          items: [
            { label: 'To Inform', value: 'Presents facts, statistics, historical dates' },
            { label: 'To Persuade', value: 'Uses rhetorical appeals and calls to action' },
            { label: 'To Critique', value: 'Highlights errors, shortcomings, or flaws' }
          ]
        }
      },
      {
        title: 'Author\'s Tone (How Does It Sound?)',
        text: 'Tone is the emotional attitude of the author. Look at the choice of adjectives, adverbs, and modal verbs.',
        visual: {
          type: 'table',
          title: 'Tone Clues in Vocabulary',
          headers: ['Tone', 'Vocabulary Clues', 'Sample Expression'],
          rows: [
            ['Objective / Neutral', 'Factual data, passive voice', '"Studies indicate a 5% variation."'],
            ['Critical / Skeptical', 'Doubts, flaws, concerns', '"These dubious claims lack empirical proof."'],
            ['Enthusiastic', 'Praise, optimism, vibrancy', '"A groundbreaking, magnificent triumph."'],
            ['Cautious / Guarded', 'Modals of probability', '"Preliminary results appear promising, yet..."']
          ]
        }
      },
      {
        title: 'Academic Tone is Rarely Emotional',
        text: 'In standard entrance exams, passages are almost never "furious", "hysterical", or "comical". They are typically objective, analytical, critical, or persuasive.',
        visual: {
          type: 'chips',
          title: 'Exam Eliminator',
          items: [
            { label: 'Quickly Eliminate:', value: 'Extreme emotional tones like enraged, sarcastic, or hilarious' }
          ]
        }
      }
    ],
    primaryPractice: [
      {
        id: 'para-tp-p1',
        type: 'multiple_choice',
        prompt: 'A passage presents data on global carbon emissions, citing measurements from atmospheric sensors without using emotional language. What is the tone?',
        options: ['Objective and informative', 'Aggressive and cynical', 'Sarcastic and humorous', 'Nostalgic and sentimental'],
        correctAnswer: 0,
        explanation: 'Neutral presentation of factual scientific data represents an objective, informative tone.'
      },
      {
        id: 'para-tp-p2',
        type: 'fill_gap',
        prompt: 'If an author uses words like "unfounded claims", "hasty conclusions", and "flawed methodology", their tone is _____ .',
        options: ['critical', 'enthusiastic', 'indifferent', 'amused'],
        correctAnswer: 0,
        explanation: 'Pointing out flaws and unfounded claims demonstrates a critical or skeptical tone.'
      },
      {
        id: 'para-tp-p3',
        type: 'tap_wrong_word',
        prompt: 'Tap the adjective that reveals a skeptical attitude:',
        words: ['The', 'company', 'presented', 'a', 'dubious', 'solution', 'to', 'the', 'crisis.'],
        wrongWordIndex: 4,
        correction: 'viable',
        explanation: '"Dubious" explicitly conveys doubt, suspicion, and skepticism.'
      },
      {
        id: 'para-tp-p4',
        type: 'match_pairs',
        prompt: 'Match author statement to corresponding purpose:',
        pairs: [
          { left: '"Vote for Proposition 4 to preserve our waterways."', right: 'To persuade' },
          { left: '"The cell nucleus contains chromosomes made of DNA."', right: 'To inform' },
          { left: '"The author fails to address three glaring contradictions."', right: 'To critique' },
          { left: '"While the plan cuts costs, it compromises safety."', right: 'To evaluate' }
        ],
        explanation: 'Understanding the author\'s underlying intent clarifies the purpose behind each sentence.'
      }
    ],
    retryPractice: [
      {
        id: 'para-tp-r1',
        type: 'multiple_choice',
        prompt: 'What is the primary purpose of an article outlining the three steps to apply for a student visa?',
        options: [
          'To instruct and explain a process',
          'To entertain with a personal drama',
          'To satirize government bureaucracy',
          'To discourage travel entirely'
        ],
        correctAnswer: 0,
        explanation: 'Step-by-step guidance is written to instruct, inform, and explain.'
      },
      {
        id: 'para-tp-r2',
        type: 'fill_gap',
        prompt: 'Passage: "The author methodically contrasts renewable energy output with fossil fuel emissions, presenting comparative charts without expressive adjectives." The tone is _____ and analytical.',
        options: ['objective', 'angry', 'playful', 'sarcastic'],
        correctAnswer: 0,
        explanation: 'Presenting charts and statistics without expressive adjectives establishes an objective tone.'
      },
      {
        id: 'para-tp-r3',
        type: 'bucket_sort',
        prompt: 'Sort descriptive adjectives by tone:',
        buckets: ['Objective / Scientific Tone', 'Critical / Skeptical Tone'],
        itemsToSort: [
          { text: 'Empirical data / Measured outcomes', correctBucketIndex: 0 },
          { text: 'Questionable claims / Flawed logic', correctBucketIndex: 1 },
          { text: 'Statistical analysis / Verified results', correctBucketIndex: 0 },
          { text: 'Superficial reasoning / Bias', correctBucketIndex: 1 }
        ],
        explanation: 'Scientific vocabulary is neutral; words highlighting flaws are critical.'
      },
      {
        id: 'para-tp-r4',
        type: 'multiple_choice',
        prompt: 'An editorial concludes: "Municipal councils must enforce immediate industrial emissions caps before irreversible environmental tipping points are crossed." What is the author\'s primary purpose?',
        options: ['To urge immediate policy intervention', 'To explain ancient history', 'To entertain readers with humor', 'To describe the mechanics of automobiles'],
        correctAnswer: 0,
        explanation: 'Urging municipal councils to enforce caps is an explicit call to policy action.'
      }
    ],
    rememberCard: {
      title: 'Remember: Purpose & Tone',
      bullets: [
        'Purpose: To inform (facts), to persuade (opinion), to critique (point out flaws).',
        'Tone reflects vocabulary: look closely at adjectives and adverbs.',
        'Academic exams prefer objective, analytical, or skeptical tones.'
      ]
    }
  }
];

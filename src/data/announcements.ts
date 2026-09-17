import { CabinAnnouncement } from '../types';

export const CABIN_ANNOUNCEMENTS: CabinAnnouncement[] = [
  {
    id: 'ann-1',
    title: 'Welcome Aboard & Pre-Departure Briefing',
    situation: 'Delivered by the Lead Cabin Attendant right after boarding completes at Addis Ababa Bole International Airport.',
    text: 'Ladies and gentlemen, Ethiopian Airlines, a proud member of Star Alliance, welcomes you aboard Flight ET 700 with non-stop service to London Heathrow. Our flight time today will be approximately seven hours and fifteen minutes. At this time, please ensure your carry-on luggage is safely stowed in the overhead bins or under the seat in front of you. Kindly fasten your seatbelts, return your seatbacks and tray tables to the upright and locked position, and switch all mobile phones and electronic devices to flight mode. Thank you for flying with Ethiopian Airlines, the New Spirit of Africa.',
    blanks: [
      { index: 0, word: 'aboard', options: ['aboard', 'above', 'abroad', 'along'] },
      { index: 1, word: 'carry-on', options: ['carry-on', 'carried', 'carrying', 'carried-out'] },
      { index: 2, word: 'upright', options: ['upright', 'upside', 'uptight', 'uphill'] }
    ]
  },
  {
    id: 'ann-2',
    title: 'Safety Demonstration Announcement',
    situation: 'Delivered simultaneously with visual safety demonstrations before aircraft pushback.',
    text: 'Please direct your attention to the cabin crew in your aisle as we demonstrate the safety features of our Boeing 787 Dreamliner. In the unlikely event of a loss of cabin pressure, oxygen masks will automatically drop from the panel above you. Pull the mask firmly towards you to start the flow of oxygen, place it over your nose and mouth, and secure the elastic band. Please put on your own mask first before assisting children or other passengers.',
    blanks: [
      { index: 0, word: 'attention', options: ['attention', 'intention', 'attendance', 'attraction'] },
      { index: 1, word: 'pressure', options: ['pressure', 'pleasure', 'posture', 'presence'] },
      { index: 2, word: 'firmly', options: ['firmly', 'fairly', 'fiercely', 'frailly'] }
    ]
  },
  {
    id: 'ann-3',
    title: 'In-Flight Turbulence Advisory',
    situation: 'Delivered immediately when the Captain illuminates the Seatbelt sign during cruise flight.',
    text: 'Ladies and gentlemen, the captain has illuminated the fasten seatbelt sign due to unexpected turbulence ahead. For your safety, please return to your seat immediately and securely fasten your seatbelt. If you are in the lavatory, please exit and return to your seat carefully. Cabin crew will temporarily pause in-flight service until conditions improve. We appreciate your cooperation.',
    blanks: [
      { index: 0, word: 'illuminated', options: ['illuminated', 'eliminated', 'illustrated', 'imagined'] },
      { index: 1, word: 'temporarily', options: ['temporarily', 'temporary', 'temperament', 'temptingly'] },
      { index: 2, word: 'cooperation', options: ['cooperation', 'corporation', 'operation', 'compensation'] }
    ]
  },
  {
    id: 'ann-4',
    title: 'Descent & Final Approach',
    situation: 'Delivered 20 minutes before touch down.',
    text: 'Ladies and gentlemen, we have begun our descent into Addis Ababa Bole International Airport. Please ensure your seatbelt is securely fastened, your seatback is upright, your tray table is folded away, and window blinds are open for landing. All larger electronic devices must now be turned off and stowed away. Cabin crew, please prepare the cabin for landing.',
    blanks: [
      { index: 0, word: 'descent', options: ['descent', 'decent', 'dissent', 'descend'] },
      { index: 1, word: 'folded', options: ['folded', 'fold', 'folding', 'folder'] },
      { index: 2, word: 'prepare', options: ['prepare', 'repair', 'compare', 'procure'] }
    ]
  }
];

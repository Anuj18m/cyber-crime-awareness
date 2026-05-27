import type { LearningTrack } from '../types/learningTrack';

export const learningTracks: LearningTrack[] = [
  {
    level: 'Beginner',
    description: 'Learn essential online safety skills used daily in India.',
    duration: '2.5 Hours',
    modules: [
      'Understanding Online Scams',
      'UPI Safety Basics',
      'Password Security',
      'Spotting Fake Messages',
    ],
  },
  {
    level: 'Intermediate',
    description: 'Recognize advanced fraud techniques and social engineering attacks.',
    duration: '4 Hours',
    modules: [
      'Social Engineering',
      'QR Payment Scams',
      'WhatsApp Fraud',
      'Privacy Protection',
    ],
  },
  {
    level: 'Advanced',
    description: 'Understand modern cybercrime trends and personal investigation awareness.',
    duration: '6 Hours',
    modules: [
      'Digital Arrest Scams',
      'Investment Fraud',
      'Data Breaches',
      'OSINT Awareness',
    ],
  },
];

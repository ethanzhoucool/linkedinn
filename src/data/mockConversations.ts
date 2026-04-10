export interface ConversationPerson {
  id: string;
  name: string;
  avatarUrl: string;
  headline: string;
}

export interface Conversation {
  id: string;
  person: ConversationPerson;
  lastMessagePreview: string;
  lastMessageAt: string;
  unread: boolean;
  online: boolean;
}

export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    person: {
      id: 'conv-person-1',
      name: 'Rachel Nguyen',
      avatarUrl: 'https://i.pravatar.cc/150?img=23',
      headline: 'Engineering Manager at Helix Systems',
    },
    lastMessagePreview: 'Looking forward to catching up next week!',
    lastMessageAt: '10m',
    unread: true,
    online: true,
  },
  {
    id: 'conv-2',
    person: {
      id: 'conv-person-2',
      name: 'Ethan Caldwell',
      avatarUrl: 'https://i.pravatar.cc/150?img=24',
      headline: 'Product Lead at ClearPath Systems',
    },
    lastMessagePreview: 'The deck looks great. Let me know when you are ready to present.',
    lastMessageAt: '2h',
    unread: false,
    online: false,
  },
  {
    id: 'conv-3',
    person: {
      id: 'conv-person-3',
      name: 'Monika Schulz',
      avatarUrl: 'https://i.pravatar.cc/150?img=25',
      headline: 'Senior Designer at Wavelength Studios',
    },
    lastMessagePreview: 'Can you share the Figma link again?',
    lastMessageAt: '5h',
    unread: true,
    online: true,
  },
  {
    id: 'conv-4',
    person: {
      id: 'conv-person-4',
      name: 'Patrick Okonkwo',
      avatarUrl: 'https://i.pravatar.cc/150?img=26',
      headline: 'Recruiting at Nimbus Labs',
    },
    lastMessagePreview: 'We would love to move forward with your application.',
    lastMessageAt: '1d',
    unread: false,
    online: false,
  },
  {
    id: 'conv-5',
    person: {
      id: 'conv-person-5',
      name: 'Valentina Greco',
      avatarUrl: 'https://i.pravatar.cc/150?img=27',
      headline: 'Data Engineer at Polaris Dynamics',
    },
    lastMessagePreview: 'Thanks for the intro! Really appreciated it.',
    lastMessageAt: '2d',
    unread: false,
    online: false,
  },
  {
    id: 'conv-6',
    person: {
      id: 'conv-person-6',
      name: 'James Okafor',
      avatarUrl: 'https://i.pravatar.cc/150?img=28',
      headline: 'Backend Engineer at Kestrel AI',
    },
    lastMessagePreview: 'Absolutely, let us set up a time to chat.',
    lastMessageAt: '3d',
    unread: false,
    online: true,
  },
  {
    id: 'conv-7',
    person: {
      id: 'conv-person-7',
      name: 'Samira Farooq',
      avatarUrl: 'https://i.pravatar.cc/150?img=29',
      headline: 'ML Researcher at Sentinel Cloud',
    },
    lastMessagePreview: 'Congrats on the launch! The metrics look amazing.',
    lastMessageAt: '5d',
    unread: false,
    online: false,
  },
  {
    id: 'conv-8',
    person: {
      id: 'conv-person-8',
      name: 'Oliver Braun',
      avatarUrl: 'https://i.pravatar.cc/150?img=30',
      headline: 'iOS Engineer at Lumen Health',
    },
    lastMessagePreview: 'Happy to grab coffee if you are in the city.',
    lastMessageAt: '1w',
    unread: false,
    online: false,
  },
];

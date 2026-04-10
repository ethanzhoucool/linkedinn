import {Person} from './mockConnections';

export interface ConnectionRequest {
  id: string;
  person: Person;
  timeAgo: string;
  context?: string;
}

export const connectionRequests: ConnectionRequest[] = [
  {
    id: 'req-1',
    person: {
      id: 'req-person-1',
      name: 'Santiago Cruz',
      headline: 'Full Stack Engineer at Nimbus Labs',
      avatarUrl: 'https://i.pravatar.cc/150?img=23',
      mutualConnections: 5,
    },
    timeAgo: '2d',
    context: 'You both know Marcus Whitfield',
  },
  {
    id: 'req-2',
    person: {
      id: 'req-person-2',
      name: 'Yuki Tanamoto',
      headline: 'Machine Learning Engineer at Aurora Robotics',
      avatarUrl: 'https://i.pravatar.cc/150?img=24',
      mutualConnections: 11,
    },
    timeAgo: '3d',
    context: 'You both attended Caltronics University',
  },
  {
    id: 'req-3',
    person: {
      id: 'req-person-3',
      name: 'Beatrice Hoffman',
      headline: 'Growth Product Manager at Sentinel Cloud',
      avatarUrl: 'https://i.pravatar.cc/150?img=25',
      mutualConnections: 3,
    },
    timeAgo: '5d',
  },
  {
    id: 'req-4',
    person: {
      id: 'req-person-4',
      name: 'Kwame Asante',
      headline: 'Platform Architect at ClearPath Systems',
      avatarUrl: 'https://i.pravatar.cc/150?img=26',
      mutualConnections: 8,
    },
    timeAgo: '1w',
    context: 'You both worked at Polaris Dynamics',
  },
];

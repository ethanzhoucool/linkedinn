export interface Person {
  id: string;
  name: string;
  headline: string;
  avatarUrl: string;
  mutualConnections: number;
}

export const suggestedPeople: Person[] = [
  {
    id: 'person-1',
    name: 'Tobias Marsh',
    headline: 'Senior Engineer at ClearPath Systems',
    avatarUrl: 'https://i.pravatar.cc/150?img=13',
    mutualConnections: 12,
  },
  {
    id: 'person-2',
    name: 'Leila Nazari',
    headline: 'Product Manager at Helix Systems',
    avatarUrl: 'https://i.pravatar.cc/150?img=14',
    mutualConnections: 7,
  },
  {
    id: 'person-3',
    name: 'Owen Fitzgerald',
    headline: 'Data Scientist at Polaris Dynamics',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    mutualConnections: 45,
  },
  {
    id: 'person-4',
    name: 'Camille Dubois',
    headline: 'UX Designer at Lumen Health',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    mutualConnections: 3,
  },
  {
    id: 'person-5',
    name: 'Raj Patel',
    headline: 'iOS Engineer at Kestrel AI',
    avatarUrl: 'https://i.pravatar.cc/150?img=17',
    mutualConnections: 18,
  },
  {
    id: 'person-6',
    name: 'Nora Lindqvist',
    headline: 'Engineering Manager at Aurora Robotics',
    avatarUrl: 'https://i.pravatar.cc/150?img=18',
    mutualConnections: 31,
  },
  {
    id: 'person-7',
    name: 'Felix Krueger',
    headline: 'DevOps Lead at Sentinel Cloud',
    avatarUrl: 'https://i.pravatar.cc/150?img=19',
    mutualConnections: 9,
  },
  {
    id: 'person-8',
    name: 'Amara Osei',
    headline: 'Frontend Developer at Wavelength Studios',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    mutualConnections: 22,
  },
  {
    id: 'person-9',
    name: 'Hiroshi Watanabe',
    headline: 'Staff Engineer at Vantage Networks',
    avatarUrl: 'https://i.pravatar.cc/150?img=21',
    mutualConnections: 14,
  },
  {
    id: 'person-10',
    name: 'Isabelle Fontaine',
    headline: 'Product Designer at Driftwood Analytics',
    avatarUrl: 'https://i.pravatar.cc/150?img=22',
    mutualConnections: 6,
  },
];

export interface Person {
  id: string;
  name: string;
  headline: string;
  avatarUrl: string;
  mutualConnections: number;
  verified?: boolean;
  company?: string;
  companyLogoUrl?: string;
}

export const suggestedPeople: Person[] = [
  {
    id: 'person-1',
    name: 'Tobias Marsh',
    headline: 'Senior Engineer at Figma',
    avatarUrl: 'https://i.pravatar.cc/150?img=13',
    mutualConnections: 12,
    company: 'Figma',
    companyLogoUrl: 'https://logo.clearbit.com/figma.com',
  },
  {
    id: 'person-2',
    name: 'Leila Nazari',
    headline: 'Product Manager at Stripe',
    avatarUrl: 'https://i.pravatar.cc/150?img=14',
    mutualConnections: 7,
    verified: true,
    company: 'Stripe',
    companyLogoUrl: 'https://logo.clearbit.com/stripe.com',
  },
  {
    id: 'person-3',
    name: 'Owen Fitzgerald',
    headline: 'Data Scientist at Spotify',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    mutualConnections: 45,
    company: 'Spotify',
    companyLogoUrl: 'https://logo.clearbit.com/spotify.com',
  },
  {
    id: 'person-4',
    name: 'Camille Dubois',
    headline: 'UX Designer at Airbnb',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    mutualConnections: 3,
    company: 'Airbnb',
    companyLogoUrl: 'https://logo.clearbit.com/airbnb.com',
  },
  {
    id: 'person-5',
    name: 'Raj Patel',
    headline: 'iOS Engineer at Anthropic',
    avatarUrl: 'https://i.pravatar.cc/150?img=17',
    mutualConnections: 18,
    verified: true,
    company: 'Anthropic',
    companyLogoUrl: 'https://logo.clearbit.com/anthropic.com',
  },
  {
    id: 'person-6',
    name: 'Nora Lindqvist',
    headline: 'Engineering Manager at Notion',
    avatarUrl: 'https://i.pravatar.cc/150?img=18',
    mutualConnections: 31,
    company: 'Notion',
    companyLogoUrl: 'https://logo.clearbit.com/notion.so',
  },
  {
    id: 'person-7',
    name: 'Felix Krueger',
    headline: 'DevOps Lead at Shopify',
    avatarUrl: 'https://i.pravatar.cc/150?img=19',
    mutualConnections: 9,
    company: 'Shopify',
    companyLogoUrl: 'https://logo.clearbit.com/shopify.com',
  },
  {
    id: 'person-8',
    name: 'Amara Osei',
    headline: 'Frontend Developer at Linear',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    mutualConnections: 22,
    company: 'Linear',
    companyLogoUrl: 'https://logo.clearbit.com/linear.app',
  },
  {
    id: 'person-9',
    name: 'Hiroshi Watanabe',
    headline: 'Staff Engineer at GitHub',
    avatarUrl: 'https://i.pravatar.cc/150?img=21',
    mutualConnections: 14,
    company: 'GitHub',
    companyLogoUrl: 'https://logo.clearbit.com/github.com',
  },
  {
    id: 'person-10',
    name: 'Isabelle Fontaine',
    headline: 'Product Designer at Canva',
    avatarUrl: 'https://i.pravatar.cc/150?img=22',
    mutualConnections: 6,
    company: 'Canva',
    companyLogoUrl: 'https://logo.clearbit.com/canva.com',
  },
];

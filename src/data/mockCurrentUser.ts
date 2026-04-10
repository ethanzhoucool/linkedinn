export interface CurrentUser {
  id: string;
  name: string;
  headline: string;
  company: string;
  companyLogoUrl: string;
  location: string;
  avatarUrl: string;
  coverUrl: string;
  connectionsCount: number;
  profileViews: number;
  postImpressions: number;
}

export const currentUser: CurrentUser = {
  id: 'current-user',
  name: 'Alex Chen',
  headline: 'Senior Product Engineer at Figma',
  company: 'Figma',
  companyLogoUrl: 'https://logo.clearbit.com/figma.com',
  location: 'San Francisco Bay Area',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
  coverUrl:
    'https://ui-avatars.com/api/?name=Alex+Chen&background=0A66C2&color=fff&size=512',
  connectionsCount: 847,
  profileViews: 134,
  postImpressions: 2340,
};

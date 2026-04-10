export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  logoSlug: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  logoUrl: string;
  logoSlug?: string;
}

export interface Skill {
  id: string;
  name: string;
  endorsements: number;
}

export const aboutText =
  'I build scalable product infrastructure at the intersection of systems engineering and user experience. Passionate about developer tooling, distributed systems, and helping teams ship faster without sacrificing reliability. Outside of work, I mentor early-career engineers and contribute to open-source observability projects.';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Senior Product Engineer',
    company: 'Figma',
    companyLogoUrl: 'https://logo.clearbit.com/figma.com',
    logoSlug: 'figma',
    startDate: 'Jan 2022',
    endDate: 'Present',
    duration: '2 yrs 4 mos',
    location: 'San Francisco, CA · Hybrid',
    description:
      'Lead the platform infrastructure team responsible for internal developer tooling, CI/CD pipelines, and observability stacks. Reduced mean time to deployment by 60% and improved on-call alert signal-to-noise ratio by 4x.',
  },
  {
    id: 'exp-2',
    title: 'Software Engineer II',
    company: 'Stripe',
    companyLogoUrl: 'https://logo.clearbit.com/stripe.com',
    logoSlug: 'stripe',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    duration: '1 yr 10 mos',
    location: 'Seattle, WA · On-site',
    description:
      'Built and maintained core APIs for the client-facing analytics dashboard. Migrated legacy REST services to GraphQL, reducing mobile payload sizes by 45%.',
  },
  {
    id: 'exp-3',
    title: 'Software Engineer',
    company: 'Notion',
    companyLogoUrl: 'https://logo.clearbit.com/notion.so',
    logoSlug: 'notion',
    startDate: 'Jul 2018',
    endDate: 'Feb 2020',
    duration: '1 yr 8 mos',
    location: 'Remote',
    description:
      'Worked on the real-time event processing pipeline handling 50k events per second. Implemented backpressure strategies that eliminated data loss during traffic spikes.',
  },
  {
    id: 'exp-4',
    title: 'Software Engineering Intern',
    company: 'Linear',
    companyLogoUrl: 'https://logo.clearbit.com/linear.app',
    logoSlug: 'linear',
    startDate: 'May 2017',
    endDate: 'Aug 2017',
    duration: '4 mos',
    location: 'Remote',
    description:
      'Contributed to the infrastructure monitoring service. Built an anomaly detection module that was shipped to production and is still in use today.',
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    school: 'Stanford University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startYear: '2014',
    endYear: '2018',
    logoUrl: 'https://logo.clearbit.com/stanford.edu',
  },
  {
    id: 'edu-2',
    school: 'University of Waterloo',
    degree: 'Exchange Program',
    field: 'Software Engineering',
    startYear: '2016',
    endYear: '2017',
    logoUrl: 'https://logo.clearbit.com/uwaterloo.ca',
  },
];

export const skills: Skill[] = [
  {id: 'skill-1', name: 'TypeScript', endorsements: 214},
  {id: 'skill-2', name: 'System Design', endorsements: 178},
  {id: 'skill-3', name: 'React Native', endorsements: 156},
  {id: 'skill-4', name: 'Go (Programming Language)', endorsements: 134},
  {id: 'skill-5', name: 'Distributed Systems', endorsements: 98},
  {id: 'skill-6', name: 'Kubernetes', endorsements: 76},
  {id: 'skill-7', name: 'GraphQL', endorsements: 52},
  {id: 'skill-8', name: 'Technical Leadership', endorsements: 41},
];

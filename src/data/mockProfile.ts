export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogoUrl: string;
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
    company: 'Nimbus Labs',
    companyLogoUrl: 'https://ui-avatars.com/api/?name=N&background=0A66C2&color=fff&size=128',
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
    company: 'Polaris Dynamics',
    companyLogoUrl: 'https://ui-avatars.com/api/?name=P&background=0A66C2&color=fff&size=128',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    duration: '1 yr 10 mos',
    location: 'Chicago, IL · On-site',
    description:
      'Built and maintained core APIs for the client-facing analytics dashboard. Migrated legacy REST services to GraphQL, reducing mobile payload sizes by 45%.',
  },
  {
    id: 'exp-3',
    title: 'Software Engineer',
    company: 'Helix Systems',
    companyLogoUrl: 'https://ui-avatars.com/api/?name=H&background=0A66C2&color=fff&size=128',
    startDate: 'Jul 2018',
    endDate: 'Feb 2020',
    duration: '1 yr 8 mos',
    location: 'Austin, TX · On-site',
    description:
      'Worked on the real-time event processing pipeline handling 50k events per second. Implemented backpressure strategies that eliminated data loss during traffic spikes.',
  },
  {
    id: 'exp-4',
    title: 'Software Engineering Intern',
    company: 'Sentinel Cloud',
    companyLogoUrl: 'https://ui-avatars.com/api/?name=S&background=0A66C2&color=fff&size=128',
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
    school: 'Caltronics University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startYear: '2014',
    endYear: '2018',
    logoUrl: 'https://ui-avatars.com/api/?name=CU&background=8B0000&color=fff&size=128',
  },
  {
    id: 'edu-2',
    school: 'Eastbridge Community College',
    degree: 'Associate of Applied Science',
    field: 'Information Technology',
    startYear: '2012',
    endYear: '2014',
    logoUrl: 'https://ui-avatars.com/api/?name=EC&background=2E8B57&color=fff&size=128',
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

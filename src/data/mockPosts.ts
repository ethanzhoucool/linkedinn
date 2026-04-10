export interface PostAuthor {
  id: string;
  name: string;
  headline: string;
  avatarUrl: string;
  isFollowing: boolean;
}

export interface Post {
  id: string;
  author: PostAuthor;
  timestamp: string;
  content: string;
  imageUrl?: string;
  reactions: number;
  comments: number;
  reposts: number;
  liked: boolean;
}

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    author: {
      id: 'author-1',
      name: 'Marcus Whitfield',
      headline: 'VP of Engineering at ClearPath Systems',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      isFollowing: false,
    },
    timestamp: '2h',
    content:
      'Just wrapped up our quarterly engineering retrospective. The biggest takeaway? Psychological safety on the team directly correlates with our shipping velocity. When engineers feel safe to raise blockers early, we move faster. Highly recommend reading "An Elegant Puzzle" if you lead technical teams.',
    reactions: 245,
    comments: 32,
    reposts: 12,
    liked: false,
  },
  {
    id: 'post-2',
    author: {
      id: 'author-2',
      name: 'Priya Ramanathan',
      headline: 'Product Manager · AI/ML Products at Helix Systems',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      isFollowing: true,
    },
    timestamp: '5h',
    content:
      'Hot take: roadmaps are fiction. But the process of building them is invaluable. Forcing your team to align on priorities for the next quarter surfaces disagreements early and creates shared context. Ship the conversation, not just the doc.',
    imageUrl: 'https://picsum.photos/seed/post2/600/400',
    reactions: 412,
    comments: 67,
    reposts: 20,
    liked: false,
  },
  {
    id: 'post-3',
    author: {
      id: 'author-3',
      name: 'Dana Okafor',
      headline: 'Staff Software Engineer at Wavelength Studios',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      isFollowing: false,
    },
    timestamp: '1d',
    content:
      'Spent the morning reviewing pull requests from junior engineers on my team. One thing I always look for beyond the code itself: are they asking good questions in their PR descriptions? The ability to articulate what problem you are solving is half the engineering skill.',
    reactions: 189,
    comments: 28,
    reposts: 8,
    liked: false,
  },
  {
    id: 'post-4',
    author: {
      id: 'author-4',
      name: 'Jordan Blake',
      headline: 'Founder & CEO at Driftwood Analytics',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
      isFollowing: false,
    },
    timestamp: '1d',
    content:
      'We just closed our Series A. Three years of building in the dark, countless rejections, two pivots, and one near-shutdown. To every founder grinding it out right now — keep going. The fundraising environment is hard but great products still find capital.',
    imageUrl: 'https://picsum.photos/seed/post4/600/400',
    reactions: 450,
    comments: 80,
    reposts: 18,
    liked: false,
  },
  {
    id: 'post-5',
    author: {
      id: 'author-5',
      name: 'Elena Petrov',
      headline: 'UX Research Lead at Lumen Health',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      isFollowing: true,
    },
    timestamp: '2d',
    content:
      'Ran five user interviews today. Not a single participant read the onboarding tooltip we spent two weeks designing. Users skip text. They explore by clicking. Design for behavior, not for what you wish users would do.',
    reactions: 316,
    comments: 45,
    reposts: 14,
    liked: false,
  },
  {
    id: 'post-6',
    author: {
      id: 'author-6',
      name: 'Sofia Martinez',
      headline: 'Director of Data Science at Polaris Dynamics',
      avatarUrl: 'https://i.pravatar.cc/150?img=6',
      isFollowing: false,
    },
    timestamp: '2d',
    content:
      'A model with 90% accuracy on a validation set means nothing if the validation set does not reflect production distribution. Data leakage is the silent killer of ML projects. Always audit your splits.',
    reactions: 278,
    comments: 41,
    reposts: 9,
    liked: false,
  },
  {
    id: 'post-7',
    author: {
      id: 'author-7',
      name: "Liam O'Brien",
      headline: 'Senior iOS Engineer at Kestrel AI',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
      isFollowing: false,
    },
    timestamp: '3d',
    content:
      'Just migrated a legacy Objective-C module to Swift Concurrency. The async/await model makes the code so much easier to reason about. If you are still deferring this migration, now is a great time to start.',
    imageUrl: 'https://picsum.photos/seed/post7/600/400',
    reactions: 134,
    comments: 19,
    reposts: 5,
    liked: false,
  },
  {
    id: 'post-8',
    author: {
      id: 'author-8',
      name: 'Kenji Tanaka',
      headline: 'Platform Engineer at Aurora Robotics',
      avatarUrl: 'https://i.pravatar.cc/150?img=8',
      isFollowing: true,
    },
    timestamp: '3d',
    content:
      'Infrastructure as code changed how we think about environments. Every staging environment is now spun up from the same Terraform modules as production. No more "works on my machine" infrastructure surprises.',
    reactions: 201,
    comments: 23,
    reposts: 7,
    liked: false,
  },
  {
    id: 'post-9',
    author: {
      id: 'author-9',
      name: 'Aisha Khan',
      headline: 'Engineering Manager at Sentinel Cloud',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
      isFollowing: false,
    },
    timestamp: '4d',
    content:
      'The best 1:1 question I ask my reports: "What is one thing I could do differently that would make your job easier?" It is uncomfortable to ask but the answers are always worth it.',
    reactions: 387,
    comments: 54,
    reposts: 16,
    liked: false,
  },
  {
    id: 'post-10',
    author: {
      id: 'author-10',
      name: 'Noah Fischer',
      headline: 'Frontend Architect at Vantage Networks',
      avatarUrl: 'https://i.pravatar.cc/150?img=10',
      isFollowing: false,
    },
    timestamp: '5d',
    content:
      'Design systems are only as good as their adoption. We launched ours 18 months ago. Today 80% of new UI ships using it. The key was treating the design system team as an internal product team — with a real roadmap, real SLAs, and real customer support.',
    reactions: 156,
    comments: 22,
    reposts: 6,
    liked: false,
  },
  {
    id: 'post-11',
    author: {
      id: 'author-11',
      name: 'Zara Ahmed',
      headline: 'Product Designer at Nimbus Labs',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      isFollowing: true,
    },
    timestamp: '6d',
    content:
      'Excited to share that we just launched our redesigned onboarding flow. Drop rate in the first three steps went from 42% down to 18%. Small copy changes and reducing form fields made a huge difference. Shipping beats perfecting.',
    imageUrl: 'https://picsum.photos/seed/post11/600/400',
    reactions: 298,
    comments: 38,
    reposts: 11,
    liked: false,
  },
  {
    id: 'post-12',
    author: {
      id: 'author-12',
      name: 'Diego Ramos',
      headline: 'Backend Engineer at Driftwood Analytics',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      isFollowing: false,
    },
    timestamp: '1w',
    content:
      'Wrote my first Rust service in production this month. The ownership model took some getting used to but the compile-time guarantees are remarkable. Zero runtime panics in three weeks of production traffic.',
    reactions: 175,
    comments: 29,
    reposts: 4,
    liked: false,
  },
];

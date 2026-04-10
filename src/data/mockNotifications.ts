export type NotificationType =
  | 'reaction'
  | 'comment'
  | 'connection'
  | 'job'
  | 'birthday'
  | 'mention';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  actor?: string;
  iconOverride?: string;
  message: string;
  timeAgo: string;
  read: boolean;
  previewImageUrl?: string;
}

export const notifications: NotificationItem[] = [
  {
    id: 'notif-1',
    type: 'reaction',
    actor: 'Marcus Whitfield',
    message: '**Marcus Whitfield** and 14 others reacted to your post about engineering velocity.',
    timeAgo: '1h',
    read: false,
    previewImageUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'notif-2',
    type: 'reaction',
    actor: 'Priya Ramanathan',
    message: '**Priya Ramanathan** liked your comment on the product roadmap discussion.',
    timeAgo: '3h',
    read: false,
    previewImageUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'notif-3',
    type: 'comment',
    actor: 'Dana Okafor',
    message: '**Dana Okafor** commented on your post: "This is exactly the kind of perspective we need more of."',
    timeAgo: '5h',
    read: false,
    previewImageUrl: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'notif-4',
    type: 'connection',
    actor: 'Jordan Blake',
    message: '**Jordan Blake** accepted your connection request. Start a conversation.',
    timeAgo: '6h',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 'notif-5',
    type: 'job',
    message: 'New job alert: **Senior Product Engineer** at Nimbus Labs matches your profile.',
    timeAgo: '8h',
    read: false,
  },
  {
    id: 'notif-6',
    type: 'reaction',
    actor: 'Elena Petrov',
    message: '**Elena Petrov** celebrated your work anniversary.',
    timeAgo: '10h',
    read: false,
    previewImageUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'notif-7',
    type: 'mention',
    actor: 'Sofia Martinez',
    message: '**Sofia Martinez** mentioned you in a post about data-driven product decisions.',
    timeAgo: '12h',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 'notif-8',
    type: 'comment',
    actor: "Liam O'Brien",
    message: "**Liam O'Brien** replied to your comment: \"Swift Concurrency really is a game changer.\"",
    timeAgo: '1d',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 'notif-9',
    type: 'reaction',
    actor: 'Kenji Tanaka',
    message: '**Kenji Tanaka** and 8 others liked your post about infrastructure as code.',
    timeAgo: '1d',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'notif-10',
    type: 'job',
    message: 'You have **3 new job recommendations** based on your skills and experience.',
    timeAgo: '2d',
    read: false,
  },
  {
    id: 'notif-11',
    type: 'birthday',
    actor: 'Aisha Khan',
    message: "Today is **Aisha Khan**'s work anniversary. Congratulate her on 4 years at Sentinel Cloud.",
    timeAgo: '2d',
    read: false,
    previewImageUrl: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 'notif-12',
    type: 'connection',
    actor: 'Noah Fischer',
    message: '**Noah Fischer** wants to connect with you. You have 6 mutual connections.',
    timeAgo: '3d',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 'notif-13',
    type: 'comment',
    actor: 'Zara Ahmed',
    message: '**Zara Ahmed** commented on a post you reacted to: "The numbers speak for themselves."',
    timeAgo: '3d',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 'notif-14',
    type: 'mention',
    actor: 'Diego Ramos',
    message: '**Diego Ramos** mentioned you in a discussion about systems programming languages.',
    timeAgo: '4d',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'notif-15',
    type: 'reaction',
    actor: 'Tobias Marsh',
    message: '**Tobias Marsh** and 22 others reacted to your shared article about engineering culture.',
    timeAgo: '5d',
    read: true,
    previewImageUrl: 'https://i.pravatar.cc/150?img=13',
  },
];

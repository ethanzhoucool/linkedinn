import React, {createContext, useContext, useReducer, ReactNode} from 'react';
import {currentUser, CurrentUser} from '../data/mockCurrentUser';
import {mockPosts, Post} from '../data/mockPosts';
import {connectionRequests, ConnectionRequest} from '../data/mockConnectionRequests';
import {suggestedPeople, Person} from '../data/mockConnections';
import {mockJobs, Job} from '../data/mockJobs';
import {notifications, NotificationItem} from '../data/mockNotifications';
import {mockConversations, Conversation} from '../data/mockConversations';
import {messagesByConversation, Message} from '../data/mockMessages';

export interface SuggestedPersonWithStatus extends Person {
  status: 'idle' | 'pending' | 'connected';
}

export interface AppState {
  currentUser: CurrentUser;
  posts: Post[];
  connectionRequests: ConnectionRequest[];
  suggestedPeople: SuggestedPersonWithStatus[];
  sentInvitations: SuggestedPersonWithStatus[];
  jobs: Job[];
  notifications: NotificationItem[];
  conversations: Conversation[];
  messagesByConversation: Record<string, Message[]>;
}

export type AppAction =
  | {type: 'TOGGLE_LIKE'; postId: string}
  | {type: 'ADD_POST'; content: string}
  | {type: 'ACCEPT_REQUEST'; requestId: string}
  | {type: 'IGNORE_REQUEST'; requestId: string}
  | {type: 'CONNECT_PERSON'; personId: string}
  | {type: 'SEND_INVITATION'; personId: string}
  | {type: 'WITHDRAW_INVITATION'; personId: string}
  | {type: 'TOGGLE_SAVE_JOB'; jobId: string}
  | {type: 'MARK_NOTIFICATION_READ'; notificationId: string}
  | {type: 'SEND_MESSAGE'; conversationId: string; text: string};

const initialState: AppState = {
  currentUser,
  posts: mockPosts,
  connectionRequests,
  suggestedPeople: suggestedPeople.map(p => ({...p, status: 'idle' as const})),
  sentInvitations: [],
  jobs: mockJobs,
  notifications,
  conversations: mockConversations,
  messagesByConversation,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_LIKE': {
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id !== action.postId) {
            return post;
          }
          return {
            ...post,
            liked: !post.liked,
            reactions: post.liked ? post.reactions - 1 : post.reactions + 1,
          };
        }),
      };
    }
    case 'ADD_POST': {
      const newPost: Post = {
        id: `post-new-${Date.now()}`,
        author: {
          id: state.currentUser.id,
          name: state.currentUser.name,
          headline: state.currentUser.headline,
          avatarUrl: state.currentUser.avatarUrl,
          isFollowing: false,
          connectionDegree: '1st',
          verified: false,
        },
        timestamp: 'Just now',
        content: action.content,
        reactions: 0,
        comments: 0,
        reposts: 0,
        liked: false,
      };
      return {...state, posts: [newPost, ...state.posts]};
    }
    case 'ACCEPT_REQUEST': {
      return {
        ...state,
        connectionRequests: state.connectionRequests.filter(
          r => r.id !== action.requestId,
        ),
      };
    }
    case 'IGNORE_REQUEST': {
      return {
        ...state,
        connectionRequests: state.connectionRequests.filter(
          r => r.id !== action.requestId,
        ),
      };
    }
    case 'CONNECT_PERSON':
    case 'SEND_INVITATION': {
      const updatedSuggested = state.suggestedPeople.map(p =>
        p.id === action.personId ? {...p, status: 'pending' as const} : p,
      );
      const target = updatedSuggested.find(p => p.id === action.personId);
      const alreadyInvited = state.sentInvitations.some(
        p => p.id === action.personId,
      );
      const nextInvitations =
        target && !alreadyInvited
          ? [...state.sentInvitations, target]
          : state.sentInvitations;
      return {
        ...state,
        suggestedPeople: updatedSuggested,
        sentInvitations: nextInvitations,
      };
    }
    case 'WITHDRAW_INVITATION': {
      return {
        ...state,
        suggestedPeople: state.suggestedPeople.map(p =>
          p.id === action.personId ? {...p, status: 'idle' as const} : p,
        ),
        sentInvitations: state.sentInvitations.filter(
          p => p.id !== action.personId,
        ),
      };
    }
    case 'TOGGLE_SAVE_JOB': {
      return {
        ...state,
        jobs: state.jobs.map(j =>
          j.id === action.jobId ? {...j, saved: !j.saved} : j,
        ),
      };
    }
    case 'MARK_NOTIFICATION_READ': {
      return {
        ...state,
        notifications: state.notifications.map(n =>
          n.id === action.notificationId ? {...n, read: true} : n,
        ),
      };
    }
    case 'SEND_MESSAGE': {
      const existing = state.messagesByConversation[action.conversationId] ?? [];
      const newMessage: Message = {
        id: `msg-new-${Date.now()}`,
        senderId: 'me',
        text: action.text,
        timestamp: 'Now',
      };
      return {
        ...state,
        messagesByConversation: {
          ...state.messagesByConversation,
          [action.conversationId]: [...existing, newMessage],
        },
      };
    }
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({state: initialState, dispatch: () => null});

export function AppProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

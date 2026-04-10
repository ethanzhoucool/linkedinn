import {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabParamList = {
  Feed: undefined;
  Network: undefined;
  Post: undefined;
  Notifications: undefined;
  Jobs: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Main: NavigatorScreenParams<MainTabParamList> | undefined;
  Messaging: undefined;
  Conversation: {conversationId: string};
  Profile: {userId?: string};
  Search: undefined;
  PostComposer: undefined;
};

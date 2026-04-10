import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MainTabParamList, RootStackParamList} from './types';
import {Colors} from '../theme';
import {FeedScreen} from '../screens/FeedScreen';
import {NetworkScreen} from '../screens/NetworkScreen';
import {NotificationsScreen} from '../screens/NotificationsScreen';
import {JobsScreen} from '../screens/JobsScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

function PostPlaceholder() {
  return null;
}

function PostTabButton({children}: BottomTabBarButtonProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      testID="tab-post"
      accessibilityRole="button"
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => {
        navigation.navigate('PostComposer');
      }}>
      {children}
    </TouchableOpacity>
  );
}

function makePressableTabButton(testID: string) {
  return function TabButton({children, onPress}: BottomTabBarButtonProps) {
    return (
      <TouchableOpacity
        testID={testID}
        accessibilityRole="button"
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onPress={e => onPress && onPress(e as any)}>
        {children}
      </TouchableOpacity>
    );
  };
}

const FeedTabButton = makePressableTabButton('tab-feed');
const NetworkTabButton = makePressableTabButton('tab-network');
const NotificationsTabButton = makePressableTabButton('tab-notifications');
const JobsTabButton = makePressableTabButton('tab-jobs');

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarButton: props => <FeedTabButton {...props} />,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarLabel: 'My Network',
          tabBarButton: props => <NetworkTabButton {...props} />,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostPlaceholder}
        options={{
          tabBarLabel: 'Post',
          tabBarButton: props => <PostTabButton {...props} />,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarButton: props => <NotificationsTabButton {...props} />,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarButton: props => <JobsTabButton {...props} />,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="work" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
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
      style={styles.tabButton}
      onPress={() => {
        navigation.navigate('PostComposer');
      }}>
      {children}
    </TouchableOpacity>
  );
}

function makePressableTabButton(testID: string) {
  return function TabButton({children, onPress, accessibilityState}: BottomTabBarButtonProps) {
    const focused = accessibilityState?.selected ?? false;
    return (
      <TouchableOpacity
        testID={testID}
        accessibilityRole="button"
        style={styles.tabButton}
        onPress={e => onPress && onPress(e as any)}>
        {focused && <View style={styles.topIndicator} />}
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
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={focused ? 'home' : 'home'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarLabel: 'My Network',
          tabBarButton: props => <NetworkTabButton {...props} />,
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={focused ? 'people' : 'people-outline'}
              size={size}
              color={color}
            />
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
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={focused ? 'notifications' : 'notifications-none'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarButton: props => <JobsTabButton {...props} />,
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={focused ? 'work' : 'work-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Colors.primary,
  },
});

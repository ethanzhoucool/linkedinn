import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {useApp} from '../../store/AppContext';
import {Colors} from '../../theme';
import {Avatar} from './Avatar';
import {ChatBubbleIcon, SearchIcon} from './icons';

type Nav = StackNavigationProp<RootStackParamList>;

const unread = true;

export function TopBar() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<Nav>();
  const {state} = useApp();
  const avatarUrl = state.currentUser.avatarUrl;

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.row}>
        {/* Left: Avatar */}
        <TouchableOpacity
          testID="topbar-avatar"
          onPress={() => navigation.navigate('Profile', {})}
          style={styles.avatarButton}>
          <Avatar uri={avatarUrl} size={36} />
        </TouchableOpacity>

        {/* Center: Search pill */}
        <TouchableOpacity
          testID="topbar-search"
          onPress={() => navigation.navigate('Search')}
          style={styles.searchPill}
          activeOpacity={0.8}>
          <View style={styles.searchIcon}>
            <SearchIcon size={18} color={Colors.textSecondary} />
          </View>
          <Text style={styles.searchPlaceholder}>Search</Text>
        </TouchableOpacity>

        {/* Right: Messaging icon with unread dot */}
        <View style={styles.messagingWrap}>
          <TouchableOpacity
            testID="topbar-messaging"
            onPress={() => navigation.navigate('Messaging')}
            style={styles.messagingButton}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            activeOpacity={0.7}>
            <ChatBubbleIcon size={26} color={Colors.textSecondary} />
          </TouchableOpacity>
          {unread && (
            <View style={styles.unreadDot} pointerEvents="none" />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
  },
  avatarButton: {
    marginRight: 8,
  },
  searchPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray100,
    borderRadius: 18,
    height: 36,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 4,
  },
  searchPlaceholder: {
    color: Colors.textSecondary,
    fontSize: 14,
    flex: 1,
  },
  messagingWrap: {
    position: 'relative',
  },
  messagingButton: {
    padding: 4,
  },
  unreadDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.error,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});

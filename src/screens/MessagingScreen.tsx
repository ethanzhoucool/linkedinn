import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Conversation} from '../data/mockConversations';
import {Colors, Typography} from '../theme';
import {IconButton} from '../components/common/IconButton';
import {Avatar} from '../components/common/Avatar';
import {ConversationRow} from '../components/messaging/ConversationRow';
import {Toast, useToast} from '../components/common/Toast';

type NavProp = StackNavigationProp<RootStackParamList>;

type TabName = 'Focused' | 'Other';

export function MessagingScreen() {
  const navigation = useNavigation<NavProp>();
  const insets = useSafeAreaInsets();
  const {state} = useApp();
  const {show, toastProps} = useToast();
  const [activeTab, setActiveTab] = useState<TabName>('Focused');
  const [bannerVisible, setBannerVisible] = useState(true);

  const conversations = state.conversations;

  const renderItem = ({item}: {item: Conversation}) => (
    <ConversationRow
      conversation={item}
      onPress={() =>
        navigation.navigate('Conversation', {conversationId: item.id})
      }
    />
  );

  return (
    <View testID="messaging-screen" style={styles.root}>
      {/* Header */}
      <View style={[styles.header, {paddingTop: insets.top + 8}]}>
        <IconButton
          testID="messaging-back"
          name="arrow-back"
          onPress={() => navigation.goBack()}
          size={24}
          color={Colors.textPrimary}
        />
        <Avatar
          uri={state.currentUser.avatarUrl}
          size={32}
        />
        <Text style={styles.headerTitle}>Messaging</Text>
        <View style={styles.headerRight}>
          <IconButton
            name="more-horiz"
            onPress={() => show('Coming soon')}
            size={24}
            color={Colors.textPrimary}
            style={styles.headerIcon}
          />
          <IconButton
            name="edit"
            onPress={() => show('Coming soon')}
            size={24}
            color={Colors.textPrimary}
          />
        </View>
      </View>

      {/* Search input */}
      <TouchableOpacity
        style={styles.searchPill}
        activeOpacity={0.7}
        onPress={() => show('Search coming soon')}>
        <Icon name="search" size={18} color={Colors.textTertiary} style={styles.searchIcon} />
        <Text style={styles.searchText}>Search messages</Text>
      </TouchableOpacity>

      {/* Tab row */}
      <View style={styles.tabRow}>
        {(['Focused', 'Other'] as TabName[]).map(tab => (
          <TouchableOpacity
            key={tab}
            testID={`messaging-tab-${tab.toLowerCase()}`}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.tabActive]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab
                  ? styles.tabTextActive
                  : styles.tabTextInactive,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Unread banner */}
      {bannerVisible && (
        <View style={styles.banner}>
          <Text style={styles.bannerText} numberOfLines={1}>
            You have 12 unread messages. Turn on notifications
          </Text>
          <TouchableOpacity
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            onPress={() => setBannerVisible(false)}>
            <Icon name="close" size={16} color={Colors.gray700} />
          </TouchableOpacity>
        </View>
      )}

      {/* Conversation list */}
      <FlatList
        testID="messaging-list"
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.list}
      />

      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.card,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
    gap: 8,
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    flex: 1,
    fontSize: Typography.xxl,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 8,
  },
  searchPill: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    backgroundColor: Colors.gray100,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchText: {
    fontSize: Typography.base,
    color: Colors.textTertiary,
  },
  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: Typography.base,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.primary,
  },
  tabTextInactive: {
    color: Colors.textSecondary,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9C3',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#FDE68A',
  },
  bannerText: {
    flex: 1,
    fontSize: Typography.xs,
    color: Colors.gray700,
    marginRight: 8,
  },
  list: {
    flex: 1,
  },
});

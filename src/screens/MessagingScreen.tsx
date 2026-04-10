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
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Conversation} from '../data/mockConversations';
import {Colors, Typography} from '../theme';
import {IconButton} from '../components/common/IconButton';
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
        <Text style={styles.headerTitle}>Messaging</Text>
        <View style={styles.headerRight}>
          <IconButton
            name="edit"
            onPress={() => show('Coming soon')}
            size={24}
            color={Colors.textPrimary}
            style={styles.headerIcon}
          />
          <IconButton
            name="filter-list"
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
        onPress={() => navigation.navigate('Search')}>
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
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    flex: 1,
    fontSize: Typography.xl,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 12,
  },
  searchPill: {
    margin: 12,
    backgroundColor: Colors.gray100,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: Colors.textPrimary,
  },
  tabText: {
    fontSize: Typography.base,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.textPrimary,
  },
  tabTextInactive: {
    color: Colors.textSecondary,
  },
  list: {
    flex: 1,
  },
});

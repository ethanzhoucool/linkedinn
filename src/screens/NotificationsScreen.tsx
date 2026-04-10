import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import {useApp} from '../store/AppContext';
import {NotificationItem} from '../data/mockNotifications';
import {Colors, Typography} from '../theme';
import {TopBar} from '../components/common/TopBar';
import {Toast, useToast} from '../components/common/Toast';
import {NotificationRow} from '../components/notifications/NotificationRow';

interface FilterPill {
  id: string;
  label: string;
}

const FILTER_PILLS: FilterPill[] = [
  {id: 'All', label: 'All'},
  {id: 'Jobs', label: 'Jobs'},
  {id: 'My posts', label: 'My posts'},
  {id: 'Mentioned', label: 'Mentioned'},
];

function filterNotifications(
  notifications: NotificationItem[],
  filter: string,
): NotificationItem[] {
  switch (filter) {
    case 'Jobs':
      return notifications.filter(n => n.type === 'job');
    case 'My posts':
      return notifications.filter(n => n.type === 'reaction' || n.type === 'comment');
    case 'Mentioned':
      return notifications.filter(n => n.type === 'mention');
    default:
      return notifications;
  }
}

export function NotificationsScreen() {
  const {state, dispatch} = useApp();
  const {show, toastProps} = useToast();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered = filterNotifications(state.notifications, activeFilter);

  const renderItem = ({item}: ListRenderItemInfo<NotificationItem>) => (
    <NotificationRow
      notification={item}
      onPress={() => {
        dispatch({type: 'MARK_NOTIFICATION_READ', notificationId: item.id});
        show('Notification opened');
      }}
    />
  );

  return (
    <View testID="notifications-screen" style={styles.root}>
      <TopBar />

      {/* Filter pills */}
      <View style={styles.pillsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsContent}>
          {FILTER_PILLS.map(pill => {
            const isSelected = pill.id === activeFilter;
            return (
              <TouchableOpacity
                key={pill.id}
                testID={`notifications-filter-${pill.id}`}
                onPress={() => setActiveFilter(pill.id)}
                activeOpacity={0.7}
                style={[
                  styles.pill,
                  isSelected ? styles.pillSelected : styles.pillUnselected,
                ]}>
                <Text
                  style={[
                    styles.pillText,
                    isSelected ? styles.pillTextSelected : styles.pillTextUnselected,
                  ]}>
                  {pill.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        testID="notifications-list"
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pillsContainer: {
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  pillsContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pillSelected: {
    backgroundColor: Colors.primary,
  },
  pillUnselected: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.borderStrong,
  },
  pillText: {
    fontSize: Typography.sm,
    fontWeight: '600',
  },
  pillTextSelected: {
    color: Colors.textOnPrimary,
  },
  pillTextUnselected: {
    color: Colors.textPrimary,
  },
  list: {
    flex: 1,
    backgroundColor: Colors.card,
  },
});

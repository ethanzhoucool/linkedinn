import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Conversation} from '../../data/mockConversations';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';
import {HairlineDivider} from '../common/Divider';

interface Props {
  conversation: Conversation;
  onPress: () => void;
}

export function ConversationRow({conversation, onPress}: Props) {
  const {unread, person, lastMessagePreview, lastMessageAt} = conversation;

  return (
    <TouchableOpacity
      testID={`conversation-row-${conversation.id}`}
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Avatar
        uri={person.avatarUrl}
        size={56}
        online={conversation.online}
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text
            style={[
              styles.name,
              unread ? styles.nameSemibold : styles.nameMedium,
            ]}>
            {person.name}
          </Text>
          <Text
            style={[
              styles.timestamp,
              {color: unread ? Colors.primary : Colors.textTertiary},
            ]}>
            {lastMessageAt}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text
            numberOfLines={1}
            style={[
              styles.preview,
              unread ? styles.previewUnread : styles.previewRead,
            ]}>
            {lastMessagePreview}
          </Text>
          {unread && <View style={styles.unreadDot} />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.card,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: Typography.md,
    color: Colors.textPrimary,
    flex: 1,
    marginRight: 8,
  },
  nameSemibold: {
    fontWeight: '600',
  },
  nameMedium: {
    fontWeight: '500',
  },
  timestamp: {
    fontSize: Typography.xs,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  preview: {
    fontSize: Typography.base,
    flex: 1,
    marginRight: 6,
  },
  previewUnread: {
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  previewRead: {
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
});

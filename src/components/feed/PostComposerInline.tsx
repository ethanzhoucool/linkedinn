import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../theme';
import {Avatar} from '../common/Avatar';

interface Props {
  avatarUrl: string;
  onPress: () => void;
}

interface ActionButton {
  icon: string;
  label: string;
  color: string;
}

const ACTION_BUTTONS: ActionButton[] = [
  {icon: 'photo-library', label: 'Photo', color: '#4CAF50'},
  {icon: 'videocam', label: 'Video', color: '#0A66C2'},
  {icon: 'event', label: 'Event', color: '#FF9800'},
  {icon: 'article', label: 'Write article', color: '#E05D44'},
];

export function PostComposerInline({avatarUrl, onPress}: Props) {
  return (
    <View testID="feed-composer-inline" style={styles.container}>
      {/* Top row: avatar + start a post pill */}
      <TouchableOpacity
        style={styles.topRow}
        onPress={onPress}
        activeOpacity={0.7}>
        <Avatar uri={avatarUrl} size={40} />
        <View
          testID="feed-composer-inline-start-post"
          style={styles.pill}>
          <Text style={styles.pillText}>Start a post</Text>
        </View>
      </TouchableOpacity>

      {/* Bottom action buttons */}
      <View style={styles.actionsRow}>
        {ACTION_BUTTONS.map(btn => (
          <TouchableOpacity
            key={btn.label}
            style={styles.actionButton}
            onPress={onPress}
            activeOpacity={0.7}>
            <Icon name={btn.icon} size={22} color={btn.color} />
            <Text style={styles.actionLabel}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  pill: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 24,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  pillText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  actionsRow: {
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginLeft: 4,
  },
});

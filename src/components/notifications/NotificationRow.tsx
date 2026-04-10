import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationItem} from '../../data/mockNotifications';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';
import {IconButton} from '../common/IconButton';

interface Props {
  notification: NotificationItem;
  onPress: () => void;
}

function getIconForType(type: string): string {
  switch (type) {
    case 'job':
      return 'work';
    case 'birthday':
      return 'cake';
    default:
      return 'notifications';
  }
}

function RichText({message}: {message: string}) {
  const parts = message.split('**');
  return (
    <Text style={styles.messageText}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <Text key={index} style={styles.bold}>
            {part}
          </Text>
        ) : (
          <Text key={index}>{part}</Text>
        ),
      )}
    </Text>
  );
}

export function NotificationRow({notification, onPress}: Props) {
  const bgColor = notification.read ? Colors.card : Colors.primaryLight;

  return (
    <>
      <TouchableOpacity
        testID={`notification-row-${notification.id}`}
        activeOpacity={0.85}
        onPress={onPress}
        style={[styles.row, {backgroundColor: bgColor}]}>
        {/* Left: Avatar or icon bubble */}
        <View style={styles.leftSection}>
          {notification.actor ? (
            <Avatar uri={`https://i.pravatar.cc/150?u=${notification.actor}`} size={48} />
          ) : (
            <View style={styles.iconBubble}>
              <Icon
                name={getIconForType(notification.type)}
                size={22}
                color={Colors.primary}
              />
            </View>
          )}
        </View>

        {/* Middle: message + timeAgo */}
        <View style={styles.middle}>
          <RichText message={notification.message} />
          <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
        </View>

        {/* Right: preview image or dots */}
        <View style={styles.rightSection}>
          {notification.previewImageUrl ? (
            <Image
              source={{uri: notification.previewImageUrl}}
              style={styles.previewImage}
            />
          ) : (
            <IconButton
              name="more-horiz"
              onPress={onPress}
              size={20}
              color={Colors.textSecondary}
            />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.hairline} />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  leftSection: {
    marginRight: 12,
  },
  iconBubble: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    marginRight: 8,
  },
  messageText: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    lineHeight: 20,
    marginBottom: 4,
  },
  bold: {
    fontWeight: '600',
  },
  timeAgo: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  hairline: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
});

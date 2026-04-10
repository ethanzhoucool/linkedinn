import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ConnectionRequest} from '../../data/mockConnectionRequests';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';
import {VerifiedBadge} from '../common/VerifiedBadge';
import {HairlineDivider} from '../common/Divider';

interface Props {
  request: ConnectionRequest;
  onAccept: () => void;
  onIgnore: () => void;
  onPress: () => void;
}

export function ConnectionRequestCard({request, onAccept, onIgnore, onPress}: Props) {
  const {person, timeAgo, context} = request;

  const mutualCount = person.mutualConnections ?? 5;
  const mutualLabel = `${mutualCount} mutual connection${mutualCount !== 1 ? 's' : ''}`;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.card}>
        <Avatar uri={person.avatarUrl} size={56} />
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name} numberOfLines={1}>{person.name}</Text>
            {person.verified && (
              <View style={styles.badgeGap}>
                <VerifiedBadge size={14} />
              </View>
            )}
          </View>
          <Text style={styles.headline} numberOfLines={1}>
            {person.headline}
          </Text>
          <Text style={styles.mutual}>{mutualLabel}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            testID={`network-invite-${request.id}-ignore`}
            onPress={onIgnore}
            style={styles.ignoreCircle}
            activeOpacity={0.7}
            hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}>
            <Icon name="close" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity
            testID={`network-invite-${request.id}-accept`}
            onPress={onAccept}
            style={styles.acceptCircle}
            activeOpacity={0.7}
            hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}>
            <Icon name="check" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <HairlineDivider />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    marginRight: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  badgeGap: {
    marginLeft: 4,
  },
  name: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  headline: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  mutual: {
    fontSize: Typography.xs,
    color: Colors.textSecondary,
    marginBottom: 1,
  },
  timeAgo: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ignoreCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: Colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

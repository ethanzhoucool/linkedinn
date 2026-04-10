import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ConnectionRequest} from '../../data/mockConnectionRequests';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';
import {HairlineDivider} from '../common/Divider';

interface Props {
  request: ConnectionRequest;
  onAccept: () => void;
  onIgnore: () => void;
  onPress: () => void;
}

export function ConnectionRequestCard({request, onAccept, onIgnore, onPress}: Props) {
  const {person, timeAgo, context} = request;

  const mutualLabel = context
    ? context
    : `${person.mutualConnections} mutual connection${person.mutualConnections !== 1 ? 's' : ''}`;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.card}>
        <Avatar uri={person.avatarUrl} size={56} />
        <View style={styles.info}>
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.headline} numberOfLines={1}>
            {person.headline}
          </Text>
          <Text style={styles.meta}>
            {mutualLabel} · {timeAgo}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            testID={`network-invite-${request.id}-ignore`}
            onPress={onIgnore}
            style={styles.ignoreButton}
            activeOpacity={0.7}>
            <Text style={styles.ignoreText}>Ignore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID={`network-invite-${request.id}-accept`}
            onPress={onAccept}
            style={styles.acceptButton}
            activeOpacity={0.7}>
            <Text style={styles.acceptText}>Accept</Text>
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
    marginRight: 8,
  },
  name: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  headline: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  meta: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
  },
  actions: {
    alignItems: 'center',
    gap: 8,
  },
  ignoreButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  ignoreText: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  acceptButton: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  acceptText: {
    fontSize: Typography.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
});

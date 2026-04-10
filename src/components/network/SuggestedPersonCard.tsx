import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Person} from '../../data/mockConnections';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';

interface Props {
  person: Person & {status?: 'idle' | 'pending' | 'connected'};
  onPress: () => void;
  onConnect: () => void;
}

export function SuggestedPersonCard({person, onPress, onConnect}: Props) {
  const isPending = person.status === 'pending' || person.status === 'connected';

  return (
    <TouchableOpacity
      testID={`network-suggested-${person.id}`}
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.card}>
      {/* Gray cover strip */}
      <View style={styles.cover} />

      {/* Avatar overlapping cover */}
      <View style={styles.avatarWrapper}>
        <Avatar uri={person.avatarUrl} size={72} />
      </View>

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={2}>
          {person.name}
        </Text>
        <Text style={styles.headline} numberOfLines={2}>
          {person.headline}
        </Text>
        <Text style={styles.mutual}>
          {person.mutualConnections} mutual connection{person.mutualConnections !== 1 ? 's' : ''}
        </Text>
        <TouchableOpacity
          testID={`network-suggested-${person.id}-connect`}
          onPress={isPending ? undefined : onConnect}
          disabled={isPending}
          activeOpacity={isPending ? 1 : 0.7}
          style={[styles.connectButton, isPending && styles.connectButtonPending]}>
          <Text
            style={[
              styles.connectText,
              isPending && styles.connectTextPending,
            ]}>
            {isPending ? 'Pending' : 'Connect'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  cover: {
    height: 60,
    backgroundColor: Colors.gray200,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: -36,
    marginBottom: 8,
  },
  body: {
    paddingHorizontal: 8,
    paddingBottom: 12,
    alignItems: 'center',
  },
  name: {
    fontSize: Typography.base,
    fontWeight: '600',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
  headline: {
    fontSize: Typography.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
    minHeight: 30,
    marginBottom: 4,
  },
  mutual: {
    fontSize: 11,
    color: Colors.textTertiary,
    textAlign: 'center',
    marginBottom: 8,
  },
  connectButton: {
    alignSelf: 'stretch',
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  connectButtonPending: {
    borderColor: Colors.textTertiary,
  },
  connectText: {
    fontSize: Typography.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
  connectTextPending: {
    color: Colors.textTertiary,
  },
});

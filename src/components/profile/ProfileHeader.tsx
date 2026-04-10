import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from '../common/Avatar';
import {IconButton} from '../common/IconButton';
import {Colors, Typography, Spacing} from '../../theme';
import {CurrentUser} from '../../data/mockCurrentUser';

interface Props {
  user: CurrentUser;
  onBack: () => void;
}

export function ProfileHeader({user, onBack}: Props) {
  const isImageUrl =
    user.coverUrl.startsWith('http://') ||
    user.coverUrl.startsWith('https://');

  return (
    <View style={styles.card}>
      {/* Cover strip */}
      <View style={styles.coverContainer}>
        {isImageUrl ? (
          <Image
            source={{uri: user.coverUrl}}
            style={styles.coverImage}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.coverImage, {backgroundColor: Colors.primary}]} />
        )}
        <View style={styles.backButtonContainer}>
          <IconButton
            name="arrow-back"
            onPress={onBack}
            size={22}
            color={Colors.white}
            testID="profile-back"
            style={styles.backButton}
          />
        </View>
      </View>

      {/* Avatar overlapping cover */}
      <View style={styles.avatarRow}>
        <View style={styles.avatarWrapper}>
          <Avatar uri={user.avatarUrl} size={152} />
        </View>
      </View>

      {/* Info section */}
      <View style={styles.infoContainer}>
        <Text style={styles.name} testID="profile-header-name">
          {user.name}
        </Text>
        <Text style={styles.headline} testID="profile-header-headline">
          {user.headline}
        </Text>

        {/* Location + contact info */}
        <View style={styles.locationRow}>
          <Text style={styles.location}>{user.location}</Text>
          <Text style={styles.dot}> · </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.contactInfo}>Contact info</Text>
          </TouchableOpacity>
        </View>

        {/* Connections row */}
        <View style={styles.connectionsRow}>
          <Text style={styles.connectionsCount}>
            {user.connectionsCount} connections
          </Text>
          <Text style={styles.mutualText}>  •  500+ mutual</Text>
        </View>

        {/* Action buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.actionsScroll}
          contentContainerStyle={styles.actionsContent}>
          <TouchableOpacity style={styles.filledButton} activeOpacity={0.7}>
            <Text style={styles.filledButtonText}>Open to</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlinedButton} activeOpacity={0.7}>
            <Text style={styles.outlinedButtonText}>Add profile section</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlinedButton} activeOpacity={0.7}>
            <Text style={styles.outlinedButtonText}>More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
  },
  coverContainer: {
    height: 100,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 100,
  },
  backButtonContainer: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarRow: {
    paddingHorizontal: Spacing.lg,
  },
  avatarWrapper: {
    marginTop: -76,
    width: 156,
    height: 156,
    borderRadius: 78,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  infoContainer: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.sm,
    paddingBottom: Spacing.lg,
  },
  name: {
    fontSize: Typography.title,
    ...Typography.bold,
    color: Colors.textPrimary,
  },
  headline: {
    fontSize: Typography.base,
    ...Typography.regular,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    fontSize: 13,
    color: Colors.textTertiary,
  },
  dot: {
    fontSize: 13,
    color: Colors.textTertiary,
  },
  contactInfo: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '600',
  },
  connectionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  connectionsCount: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '600',
  },
  mutualText: {
    fontSize: 13,
    color: Colors.textTertiary,
  },
  actionsScroll: {
    marginTop: Spacing.md,
  },
  actionsContent: {
    flexDirection: 'row',
    gap: 8,
  },
  filledButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  filledButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  outlinedButton: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  outlinedButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

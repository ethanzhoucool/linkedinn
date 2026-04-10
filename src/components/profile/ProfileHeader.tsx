import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Avatar} from '../common/Avatar';
import {IconButton} from '../common/IconButton';
import {VerifiedBadge} from '../common/VerifiedBadge';
import {Colors, Typography, Spacing} from '../../theme';
import {CurrentUser} from '../../data/mockCurrentUser';
import {suggestedPeople} from '../../data/mockConnections';

interface Props {
  user: CurrentUser;
  onBack: () => void;
}

export function ProfileHeader({user, onBack}: Props) {
  const insets = useSafeAreaInsets();
  const hasImage =
    !!user.coverUrl &&
    (user.coverUrl.startsWith('http://') ||
      user.coverUrl.startsWith('https://'));

  const mutualAvatars = suggestedPeople.slice(0, 3);

  return (
    <View style={styles.card}>
      {/* Cover strip */}
      <View style={[styles.coverContainer]}>
        {hasImage ? (
          <Image
            source={{uri: user.coverUrl}}
            style={styles.coverFill}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.coverFill, {backgroundColor: Colors.primary}]} />
        )}

        {/* Back button — top-left overlaid */}
        <View
          style={[
            styles.backBtn,
            {top: insets.top + 8, left: 16},
          ]}>
          <IconButton
            name="arrow-back"
            onPress={onBack}
            size={22}
            color={Colors.white}
            testID="profile-back"
            style={styles.iconBtnInner}
          />
        </View>

        {/* More button — top-right overlaid */}
        <View
          style={[
            styles.moreBtn,
            {top: insets.top + 8, right: 16},
          ]}>
          <IconButton
            name="more-horiz"
            onPress={() => {}}
            size={22}
            color={Colors.white}
            style={styles.iconBtnInner}
          />
        </View>
      </View>

      {/* White card content below cover */}
      <View style={styles.cardBody}>
        {/* Avatar — absolutely positioned, overlapping cover */}
        <View style={styles.avatarWrapper}>
          <Avatar uri={user.avatarUrl} size={152} />
        </View>

        {/* Spacer for avatar height overhang */}
        <View style={styles.avatarSpacer} />

        {/* Name row */}
        <View style={styles.nameRow}>
          <Text style={styles.name} testID="profile-header-name">
            {user.name}
          </Text>
          <View style={styles.verifiedBadge}>
            <VerifiedBadge size={18} />
          </View>
        </View>

        {/* Headline */}
        <Text
          style={styles.headline}
          numberOfLines={2}
          testID="profile-header-headline">
          {user.headline}
        </Text>

        {/* Company + location row */}
        <Text style={styles.subline} numberOfLines={1}>
          {user.company}
          {user.location ? ` · ${user.location}` : ''}
        </Text>

        {/* Location + Contact info */}
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>{user.location}</Text>
          <Text style={styles.dotText}> · </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.contactInfo}>Contact info</Text>
          </TouchableOpacity>
        </View>

        {/* Connections row */}
        <View style={styles.connectionsRow}>
          <Text style={styles.connectionsCount}>
            {user.connectionsCount}+ connections
          </Text>
          <Text style={styles.mutualText}> · 500+ mutual connections</Text>
        </View>

        {/* Mutual avatars mini-row */}
        <View style={styles.mutualAvatarsRow}>
          {mutualAvatars.map((person, idx) => (
            <View
              key={person.id}
              style={[
                styles.mutualAvatar,
                idx > 0 && styles.mutualAvatarOverlap,
              ]}>
              <Image
                source={{uri: person.avatarUrl}}
                style={styles.mutualAvatarImg}
              />
            </View>
          ))}
        </View>

        {/* Action buttons row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.actionsScroll}
          contentContainerStyle={styles.actionsContent}>
          {/* Open to — filled primary */}
          <TouchableOpacity style={styles.filledButton} activeOpacity={0.7}>
            <Text style={styles.filledButtonText}>Open to</Text>
            <View style={styles.filledButtonArrow}>
              <IconButton
                name="arrow-drop-down"
                onPress={() => {}}
                size={18}
                color={Colors.white}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity>

          {/* Add profile section — outlined */}
          <TouchableOpacity style={styles.outlinedButton} activeOpacity={0.7}>
            <Text style={styles.outlinedButtonText}>Add profile section</Text>
          </TouchableOpacity>

          {/* Enhance profile — outlined */}
          <TouchableOpacity style={styles.outlinedButton} activeOpacity={0.7}>
            <Text style={styles.outlinedButtonText}>Enhance profile</Text>
          </TouchableOpacity>

          {/* More — outlined */}
          <TouchableOpacity style={styles.outlinedButton} activeOpacity={0.7}>
            <Text style={styles.outlinedButtonText}>More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const COVER_HEIGHT = 112;
const AVATAR_SIZE = 152;
const AVATAR_OVERLAP = AVATAR_SIZE / 2; // how much avatar extends below cover

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
  },
  coverContainer: {
    height: COVER_HEIGHT,
    position: 'relative',
  },
  coverFill: {
    ...StyleSheet.absoluteFillObject,
  },
  backBtn: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreBtn: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnInner: {
    padding: 0,
  },
  cardBody: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
    position: 'relative',
  },
  avatarWrapper: {
    position: 'absolute',
    top: -AVATAR_OVERLAP,
    left: Spacing.lg,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  avatarSpacer: {
    height: AVATAR_OVERLAP + Spacing.sm,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  name: {
    fontSize: Typography.title,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  verifiedBadge: {
    marginTop: 1,
  },
  headline: {
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 20,
    marginTop: 2,
  },
  subline: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
  dotText: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
  contactInfo: {
    fontSize: Typography.base,
    color: Colors.primary,
    fontWeight: '600',
  },
  connectionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  connectionsCount: {
    fontSize: Typography.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
  mutualText: {
    fontSize: Typography.sm,
    color: Colors.textTertiary,
  },
  mutualAvatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  mutualAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.white,
    overflow: 'hidden',
    backgroundColor: Colors.gray300,
  },
  mutualAvatarOverlap: {
    marginLeft: -6,
  },
  mutualAvatarImg: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  actionsScroll: {
    marginTop: Spacing.md,
  },
  actionsContent: {
    flexDirection: 'row',
    gap: 8,
    paddingRight: Spacing.lg,
  },
  filledButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filledButtonText: {
    color: Colors.white,
    fontSize: Typography.base,
    fontWeight: '600',
  },
  filledButtonArrow: {
    marginLeft: 2,
    marginRight: -8,
  },
  arrowIcon: {
    padding: 0,
  },
  outlinedButton: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  outlinedButtonText: {
    color: Colors.primary,
    fontSize: Typography.base,
    fontWeight: '600',
  },
});

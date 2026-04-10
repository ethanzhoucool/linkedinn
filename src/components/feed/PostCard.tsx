import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Post} from '../../data/mockPosts';
import {Colors} from '../../theme';
import {Avatar} from '../common/Avatar';
import {HairlineDivider} from '../common/Divider';
import {IconButton} from '../common/IconButton';
import {formatCount} from '../../utils/format';
import {ReactionBar} from './ReactionBar';
import {VerifiedBadge} from '../common/VerifiedBadge';
import {ConnectionDegreeBadge} from '../common/ConnectionDegreeBadge';
import {ReactionStack} from '../common/ReactionStack';

const SEE_MORE_THRESHOLD = 200;

interface Props {
  post: Post;
  onLike: () => void;
  onAuthorPress: () => void;
  onComment: () => void;
  onShare: () => void;
  onRepost: () => void;
}

export function PostCard({
  post,
  onLike,
  onAuthorPress,
  onComment,
  onShare,
  onRepost,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [contextDismissed, setContextDismissed] = useState(false);
  const isLong = post.content.length > SEE_MORE_THRESHOLD;
  const shouldTruncate = isLong && !expanded;
  const showContext = !!post.contextHeader && !contextDismissed;

  const reactionCounts = {like: post.reactions};
  const totalLabel = `${formatCount(post.reactions)} reactions`;

  return (
    <View
      testID={`feed-post-card-${post.id}`}
      style={styles.card}>

      {/* Context header bar */}
      {showContext && (
        <>
          <View style={styles.contextBar}>
            <Avatar uri={post.author.avatarUrl} size={20} />
            <Text style={styles.contextText} numberOfLines={1}>
              {post.contextHeader}
            </Text>
            <TouchableOpacity
              testID={`feed-post-context-dismiss-${post.id}`}
              onPress={() => setContextDismissed(true)}
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              activeOpacity={0.7}>
              <Icon name="close" size={16} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>
          <HairlineDivider />
        </>
      )}

      {/* Author block */}
      <View style={styles.header}>
        <TouchableOpacity
          testID={`feed-post-author-${post.id}`}
          style={styles.authorRow}
          onPress={onAuthorPress}
          activeOpacity={0.7}>
          <Avatar uri={post.author.avatarUrl} size={48} />
          <View style={styles.authorInfo}>
            {/* Row 1: name + verified + degree */}
            <View style={styles.nameRow}>
              <Text style={styles.authorName} numberOfLines={1}>
                {post.author.name}
              </Text>
              {post.author.verified && (
                <View style={styles.verifiedBadge}>
                  <VerifiedBadge size={14} />
                </View>
              )}
              <ConnectionDegreeBadge degree={post.author.connectionDegree} />
            </View>
            {/* Row 2: headline */}
            <Text style={styles.authorHeadline} numberOfLines={1}>
              {post.author.headline}
            </Text>
            {/* Row 3: timestamp · Edited · public */}
            <View style={styles.timestampRow}>
              <Text style={styles.timestamp}>{post.timestamp}</Text>
              <Text style={styles.timestampDot}> · </Text>
              <Text style={styles.timestamp}>Edited</Text>
              <Text style={styles.timestampDot}> · </Text>
              <Icon name="public" size={12} color={Colors.textTertiary} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.headerActions}>
          {!post.author.isFollowing && (
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => {}}
              activeOpacity={0.7}>
              <Text style={styles.followText}>+ Follow</Text>
            </TouchableOpacity>
          )}
          <IconButton
            name="more-horiz"
            onPress={() => {}}
            size={22}
            color={Colors.textSecondary}
            style={styles.moreButton}
          />
        </View>
      </View>

      {/* Body text */}
      <View style={styles.body}>
        <Text
          style={styles.bodyText}
          numberOfLines={shouldTruncate ? 4 : undefined}>
          {post.content}
        </Text>
        {isLong && !expanded && (
          <TouchableOpacity onPress={() => setExpanded(true)} activeOpacity={0.7}>
            <Text style={styles.seeMore}>...more</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Optional image */}
      {post.imageUrl ? (
        <Image
          source={{uri: post.imageUrl}}
          style={styles.postImage}
          resizeMode="cover"
        />
      ) : null}

      {/* Reaction count row */}
      <View style={styles.reactionCountRow}>
        <ReactionStack
          counts={reactionCounts}
          totalLabel={totalLabel}
        />
        <Text style={styles.commentsText}>
          {post.comments > 0 ? `${formatCount(post.comments)} comments` : ''}
        </Text>
      </View>

      <HairlineDivider />

      <ReactionBar
        post={post}
        onLike={onLike}
        onComment={onComment}
        onRepost={onRepost}
        onShare={onShare}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    marginBottom: 8,
  },
  contextBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  contextText: {
    flex: 1,
    fontSize: 13,
    color: Colors.textSecondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
  },
  authorRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  authorInfo: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 4,
  },
  authorName: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
    flexShrink: 1,
  },
  verifiedBadge: {
    marginTop: 1,
  },
  authorHeadline: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 1,
  },
  timestampRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  timestamp: {
    fontSize: 11,
    color: Colors.textTertiary,
  },
  timestampDot: {
    fontSize: 11,
    color: Colors.textTertiary,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  followButton: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  followText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
  moreButton: {
    padding: 4,
    marginLeft: 2,
  },
  body: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 21,
  },
  seeMore: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1.5,
  },
  reactionCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  commentsText: {
    fontSize: 12,
    color: Colors.textTertiary,
  },
});

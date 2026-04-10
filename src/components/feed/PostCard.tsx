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
  const isLong = post.content.length > SEE_MORE_THRESHOLD;
  const shouldTruncate = isLong && !expanded;

  return (
    <View
      testID={`feed-post-card-${post.id}`}
      style={styles.card}>
      {/* Header row */}
      <View style={styles.header}>
        <TouchableOpacity
          testID={`feed-post-author-${post.id}`}
          style={styles.authorRow}
          onPress={onAuthorPress}
          activeOpacity={0.7}>
          <Avatar uri={post.author.avatarUrl} size={48} />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName} numberOfLines={1}>
              {post.author.name}
            </Text>
            <Text style={styles.authorHeadline} numberOfLines={1}>
              {post.author.headline}
            </Text>
            <View style={styles.timestampRow}>
              <Text style={styles.timestamp}>{post.timestamp}</Text>
              <Text style={styles.separator}> · </Text>
              <Icon name="public" size={12} color={Colors.textTertiary} />
            </View>
          </View>
        </TouchableOpacity>
        <IconButton
          name="more-horiz"
          onPress={() => {}}
          size={22}
          color={Colors.textSecondary}
          style={styles.moreButton}
        />
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
            <Text style={styles.seeMore}>…see more</Text>
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
        <View style={styles.reactionEmojis}>
          <Text style={styles.reactionEmoji}>👍</Text>
          <Text style={[styles.reactionEmoji, styles.reactionEmojiOverlap]}>❤️</Text>
          <Text style={[styles.reactionEmoji, styles.reactionEmojiOverlap]}>👏</Text>
        </View>
        <Text style={styles.reactionCountText}>
          {formatCount(post.reactions)}
        </Text>
        <Text style={styles.engagementText}>
          {post.comments > 0
            ? `${formatCount(post.comments)} comments · ${formatCount(post.reposts)} reposts`
            : ''}
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
  authorName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
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
    fontSize: 12,
    color: Colors.textTertiary,
  },
  separator: {
    fontSize: 12,
    color: Colors.textTertiary,
  },
  moreButton: {
    padding: 4,
    marginLeft: 4,
  },
  body: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  seeMore: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  reactionCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  reactionEmojis: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
  },
  reactionEmoji: {
    fontSize: 14,
  },
  reactionEmojiOverlap: {
    marginLeft: -2,
  },
  reactionCountText: {
    fontSize: 12,
    color: Colors.textTertiary,
    marginRight: 4,
  },
  engagementText: {
    flex: 1,
    fontSize: 12,
    color: Colors.textTertiary,
    textAlign: 'right',
  },
});

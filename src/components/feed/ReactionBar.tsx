import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Post} from '../../data/mockPosts';
import {Colors} from '../../theme';
import {LinkedInThumbIcon} from '../common/LinkedInThumbIcon';

interface Props {
  post: Post;
  onLike: () => void;
  onComment: () => void;
  onRepost: () => void;
  onShare: () => void;
}

export function ReactionBar({post, onLike, onComment, onRepost, onShare}: Props) {
  const likeColor = post.liked ? Colors.like : Colors.textSecondary;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID={`feed-post-like-${post.id}`}
        style={styles.button}
        onPress={onLike}
        activeOpacity={0.7}>
        <LinkedInThumbIcon size={22} filled={post.liked} color={likeColor} />
        <Text style={[styles.label, {color: likeColor}]}>Like</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID={`feed-post-comment-${post.id}`}
        style={styles.button}
        onPress={onComment}
        activeOpacity={0.7}>
        <Icon name="chat-bubble-outline" size={22} color={Colors.textSecondary} />
        <Text style={styles.label}>Comment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID={`feed-post-repost-${post.id}`}
        style={styles.button}
        onPress={onRepost}
        activeOpacity={0.7}>
        <Icon name="cached" size={22} color={Colors.textSecondary} />
        <Text style={styles.label}>Repost</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID={`feed-post-share-${post.id}`}
        style={styles.button}
        onPress={onShare}
        activeOpacity={0.7}>
        <Icon name="send" size={22} color={Colors.textSecondary} />
        <Text style={styles.label}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  button: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

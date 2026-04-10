import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Typography} from '../../theme';
import {IconButton} from '../common/IconButton';
import {HairlineDivider} from '../common/Divider';

interface Props {
  onClose: () => void;
  onPost: () => void;
  canPost: boolean;
}

export function PostComposerHeader({onClose, onPost, canPost}: Props) {
  return (
    <View>
      <View style={styles.row}>
        <IconButton
          testID="composer-close"
          name="close"
          onPress={onClose}
          size={24}
          color={Colors.textSecondary}
        />
        <TouchableOpacity
          testID="composer-post-button"
          onPress={canPost ? onPost : undefined}
          disabled={!canPost}
          activeOpacity={0.8}
          style={[
            styles.postButton,
            {backgroundColor: canPost ? Colors.primary : Colors.gray300},
          ]}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <HairlineDivider />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  postButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  postButtonText: {
    color: Colors.white,
    fontSize: Typography.base,
    fontWeight: '600',
  },
});

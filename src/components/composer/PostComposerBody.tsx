import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurrentUser} from '../../data/mockCurrentUser';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';
import {Toast, useToast} from '../common/Toast';

interface Props {
  currentUser: CurrentUser;
  value: string;
  onChangeText: (t: string) => void;
}

const TOOLBAR_ICONS = [
  'photo-library',
  'videocam',
  'event',
  'article',
  'poll',
  'more-horiz',
];

export function PostComposerBody({currentUser, value, onChangeText}: Props) {
  const {show, toastProps} = useToast();

  return (
    <View style={styles.container}>
      {/* User row */}
      <View style={styles.userRow}>
        <Avatar uri={currentUser.avatarUrl} size={48} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{currentUser.name}</Text>
          <TouchableOpacity style={styles.audiencePill} activeOpacity={0.7}>
            <Text style={styles.audienceText}>Post to: Anyone ▾</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Text input */}
      <TextInput
        testID="composer-text-input"
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="What do you want to talk about?"
        placeholderTextColor={Colors.textTertiary}
        multiline
        autoFocus
        textAlignVertical="top"
        scrollEnabled={false}
      />

      {/* Bottom toolbar */}
      <View style={styles.toolbar}>
        {TOOLBAR_ICONS.map(icon => (
          <TouchableOpacity
            key={icon}
            onPress={() => show('Coming soon')}
            activeOpacity={0.7}
            style={styles.toolbarButton}>
            <Text style={styles.toolbarIcon}>{getIconChar(icon)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Toast {...toastProps} />
    </View>
  );
}

function getIconChar(name: string): string {
  const map: Record<string, string> = {
    'photo-library': '🖼',
    videocam: '📷',
    event: '📅',
    article: '📄',
    poll: '📊',
    'more-horiz': '•••',
  };
  return map[name] ?? '•';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  audiencePill: {
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  audienceText: {
    fontSize: Typography.xs,
    color: Colors.textSecondary,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: Colors.textPrimary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    minHeight: 120,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
  },
  toolbarButton: {
    padding: 8,
    marginHorizontal: 2,
  },
  toolbarIcon: {
    fontSize: 18,
  },
});

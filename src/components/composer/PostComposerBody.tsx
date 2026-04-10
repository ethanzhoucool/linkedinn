import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CurrentUser} from '../../data/mockCurrentUser';
import {Colors, Typography} from '../../theme';
import {Avatar} from '../common/Avatar';
import {Toast, useToast} from '../common/Toast';

interface Props {
  currentUser: CurrentUser;
  value: string;
  onChangeText: (t: string) => void;
}

const TOOLBAR_ICONS: Array<{name: string; color: string}> = [
  {name: 'photo-library', color: '#057642'},
  {name: 'videocam', color: Colors.primary},
  {name: 'event', color: '#E7A33E'},
  {name: 'edit', color: '#915907'},
  {name: 'poll', color: '#057642'},
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
            <Text style={styles.audienceText}>Anyone ▾</Text>
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
        placeholderTextColor={Colors.textSecondary}
        multiline
        autoFocus
        textAlignVertical="top"
        scrollEnabled={false}
      />

      {/* Bottom toolbar */}
      <View style={styles.toolbar}>
        {TOOLBAR_ICONS.map(icon => (
          <TouchableOpacity
            key={icon.name}
            onPress={() => show('Coming soon')}
            activeOpacity={0.7}
            style={styles.toolbarButton}>
            <View style={styles.toolbarIconCircle}>
              <Icon name={icon.name} size={18} color={icon.color} />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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
    borderRadius: 16,
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 120,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
  },
  toolbarButton: {
    marginHorizontal: 4,
  },
  toolbarIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Typography} from '../../theme';
import {IconButton} from '../common/IconButton';
import {Toast, useToast} from '../common/Toast';

interface Props {
  value: string;
  onChangeText: (t: string) => void;
  onSend: () => void;
}

export function MessageInput({value, onChangeText, onSend}: Props) {
  const {show, toastProps} = useToast();
  const hasText = value.trim().length > 0;

  return (
    <View style={styles.wrapper}>
      {/* Action icons row */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => show('Coming soon')}
          hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}>
          <Icon name="mic" size={22} color={Colors.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => show('Coming soon')}
          hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}>
          <Icon name="gif" size={22} color={Colors.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => show('Coming soon')}
          hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}>
          <Icon name="image" size={22} color={Colors.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => show('Coming soon')}
          hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}>
          <Icon name="emoji-emotions" size={22} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Input row */}
      <View style={styles.container}>
        <IconButton
          name="attach-file"
          onPress={() => show('Coming soon')}
          size={22}
          color={Colors.textSecondary}
        />
        <TextInput
          testID="conversation-message-input"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="Write a message…"
          placeholderTextColor={Colors.textTertiary}
          returnKeyType="send"
          onSubmitEditing={hasText ? onSend : undefined}
          multiline={false}
        />
        <IconButton
          testID="conversation-send-button"
          name="send"
          onPress={hasText ? onSend : () => {}}
          size={22}
          color={hasText ? Colors.primary : Colors.gray300}
        />
      </View>
      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
    backgroundColor: Colors.card,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 2,
  },
  actionBtn: {
    marginRight: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    height: 36,
    backgroundColor: Colors.gray100,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginHorizontal: 6,
    fontSize: Typography.base,
    color: Colors.textPrimary,
  },
});

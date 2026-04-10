import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Message} from '../../data/mockMessages';
import {Colors, Typography} from '../../theme';

interface Props {
  message: Message;
  isMe: boolean;
  showTimestamp: boolean;
}

export function MessageBubble({message, isMe, showTimestamp}: Props) {
  return (
    <View
      testID={`conversation-bubble-${message.id}`}
      style={[styles.row, isMe ? styles.rowMe : styles.rowThem]}>
      <View>
        <View
          style={[
            styles.bubble,
            isMe ? styles.bubbleMe : styles.bubbleThem,
          ]}>
          <Text style={[styles.text, isMe ? styles.textMe : styles.textThem]}>
            {message.text}
          </Text>
        </View>
        {showTimestamp && (
          <Text
            style={[
              styles.timestamp,
              isMe ? styles.timestampMe : styles.timestampThem,
            ]}>
            {message.timestamp}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    flexDirection: 'row',
  },
  rowMe: {
    justifyContent: 'flex-end',
  },
  rowThem: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  bubbleMe: {
    backgroundColor: Colors.primary,
  },
  bubbleThem: {
    backgroundColor: Colors.gray100,
  },
  text: {
    fontSize: Typography.base,
    fontWeight: '400',
  },
  textMe: {
    color: Colors.white,
  },
  textThem: {
    color: Colors.textPrimary,
  },
  timestamp: {
    fontSize: 11,
    color: Colors.textTertiary,
    marginTop: 4,
  },
  timestampMe: {
    textAlign: 'right',
  },
  timestampThem: {
    textAlign: 'left',
  },
});

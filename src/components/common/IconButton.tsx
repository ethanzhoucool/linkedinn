import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../theme';

interface Props {
  name: string;
  onPress: () => void;
  size?: number;
  color?: string;
  testID?: string;
  style?: ViewStyle;
}

export function IconButton({
  name,
  onPress,
  size = 24,
  color = Colors.textSecondary,
  testID,
  style,
}: Props) {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      activeOpacity={0.7}
      hitSlop={styles.hitSlop}
      style={[styles.container, style]}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  hitSlop: {
    top: 8,
    bottom: 8,
    left: 8,
    right: 8,
  },
});

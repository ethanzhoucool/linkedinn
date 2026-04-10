import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Typography} from '../../theme';

interface Props {
  title: string;
  trailing?: string;
  onTrailingPress?: () => void;
}

export function NetworkHeaderRow({title, trailing, onTrailingPress}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {trailing ? (
        <TouchableOpacity onPress={onTrailingPress} activeOpacity={0.7}>
          <Text style={styles.trailing}>{trailing}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.card,
  },
  title: {
    fontSize: Typography.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    flex: 1,
  },
  trailing: {
    fontSize: Typography.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
});

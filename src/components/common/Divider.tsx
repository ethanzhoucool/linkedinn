import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

interface DividerProps {
  height?: number;
  color?: string;
}

export function Divider({height = 8, color = Colors.background}: DividerProps) {
  return <View style={[styles.divider, {height, backgroundColor: color}]} />;
}

export function HairlineDivider() {
  return <View style={styles.hairline} />;
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
  hairline: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
});

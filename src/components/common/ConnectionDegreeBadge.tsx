import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/colors';

interface Props {
  degree: '1st' | '2nd' | '3rd';
}

export function ConnectionDegreeBadge({degree}: Props) {
  const number = degree.charAt(0);
  const suffix = degree.slice(1);
  return (
    <View style={styles.container}>
      <Text style={styles.bullet}>· </Text>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.suffix}>{suffix}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  number: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  suffix: {
    fontSize: 9,
    color: Colors.textSecondary,
    fontWeight: '400',
    lineHeight: 13,
  },
});

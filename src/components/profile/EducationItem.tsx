import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Typography, Spacing} from '../../theme';
import {Education} from '../../data/mockProfile';

interface Props {
  education: Education;
}

export function EducationItem({education}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: education.logoUrl}}
        style={styles.logo}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.school}>{education.school}</Text>
        <Text style={styles.degree}>
          {education.degree} · {education.field}
        </Text>
        <Text style={styles.years}>
          {education.startYear} – {education.endYear}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  school: {
    fontSize: Typography.md,
    ...Typography.semibold,
    color: Colors.textPrimary,
  },
  degree: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  years: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },
});

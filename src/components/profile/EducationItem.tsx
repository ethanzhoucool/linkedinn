import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CompanyLogo} from '../common/CompanyLogo';
import {HairlineDivider} from '../common/Divider';
import {Colors, Typography, Spacing} from '../../theme';
import {Education} from '../../data/mockProfile';

interface Props {
  education: Education;
  isLast?: boolean;
}

export function EducationItem({education, isLast}: Props) {
  return (
    <View>
      <View style={styles.container}>
        <CompanyLogo
          slug={education.logoSlug}
          name={education.school}
          size={48}
          rounded={4}
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
      {!isLast && <HairlineDivider />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  school: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  degree: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  years: {
    fontSize: Typography.sm,
    color: Colors.textTertiary,
    marginTop: 2,
  },
});

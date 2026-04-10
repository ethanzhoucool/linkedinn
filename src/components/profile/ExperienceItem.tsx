import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CompanyLogo} from '../common/CompanyLogo';
import {HairlineDivider} from '../common/Divider';
import {Colors, Typography, Spacing} from '../../theme';
import {Experience} from '../../data/mockProfile';

interface Props {
  experience: Experience;
  isLast?: boolean;
}

export function ExperienceItem({experience, isLast}: Props) {
  return (
    <View>
      <View style={styles.container}>
        <CompanyLogo
          slug={experience.logoSlug}
          name={experience.company}
          size={48}
          rounded={4}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{experience.title}</Text>
          <Text style={styles.company} numberOfLines={1}>
            {experience.company}
          </Text>
          <Text style={styles.meta}>
            {experience.startDate} - {experience.endDate} · {experience.duration}
          </Text>
          <Text style={styles.meta}>
            {experience.location}
          </Text>
          {experience.description ? (
            <Text style={styles.description} numberOfLines={3}>
              {experience.description}
            </Text>
          ) : null}
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
  title: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  company: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginTop: 1,
  },
  meta: {
    fontSize: Typography.sm,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  description: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginTop: 8,
    lineHeight: 20,
  },
});

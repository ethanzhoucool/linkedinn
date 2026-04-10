import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Typography, Spacing} from '../../theme';
import {Experience} from '../../data/mockProfile';

interface Props {
  experience: Experience;
}

export function ExperienceItem({experience}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: experience.companyLogoUrl}}
        style={styles.logo}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.title}>{experience.title}</Text>
        <Text style={styles.company}>{experience.company}</Text>
        <Text style={styles.meta}>
          {experience.startDate} – {experience.endDate} · {experience.duration}
        </Text>
        <Text style={styles.meta}>{experience.location}</Text>
        {experience.description ? (
          <Text style={styles.description} numberOfLines={3}>
            {experience.description}
          </Text>
        ) : null}
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
  title: {
    fontSize: Typography.md,
    ...Typography.semibold,
    color: Colors.textPrimary,
  },
  company: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginTop: 1,
  },
  meta: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  description: {
    fontSize: 13,
    color: Colors.textPrimary,
    marginTop: 4,
    lineHeight: 18,
  },
});

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Job} from '../../data/mockJobs';
import {Colors, Typography} from '../../theme';
import {CompanyLogo} from '../common/CompanyLogo';

interface Props {
  job: Job;
  onPress: () => void;
  onDismiss: () => void;
}

export function JobCard({job, onPress, onDismiss}: Props) {
  return (
    <>
      <TouchableOpacity
        testID={`job-card-${job.id}`}
        activeOpacity={0.85}
        onPress={onPress}
        style={styles.card}>
        {/* Company logo */}
        <CompanyLogo
          slug={job.logoSlug}
          name={job.company}
          size={48}
          rounded={6}
        />

        {/* Main content */}
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {job.title}
          </Text>
          <Text style={styles.company}>{job.company}</Text>
          <Text style={styles.location}>{job.location}</Text>
          <Text style={styles.postedAt}>{job.postedAt} ago</Text>
        </View>

        {/* Dismiss X */}
        <TouchableOpacity
          testID={`job-dismiss-${job.id}`}
          onPress={onDismiss}
          activeOpacity={0.7}
          style={styles.dismissButton}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <Icon name="close" size={20} color={Colors.textTertiary} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.hairline} />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  title: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  company: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginBottom: 1,
  },
  location: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  postedAt: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
  },
  dismissButton: {
    paddingTop: 2,
  },
  hairline: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
});

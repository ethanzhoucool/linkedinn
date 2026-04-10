import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Job} from '../../data/mockJobs';
import {Colors, Typography} from '../../theme';

interface Props {
  job: Job;
  onPress: () => void;
  onToggleSave: () => void;
}

export function JobCard({job, onPress, onToggleSave}: Props) {
  return (
    <>
      <TouchableOpacity
        testID={`job-card-${job.id}`}
        activeOpacity={0.85}
        onPress={onPress}
        style={styles.card}>
        {/* Company logo */}
        <Image
          source={{uri: job.companyLogoUrl}}
          style={styles.logo}
        />

        {/* Main content */}
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {job.title}
          </Text>
          <Text style={styles.companyLocation}>
            {job.company} · {job.location}
          </Text>

          {/* Chip row */}
          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>{job.applicants} applicants</Text>
            </View>
            {job.remote && (
              <View style={styles.chip}>
                <Text style={styles.chipText}>Remote</Text>
              </View>
            )}
            {job.easyApply && (
              <View style={styles.chip}>
                <Text style={styles.chipText}>Easy Apply</Text>
              </View>
            )}
          </View>

          <Text style={styles.postedAt}>{job.postedAt} ago</Text>
        </View>

        {/* Bookmark icon */}
        <TouchableOpacity
          testID={`job-save-${job.id}`}
          onPress={onToggleSave}
          activeOpacity={0.7}
          style={styles.bookmarkButton}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <Icon
            name={job.saved ? 'bookmark' : 'bookmark-border'}
            size={24}
            color={job.saved ? Colors.primary : Colors.textSecondary}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.hairline} />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 4,
    marginRight: 12,
  },
  content: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  companyLocation: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  chip: {
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  chipText: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  postedAt: {
    fontSize: 11,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  bookmarkButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  hairline: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
});

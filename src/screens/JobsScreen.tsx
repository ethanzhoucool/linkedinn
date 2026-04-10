import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Job} from '../data/mockJobs';
import {Colors, Typography} from '../theme';
import {TopBar} from '../components/common/TopBar';
import {Toast, useToast} from '../components/common/Toast';
import {JobSearchBar} from '../components/jobs/JobSearchBar';
import {JobCard} from '../components/jobs/JobCard';

type Nav = StackNavigationProp<RootStackParamList>;

type Toggle = 'recommended' | 'saved';

export function JobsScreen() {
  const {state, dispatch} = useApp();
  const navigation = useNavigation<Nav>();
  const {show, toastProps} = useToast();
  const [toggle, setToggle] = useState<Toggle>('recommended');

  const filteredJobs =
    toggle === 'saved'
      ? state.jobs.filter(j => j.saved)
      : state.jobs;

  const sectionTitle =
    toggle === 'saved' ? 'Your saved jobs' : 'Top job picks for you';

  const renderItem = ({item}: ListRenderItemInfo<Job>) => (
    <JobCard
      job={item}
      onPress={() => show('Job detail coming soon')}
      onToggleSave={() => dispatch({type: 'TOGGLE_SAVE_JOB', jobId: item.id})}
    />
  );

  return (
    <View testID="jobs-screen" style={styles.root}>
      <TopBar />

      <JobSearchBar onPress={() => navigation.navigate('Search')} />

      {/* Segmented toggle */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          testID="jobs-toggle-recommended"
          activeOpacity={0.8}
          onPress={() => setToggle('recommended')}
          style={[
            styles.toggleButton,
            styles.toggleLeft,
            toggle === 'recommended' && styles.toggleButtonActive,
          ]}>
          <Text
            style={[
              styles.toggleText,
              toggle === 'recommended' && styles.toggleTextActive,
            ]}>
            Recommended
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="jobs-toggle-saved"
          activeOpacity={0.8}
          onPress={() => setToggle('saved')}
          style={[
            styles.toggleButton,
            styles.toggleRight,
            toggle === 'saved' && styles.toggleButtonActive,
          ]}>
          <Text
            style={[
              styles.toggleText,
              toggle === 'saved' && styles.toggleTextActive,
            ]}>
            Saved jobs
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        testID="jobs-list"
        data={filteredJobs}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text style={styles.sectionHeader}>{sectionTitle}</Text>
        }
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />

      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
    gap: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    borderRadius: 4,
    backgroundColor: Colors.card,
  },
  toggleLeft: {
    borderRadius: 4,
  },
  toggleRight: {
    borderRadius: 4,
  },
  toggleButtonActive: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  toggleText: {
    fontSize: Typography.sm,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  toggleTextActive: {
    color: Colors.primary,
  },
  sectionHeader: {
    fontSize: Typography.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.card,
  },
  list: {
    flex: 1,
    backgroundColor: Colors.card,
  },
});

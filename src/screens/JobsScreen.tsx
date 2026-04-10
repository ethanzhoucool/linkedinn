import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Job} from '../data/mockJobs';
import {Colors, Typography} from '../theme';
import {TopBar} from '../components/common/TopBar';
import {Toast, useToast} from '../components/common/Toast';
import {JobCard} from '../components/jobs/JobCard';

type Nav = StackNavigationProp<RootStackParamList>;

export function JobsScreen() {
  const {state, dispatch} = useApp();
  const navigation = useNavigation<Nav>();
  const {show, toastProps} = useToast();
  const [collapsed, setCollapsed] = useState(false);

  const renderItem = ({item}: ListRenderItemInfo<Job>) => (
    <JobCard
      job={item}
      onPress={() => show('Job detail coming soon')}
      onDismiss={() => dispatch({type: 'TOGGLE_SAVE_JOB', jobId: item.id})}
    />
  );

  const listHeader = (
    <View>
      {/* Jobs-specific search bar */}
      <TouchableOpacity
        testID="jobs-search-input"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Search')}
        style={styles.searchPill}>
        <Icon name="search" size={20} color={Colors.textSecondary} style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Describe the job you want</Text>
      </TouchableOpacity>

      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsRow}>
        <TouchableOpacity
          testID="jobs-chip-preferences"
          activeOpacity={0.7}
          style={styles.chip}
          onPress={() => show('Preferences coming soon')}>
          <Text style={styles.chipText}>Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="jobs-chip-jobtracker"
          activeOpacity={0.7}
          style={styles.chip}
          onPress={() => show('Job tracker coming soon')}>
          <Text style={styles.chipText}>Job tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="jobs-chip-postjob"
          activeOpacity={0.7}
          style={styles.chip}
          onPress={() => show('Post a job coming soon')}>
          <Text style={styles.chipText}>Post a free job</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Tell us collapsible row */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setCollapsed(c => !c)}
        style={styles.collapsibleRow}>
        <Text style={styles.collapsibleText}>Tell us what you're looking for to get matching jobs</Text>
        <Icon
          name={collapsed ? 'expand-less' : 'expand-more'}
          size={22}
          color={Colors.textSecondary}
        />
      </TouchableOpacity>

      {/* Premium marker */}
      <View style={styles.premiumRow}>
        <View style={styles.premiumIcon}>
          <Icon name="work" size={12} color={Colors.white} />
        </View>
        <Text style={styles.premiumText}>Premium</Text>
      </View>

      {/* Section header */}
      <Text style={styles.sectionTitle}>Jobs where you'd be a top applicant</Text>
      <Text style={styles.sectionSubtitle}>
        Based on your profile, the job criteria and recruiter feedback on similar jobs
      </Text>
    </View>
  );

  const listFooter = (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => show('Show all jobs coming soon')}
      style={styles.showAllRow}>
      <Text style={styles.showAllText}>Show all →</Text>
    </TouchableOpacity>
  );

  return (
    <View testID="jobs-screen" style={styles.root}>
      <TopBar />

      <FlatList
        testID="jobs-list"
        data={state.jobs}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        ListFooterComponent={listFooter}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
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
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 32,
  },
  searchPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
    flex: 1,
  },
  chipsRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  chip: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  chipText: {
    fontSize: Typography.sm,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  collapsibleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  collapsibleText: {
    flex: 1,
    fontSize: Typography.md,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginRight: 8,
  },
  premiumRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor: Colors.card,
  },
  premiumIcon: {
    width: 20,
    height: 20,
    borderRadius: 3,
    backgroundColor: Colors.premium,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  premiumText: {
    fontSize: Typography.sm,
    fontWeight: '600',
    color: Colors.premium,
  },
  sectionTitle: {
    fontSize: Typography.xxl,
    fontWeight: '700',
    color: Colors.textPrimary,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: Colors.card,
  },
  sectionSubtitle: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    paddingHorizontal: 16,
    paddingBottom: 12,
    lineHeight: 18,
    backgroundColor: Colors.card,
  },
  showAllRow: {
    backgroundColor: Colors.card,
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
  },
  showAllText: {
    fontSize: Typography.base,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
});

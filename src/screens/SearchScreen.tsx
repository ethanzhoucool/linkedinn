import React, {useState, useCallback} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useApp} from '../store/AppContext';
import {mockPosts} from '../data/mockPosts';
import {suggestedPeople} from '../data/mockConnections';
import {Avatar} from '../components/common/Avatar';
import {IconButton} from '../components/common/IconButton';
import {Toast, useToast} from '../components/common/Toast';
import {Colors, Typography, Spacing} from '../theme';
import {RootStackParamList} from '../navigation/types';

type SearchNavProp = StackNavigationProp<RootStackParamList, 'Search'>;

const RECENT_SEARCHES = [
  'React Native engineers',
  'Product Manager SF',
  'Aurora Robotics jobs',
  'Senior Engineer remote',
];

const SEARCH_SUGGESTIONS = ['People', 'Jobs', 'Posts', 'Companies'];

export function SearchScreen() {
  const navigation = useNavigation<SearchNavProp>();
  const insets = useSafeAreaInsets();
  const {state} = useApp();
  const {show, toastProps} = useToast();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const hasQuery = q !== '';

  const filteredPeople = hasQuery
    ? suggestedPeople
        .filter(
          p =>
            p.name.toLowerCase().includes(q) ||
            p.headline.toLowerCase().includes(q),
        )
        .slice(0, 3)
    : [];

  const filteredJobs = hasQuery
    ? state.jobs
        .filter(
          j =>
            j.title.toLowerCase().includes(q) ||
            j.company.toLowerCase().includes(q) ||
            j.location.toLowerCase().includes(q),
        )
        .slice(0, 3)
    : [];

  const filteredPosts = hasQuery
    ? mockPosts
        .filter(
          p =>
            p.content.toLowerCase().includes(q) ||
            p.author.name.toLowerCase().includes(q) ||
            p.author.headline.toLowerCase().includes(q),
        )
        .slice(0, 3)
    : [];

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View
      style={[styles.root, {paddingTop: insets.top}]}
      testID="search-screen">
      {/* Search header */}
      <View style={styles.header}>
        <IconButton
          name="arrow-back"
          onPress={handleBack}
          size={24}
          color={Colors.textPrimary}
          testID="search-back"
        />
        <TextInput
          testID="search-input"
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          placeholderTextColor={Colors.gray500}
          autoFocus
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>

      <ScrollView
        style={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {!hasQuery ? (
          /* Empty state */
          <>
            {/* Recent searches */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent searches</Text>
              {RECENT_SEARCHES.map(term => (
                <TouchableOpacity
                  key={term}
                  style={styles.recentRow}
                  activeOpacity={0.7}
                  onPress={() => show(`Searching: ${term}`)}>
                  <IconButton
                    name="history"
                    onPress={() => {}}
                    size={20}
                    color={Colors.textTertiary}
                  />
                  <Text style={styles.recentText}>{term}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Try searching for */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Try searching for</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.pillsRow}>
                {SEARCH_SUGGESTIONS.map(suggestion => (
                  <TouchableOpacity
                    key={suggestion}
                    style={styles.pill}
                    activeOpacity={0.7}
                    onPress={() => setQuery(suggestion)}>
                    <Text style={styles.pillText}>{suggestion}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </>
        ) : (
          /* Search results */
          <>
            {/* People results */}
            {filteredPeople.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>People</Text>
                {filteredPeople.map(person => (
                  <TouchableOpacity
                    key={person.id}
                    testID={`search-result-${person.id}`}
                    style={styles.resultRow}
                    activeOpacity={0.7}
                    onPress={() => show(`${person.name}`)}>
                    <Avatar uri={person.avatarUrl} size={48} />
                    <View style={styles.resultInfo}>
                      <Text style={styles.resultName}>{person.name}</Text>
                      <Text style={styles.resultSub} numberOfLines={1}>
                        {person.headline}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Jobs results */}
            {filteredJobs.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Jobs</Text>
                {filteredJobs.map(job => (
                  <TouchableOpacity
                    key={job.id}
                    testID={`search-result-${job.id}`}
                    style={styles.resultRow}
                    activeOpacity={0.7}
                    onPress={() => show(`${job.title} at ${job.company}`)}>
                    <Image
                      source={{uri: job.companyLogoUrl}}
                      style={styles.jobLogo}
                      resizeMode="cover"
                    />
                    <View style={styles.resultInfo}>
                      <Text style={styles.resultName}>{job.title}</Text>
                      <Text style={styles.resultSub} numberOfLines={1}>
                        {job.company} · {job.location}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Posts results */}
            {filteredPosts.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Posts</Text>
                {filteredPosts.map(post => (
                  <TouchableOpacity
                    key={post.id}
                    testID={`search-result-${post.id}`}
                    style={styles.resultRow}
                    activeOpacity={0.7}
                    onPress={() => show(`Post by ${post.author.name}`)}>
                    <Avatar uri={post.author.avatarUrl} size={48} />
                    <View style={styles.resultInfo}>
                      <Text style={styles.resultName}>{post.author.name}</Text>
                      <Text style={styles.resultSub} numberOfLines={2}>
                        {post.content}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* No results */}
            {filteredPeople.length === 0 &&
              filteredJobs.length === 0 &&
              filteredPosts.length === 0 && (
                <View style={styles.noResults}>
                  <Text style={styles.noResultsText}>
                    No results for "{query}"
                  </Text>
                </View>
              )}
          </>
        )}
      </ScrollView>

      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm,
    gap: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.gray100,
    borderRadius: 20,
    paddingHorizontal: Spacing.md,
    fontSize: Typography.base,
    color: Colors.textPrimary,
  },
  scroll: {
    flex: 1,
  },
  section: {
    backgroundColor: Colors.card,
    marginTop: 8,
    paddingBottom: 4,
  },
  sectionTitle: {
    fontSize: Typography.md,
    ...Typography.semibold,
    color: Colors.textPrimary,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  recentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 10,
    gap: 12,
  },
  recentText: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
  },
  pillsRow: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
    gap: 8,
  },
  pill: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  pillText: {
    fontSize: Typography.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 10,
    gap: 12,
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    fontSize: Typography.base,
    ...Typography.semibold,
    color: Colors.textPrimary,
  },
  resultSub: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  jobLogo: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  noResults: {
    padding: Spacing.xl,
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
});

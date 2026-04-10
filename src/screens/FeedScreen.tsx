import React, {useState} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Colors} from '../theme';
import {Post} from '../data/mockPosts';
import {TopBar} from '../components/common/TopBar';
import {Divider} from '../components/common/Divider';
import {Toast, useToast} from '../components/common/Toast';
import {PostCard} from '../components/feed/PostCard';
import {PostComposerInline} from '../components/feed/PostComposerInline';

type Nav = StackNavigationProp<RootStackParamList>;

export function FeedScreen() {
  const {state, dispatch} = useApp();
  const navigation = useNavigation<Nav>();
  const {show, toastProps} = useToast();
  const [refreshing, setRefreshing] = useState(false);

  const openComposer = () => {
    navigation.navigate('PostComposer');
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({item}: {item: Post}) => (
    <PostCard
      post={item}
      onLike={() => dispatch({type: 'TOGGLE_LIKE', postId: item.id})}
      onAuthorPress={() => navigation.navigate('Profile', {userId: item.author.id})}
      onComment={() => show('Comments coming soon')}
      onShare={() => show('Share coming soon')}
      onRepost={() => show('Repost coming soon')}
    />
  );

  return (
    <View testID="feed-screen" style={styles.container}>
      <TopBar />
      <FlatList
        testID="feed-list"
        style={styles.list}
        data={state.posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            <PostComposerInline
              avatarUrl={state.currentUser.avatarUrl}
              onPress={openComposer}
            />
            <Divider />
          </>
        }
        ItemSeparatorComponent={() => <Divider />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={Colors.primary}
          />
        }
      />
      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
  },
});

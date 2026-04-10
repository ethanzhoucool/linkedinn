import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Colors} from '../theme';
import {PostComposerHeader} from '../components/composer/PostComposerHeader';
import {PostComposerBody} from '../components/composer/PostComposerBody';
import {Toast, useToast} from '../components/common/Toast';

type NavProp = StackNavigationProp<RootStackParamList>;

export function PostComposerScreen() {
  const navigation = useNavigation<NavProp>();
  const insets = useSafeAreaInsets();
  const {state, dispatch} = useApp();
  const {show, toastProps} = useToast();
  const [text, setText] = useState('');

  const canPost = text.trim().length > 0;

  const handlePost = () => {
    if (!canPost) {
      return;
    }
    dispatch({type: 'ADD_POST', content: text.trim()});
    show('Post shared');
    // Delay goBack slightly so user sees the toast
    setTimeout(() => {
      navigation.goBack();
    }, 800);
  };

  return (
    <View testID="composer-screen" style={[styles.root, {paddingTop: insets.top}]}>
      <PostComposerHeader
        onClose={() => navigation.goBack()}
        onPost={handlePost}
        canPost={canPost}
      />
      <PostComposerBody
        currentUser={state.currentUser}
        value={text}
        onChangeText={setText}
      />
      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.card,
  },
});

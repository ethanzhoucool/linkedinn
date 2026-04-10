import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Message} from '../data/mockMessages';
import {Colors, Typography} from '../theme';
import {IconButton} from '../components/common/IconButton';
import {Avatar} from '../components/common/Avatar';
import {MessageBubble} from '../components/messaging/MessageBubble';
import {MessageInput} from '../components/messaging/MessageInput';
import {Toast, useToast} from '../components/common/Toast';

type NavProp = StackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'Conversation'>;

export function ConversationScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<RoutePropType>();
  const insets = useSafeAreaInsets();
  const {state, dispatch} = useApp();
  const {show, toastProps} = useToast();
  const [inputText, setInputText] = useState('');

  const {conversationId} = route.params;
  const conversation = state.conversations.find(c => c.id === conversationId);
  const messages: Message[] = state.messagesByConversation[conversationId] ?? [];

  // Reverse so FlatList inverted shows latest at bottom
  const reversedMessages = [...messages].reverse();

  const handleSend = () => {
    if (inputText.trim().length === 0) {
      return;
    }
    dispatch({type: 'SEND_MESSAGE', conversationId, text: inputText.trim()});
    setInputText('');
  };

  const renderItem = ({item, index}: {item: Message; index: number}) => {
    // showTimestamp on every 3rd message (index 0,3,6,... in reversed array)
    const showTimestamp = index % 3 === 0;
    return (
      <MessageBubble
        message={item}
        isMe={item.senderId === 'me'}
        showTimestamp={showTimestamp}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View testID="conversation-screen" style={styles.inner}>
        {/* Header */}
        <View style={[styles.header, {paddingTop: insets.top + 8}]}>
          <IconButton
            testID="conversation-back"
            name="arrow-back"
            onPress={() => navigation.goBack()}
            size={24}
            color={Colors.textPrimary}
          />
          {conversation && (
            <View style={styles.headerCenter}>
              <Avatar
                uri={conversation.person.avatarUrl}
                size={36}
                online={conversation.online}
              />
              <View style={styles.headerNameCol}>
                <Text style={styles.headerName} numberOfLines={1}>
                  {conversation.person.name}
                </Text>
                {conversation.online ? (
                  <Text style={styles.headerStatusOnline}>Active now</Text>
                ) : (
                  <Text style={styles.headerStatusOffline}>Last active 2h ago</Text>
                )}
              </View>
            </View>
          )}
          <View style={styles.headerRight}>
            <IconButton
              name="videocam"
              onPress={() => show('Coming soon')}
              size={24}
              color={Colors.textPrimary}
              style={styles.headerIcon}
            />
            <IconButton
              name="info-outline"
              onPress={() => show('Coming soon')}
              size={24}
              color={Colors.textPrimary}
            />
          </View>
        </View>

        {/* Profile card */}
        {conversation && (
          <View style={styles.profileCard}>
            <Avatar
              uri={conversation.person.avatarUrl}
              size={80}
              online={conversation.online}
            />
            <Text style={styles.profileName}>{conversation.person.name}</Text>
            <Text style={styles.profileHeadline} numberOfLines={2}>
              {conversation.person.headline}
            </Text>
            <View style={styles.profileActions}>
              <TouchableOpacity onPress={() => show('Coming soon')}>
                <Text style={styles.profileActionText}>Message</Text>
              </TouchableOpacity>
              <Text style={styles.profileActionDot}> · </Text>
              <TouchableOpacity onPress={() => show('Coming soon')}>
                <Text style={styles.profileActionText}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Date divider */}
        <View style={styles.dateDivider}>
          <View style={styles.dateDividerLine} />
          <Text style={styles.dateDividerText}>Today</Text>
          <View style={styles.dateDividerLine} />
        </View>

        {/* Messages */}
        <FlatList
          data={reversedMessages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          inverted
          contentContainerStyle={styles.listContent}
          style={styles.list}
        />

        {/* Message input */}
        <MessageInput
          value={inputText}
          onChangeText={setInputText}
          onSend={handleSend}
        />
        <View style={{height: insets.bottom}} />
      </View>
      <Toast {...toastProps} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.card,
  },
  inner: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.card,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  headerNameCol: {
    marginLeft: 8,
    flex: 1,
  },
  headerName: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  headerStatusOnline: {
    fontSize: 11,
    color: Colors.success,
  },
  headerStatusOffline: {
    fontSize: 11,
    color: Colors.textTertiary,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 12,
  },
  profileCard: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 8,
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  profileName: {
    fontSize: Typography.xl,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 10,
    textAlign: 'center',
  },
  profileHeadline: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  profileActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileActionText: {
    fontSize: Typography.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
  profileActionDot: {
    fontSize: Typography.sm,
    color: Colors.textTertiary,
  },
  dateDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateDividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
  dateDividerText: {
    fontSize: 11,
    color: Colors.textTertiary,
    marginHorizontal: 8,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 8,
  },
});

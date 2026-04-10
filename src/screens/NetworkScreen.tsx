import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../navigation/types';
import {useApp} from '../store/AppContext';
import {Colors, Typography} from '../theme';
import {TopBar} from '../components/common/TopBar';
import {Divider} from '../components/common/Divider';
import {Toast, useToast} from '../components/common/Toast';
import {ConnectionRequestCard} from '../components/network/ConnectionRequestCard';
import {SuggestedPersonCard} from '../components/network/SuggestedPersonCard';

type Nav = StackNavigationProp<RootStackParamList>;
type NetworkTab = 'grow' | 'catchup';

export function NetworkScreen() {
  const {state, dispatch} = useApp();
  const navigation = useNavigation<Nav>();
  const {show, toastProps} = useToast();
  const [activeTab, setActiveTab] = useState<NetworkTab>('grow');

  const visibleRequests = state.connectionRequests.slice(0, 3);

  return (
    <View testID="network-screen" style={styles.root}>
      <TopBar />

      {/* Grow / Catch up tab row */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          testID="network-tab-grow"
          activeOpacity={0.7}
          style={styles.tab}
          onPress={() => setActiveTab('grow')}>
          <Text style={[styles.tabLabel, activeTab === 'grow' && styles.tabLabelActive]}>
            Grow
          </Text>
          {activeTab === 'grow' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
        <TouchableOpacity
          testID="network-tab-catchup"
          activeOpacity={0.7}
          style={styles.tab}
          onPress={() => setActiveTab('catchup')}>
          <Text style={[styles.tabLabel, activeTab === 'catchup' && styles.tabLabelActive]}>
            Catch up
          </Text>
          {activeTab === 'catchup' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
      </View>

      {activeTab === 'grow' ? (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

          {/* Invitations header */}
          <TouchableOpacity
            testID="network-invitations-header"
            activeOpacity={0.7}
            onPress={() => show('Show all invitations coming soon')}
            style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeaderText}>
              Invitations ({state.connectionRequests.length})
            </Text>
            <Icon name="chevron-right" size={22} color={Colors.textSecondary} />
          </TouchableOpacity>

          {/* Connection request cards */}
          {visibleRequests.map(request => (
            <ConnectionRequestCard
              key={request.id}
              request={request}
              onAccept={() => {
                dispatch({type: 'ACCEPT_REQUEST', requestId: request.id});
                show("You're now connected");
              }}
              onIgnore={() => {
                dispatch({type: 'IGNORE_REQUEST', requestId: request.id});
              }}
              onPress={() => navigation.navigate('Profile', {userId: request.person.id})}
            />
          ))}

          <Divider />

          {/* Puzzle skills banner */}
          <View style={styles.puzzleBanner}>
            <Text style={styles.puzzleBannerText}>
              49 connections proved their puzzle skills. Join in.
            </Text>
          </View>

          {/* Games row */}
          <View style={styles.gamesRow}>
            <TouchableOpacity
              testID="network-game-patches"
              activeOpacity={0.8}
              onPress={() => show('Patches coming soon')}
              style={styles.gameCard}>
              <View style={[styles.gameThumbnail, {backgroundColor: '#E8F5E9'}]}>
                <Text style={styles.gameThumbnailEmoji}>🧩</Text>
              </View>
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>Patches #24</Text>
                <Text style={styles.gameSub}>Friday, Apr 10 · Solve</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              testID="network-game-zip"
              activeOpacity={0.8}
              onPress={() => show('Zip coming soon')}
              style={[styles.gameCard, styles.gameCardRight]}>
              <View style={[styles.gameThumbnail, {backgroundColor: '#FFF3E0'}]}>
                <Text style={styles.gameThumbnailEmoji}>⚡</Text>
              </View>
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>Zip #389</Text>
                <Text style={styles.gameSub}>Friday, Apr 10 · Solve</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Divider />

          {/* Manage my network */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => show('Manage network coming soon')}
            style={styles.manageRow}>
            <Text style={styles.manageText}>Manage my network</Text>
            <Icon name="chevron-right" size={22} color={Colors.textSecondary} />
          </TouchableOpacity>

          <Divider />

          {/* People you may know */}
          <View style={styles.suggestedHeader}>
            <Text style={styles.suggestedHeaderText}>
              People you may know from {state.currentUser.company}
            </Text>
          </View>
          <View style={styles.suggestedGrid}>
            {state.suggestedPeople.map(person => (
              <View key={person.id} style={styles.suggestedCell}>
                <SuggestedPersonCard
                  person={person}
                  onPress={() => navigation.navigate('Profile', {userId: person.id})}
                  onConnect={() => {
                    dispatch({type: 'SEND_INVITATION', personId: person.id});
                    show('Invitation sent');
                  }}
                  onDismiss={() => show('Dismissed')}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        /* Catch up placeholder */
        <View style={styles.catchupContainer}>
          <View style={styles.catchupCard}>
            <Text style={styles.catchupTitle}>No updates right now</Text>
            <Text style={styles.catchupSub}>Check back later</Text>
          </View>
        </View>
      )}

      <Toast {...toastProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabLabel: {
    fontSize: Typography.md,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  tabLabelActive: {
    color: Colors.success,
  },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    height: 3,
    backgroundColor: Colors.success,
    borderRadius: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.card,
  },
  sectionHeaderText: {
    fontSize: Typography.lg,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  puzzleBanner: {
    backgroundColor: '#FFF8DC',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E8D8A0',
  },
  puzzleBannerText: {
    fontSize: Typography.sm,
    color: Colors.textPrimary,
  },
  gamesRow: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 10,
  },
  gameCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 10,
  },
  gameCardRight: {},
  gameThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  gameThumbnailEmoji: {
    fontSize: 20,
  },
  gameInfo: {
    flex: 1,
  },
  gameTitle: {
    fontSize: Typography.sm,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  gameSub: {
    fontSize: Typography.xs,
    color: Colors.textSecondary,
  },
  manageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.card,
  },
  manageText: {
    fontSize: Typography.md,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  suggestedHeader: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    backgroundColor: Colors.card,
  },
  suggestedHeaderText: {
    fontSize: Typography.md,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  suggestedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    backgroundColor: Colors.card,
    paddingBottom: 8,
  },
  suggestedCell: {
    width: '50%',
    padding: 4,
  },
  catchupContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  catchupCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  catchupTitle: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  catchupSub: {
    fontSize: Typography.sm,
    color: Colors.textTertiary,
  },
});

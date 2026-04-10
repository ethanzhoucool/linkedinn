import React from 'react';
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
import {NetworkHeaderRow} from '../components/network/NetworkHeaderRow';
import {ConnectionRequestCard} from '../components/network/ConnectionRequestCard';
import {SuggestedPersonCard} from '../components/network/SuggestedPersonCard';

type Nav = StackNavigationProp<RootStackParamList>;

interface ManageRow {
  icon: string;
  label: string;
  count?: number;
}

const manageRows: ManageRow[] = [
  {icon: 'people', label: 'Connections', count: 842},
  {icon: 'contacts', label: 'Contacts', count: 120},
  {icon: 'group-work', label: 'Groups', count: 4},
  {icon: 'event', label: 'Events', count: 2},
];

export function NetworkScreen() {
  const {state, dispatch} = useApp();
  const navigation = useNavigation<Nav>();
  const {show, toastProps} = useToast();

  const visibleRequests = state.connectionRequests.slice(0, 3);

  return (
    <View testID="network-screen" style={styles.root}>
      <TopBar />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Manage my network card */}
        <View style={styles.manageCard}>
          <Text style={styles.manageTitle}>Manage my network</Text>
          {manageRows.map((row, index) => (
            <TouchableOpacity
              key={row.label}
              activeOpacity={0.7}
              onPress={() => show('Coming soon')}
              style={[
                styles.manageRow,
                index < manageRows.length - 1 && styles.manageRowBorder,
              ]}>
              <Icon name={row.icon} size={22} color={Colors.textSecondary} style={styles.manageIcon} />
              <Text style={styles.manageLabel}>{row.label}</Text>
              <View style={styles.manageTrailing}>
                {row.count !== undefined && (
                  <Text style={styles.manageCount}>{row.count}</Text>
                )}
                <Icon name="chevron-right" size={22} color={Colors.textTertiary} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Divider />

        {/* Invitations */}
        <NetworkHeaderRow
          title={`Invitations (${state.connectionRequests.length})`}
          trailing="Show all"
          onTrailingPress={() => show('Show all coming soon')}
        />
        {visibleRequests.map(request => (
          <ConnectionRequestCard
            key={request.id}
            request={request}
            onAccept={() => dispatch({type: 'ACCEPT_REQUEST', requestId: request.id})}
            onIgnore={() => dispatch({type: 'IGNORE_REQUEST', requestId: request.id})}
            onPress={() => navigation.navigate('Profile', {userId: request.person.id})}
          />
        ))}

        <Divider />

        {/* People you may know */}
        <NetworkHeaderRow
          title="People you may know"
          trailing="See all"
          onTrailingPress={() => show('See all coming soon')}
        />
        <View style={styles.suggestedGrid}>
          {state.suggestedPeople.map(person => (
            <View key={person.id} style={styles.suggestedCell}>
              <SuggestedPersonCard
                person={person}
                onPress={() => navigation.navigate('Profile', {userId: person.id})}
                onConnect={() => dispatch({type: 'CONNECT_PERSON', personId: person.id})}
              />
            </View>
          ))}
        </View>
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  manageCard: {
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  manageTitle: {
    fontSize: Typography.base,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  manageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  manageRowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  manageIcon: {
    marginRight: 12,
  },
  manageLabel: {
    flex: 1,
    fontSize: Typography.base,
    color: Colors.textPrimary,
  },
  manageTrailing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageCount: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginRight: 4,
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
});

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Typography} from '../../theme';

interface Props {
  onPress: () => void;
}

export function JobSearchBar({onPress}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="jobs-search-input"
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.pill}>
        <Icon name="search" size={20} color={Colors.textSecondary} style={styles.icon} />
        <Text style={styles.placeholder}>Search jobs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.card,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray100,
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: {
    marginRight: 8,
  },
  placeholder: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
    flex: 1,
  },
});

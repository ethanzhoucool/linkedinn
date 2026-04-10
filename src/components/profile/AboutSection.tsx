import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconButton} from '../common/IconButton';
import {Colors, Typography, Spacing} from '../../theme';

interface Props {
  text: string;
}

export function AboutSection({text}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>About</Text>
        <IconButton
          name="more-horiz"
          onPress={() => {}}
          size={22}
          color={Colors.textSecondary}
        />
      </View>
      <Text
        style={styles.body}
        numberOfLines={expanded ? undefined : 4}>
        {text}
      </Text>
      {!expanded && (
        <TouchableOpacity onPress={() => setExpanded(true)} activeOpacity={0.7}>
          <Text style={styles.seeMore}>…see more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    padding: Spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: Typography.xl,
    ...Typography.semibold,
    color: Colors.textPrimary,
  },
  body: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  seeMore: {
    fontSize: Typography.base,
    color: Colors.primary,
    marginTop: 4,
  },
});

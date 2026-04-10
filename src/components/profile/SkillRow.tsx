import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from '../common/IconButton';
import {HairlineDivider} from '../common/Divider';
import {Colors, Typography, Spacing} from '../../theme';
import {Skill} from '../../data/mockProfile';

interface Props {
  skill: Skill;
}

export function SkillRow({skill}: Props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.name}>{skill.name}</Text>
          <Text style={styles.endorsements}>
            Endorsed by {skill.endorsements} connections
          </Text>
        </View>
        <IconButton
          name="more-horiz"
          onPress={() => {}}
          size={22}
          color={Colors.textSecondary}
        />
      </View>
      <HairlineDivider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: Typography.md,
    ...Typography.semibold,
    color: Colors.textPrimary,
  },
  endorsements: {
    fontSize: Typography.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },
});

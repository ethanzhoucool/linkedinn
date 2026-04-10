import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useApp} from '../store/AppContext';
import {
  aboutText,
  experiences,
  education,
  skills,
} from '../data/mockProfile';
import {ProfileHeader} from '../components/profile/ProfileHeader';
import {AboutSection} from '../components/profile/AboutSection';
import {ExperienceItem} from '../components/profile/ExperienceItem';
import {EducationItem} from '../components/profile/EducationItem';
import {SkillRow} from '../components/profile/SkillRow';
import {IconButton} from '../components/common/IconButton';
import {Toast, useToast} from '../components/common/Toast';
import {Colors, Typography, Spacing} from '../theme';
import {RootStackParamList} from '../navigation/types';

type ProfileNavProp = StackNavigationProp<RootStackParamList, 'Profile'>;

export function ProfileScreen() {
  const navigation = useNavigation<ProfileNavProp>();
  const {state} = useApp();
  const insets = useSafeAreaInsets();
  const {show, toastProps} = useToast();

  const SKILLS_PREVIEW = 4;
  const displayedSkills = skills.slice(0, SKILLS_PREVIEW);

  return (
    <View style={[styles.root, {paddingTop: insets.top}]} testID="profile-screen">
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Profile Header card */}
        <View style={styles.card}>
          <ProfileHeader
            user={state.currentUser}
            onBack={() => navigation.goBack()}
          />
        </View>

        <View style={styles.gap} />

        {/* About section */}
        <View testID="profile-section-about">
          <AboutSection text={aboutText} />
        </View>

        <View style={styles.gap} />

        {/* Experience section */}
        <View style={styles.card} testID="profile-section-experience">
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.sectionActions}>
              <IconButton
                name="add"
                onPress={() => show('Coming soon')}
                size={22}
                color={Colors.textSecondary}
              />
              <IconButton
                name="edit"
                onPress={() => show('Coming soon')}
                size={22}
                color={Colors.textSecondary}
              />
            </View>
          </View>
          {experiences.map(exp => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </View>

        <View style={styles.gap} />

        {/* Education section */}
        <View style={styles.card} testID="profile-section-education">
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.sectionActions}>
              <IconButton
                name="add"
                onPress={() => show('Coming soon')}
                size={22}
                color={Colors.textSecondary}
              />
              <IconButton
                name="edit"
                onPress={() => show('Coming soon')}
                size={22}
                color={Colors.textSecondary}
              />
            </View>
          </View>
          {education.map(edu => (
            <EducationItem key={edu.id} education={edu} />
          ))}
        </View>

        <View style={styles.gap} />

        {/* Skills section */}
        <View style={styles.card} testID="profile-section-skills">
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.sectionActions}>
              <IconButton
                name="add"
                onPress={() => show('Coming soon')}
                size={22}
                color={Colors.textSecondary}
              />
              <IconButton
                name="edit"
                onPress={() => show('Coming soon')}
                size={22}
                color={Colors.textSecondary}
              />
            </View>
          </View>
          {displayedSkills.map(skill => (
            <SkillRow key={skill.id} skill={skill} />
          ))}
          <TouchableOpacity
            onPress={() => show('Coming soon')}
            activeOpacity={0.7}
            style={styles.showAll}>
            <Text style={styles.showAllText}>
              Show all {skills.length} skills
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gap} />
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
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  card: {
    backgroundColor: Colors.card,
  },
  gap: {
    height: 8,
    backgroundColor: Colors.background,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  sectionTitle: {
    fontSize: Typography.xl,
    ...Typography.semibold,
    color: Colors.textPrimary,
  },
  sectionActions: {
    flexDirection: 'row',
    gap: 4,
  },
  showAll: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  showAllText: {
    fontSize: Typography.base,
    color: Colors.primary,
    fontWeight: '600',
  },
});

import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {Colors} from '../theme';
import {LinkedInLogo} from '../components/common/LinkedInLogo';

type Nav = StackNavigationProp<RootStackParamList>;

export function SplashScreen() {
  const navigation = useNavigation<Nav>();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation, opacity]);

  return (
    <View testID="splash-screen" style={styles.container}>
      <Animated.View style={[styles.content, {opacity}]}>
        <LinkedInLogo size={96} variant="mark" />
        <Text style={styles.wordmark}>LinkedInn</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  wordmark: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: '700',
    marginTop: 16,
    letterSpacing: -0.5,
  },
});

import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/colors';

interface Props {
  uri: string;
  size?: number;
  rounded?: number;
  fallbackLetter?: string;
}

const FALLBACK_COLORS = [
  '#0A66C2',
  '#057642',
  '#915907',
  '#6DAE4F',
  '#DF704D',
  '#8B5CF6',
];

function pickFallbackColor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash + seed.charCodeAt(i)) % FALLBACK_COLORS.length;
  }
  return FALLBACK_COLORS[hash];
}

export function CompanyLogo({
  uri,
  size = 48,
  rounded = 4,
  fallbackLetter,
}: Props) {
  const [errored, setErrored] = useState(false);
  const letter = (fallbackLetter ?? uri.slice(0, 1) ?? '?').toUpperCase();
  const bgColor = pickFallbackColor(uri);

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: rounded,
          backgroundColor: errored ? bgColor : Colors.gray100,
        },
      ]}>
      {errored ? (
        <Text style={[styles.letter, {fontSize: size * 0.44}]}>{letter}</Text>
      ) : (
        <Image
          source={{uri}}
          style={{width: size, height: size, borderRadius: rounded}}
          resizeMode="contain"
          onError={() => setErrored(true)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: Colors.white,
    fontWeight: '700',
  },
});

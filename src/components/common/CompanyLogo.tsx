import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {Colors} from '../../theme/colors';

interface Props {
  slug?: string;
  name: string;
  size?: number;
  rounded?: number;
}

const FALLBACK_COLORS = [
  Colors.primary,
  Colors.celebrate,
  Colors.love,
  Colors.insightful,
  Colors.primaryDark,
];

export function CompanyLogo({slug, name, size = 48, rounded = 6}: Props) {
  const [failed, setFailed] = useState(false);

  const showSvg = !!slug && !failed;
  const letter = (name.charAt(0) || '?').toUpperCase();
  const bgIdx = name.charCodeAt(0) % FALLBACK_COLORS.length;
  const bgColor = FALLBACK_COLORS[bgIdx];

  const inset = Math.round(size * 0.72);

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: rounded,
          backgroundColor: showSvg ? Colors.card : bgColor,
        },
      ]}>
      {showSvg ? (
        <SvgUri
          uri={`https://cdn.simpleicons.org/${slug}`}
          width={inset}
          height={inset}
          onError={() => setFailed(true)}
        />
      ) : (
        <Text style={[styles.letter, {fontSize: size * 0.44}]}>{letter}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
  },
  letter: {
    color: Colors.white,
    fontWeight: '700',
  },
});

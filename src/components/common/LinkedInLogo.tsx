import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';
import {Colors, Typography} from '../../theme';

interface Props {
  size?: number;
  variant?: 'mark' | 'wordmark';
}

export function LinkedInLogo({size = 24, variant = 'mark'}: Props) {
  const rx = size * 0.15;

  // "i" character metrics
  const dotSize = size * 0.12;
  const dotX = size * 0.22;
  const dotY = size * 0.18;
  const iBarX = dotX;
  const iBarY = size * 0.35;
  const iBarW = dotSize;
  const iBarH = size * 0.47;

  // "n" character metrics
  const nX = size * 0.42;
  const nY = size * 0.35;
  const nW = size * 0.14;
  const nH = size * 0.47;
  // The arch of "n": left stem, top bar, right stem
  const nArcX = nX + nW;
  const nArcY = nY;
  const nRightStemX = nX + nW * 2 + size * 0.08;
  const nTopBarH = size * 0.12;
  const nBowW = size * 0.08;

  // Build n as a path:
  // left stem: rect from nX,nY w=nW h=nH
  // right stem: rect from nRightStemX,nY+nTopBarH w=nW h=nH-nTopBarH
  // top connector: rect from nArcX,nArcY w=nBowW+nW h=nTopBarH
  const nPath = [
    `M ${nX} ${nY}`,
    `h ${nW}`,
    `v ${nTopBarH}`,
    `h ${nBowW}`,
    `a ${nW * 0.5} ${nW * 0.5} 0 0 1 ${nW} ${nW * 0.5}`,
    `v ${nH - nTopBarH - nW * 0.5}`,
    `h ${-nW}`,
    `v ${-(nH - nTopBarH - nW * 0.5)}`,
    `a ${nW * 0.5} ${nW * 0.5} 0 0 0 ${-nW * 0.5} ${-nW * 0.5}`,
    `v ${-(nTopBarH - nW * 0.5)}`,
    // Hmm, let me simplify using rect shapes for n
  ].join(' ');

  // Simplified "n" using three rects: left stem, arch top bar, right stem
  const nLeftX = nX;
  const nLeftY = nY;
  const nLeftW = nW;
  const nLeftH = nH;

  const nTopX = nX + nW;
  const nTopY = nY;
  const nTopW = size * 0.22;
  const nTopH = nTopBarH;

  const nRightX = nX + nW + size * 0.08;
  const nRightY = nY + nTopBarH;
  const nRightW = nW;
  const nRightH = nH - nTopBarH;

  const mark = (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background blue rounded square */}
      <Rect x={0} y={0} width={size} height={size} rx={rx} fill={Colors.primary} />
      {/* "i" dot */}
      <Rect
        x={dotX}
        y={dotY}
        width={dotSize}
        height={dotSize}
        rx={dotSize * 0.2}
        fill="#FFFFFF"
      />
      {/* "i" stem */}
      <Rect
        x={iBarX}
        y={iBarY}
        width={iBarW}
        height={iBarH}
        rx={iBarW * 0.2}
        fill="#FFFFFF"
      />
      {/* "n" left stem */}
      <Rect
        x={nLeftX}
        y={nLeftY}
        width={nLeftW}
        height={nLeftH}
        rx={nLeftW * 0.2}
        fill="#FFFFFF"
      />
      {/* "n" top connector */}
      <Rect
        x={nTopX}
        y={nTopY}
        width={nTopW}
        height={nTopH}
        fill="#FFFFFF"
      />
      {/* "n" right stem */}
      <Rect
        x={nRightX}
        y={nRightY}
        width={nRightW}
        height={nRightH}
        rx={nRightW * 0.2}
        fill="#FFFFFF"
      />
    </Svg>
  );

  if (variant === 'mark') {
    return mark;
  }

  // Wordmark: mark + "LinkedInn" text in one blue rounded rect row
  const textSize = size * 0.5;
  return (
    <View style={styles.wordmarkRow}>
      {mark}
      <Text
        style={[
          styles.wordmarkText,
          {fontSize: textSize, color: Colors.primary},
        ]}>
        LinkedInn
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wordmarkRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wordmarkText: {
    marginLeft: 6,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
});

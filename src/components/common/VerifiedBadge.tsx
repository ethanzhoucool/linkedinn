import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {Colors} from '../../theme/colors';

interface Props {
  size?: number;
}

export function VerifiedBadge({size = 14}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={11} fill={Colors.primary} />
      <Path
        d="M7 12.5l3.2 3.2L17 9"
        stroke={Colors.white}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

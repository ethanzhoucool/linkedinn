import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {size?: number; filled?: boolean; color?: string};

export function NetworkIcon({size = 24, filled = false, color = '#000000'}: Props) {
  const fill = filled ? color : 'none';
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {/* Left background person */}
      <Circle cx={5.5} cy={8.5} r={2.2} fill={fill} stroke={color} strokeWidth={2} />
      <Path
        d="M2 17 Q2 12.5 5.5 12.5 Q7 12.5 8 13"
        fill={fill}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right background person */}
      <Circle cx={18.5} cy={8.5} r={2.2} fill={fill} stroke={color} strokeWidth={2} />
      <Path
        d="M16 13 Q17 12.5 18.5 12.5 Q22 12.5 22 17"
        fill={fill}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central foreground person */}
      <Circle cx={12} cy={7.5} r={3} fill={fill} stroke={color} strokeWidth={2} />
      <Path
        d="M5.5 20 Q5.5 12.5 12 12.5 Q18.5 12.5 18.5 20 Z"
        fill={fill}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

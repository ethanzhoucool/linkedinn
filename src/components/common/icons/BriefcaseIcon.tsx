import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {size?: number; filled?: boolean; color?: string};

export function BriefcaseIcon({size = 24, filled = false, color = '#000000'}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {/* Handle */}
      <Path
        d="M9 7 Q9 4 12 4 Q15 4 15 7"
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Case body */}
      <Rect
        x={3}
        y={7}
        width={18}
        height={13}
        rx={2}
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={2.2}
        strokeLinejoin="round"
      />
      {/* Latch detail */}
      <Path
        d="M10 13 L14 13"
        stroke={filled ? '#FFFFFF' : color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

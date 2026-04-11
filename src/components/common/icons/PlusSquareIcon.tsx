import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {size?: number; filled?: boolean; color?: string};

export function PlusSquareIcon({size = 24, filled = false, color = '#000000'}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={4}
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={2.2}
        strokeLinejoin="round"
      />
      <Path
        d="M12 8 L12 16 M8 12 L16 12"
        stroke={filled ? '#FFFFFF' : color}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {size?: number; filled?: boolean; color?: string};

export function BellIcon({size = 24, filled = false, color = '#000000'}: Props) {
  const fill = filled ? color : 'none';
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M5.5 17 L5.5 12 Q5.5 7.2 12 6.5 Q18.5 7.2 18.5 12 L18.5 17 L20.5 19 L3.5 19 Z"
        fill={fill}
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 4 L12 6.5"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <Circle
        cx={12}
        cy={21}
        r={1.6}
        fill={fill}
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

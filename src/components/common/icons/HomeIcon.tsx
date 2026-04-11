import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {size?: number; filled?: boolean; color?: string};

export function HomeIcon({size = 24, filled = false, color = '#000000'}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M3.5 11 L12 3.8 L20.5 11 L20.5 20.2 L3.5 20.2 Z"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={2.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {filled && (
        <Path
          d="M10 14 L14 14 L14 20.2 L10 20.2 Z"
          fill="#FFFFFF"
        />
      )}
    </Svg>
  );
}

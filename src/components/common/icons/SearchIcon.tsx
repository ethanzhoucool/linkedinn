import React from 'react';
import Svg, {Circle, Line} from 'react-native-svg';

type Props = {size?: number; color?: string};

export function SearchIcon({size = 24, color = '#000000'}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle
        cx={10}
        cy={10}
        r={6}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
      />
      <Line
        x1={14.5}
        y1={14.5}
        x2={20}
        y2={20}
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

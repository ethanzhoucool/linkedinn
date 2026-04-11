import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {size?: number; filled?: boolean; color?: string};

export function ChatBubbleIcon({size = 24, filled = false, color = '#000000'}: Props) {
  const fill = filled ? color : 'none';
  const dotColor = filled ? '#FFFFFF' : color;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M4 4 L20 4 Q22 4 22 6 L22 15 Q22 17 20 17 L10 17 L5 21 L5 17 Q3 17 3 15 L3 6 Q3 4 5 4 Z"
        fill={fill}
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={9} cy={10.5} r={1} fill={dotColor} />
      <Circle cx={12.5} cy={10.5} r={1} fill={dotColor} />
      <Circle cx={16} cy={10.5} r={1} fill={dotColor} />
    </Svg>
  );
}

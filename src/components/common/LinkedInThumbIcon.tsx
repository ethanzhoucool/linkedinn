import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../theme/colors';

interface Props {
  size?: number;
  filled?: boolean;
  color?: string;
}

export function LinkedInThumbIcon({
  size = 20,
  filled = false,
  color,
}: Props) {
  const strokeColor = color ?? Colors.textSecondary;
  const fillColor = color ?? Colors.primary;

  // Hand path: thumb sticking up, knuckles rounded, pinky side curves around.
  // Cuff path: a rounded rectangle beneath the hand representing the wrist.
  const handPath =
    'M7 10.2 C7 9.6 7.3 9 7.8 8.7 L11 6.9 C11.5 6.6 11.9 6 11.9 5.4 V3.6 C11.9 2.8 12.5 2.2 13.3 2.2 C14.2 2.2 15 2.9 15 3.9 V8.6 H18.4 C19.3 8.6 20 9.3 20 10.2 L19.1 16.2 C18.9 17.4 17.9 18.2 16.8 18.2 H9 C8 18.2 7 17.4 7 16.2 Z';
  const cuffPath =
    'M3.2 10 H6 V18.4 H3.2 C2.9 18.4 2.6 18.1 2.6 17.8 V10.6 C2.6 10.3 2.9 10 3.2 10 Z';

  if (filled) {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path d={handPath} fill={fillColor} />
        <Path d={cuffPath} fill={fillColor} />
      </Svg>
    );
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d={handPath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={cuffPath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

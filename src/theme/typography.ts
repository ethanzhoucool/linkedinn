import {Platform} from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
}) as string;

export const Typography = {
  fontFamily,
  bold: {fontFamily, fontWeight: '700' as const},
  semibold: {fontFamily, fontWeight: '600' as const},
  medium: {fontFamily, fontWeight: '500' as const},
  regular: {fontFamily, fontWeight: '400' as const},

  xxs: 10,
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  xxl: 20,
  title: 24,
  hero: 32,
};

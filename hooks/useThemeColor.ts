import { theme } from '@/constants/theme';
import { useColorScheme } from 'react-native';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof theme.light & keyof typeof theme.dark
) {
  const rawTheme = useColorScheme() ?? 'light';
  const colorFromProps = props[rawTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme[rawTheme][colorName];
  }
}

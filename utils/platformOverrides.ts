import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { ColorSchemeName } from 'react-native';
import { BlurEffectTypes } from 'react-native-screens';

type StackPresentation =
  | 'modal'
  | 'transparentModal'
  | 'containedModal'
  | 'containedTransparentModal'
  | 'fullScreenModal'
  | 'formSheet'
  | 'pageSheet'
  | 'card';

export const presentationHelper = ({ theme }: { theme: ColorSchemeName }) => {
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === 'dark' ? 'systemMaterialDark' : 'systemMaterialLight';
  return {
    // FIXME: formSheet does not render anything
    presentation: 'modal' as StackPresentation,
    blurEffect: isGlassAvailable ? undefined : (blurEffect as BlurEffectTypes),
  };
};

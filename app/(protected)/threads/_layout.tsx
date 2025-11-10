import { presentationHelper } from '@/utils/platformOverrides';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

// TODO: Removed from tab nav. Link with floating action button
export default function Layout() {
  const rawTheme = useColorScheme();
  const presentation = presentationHelper({ theme: rawTheme });

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // FIXME: Unable to modify icon from Search. Might need a custom tabbar
          headerSearchBarOptions: {
            placement: 'automatic',
            placeholder: 'Send a message',
            onChangeText: () => {},
          },
          headerTransparent: true,
          headerTintColor: rawTheme === 'dark' ? 'white' : 'black',
          headerLargeStyle: { backgroundColor: 'transparent' },
          headerStyle: { backgroundColor: 'transparent' },
          headerBlurEffect: presentation.blurEffect,
          title: '',
        }}
      />
    </Stack>
  );
}

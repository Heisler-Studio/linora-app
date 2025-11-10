import { IconButton } from '@/components/IconButton';
import { presentationHelper } from '@/utils/platformOverrides';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const rawTheme = useColorScheme();
  const presentation = presentationHelper({ theme: rawTheme });

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTintColor: rawTheme === 'dark' ? 'white' : 'black',
          headerLargeStyle: { backgroundColor: 'transparent' },
          headerBlurEffect: presentation.blurEffect,
          title: 'Welcome',
          headerRight: () => (
            <IconButton
              systemName="person.crop.circle"
              navigateTo={{
                href: '/settings',
              }}
            />
          ),
        }}
      />
    </Stack>
  );
}

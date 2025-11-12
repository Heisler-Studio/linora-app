import { useAuth } from '@/providers/auth';
import { presentationHelper } from '@/utils/platformOverrides';
import { Stack, useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const { user } = useAuth();
  const router = useRouter();
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
          title: `Welcome ${user?.given_name}`,
          unstable_headerRightItems: () => [
            {
              type: 'button',
              label: 'Settings',
              icon: {
                type: 'sfSymbol',
                name: 'gearshape',
              },
              onPress: () => {
                router.navigate('/settings');
              },
            },
          ],
        }}
      />
    </Stack>
  );
}

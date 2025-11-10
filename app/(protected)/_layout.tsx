import { IconButton } from '@/components/IconButton';
import { useAuth } from '@/providers/auth';
import { presentationHelper } from '@/utils/platformOverrides';
import { Redirect, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function ProtectedLayout() {
  const { user } = useAuth();
  const rawTheme = useColorScheme();
  const presentation = presentationHelper({ theme: rawTheme });

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="threads"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          presentation: presentation.presentation,
          sheetGrabberVisible: false,
          sheetAllowedDetents: [1],
          sheetInitialDetentIndex: 0,
          headerBlurEffect: presentation.blurEffect,
          headerTransparent: true,
          headerTintColor: rawTheme === 'dark' ? 'white' : 'black',
          title: '',
          headerRight: () => (
            <IconButton systemName="multiply" goBack size={30} />
          ),
        }}
      />
    </Stack>
  );
}

import { IconButton } from '@/components/IconButton';
import { AppProvider } from '@/providers/AppContext';
import { AuthProvider } from '@/providers/auth';
import { presentationHelper } from '@/utils/platformOverrides';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function Navigation() {
  const rawTheme = useColorScheme();
  const presentation = presentationHelper({ theme: rawTheme });

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="(tabs)"
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

export default function Layout() {
  const colorScheme = useColorScheme() || 'light';

  return (
    <AuthProvider>
      <GestureHandlerRootView style={styles.container}>
        <ActionSheetProvider>
          <AppProvider>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
            <Navigation />
          </AppProvider>
        </ActionSheetProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

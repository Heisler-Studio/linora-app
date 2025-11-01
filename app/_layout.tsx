import { IconButton } from '@/components/IconButton';
import { AppProvider } from '@/providers/AppContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const presentationHelper = () => {
//   // formSheet has all sorts of issues with headers and layout
//   // return isLiquidGlassAvailable() ? 'formSheet' : 'modal';
//   return 'modal';
// };

function Navigation() {
  const rawTheme = useColorScheme();
  const theme = rawTheme === 'dark' ? 'dark' : 'light';
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === 'dark' ? 'systemMaterialDark' : 'systemMaterialLight';

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          presentation: 'modal',
          sheetGrabberVisible: false,
          sheetAllowedDetents: [1],
          sheetInitialDetentIndex: 0,
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          headerTransparent: true,
          headerTintColor: theme === 'dark' ? 'white' : 'black',
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
  console.log('Root Color scheme:', colorScheme);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ActionSheetProvider>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

          <AppProvider>
            <Navigation />
          </AppProvider>
        </ThemeProvider>
      </ActionSheetProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

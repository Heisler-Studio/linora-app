import { ThemedView } from '@/components/ThemedView';
import { AppProvider } from '@/providers/AppContext';
import { AuthProvider, useAuth } from '@/providers/auth';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function Navigation() {
  return (
    <Stack>
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
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
            <LoadingWrapper>
              <Navigation />
            </LoadingWrapper>
          </AppProvider>
        </ActionSheetProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

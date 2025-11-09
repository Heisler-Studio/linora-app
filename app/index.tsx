import LoginForm from '@/components/screens/loginForm';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/providers/auth';
import { Redirect } from 'expo-router';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function RootScreen() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <ThemedView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </ThemedView>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return <Redirect href="/(tabs)/(history)" />;
}

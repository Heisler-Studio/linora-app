import { useAuth } from '@/providers/auth';
import { usePathname, Redirect } from 'expo-router';

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemedView } from './ThemedView';

// Define routes that are accessible without authentication
const PUBLIC_ROUTES = ['/login', '/register'];

interface AuthGateProps {
  children: React.ReactNode;
}

export function AuthGate({ children }: AuthGateProps) {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();

  // Show loading indicator while checking authentication status
  if (isLoading) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  // If user is authenticated, allow access to all routes
  if (user) {
    return <>{children}</>;
  }

  // If user is not authenticated and current path is not public, redirect to login
  if (!PUBLIC_ROUTES.includes(pathname)) {
    return <Redirect href="/login" />;
  }

  // For unauthenticated users on public routes, render the navigation normally
  return <>{children}</>;
}

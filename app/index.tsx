import { Redirect } from 'expo-router';

export default function RootScreen() {
  // Redirect authenticated users to the main tabs navigation
  // AuthGate ensures only authenticated users can reach this route
  return <Redirect href="/(tabs)/(history)" />;
}

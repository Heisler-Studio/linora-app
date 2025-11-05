import LoginForm from '@/components/screens/loginForm';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/providers/auth';
import React from 'react';
import { ActivityIndicator } from 'react-native';
// import ProfileCard from "@/components/ProfileCard";
// import ProtectedRequestCard from "@/components/ProtectedRequestCard";

export default function HomeScreen() {
  const { user, isLoading, fetchWithAuth, signOut } = useAuth();
  const [data, setData] = React.useState<any>(null);

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

  async function fetchProtectedData() {
    try {
      const response = await fetchWithAuth('/api/protected/data', {
        method: 'GET',
      });
      const data = await response.json();
      console.log('Protected data:', data);
      setData(data);
    } catch (error) {
      console.error('Error fetching protected data:', error);
    }
  }

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <ThemedText>Welcome home, {user.given_name}!</ThemedText>
      <ThemedText onPress={fetchProtectedData} style={{ color: 'blue' }}>
        Fetch Protected Data
      </ThemedText>
      {data && <ThemedText>{JSON.stringify(data, null, 2)}</ThemedText>}
      <ThemedText onPress={signOut} style={{ color: 'red' }}>
        Sign Out
      </ThemedText>
      {/* <ProfileCard />
      <ProtectedRequestCard /> */}
    </ThemedView>
  );
}

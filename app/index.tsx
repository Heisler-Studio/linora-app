import LoginForm from '@/components/screens/loginForm';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/providers/auth';
import { ActivityIndicator } from 'react-native';
// import ProfileCard from "@/components/ProfileCard";
// import ProtectedRequestCard from "@/components/ProtectedRequestCard";

export default function HomeScreen() {
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

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <ThemedText>Welcome home, {user.name}!</ThemedText>
      {/* <ProfileCard />
      <ProtectedRequestCard /> */}
    </ThemedView>
  );
}

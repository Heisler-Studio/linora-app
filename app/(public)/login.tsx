import LoginForm from '@/components/screens/loginForm';
import { useAuth } from '@/providers/auth';
import { Redirect } from 'expo-router';

export default function LoginScreen() {
  const { user, isLoading } = useAuth();

  // If user is already authenticated, redirect to main app
  if (user && !isLoading) {
    return <Redirect href="/(protected)" />;
  }

  return <LoginForm />;
}

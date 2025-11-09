import { useAuth } from "@/providers/auth";
import { Redirect } from "expo-router";
import LoginForm from "@/components/screens/loginForm";

export default function LoginScreen() {
  const { user, isLoading } = useAuth();

  // If user is already authenticated, redirect to main app
  if (user && !isLoading) {
    return <Redirect href="/(tabs)/(history)" />;
  }

  return <LoginForm />;
}

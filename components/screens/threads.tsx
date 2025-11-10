import { useAuth } from '@/providers/auth';
import { Form, Host, Text } from '@expo/ui/swift-ui';
import { ActivityIndicator, View } from 'react-native';
import LoginForm from './loginForm';

function Content() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Text>Hello</Text>
        {user?.given_name && <Text>{user.given_name}</Text>}
      </Form>
    </Host>
  );
}

export default function Page() {
  return <Content />;
}

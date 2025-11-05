import { useAuth } from '@/providers/auth';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

export function SignInWithAppleButton() {
  const { signInWithAppleWebBrowser } = useAuth();

  return (
    <Pressable onPress={signInWithAppleWebBrowser}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/apple-icon.png')}
          style={styles.icon}
        />
        <ThemedText type="defaultSemiBold" darkColor="#fff" lightColor="#fff">
          Continue with Apple
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#000',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
});

import { AppContext } from '@/providers/AppContext';
import { AppState } from '@/providers/types';
import { Form, Host, HStack, Section, Text, VStack } from '@expo/ui/swift-ui';
import {
  cornerRadius,
  foregroundStyle,
  frame,
} from '@expo/ui/swift-ui/modifiers';
import { Image as ExpoImage } from 'expo-image';
import { use } from 'react';
import { StyleSheet } from 'react-native';

function Content() {
  const { profile, updateProfile } = use(AppContext) as AppState;
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <HStack spacing={16}>
            <HStack
              modifiers={[frame({ width: 60, height: 60 }), cornerRadius(100)]}>
              <ExpoImage
                source={{ uri: 'https://github.com/betomoedano.png' }}
                style={{ width: 60, height: 60 }}
                contentFit="fill"
              />
            </HStack>

            <VStack alignment="leading">
              <Text
                modifiers={[foregroundStyle(profile.theme)]}
                color={profile.theme}
                size={22}
                weight="bold">
                {profile.name}
              </Text>
              <Text modifiers={[foregroundStyle('gray')]}>
                {profile.username}
              </Text>
            </VStack>
          </HStack>
        </Section>
      </Form>
    </Host>
  );
}

export default function Page() {
  return <Content />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});

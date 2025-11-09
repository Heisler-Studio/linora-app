import { AppContext } from '@/providers/AppContext';
import { useAuth } from '@/providers/auth';
import { AppState } from '@/providers/types';
import {
  Button,
  Form,
  Host,
  HStack,
  Picker,
  Section,
  Text,
  VStack,
} from '@expo/ui/swift-ui';
import {
  cornerRadius,
  foregroundStyle,
  frame,
} from '@expo/ui/swift-ui/modifiers';
import { Image as ExpoImage } from 'expo-image';
import { use } from 'react';

function Content() {
  const { user, signOut } = useAuth();
  const { profile, settings, updateSettings } = use(AppContext) as AppState;
  const themeOptions = ['light', 'dark', 'auto'];
  const themeIndex = themeOptions.indexOf(settings.theme);

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <HStack spacing={16}>
            <HStack
              modifiers={[frame({ width: 60, height: 60 }), cornerRadius(100)]}>
              {user?.picture && (
                <ExpoImage
                  source={{ uri: user.picture }}
                  style={{ width: 60, height: 60 }}
                  contentFit="fill"
                />
              )}
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

        {/* FIXME: this does not override which theme is applied */}
        <Section>
          <Picker
            label="App Theme"
            options={themeOptions}
            selectedIndex={themeIndex}
            onOptionSelected={({ nativeEvent: { index } }) => {
              updateSettings({
                theme: themeOptions[index] as 'light' | 'dark' | 'auto',
              });
            }}
            variant="menu"
          />
        </Section>

        <Section>
          <Button onPress={signOut} variant="default">
            Sign Out
          </Button>
        </Section>
      </Form>
    </Host>
  );
}

export default function Page() {
  return <Content />;
}

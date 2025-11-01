import { Form, Host, Text } from '@expo/ui/swift-ui';
import { Text as RNText, ScrollView } from 'react-native';

function Content() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        padding: 16,
        paddingTop: 40,
        paddingBottom: 100,
      }}>
      <Host style={{ flex: 1, backgroundColor: 'red' }}>
        <Form>
          <Text>Hello, SwiftUI!</Text>
        </Form>
      </Host>
      <RNText>Hello</RNText>
    </ScrollView>
  );
}

export default function Page() {
  return <Content />;
}

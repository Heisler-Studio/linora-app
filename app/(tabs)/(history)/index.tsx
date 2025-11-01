import { Form, Host, Text } from '@expo/ui/swift-ui';

function Content() {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Text>Hello, Calendar!</Text>
      </Form>
    </Host>
  );
}

export default function Page() {
  return <Content />;
}

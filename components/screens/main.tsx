import { AppProvider } from '@/providers/AppContext';
import { Form, Host, Text } from '@expo/ui/swift-ui';
import React from 'react';

function AppContent() {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Text>Journal Placeholder</Text>
      </Form>
    </Host>
  );
}

export default function MainScreen() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

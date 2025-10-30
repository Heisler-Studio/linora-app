import { AppProvider } from '@/providers/AppContext';
import { Form, Host } from '@expo/ui/swift-ui';
import React from 'react';
import { SettingsSection } from '../SettingsSection';

function AppContent() {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <SettingsSection />
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

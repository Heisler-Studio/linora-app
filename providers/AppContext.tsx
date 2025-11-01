import React, { createContext, ReactNode, useState } from 'react';
import { AppSettings, AppState, UserProfile } from './types';

export const AppContext = createContext<AppState | null>(null);

export const initialProfile: UserProfile = {
  name: 'Evan Heisler',
  username: '@evanheisler',
  avatar: 'person.fill',
  theme: '#4A90E2',
  profileImageSize: 'medium',
};

export const initialSettings: AppSettings = {
  notifications: true,
  autoSave: true,
  theme: 'auto',
  language: 'en',
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [settings, setSettings] = useState<AppSettings>(initialSettings);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const updateSettings = (updates: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const value: AppState = {
    profile,
    updateProfile,

    settings,
    updateSettings,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

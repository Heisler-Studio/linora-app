export interface UserProfile {
  name: string;
  username: string;
  avatar: string;
  theme: string;
  profileImageSize: 'small' | 'medium' | 'large';
}

export interface AppSettings {
  notifications: boolean;
  autoSave: boolean;
  theme: 'light' | 'dark' | 'auto';
  language: string;
}

export interface AppState {
  // User Profile
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;

  // Settings
  settings: AppSettings;
  updateSettings: (updates: Partial<AppSettings>) => void;
}

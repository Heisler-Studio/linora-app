import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(history)">
        <Label>History</Label>
        <Icon
          sf="calendar.day.timeline.leading"
          drawable="custom_android_drawable"
        />
      </NativeTabs.Trigger>
      {/* role: search moves this to the right. Probably not the best semantics */}
      <NativeTabs.Trigger name="(edit)" role="search">
        <Icon sf="pencil" drawable="custom_settings_drawable" />
        <Label>Edit</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

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
    </NativeTabs>
  );
}

import { Host, Text } from '@expo/ui/swift-ui';
import { StyleSheet } from 'react-native';

export function TimeZoneSwitch() {
  return (
    <Host style={styles.container}>
      <Text>Placeholder TimeZoneSwitch</Text>
    </Host>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});

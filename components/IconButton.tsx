import { Group, Host, Image } from '@expo/ui/swift-ui';
import { Href, useRouter } from 'expo-router';
import { NavigationOptions } from 'expo-router/build/global-state/routing';
import { SFSymbol } from 'expo-symbols';

type IconButtonProps = {
  systemName: SFSymbol;
  navigateTo?: {
    href: Href;
    options?: NavigationOptions;
  };
  goBack?: boolean;
  size?: number;
};

export function IconButton({
  systemName,
  navigateTo,
  goBack,
  size = 30,
}: IconButtonProps) {
  const router = useRouter();

  const onPress = () => {
    if (goBack) {
      router.back();
    } else if (navigateTo) {
      router.navigate(navigateTo.href, navigateTo.options);
    }
  };

  return (
    <Host style={{ width: size + 5, height: size + 5 }}>
      <Group>
        <Image systemName={systemName} onPress={onPress} size={size} />
      </Group>
    </Host>
  );
}

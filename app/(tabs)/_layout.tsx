import {
  Badge,
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from 'expo-router/unstable-native-tabs';
import React from 'react';
import {
  ColorValue,
  DynamicColorIOS,
  ImageSourcePropType,
  Platform,
} from 'react-native';

import { useThemeColor } from '@/components/Themed';
import { theme } from '@/constants/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { isLiquidGlassAvailable } from 'expo-glass-effect';

type VectorIconFamily = {
  getImageSource: (
    name: string,
    size: number,
    color: ColorValue
  ) => Promise<ImageSourcePropType>;
};

export default function TabsLayout() {
  const bookmarks = [];
  const hasBookmarks = bookmarks.length > 0;
  const tintColor = useThemeColor(theme.color.reactBlue);
  const inactiveTintColor = useThemeColor({
    light: '#00000090',
    dark: '#FFFFFF90',
  });

  const labelSelectedStyle =
    Platform.OS === 'ios' ? { color: tintColor } : undefined;

  return (
    <NativeTabs
      badgeBackgroundColor={tintColor}
      labelStyle={{
        color:
          Platform.OS === 'ios' && isLiquidGlassAvailable()
            ? DynamicColorIOS({
                light: theme.colorBlack,
                dark: theme.colorWhite,
              })
            : inactiveTintColor,
      }}
      iconColor={
        Platform.OS === 'ios' && isLiquidGlassAvailable()
          ? DynamicColorIOS({
              light: theme.colorBlack,
              dark: theme.colorWhite,
            })
          : inactiveTintColor
      }
      tintColor={
        Platform.OS === 'ios'
          ? DynamicColorIOS(theme.color.reactBlue)
          : inactiveTintColor
      }
      labelVisibilityMode="labeled"
      indicatorColor={tintColor + '25'}
      disableTransparentOnScrollEdge={true} // Used to prevent transparent background on iOS 18 and older
    >
      <NativeTabs.Trigger name="(calendar)">
        {Platform.select({
          ios: <Icon sf="calendar" />,
          android: (
            <Icon
              src={
                <VectorIcon
                  family={MaterialCommunityIcons as VectorIconFamily}
                  name="calendar-blank"
                />
              }
              selectedColor={tintColor}
            />
          ),
        })}
        <Label selectedStyle={labelSelectedStyle}>Calendar</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="bookmarks">
        {Platform.select({
          ios: <Icon sf="bookmark" selectedColor={tintColor} />,
          android: (
            <Icon
              src={
                <VectorIcon
                  family={MaterialCommunityIcons as VectorIconFamily}
                  name="bookmark"
                />
              }
              selectedColor={tintColor}
            />
          ),
        })}
        <Label selectedStyle={labelSelectedStyle}>Bookmarked</Label>
        {hasBookmarks && !isLiquidGlassAvailable() && (
          <Badge>{bookmarks.length.toString()}</Badge>
        )}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name="speakers"
        role={isLiquidGlassAvailable() ? 'search' : undefined}>
        {Platform.select({
          ios: <Icon sf="person.2" />,
          android: (
            <Icon
              src={
                <VectorIcon
                  family={MaterialCommunityIcons as VectorIconFamily}
                  name="account-multiple"
                />
              }
              selectedColor={tintColor}
            />
          ),
        })}
        <Label selectedStyle={labelSelectedStyle}>Speakers</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="info">
        {Platform.select({
          ios: <Icon sf="map" selectedColor={tintColor} />,
          android: (
            <Icon
              src={
                <VectorIcon
                  family={MaterialCommunityIcons as VectorIconFamily}
                  name="map-outline"
                />
              }
              selectedColor={tintColor}
            />
          ),
        })}
        <Label selectedStyle={labelSelectedStyle}>Info</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

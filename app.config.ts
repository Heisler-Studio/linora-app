import { ConfigContext, ExpoConfig } from 'expo/config';
import { version } from './package.json';

const EAS_PROJECT_ID = '87a1aadb-83ea-4956-864a-d7a8e4bd1cfa';
const PROJECT_SLUG = 'linora-app';

const APP_NAME = 'Linora';
const BUNDLE_IDENTIFIER = 'com.linora.app';
const PACKAGE_NAME = 'com.linora.app';
const ICON = './assets/images/icon.png';
const SCHEME = 'linora-app';

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log('⚙️ Building app for environment:', process.env.APP_ENV);
  const { name, bundleIdentifier, icon, packageName, scheme } =
    getDynamicAppConfig(
      (process.env.APP_ENV as 'development' | 'preview' | 'production') ||
        'development'
    );

  return {
    name,
    slug: PROJECT_SLUG, // Must be consistent across all environments.,
    version, // Automatically bump your project version with `npm version patch`, `npm version minor` or `npm version major`.
    orientation: 'portrait',
    icon,
    scheme,
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    runtimeVersion: {
      policy: 'appVersion',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier,
    },
    android: {
      package: packageName,
    },
    web: {
      output: 'server',
    },
    plugins: [
      [
        'expo-router',
        {
          origin: 'https://linora-app--production.expo.app/',
        },
      ],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          dark: {
            backgroundColor: '#000000',
          },
        },
      ],
      // ['expo-apple-authentication'],
      ['expo-secure-store'],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
  };
};

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
  environment: 'development' | 'preview' | 'production'
) => {
  if (environment === 'production') {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      icon: ICON,
      scheme: SCHEME,
    };
  }

  if (environment === 'preview') {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: ICON,
      scheme: `${SCHEME}-prev`,
    };
  }

  return {
    name: `${APP_NAME} Development`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: ICON,
    scheme: `${SCHEME}-dev`,
  };
};

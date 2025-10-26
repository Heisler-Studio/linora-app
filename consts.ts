import { z } from 'zod';

// Get environment variable set during the build process
// Use a fallback like 'development' if it's not set
const BUILD_ENV = process.env.EXPO_PUBLIC_APP_ENV ?? 'development';

const ConstantsSchema = z.object({
  LINORA_API_URL: z.string().url('LINORA_API_URL must be a valid URL.'),
});

type AppConstants = z.infer<typeof ConstantsSchema>;

// Use an IIFE to calculate and VALIDATE the constants once at module load time.
const CONSTANTS: AppConstants = (() => {
  let constantsObject: AppConstants;

  // Switch on the standard build environment variable
  // Must match EAS build env
  switch (BUILD_ENV) {
    case 'staging':
      constantsObject = {
        // Use the staging API URL
        LINORA_API_URL: 'https://linora-app--staging.expo.app/api',
      };
      break;

    case 'production':
      constantsObject = {
        // Use the production API URL
        LINORA_API_URL: 'https://linora-app--production.expo.app/api',
      };
      break;

    default:
      // Default/Development
      constantsObject = {
        // Fallback for local development or unexpected values
        LINORA_API_URL: 'http://localhost:8081/api',
      };
      break;
  }

  return ConstantsSchema.parse(constantsObject);
})();

export default CONSTANTS;

import { environment } from 'expo-server';

export const LINORA_API_URL = 'http://localhost:8081/api';

export default () => {
  const env = environment();

  let LINORA_API_URL = 'http://localhost:8081/api';

  if (env === 'production') {
    LINORA_API_URL = 'undefined';
  }

  return { LINORA_API_URL };
};

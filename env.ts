// FIXME: Move to constants/index.ts once environment variables are stable
const consts = {
  LINORA_API_URL:
    process.env.EXPO_PUBLIC_LINORA_API_URL ?? 'http://localhost:8081/api',
};

export default consts;

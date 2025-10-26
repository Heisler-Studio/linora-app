import { environment, origin } from 'expo-server';
import { HealthCheckResponse } from './schema';

export function getHealthCheck(): HealthCheckResponse {
  // 1. Perform health check logic (e.g., check database connection, external APIs)
  const env = environment();
  return { status: 'ok', environment: env, origin: origin() };
}

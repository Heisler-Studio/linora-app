import { getHealthCheck } from '@/services/health-check';
import { healthCheckSchema } from '@/services/health-check/schema';
import { StatusError } from 'expo-server';
import { ZodError } from 'zod';

export function GET(request: Request) {
  try {
    const healthCheck = getHealthCheck();
    const validatedHealthCheck = healthCheckSchema.parse(healthCheck);
    return Response.json(validatedHealthCheck);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new StatusError(400, error.message);
    }
    return Response.json('An error occurred while getting the health check', {
      status: 500,
    });
  }
}

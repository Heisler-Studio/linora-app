import { z } from 'zod';

export const healthCheckSchema = z.object({
  status: z.string(),
  environment: z.string().nullable(),
  origin: z.string().nullable(),
});

export type HealthCheckResponse = z.infer<typeof healthCheckSchema>;

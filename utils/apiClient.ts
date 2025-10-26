import { LINORA_API_URL } from '@/consts';
import { FetchRequestInit, fetch as expoFetch } from 'expo/fetch';

// In-memory cache for promises to prevent re-fetching on re-render.
// Key: Request URL | Value: The Promise that resolves to data (or an error).
const promiseCache = new Map<string, Promise<any>>();

// 1. Core fetch function with caching and error handling
async function coreFetch<T>(
  endpoint: string,
  options?: FetchRequestInit
): Promise<T> {
  const url = `${LINORA_API_URL}${endpoint}`;

  const response = await expoFetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      // Add any common headers like Authorization tokens here
      ...options?.headers,
    },
  });

  if (!response.ok) {
    // Throw an error that an Error Boundary can catch
    const errorBody = await response
      .json()
      .catch(() => ({ message: 'Unknown Error' }));
    throw new Error(
      `API Error ${response.status}: ${
        errorBody.message || 'Failed to fetch data'
      }`
    );
  }

  return response.json() as Promise<T>;
}

// 2. Suspense-ready function to read from the cache/initiate fetch
export function fetchSuspense<T>(
  endpoint: string,
  options?: FetchRequestInit
): Promise<T> {
  // Use the endpoint as the cache key.
  const cacheKey = endpoint;

  // Check the cache first
  if (promiseCache.has(cacheKey)) {
    console.log('Cache hit for', cacheKey);
    return promiseCache.get(cacheKey)!;
  }

  // If not in cache, create the promise, store it, and return it.
  console.log('Cache miss for', cacheKey);
  const promise = coreFetch<T>(endpoint, options);
  promiseCache.set(cacheKey, promise);

  // Optionally, remove from cache on error or after a TTL for fresh data.
  promise.catch(() => promiseCache.delete(cacheKey));

  return promise;
}

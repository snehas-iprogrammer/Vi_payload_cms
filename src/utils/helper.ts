export function createApiResponse<T>(
  success: boolean,
  data: T | null = null,
  error: string | null = null,
) {
  return {
    // success,
    data,
    // error,
  }
}

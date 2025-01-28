import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

// Type for API error responses
export interface ApiError {
  message: string;
  status: number;
}

// Generic fetch wrapper with typing
export async function fetchData<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw {
      message: `API Error: ${response.statusText}`,
      status: response.status,
    } as ApiError;
  }
  return response.json();
}

// Custom hook for data fetching
export function useCustomQuery<T>(
  queryKey: string[],
  fetchFn: () => Promise<T>,
  options?: Omit<UseQueryOptions<T, ApiError, T>, "queryKey" | "queryFn">,
) {
  return useQuery<T, ApiError>({
    queryKey,
    queryFn: fetchFn,
    ...options,
  });
}

// Custom hook for mutations
export function useCustomMutation<T, TVariables>(
  mutationFn: (variables: TVariables) => Promise<T>,
  options?: Omit<UseMutationOptions<T, ApiError, TVariables>, "mutationFn">,
) {
  return useMutation<T, ApiError, TVariables>({
    mutationFn,
    ...options,
  });
}

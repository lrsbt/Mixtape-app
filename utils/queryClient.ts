import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5min
      gcTime: 30 * 60 * 1000, // cacheTime 30min
      retry: 1, // retry once on error
      refetchOnReconnect: true, // handy on mobile networks
      refetchOnWindowFocus: false, // RN has no “window focus” anyway
    },
  },
});

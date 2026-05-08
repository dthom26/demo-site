import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './routes/AppRouter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-uplift-light">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-uplift-navy border-t-transparent rounded-full animate-spin" />
        <p className="text-uplift-gray text-sm font-medium">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingFallback />}>
          <AppRouter />
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

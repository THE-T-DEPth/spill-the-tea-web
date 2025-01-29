import { ProfileProvider } from './contexts/profileContext';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <Router />
        </ProfileProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

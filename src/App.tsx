import { ProfileProvider } from './contexts/ProfileContext';
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

import GreenLine from './styled-components/GreenLine';
import RootApp from './modules/RootApp';
import { AuthenticationProvider } from './hooks/authentication';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()
function App() {
  return (
    <>
      <GreenLine/>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <RootApp/>
        </AuthenticationProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

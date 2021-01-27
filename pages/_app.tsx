import '../styles/globals.css';

import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;

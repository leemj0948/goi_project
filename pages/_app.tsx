import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@src/styles/globalStyle';
import { QueryClientProvider,QueryClient } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient( {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, 
        }
    }
})
  return (
    <QueryClientProvider client = {queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
    </QueryClientProvider>
  );
}

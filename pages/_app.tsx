
import type { AppProps } from 'next/app'
import GlobalStyle from '@src/styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return ( <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>);
}

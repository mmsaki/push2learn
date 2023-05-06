import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { styletron } from '@/styletron';
import { LocaleProvider } from 'baseui';

const localeProvider = {};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <LocaleProvider locale={localeProvider}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </LocaleProvider>
    </StyletronProvider>
  );
}

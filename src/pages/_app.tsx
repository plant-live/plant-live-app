import DashboardContainer from '@/shared/components/DashboardContainer';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '@/shared/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DashboardContainer>
        <Component {...pageProps} />
      </DashboardContainer>
    </ThemeProvider>
  );
}

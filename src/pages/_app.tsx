import DashboardContainer from '@/shared/components/DashboardContainer';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashboardContainer>
      <Component {...pageProps} />
    </DashboardContainer>
  );
}

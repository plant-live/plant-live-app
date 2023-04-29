import DashboardContainer from '@/shared/components/DashboardContainer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/signin');
    }
  }, []);

  return <></>;
}

import Teste from '@/shared/components/Teste';
import { ThemeSelectorV5 } from '@/shared/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';

export default function App() {
  const themeProviderV5 = ThemeSelectorV5('dark');
  return (
    <ThemeProvider theme={themeProviderV5}>
      <Teste titulo='OI' texto='Boa tarde' />
    </ThemeProvider>
  );
}

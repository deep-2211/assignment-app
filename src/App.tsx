import { BrowserRouter } from 'react-router';
import { AppContextProvider } from './contexts/AppContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import AppRouting from './AppRouting';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <LanguageProvider>
          <AppContextProvider>
            <AppRouting />
          </AppContextProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { themeConfig } from '../config/ThemeConfig';

interface ThemeContextType {
  themeMode: string;
  setThemeMode: (t: string) => void;
}

declare module '@mui/material/styles' {
  interface Theme {
    //appColors: any;
    appColors: {
      blue: {
        light: string;
        main: string;
        dark: string;
      };
      pink: string;
      teal: string;
    };
  }
  interface ThemeOptions {
    //appColors?: any;
    appColors?: {
      blue?: {
        light?: string;
        main?: string;
        dark?: string;
      };
      pink?: string;
      teal?: string;
    };
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = localStorage.getItem('theme') || 'system';
  const [themeMode, setThemeMode] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const appliedTheme: any =
    themeMode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : themeMode;

  const theme = createTheme({
    ...themeConfig,
    palette: {
      mode: appliedTheme,
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };

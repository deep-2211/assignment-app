import { createContext, useState, ReactNode, useEffect } from 'react';
import i18n from '../i18n';

export type Language = 'en' | 'da' | 'es' | 'fr' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LANGUAGE_STORAGE_KEY = 'appLanguage';

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || 'en';
  });

  // Update localStorage and i18next when language changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

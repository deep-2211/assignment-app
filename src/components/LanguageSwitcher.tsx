import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Language } from '../contexts/LanguageContext';
import { useLanguage } from '../hooks/useLanguage';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'da', label: 'Dansk' },
  { code: 'es', label: 'Español' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'fr', label: 'Français' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <FormControl size="small">
      <InputLabel id="language-select-label">{t('lbl__language')}</InputLabel>
      <Select
        labelId="language-select-label"
        value={language}
        onChange={handleChange}
        label={t('language')}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;

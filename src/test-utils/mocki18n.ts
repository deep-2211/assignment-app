export const mockI18n = (translations: Record<string, string> = {}) => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key: string) => translations[key] || key,
    }),
  }));
};

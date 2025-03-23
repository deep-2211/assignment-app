import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginRibbon from './LoginRibbon';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { mockI18n } from '../test-utils/mocki18n';

jest.mock(
  '@mui/material/Box',
  () =>
    ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
);

mockI18n({
  text__logged_in_user: 'Logged in as :',
});

describe('LoginRibbon', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      }),
    });
  });

  it('should render the LoginRibbon component', () => {
    render(
      <ThemeContextProvider>
        <LanguageProvider>
          <LoginRibbon />
        </LanguageProvider>
      </ThemeContextProvider>,
    );

    expect(screen.getByText(/User_NAME/i)).toBeInTheDocument();
  });

  it('should display the username "User_NAME" in the ribbon', () => {
    render(
      <ThemeContextProvider>
        <LanguageProvider>
          <LoginRibbon />
        </LanguageProvider>
      </ThemeContextProvider>,
    );

    expect(screen.getByText(/User_NAME/i)).toBeInTheDocument();
  });
});

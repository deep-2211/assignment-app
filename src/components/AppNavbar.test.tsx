import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppNavBar from './AppNavbar';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';

jest.mock('@mui/icons-material/Menu', () => () => <div>MenuIcon</div>);
jest.mock('@mui/icons-material/Notifications', () => () => (
  <div>NotificationsIcon</div>
));
jest.mock('@mui/icons-material/Settings', () => () => <div>SettingsIcon</div>);
jest.mock('@mui/icons-material/Search', () => () => <div>SearchIcon</div>);

describe('AppNavBar', () => {
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

  it('renders the AppNavBar correctly', () => {
    render(
      <ThemeContextProvider>
        <LanguageProvider>
          <AppNavBar />
        </LanguageProvider>
      </ThemeContextProvider>,
    );

    expect(screen.getByText('MenuIcon')).toBeInTheDocument();
    expect(screen.getByText('NotificationsIcon')).toBeInTheDocument();
    expect(screen.getByText('SettingsIcon')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        'Search for name, numbers, accounts or free text',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('17')).toBeInTheDocument();
  });

  it('should contain a search input with the correct placeholder', () => {
    render(
      <ThemeContextProvider>
        <LanguageProvider>
          <AppNavBar />
        </LanguageProvider>
      </ThemeContextProvider>,
    );

    const searchInput = screen.getByPlaceholderText(
      'Search for name, numbers, accounts or free text',
    );
    expect(searchInput).toBeInTheDocument();
  });

  it('should display notifications badge with the number "17"', () => {
    render(
      <ThemeContextProvider>
        <LanguageProvider>
          <AppNavBar />
        </LanguageProvider>
      </ThemeContextProvider>,
    );

    const badgeContent = screen.getByText('17');
    expect(badgeContent).toBeInTheDocument();
  });
});

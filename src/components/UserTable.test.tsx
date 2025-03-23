import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AppContextProvider } from '../contexts/AppContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import useFetch from '../hooks/useFetch';
import UsersTable from './UsersTable';

jest.mock('../hooks/useAppContext', () => ({
  __esModule: true,
  default: () => ({
    showInfoPanel: jest.fn(),
  }),
}));

jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('UsersTable', () => {
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

  beforeEach(() => {
    (useFetch as jest.Mock).mockReset();
  });

  it('should show a loading spinner while fetching data', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should show an error message if fetching data fails', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: 'Failed to fetch',
    });

    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    expect(screen.getByText(/Error: Failed to fetch/)).toBeInTheDocument();
  });

  it('should display user data in the table when fetch is successful', async () => {
    const mockData = [
      {
        employeeId: '1',
        fullName: 'John Doe',
        department: 'HR',
        mobileNo: '1234567890',
        email: 'johndoe@example.com',
      },
    ];
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/John Doe/)).toBeInTheDocument(),
    );

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/HR/)).toBeInTheDocument();
    expect(screen.getByText(/1234567890/)).toBeInTheDocument();
    expect(screen.getByText(/johndoe@example.com/)).toBeInTheDocument();
  });

  it('should disable the delete button', async () => {
    const mockData = [
      {
        employeeId: '1',
        fullName: 'John Doe',
        department: 'HR',
        mobileNo: '1234567890',
        email: 'johndoe@example.com',
      },
    ];
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/John Doe/)).toBeInTheDocument(),
    );

    const deleteButton = screen.getByLabelText('delete');
    expect(deleteButton).toBeDisabled();
  });

  /* it('should trigger a search input change', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    const searchInput = screen.getByPlaceholderText('Search…');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    expect(searchInput).toHaveValue('John');
  }); */

  it('should trigger the "Create User" button click', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    const createUserButton = screen.getByRole('button', {
      name: /Create User/,
    });
    fireEvent.click(createUserButton);

    expect(createUserButton).toBeInTheDocument();
  });
});

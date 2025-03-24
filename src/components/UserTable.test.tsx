import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AppContextProvider } from '../contexts/AppContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import UsersTable from './UsersTable';
import { User } from '../types/User';

jest.mock('../hooks/useAppContext', () => ({
  __esModule: true,
  default: () => ({
    showInfoPanel: jest.fn(),
  }),
}));

const mockData = [
  {
    employeeId: '1',
    fullName: 'John Doe',
    department: 'HR',
    phoneNumber: '4676846',
    mobileNo: '1234567890',
    address: '123 Main St, New York, NY',
    email: 'johndoe@example.com',
    designation: 'Manager',
    notes: 'Some notes',
    language: 'en',
    username: 'johndoe',
  } as User,
];

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

  it('should display user data in the table when fetch is successful', async () => {
    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable users={mockData} />
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
    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable users={mockData} />
        </AppContextProvider>
      </ThemeContextProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/John Doe/)).toBeInTheDocument(),
    );

    const deleteButton = screen.getByLabelText('delete');
    expect(deleteButton).toBeDisabled();
  });

  it('should trigger the "Create User" button click', () => {
    render(
      <ThemeContextProvider>
        <AppContextProvider>
          <UsersTable users={mockData} />
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

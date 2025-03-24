import React, { createContext, useState } from 'react';
import { User } from '../types/User';

interface AppState {
  selectedUser: User | null;
  selectUser: (u: User | null) => void;
}

const AppContext = createContext<AppState>({
  selectedUser: null,
  selectUser: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const selectUser = (user: User | null) => {
    setSelectedUser(user);
  };

  return (
    <AppContext.Provider value={{ selectedUser, selectUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };

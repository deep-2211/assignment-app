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

  const state = {
    selectedUser,
  };

  return (
    <AppContext.Provider value={{ ...state, selectUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };

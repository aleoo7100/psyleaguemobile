import { createContext, useState } from 'react';
import { Users } from '../../__generated__/graphql';

interface IContext {
  user?: Users;
  setUser: (user: Users) => void;
}

const userContext = createContext<IContext>({
  user: undefined,
  setUser: () => {},
});

interface ProviderProps extends IContext {
  children: React.ReactNode;
}

const UserProvider = (props: ProviderProps) => {
  return (
    <userContext.Provider
      value={{
        user: props.user,
        setUser: props.setUser,
      }}>
      {props.children}
    </userContext.Provider>
  );
};

export { UserProvider, userContext };

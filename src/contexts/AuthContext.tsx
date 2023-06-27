import { createContext, useContext, useState } from 'react';
import { AuthUser } from './auth.types';

const AuthContext = createContext<any>({});

export function AuthWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [userData, setUserData] = useState<AuthUser>({
    id: 0,
    isAdmin: false,
    authToken: '',
  });

  const authUserData = {
    userData,
    setUserData,
  };

  return (
    <AuthContext.Provider value={authUserData}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

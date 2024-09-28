"use client";
import * as React from "react";
import cookieStorage from "@/services/cookie-storage-service";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
}

const AuthContext = React.createContext<AuthContextProps>({
  isAuthenticated: false,
  token: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, _setIsAuthenticated] = React.useState<boolean>(false);
  const [token, _setToken] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  const setIsAuthenticated = () => {
    const accessToken = cookieStorage.getAccessToken();
    if (accessToken) {
      _setIsAuthenticated(true);
    } else {
      _setIsAuthenticated(false);
    }
  };
  const setToken = () => {
    const accessToken = cookieStorage.getAccessToken();
    if (accessToken) {
      _setToken(accessToken);
    } else {
      _setToken(null);
    }
  };

  React.useEffect(() => {
    setIsAuthenticated();
    setToken();
  }, []);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

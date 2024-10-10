"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";
import cookieStorage from "@/services/cookie-storage";

interface AuthContextProps {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const token = cookieStorage.getAccessToken();
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

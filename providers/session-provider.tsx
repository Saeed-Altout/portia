"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";
import { useSession } from "@/hooks/use-session";
import { useGetUserProfileQuery } from "@dashboard/hooks";
import cookieStorage from "@/services/cookie-storage";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  code: string;
}

interface SessionContextProps {
  user: User | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextProps>({
  user: null,
  isLoading: false,
});
interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { data: user, isLoading, isSuccess } = useGetUserProfileQuery();
  const setSession = useSession((state) => state.setSession);
  const setIsLoading = useSession((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(isLoading);
    if (isSuccess && user?.data) {
      setSession(user.data);
    }
    setIsMounted(true);
  }, [user, isLoading, isSuccess, setSession, setIsLoading]);

  if (!isMounted) {
    return null;
  }

  return (
    <SessionContext.Provider
      value={{
        user: user?.data || null,
        isLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = (): SessionContextProps => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
};

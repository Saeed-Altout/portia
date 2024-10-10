"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserProfileQuery } from "@dashboard/hooks";

interface Session {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
}

interface SessionContextProps {
  session: Session | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextProps>({
  session: null,
  isLoading: false,
});
interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [session, setSession] = useState<Session | null>(null);

  const { data: user, isLoading, isSuccess } = useGetUserProfileQuery();

  useEffect(() => {
    if (isSuccess && user?.data) {
      setSession(user.data);
    }
    setIsMounted(true);
  }, [isSuccess, user]);

  if (!isMounted) {
    return null;
  }

  return (
    <SessionContext.Provider value={{ session, isLoading }}>
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

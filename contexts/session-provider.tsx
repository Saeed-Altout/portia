"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserDetailsQuery } from "@/app/dashboard/features/hooks";

const initialUserValues: UserProfile = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  referred_code: "",
};

interface SessionProps {
  user: UserProfile;
  isLoading: boolean;
}

const SessionContext = createContext<SessionProps>({
  user: initialUserValues,
  isLoading: false,
});

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserProfile>(initialUserValues);
  const { data, isSuccess, isLoading } = useGetUserDetailsQuery();

  useEffect(() => {
    if (isSuccess) {
      setUser(data.data);
    }
  }, [isSuccess, data]);

  return (
    <SessionContext.Provider value={{ user, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

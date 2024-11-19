"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserDetails } from "@/hooks/dashboard";

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
  isSuccess: boolean;
}

const SessionContext = createContext<SessionProps>({
  user: initialUserValues,
  isLoading: false,
  isSuccess: false,
});

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserProfile>(initialUserValues);
  const { data, isSuccess, isLoading } = useGetUserDetails();

  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.data);
    }
  }, [data, isSuccess]);

  return (
    <SessionContext.Provider value={{ user, isLoading, isSuccess }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

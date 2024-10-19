"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAccessToken } from "@/lib/auth";
import { useGetUserDetails } from "@/features/dashboard/hooks";

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
  const router = useRouter();
  const [user, setUser] = useState<UserProfile>(initialUserValues);
  const { data, isSuccess, isLoading } = useGetUserDetails();

  useEffect(() => {
    const token = getAccessToken();
    if (data && isSuccess) {
      setUser(data.data);
    }

    if (!data && !isLoading && !token) {
      router.push("/auth/login");
    }
  }, [data, isLoading, isSuccess, router]);

  return (
    <SessionContext.Provider value={{ user, isLoading, isSuccess }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

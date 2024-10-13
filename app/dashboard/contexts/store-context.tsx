"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useGetUserProfileQuery } from "../hooks";
import { Loader } from "@/components/ui/loader";

const initialUserProfile = {
  id: 1,
  first_name: "",
  last_name: "",
  email: "",
  referred_code: "",
};

interface StorContextProps {
  user: UserProfile;
  isLoading: boolean;
}

export const StorContext = createContext<StorContextProps>({
  user: initialUserProfile,
  isLoading: false,
});

export const StoreContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserProfile>(initialUserProfile);

  const userQuery = useGetUserProfileQuery();

  const isLoading = userQuery.isLoading;
  const isSuccess = userQuery.isSuccess;

  useEffect(() => {
    if (isSuccess) {
      setUser(userQuery.data.data);
    }
  }, [isSuccess, userQuery]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StorContext.Provider
      value={{
        user: isSuccess ? user : initialUserProfile,
        isLoading,
      }}
    >
      {children}
    </StorContext.Provider>
  );
};

export const useStoreContext = () => useContext(StorContext);

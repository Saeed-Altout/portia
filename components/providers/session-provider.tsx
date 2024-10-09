"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/hooks/use-session";

import { useGetUserProfileQuery } from "@dashboard/hooks";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { data: user, isLoading, isSuccess } = useGetUserProfileQuery();
  const setSession = useSession((state) => state.setSession);
  const setIsLoading = useSession((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(isLoading);
    setIsMounted(true);
    if (isSuccess) {
      setSession(user.data);
    }
  }, [user, isLoading, isSuccess, setSession, setIsLoading]);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}

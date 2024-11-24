"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/auth-store";

export const UnProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    if (isAuthenticated) {
      router.push("/dashboard");
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  if (!isMounted) {
    return null;
  }

  return !isAuthenticated ? children : null;
};

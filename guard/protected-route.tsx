"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getToken } from "@/utils/cookie";
import { useAuthStore } from "@/stores/use-auth-store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
    return () => setIsMounted(false);
  }, [isAuthenticated, router]);
  if (!isMounted) {
    return null;
  }
  return isAuthenticated ? children : null;
};

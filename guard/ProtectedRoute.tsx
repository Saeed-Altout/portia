"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import cookieStorage from "@/services/cookie-storage";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = cookieStorage.getAccessToken();

    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return children;
};

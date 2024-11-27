"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/use-auth-store";
import { routeMiddleware, Role } from "@/utils/route-middleware";

interface MiddlewareProps {
  role: Role;
  children: React.ReactNode;
}

export const MiddlewareWrapper = ({ role, children }: MiddlewareProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    routeMiddleware(role, isAuthenticated, router);
    return () => setIsMounted(false);
  }, [role, isAuthenticated, router]);

  if (!isMounted) return null;

  return <>{children}</>;
};

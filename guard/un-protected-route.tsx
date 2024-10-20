"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getAccessToken } from "@/lib/auth";

export const UnProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken();
    console.log(!!token);

    if (!!token) {
      router.push("/dashboard");
    }
  }, [router]);

  return children;
};

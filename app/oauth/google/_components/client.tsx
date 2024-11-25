"use client";

import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { setToken } from "@/utils/cookie";
import { Button } from "@/components/ui/button";
export const GoogleClient = () => {
  const token = useSearchParams().get("callback");
  const router = useRouter();

  useEffect(() => {
    if (token) {
      setToken(token);
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, []);

  return (
    <div className="h-full flex justify-center items-center">
      <Button variant="outline">
        Redirecting to dashboard
        <Loader className="animate-spin ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

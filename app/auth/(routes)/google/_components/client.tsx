"use client";

import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { setToken, setUser } from "@/utils/cookie";
import { Button } from "@/components/ui/button";
import { useGetUserDetails } from "@/hooks/dashboard";
export const GoogleClient = () => {
  const token = useSearchParams().get("callback");
  const router = useRouter();
  const { data, isPending, isSuccess, refetch } = useGetUserDetails();

  useEffect(() => {
    if (token) {
      setToken(token);
      if (isSuccess) {
        setUser(data.data);
        window.location.assign("/dashboard");
      } else {
        refetch();
      }
    } else {
      window.location.assign("/auth/login");
    }
  }, [isSuccess, refetch, token]);

  return (
    <div className="h-full flex justify-center items-center">
      <Button variant="outline">
        {isPending ? "Redirecting to dashboard" : "Verify your information"}
        <Loader className="animate-spin ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

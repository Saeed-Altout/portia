"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";

import { setToken, setUser } from "@/lib/cookie";
import { useGetUserQuery } from "@/services/settings/hooks";
import { ROUTES } from "@/config/constants";

export const GoogleForm = () => {
  const token = useSearchParams().get("callback");
  const { data, isPending, isSuccess, refetch } = useGetUserQuery();

  useEffect(() => {
    if (token) {
      setToken(token);
      if (isSuccess) {
        setUser(data.data);
        location.assign(ROUTES.DASHBOARD_HOME);
      } else {
        refetch();
      }
    } else {
      location.assign(ROUTES.LOGIN);
    }
  }, [data, isSuccess, refetch, token]);

  return (
    <div className="h-full flex justify-center items-center">
      <Button variant="outline">
        {isPending ? "Redirecting to dashboard" : "Verify your information"}
        <Loader className="animate-spin ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

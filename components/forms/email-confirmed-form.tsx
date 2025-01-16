"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { CheckCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Circle, Icon } from "@/components/ui/circle-icon";
import { BackButton } from "@/components/back-button";

import { setToken } from "@/lib/cookie";
import { ROUTES } from "@/config/constants";

export const EmailConfirmedForm = () => {
  const token = useSearchParams().get("token");

  useEffect(() => {
    if (token) setToken(token);
  }, [token]);

  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3">
        <Circle size="lg" fill="success">
          <Icon size="lg" theme="success" icon={CheckCircle} />
        </Circle>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          Email verified
        </CardTitle>
        <CardDescription className="text-center">
          Your password has been successfully reset. Click below to log in
          magically.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          onClick={() => {
            location.assign(ROUTES.DASHBOARD_HOME);
          }}
        >
          Continue to dashboard
        </Button>
      </CardContent>
      <CardFooter>
        <BackButton label="Back to home" href={ROUTES.HOME} />
      </CardFooter>
    </Card>
  );
};

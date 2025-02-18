"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle, Icon } from "@/components/ui/circle-icon";
import { ROUTES } from "@/config/constants";

export const PasswordResetForm = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push(ROUTES.LOGIN);
    }, 3000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3">
        <Circle size="lg" fill="success">
          <Icon size="lg" theme="success" icon={CheckCircle} />
        </Circle>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          Password reset
        </CardTitle>
        <CardDescription className="text-center">
          Your password has been successfully reset.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

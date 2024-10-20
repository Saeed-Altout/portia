"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { setAccessToken } from "@/lib/auth";
import { BackButton } from "@/components/auth";

import { Circle, Icon } from "../../ui/circle-icon";

export const EmailConfirmedForm = () => {
  const params = useSearchParams();
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      setAccessToken(token);
    }
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
        <Button className="w-full" asChild>
          <Link href="/dashboard">Continue to dashboard</Link>
        </Button>
      </CardContent>
      <CardFooter>
        <BackButton label="Back to home" href="/" />
      </CardFooter>
    </Card>
  );
};

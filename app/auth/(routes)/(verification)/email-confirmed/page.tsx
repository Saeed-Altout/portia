"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Circle, Icon } from "@/components/shared/circle-icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BackButton } from "@auth/_components";

import cookieStorage from "@/services/cookie-storage";

export default function EmailConfirmedPage() {
  const [token, setToken] = useState<string | null>(null);
  const params = useSearchParams();

  useEffect(() => {
    if (token) {
      cookieStorage.setAccessToken(token);
    } else {
      cookieStorage.removeAccessToken();
    }
  }, [token]);

  useEffect(() => {
    if (params) {
      const token = params.get("token");
      setToken(token);
    }
  }, [params]);

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
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Circle, Icon } from "@/components/circle-icon";

import { BackButton } from "@auth/_components";

export default function VerifyEmailForm() {
  const params = useSearchParams();
  const email = params.get("email");

  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3">
        <Circle size="lg">
          <Icon size="lg" icon={Mail} />
        </Circle>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          Check your email
        </CardTitle>
        <CardDescription className="text-center">
          We sent a password reset link to
          {email != "null" && email && (
            <span className="font-medium block text-wrap">{email}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">
          <Link href={`/auth/verify-code?email=${email! && email}`}>
            Enter code manually
          </Link>
        </Button>
      </CardContent>
      <CardFooter>
        <BackButton />
      </CardFooter>
    </Card>
  );
}

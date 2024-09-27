"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardMinForm } from "@/components/auth/card-min-form";

export const EmailVerificationForm = () => {
  return (
    <CardMinForm
      title="Check your email"
      description="We sent a password reset link to"
      backHrefButton="/auth/login"
      backLabelButton="Back to log in"
      email="Jafar_shamma@gmail.com"
      icon={Mail}
    >
      <Button className="w-full">
        <Link href="/auth/code-verification">Enter code manually</Link>
      </Button>
    </CardMinForm>
  );
};

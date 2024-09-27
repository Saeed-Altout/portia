"use client";

import * as React from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardMinForm } from "@/components/auth/card-min-form";

import localStorage from "@/services/local-storage-service";
import { Routes } from "@/config";

export default function EmailVerificationPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");

  React.useEffect(() => {
    const currentEmail = localStorage.getEmail();
    if (currentEmail) {
      setEmail(email);
    } else {
      router.push(Routes.REGISTER);
    }
  }, [router, email]);

  return (
    <CardMinForm
      title="Check your email"
      description="We sent a password reset link to"
      backHrefButton={Routes.LOGIN}
      backLabelButton="Back to log in"
      email={email}
      icon={Mail}
    >
      <Button className="w-full">
        <Link href={Routes.CODE_VERIFICATION}>Enter code manually</Link>
      </Button>
    </CardMinForm>
  );
}

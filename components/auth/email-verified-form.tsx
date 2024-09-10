"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardMinForm } from "@/components/auth/card-min-form";

export const EmailVerifiedForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <CardMinForm
      title="Email verified"
      description="Your password has been successfully reset. Click below to log in magically."
      backHrefButton="/auth/login"
      backLabelButton="Back to log in"
      icon={CheckCircle}
      variant="success"
      redirect
    >
      <Button className="w-full" disabled={isLoading} asChild>
        <Link href="/">Continue</Link>
      </Button>
    </CardMinForm>
  );
};

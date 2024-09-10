"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardMinForm } from "@/components/auth/card-min-form";

export const CheckYourEmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <CardMinForm
      title="Check your email"
      description="We sent a password reset link to"
      backHrefButton="/auth/login"
      backLabelButton="Back to log in"
      email="Jafar_shamma@gmail.com"
      icon={Mail}
      redirect
    >
      <Button className="w-full" disabled={isLoading}>
        Open email app
      </Button>
    </CardMinForm>
  );
};

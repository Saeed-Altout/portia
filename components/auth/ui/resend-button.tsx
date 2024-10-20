"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useResendVerificationCode } from "@/features/auth/hooks";

interface ResendButtonProps {
  label?: string;
  message?: string;
}

export const ResendButton = ({
  label = "Click to resend",
  message = "Didn’t receive the email?",
}: ResendButtonProps) => {
  const params = useSearchParams();
  const email = params.get("email");

  const { mutate, isPending } = useResendVerificationCode();

  return (
    <div className="flex items-center justify-center">
      <p className="text !text-sm text-center text-nowrap">{message}</p>
      <Button
        variant="link"
        className="px-0 hover:underline !text-primary font-medium text-nowrap ml-2"
        onClick={() => mutate({ email: email ?? "" })}
        disabled={isPending}
      >
        {label}
      </Button>
    </div>
  );
};

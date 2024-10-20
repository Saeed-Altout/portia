import { Suspense } from "react";

import { VerifyRestEmailForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Verify Password Reset Email | Complete Your Recovery",
  description:
    "Confirm your password reset request through a secure email verification link. Ensure the authenticity of your password reset process.",
};

export default function VerifyRestEmailPage() {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyRestEmailForm />
    </Suspense>
  );
}

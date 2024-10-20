import { Suspense } from "react";

import { VerifyRestCodeForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Enter Verification Code | Secure Email Validation",
  description:
    "Enter the code sent to your email to verify your account. Strengthen your security by validating your email through our trusted process.",
};

export default function VerifyCodePage() {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyRestCodeForm />
    </Suspense>
  );
}

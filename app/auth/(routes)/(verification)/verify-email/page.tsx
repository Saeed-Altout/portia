import { Suspense } from "react";

import { VerifyEmailForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Verify Your Email Address | Complete Account Setup",
  description:
    "Validate your email to complete the account setup process. Enhance account security with a quick email verification step.",
};

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyEmailForm />
    </Suspense>
  );
}

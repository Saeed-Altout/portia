import { Suspense } from "react";

import { Loader } from "@/components/ui/loader";
import VerifyEmailForm from "@/app/auth/_components/verify-email-form";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyEmailForm />
    </Suspense>
  );
}

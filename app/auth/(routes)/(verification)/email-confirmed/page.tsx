import { Suspense } from "react";

import { EmailConfirmedForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Email Successfully Confirmed | Verification Complete",
  description:
    "Your email has been successfully confirmed. Proceed to access your account with full privileges and enhanced security measures.",
};

export default function EmailConfirmedPage() {
  return (
    <Suspense fallback={<Loader />}>
      <EmailConfirmedForm />
    </Suspense>
  );
}

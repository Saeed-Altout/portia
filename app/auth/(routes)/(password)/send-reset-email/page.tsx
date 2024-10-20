import { Suspense } from "react";

import { SendResetEmailForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Send Password Reset Email | Account Recovery",
  description:
    "Receive a password reset email with a secure link to update your credentials. Stay safe with our encrypted reset email service.",
};

export default function SendResetEmailPage() {
  return (
    <Suspense fallback={<Loader />}>
      <SendResetEmailForm />
    </Suspense>
  );
}

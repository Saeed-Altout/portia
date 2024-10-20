import { Suspense } from "react";

import { NewPasswordForm } from "@/components/auth/forms/new-password-form";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Set a New Password | Secure Your Account",
  description:
    "Update your password securely and regain access to your account. Use our guided process to reset your password following secure practices.",
};

export default function NewPasswordPage() {
  return (
    <Suspense fallback={<Loader />}>
      <NewPasswordForm />
    </Suspense>
  );
}

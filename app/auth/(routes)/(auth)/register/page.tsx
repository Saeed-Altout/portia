import { Suspense } from "react";

import { RegisterForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Register a New Account | Sign Up Securely",
  description:
    "Create a new account quickly and securely. Our registration system ensures the protection of your personal data with multi-factor authentication.",
};

export default function RegisterPage() {
  return (
    <Suspense fallback={<Loader />}>
      <RegisterForm />
    </Suspense>
  );
}

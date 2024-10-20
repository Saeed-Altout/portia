import { Suspense } from "react";

import { LoginForm } from "@/components/auth";
import { Loader } from "@/components/ui/loader";

export const metadata = {
  title: "Secure User Login | Access Your Account",
  description:
    "Login securely to your account using encrypted authentication methods. Ensure data privacy and smooth access with our reliable login system.",
};

export default function LoginPage() {
  return (
    <Suspense fallback={<Loader />}>
      <LoginForm />
    </Suspense>
  );
}

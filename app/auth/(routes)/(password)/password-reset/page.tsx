import { PasswordResetForm } from "@/components/auth";

export const metadata = {
  title: "Password Reset Request | Recover Account Access",
  description:
    "Forgot your password? Initiate a password reset process and regain control of your account in just a few steps. Fast and secure recovery.",
};

export default function PasswordResetPage() {
  return <PasswordResetForm />;
}

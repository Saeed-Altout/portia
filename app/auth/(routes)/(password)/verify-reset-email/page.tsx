import { VerifyRestEmailForm } from "@/components/forms/verify-reset-email-form";

export const metadata = {
  title: "Verify Password Reset Email | Complete Your Recovery",
  description:
    "Confirm your password reset request through a secure email verification link. Ensure the authenticity of your password reset process.",
};

export default function VerifyRestEmailPage() {
  return <VerifyRestEmailForm />;
}

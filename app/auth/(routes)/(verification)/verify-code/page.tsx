import { VerifyRestCodeForm } from "@/components/forms/verify-reset-code-form";

export const metadata = {
  title: "Enter Verification Code | Secure Email Validation",
  description:
    "Enter the code sent to your email to verify your account. Strengthen your security by validating your email through our trusted process.",
};

export default function VerifyCodePage() {
  return <VerifyRestCodeForm />;
}

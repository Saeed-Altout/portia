import { VerifyEmailForm } from "@/components/forms/verify-email-form";

export const metadata = {
  title: "Verify Your Email Address | Complete Account Setup",
  description:
    "Validate your email to complete the account setup process. Enhance account security with a quick email verification step.",
};

export default function VerifyEmailPage() {
  return <VerifyEmailForm />;
}

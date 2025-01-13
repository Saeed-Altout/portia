import { EmailConfirmedForm } from "@/components/forms/email-confirmed-form";

export const metadata = {
  title: "Email Successfully Confirmed | Verification Complete",
  description:
    "Your email has been successfully confirmed. Proceed to access your account with full privileges and enhanced security measures.",
};

export default function EmailConfirmedPage() {
  return <EmailConfirmedForm />;
}

import { NewPasswordForm } from "@/components/forms/new-password-form";

export const metadata = {
  title: "Set a New Password | Secure Your Account",
  description:
    "Update your password securely and regain access to your account. Use our guided process to reset your password following secure practices.",
};

export default function NewPasswordPage() {
  return <NewPasswordForm />;
}

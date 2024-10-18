import { UnProtectedRoute } from "@/guard/UnProtectedRoute";

export const metadata = {
  title: "Authentication",
  description:
    "Manage your account with secure login, registration, password recovery, and verification.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UnProtectedRoute>
      <div className="flex flex-row justify-center items-start min-h-screen w-full">
        {children}
      </div>
    </UnProtectedRoute>
  );
}

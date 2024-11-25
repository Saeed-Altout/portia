import { UnProtectedRoute } from "@/guard/un-protected-route";

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
      <div className="flex flex-row justify-center items-start h-full w-full">
        {children}
      </div>
    </UnProtectedRoute>
  );
}

import { MiddlewareWrapper } from "@/components/middleware-wrapper";

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
    <MiddlewareWrapper role="guest">
      <div className="flex flex-row justify-center items-start h-full w-full">
        {children}
      </div>
    </MiddlewareWrapper>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Secure login and authentication page for Portia.io",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row justify-center items-start min-h-screen w-full">
      {children}
    </div>
  );
}

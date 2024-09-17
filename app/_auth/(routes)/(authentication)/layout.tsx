import { Metadata } from "next";

import { Sidebar } from "./_components/sidebar";

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
    <div className="flex flex-row min-h-screen w-full">
      <Sidebar />
      <div className="h-screen w-full flex justify-center items-center lg:w-1/3 mx-auto">
        {children}
      </div>
    </div>
  );
}

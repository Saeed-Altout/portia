import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { SessionProvider } from "@/providers/session-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <SessionProvider>
              {children}
              <Toaster />
            </SessionProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

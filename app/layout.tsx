import "./globals.css";

import type { Metadata } from "next";
import { siteConfig } from "@/config";

import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/providers/query-provider";
import { NotificationProviders } from "@/providers/notification-provider";

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
          {children}
          <Toaster />
          <NotificationProviders />
        </QueryProvider>
      </body>
    </html>
  );
}

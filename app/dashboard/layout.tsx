import { Banner } from "./_components/banner";
import { Navbar } from "./_components/navbar";

import { ModalProviders } from "@/providers/modals-provider";
import { DashboardProvider } from "@/providers/dashboard-provider";
import { MiddlewareWrapper } from "@/components/middleware-wrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MiddlewareWrapper role="user">
      <ModalProviders />
      <div className="min-h-full flex flex-col">
        <DashboardProvider>
          <Banner />
          <Navbar />
          <main className="flex flex-1 flex-col py-6 px-4 md:px-6">
            <div className="flex-1 space-y-8">{children}</div>
          </main>
        </DashboardProvider>
      </div>
    </MiddlewareWrapper>
  );
}

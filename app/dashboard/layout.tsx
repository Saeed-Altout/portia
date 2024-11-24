import { Banner, Navbar } from "@/components/dashboard";
import { ProtectedRoute } from "@/guard/protected-route";
import { ModalProviders } from "@/providers/modals-provider";
import { DashboardProvider } from "@/providers/dashboard-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <ModalProviders />
      <div className="flex min-h-screen w-full flex-col">
        <DashboardProvider>
          <Banner />
          <Navbar />
          <main className="flex flex-1 flex-col py-6 px-4 md:px-6">
            <div className="flex-1 space-y-8">{children}</div>
          </main>
        </DashboardProvider>
      </div>
    </ProtectedRoute>
  );
}

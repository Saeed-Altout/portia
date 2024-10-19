import { Banner, Navbar } from "@/components/dashboard";
import { SessionProvider } from "@/providers/session-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Banner />
        <Navbar />
        <main className="flex flex-1 flex-col py-6 px-4 md:px-6">
          <div className="w-full flex-1 space-y-8">{children}</div>
        </main>
      </div>
    </SessionProvider>
  );
}

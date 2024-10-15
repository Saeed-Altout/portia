import { SessionProvider } from "@/contexts/session-provider";
import { Banner } from "./_layouts/banner";
import { Navbar } from "./_layouts/navbar";
import { StoreContextProvider } from "./contexts/store-context";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreContextProvider>
      <SessionProvider>
        <div className="flex min-h-screen w-full flex-col">
          <Banner />
          <Navbar />
          <main className="flex flex-1 flex-col py-6 px-4 md:px-6">
            <div className="w-full flex-1 space-y-8">{children}</div>
          </main>
        </div>
      </SessionProvider>
    </StoreContextProvider>
  );
}

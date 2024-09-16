import { Banner } from "./_layouts/banner";
import { Navbar } from "./_layouts/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="w-full space-y-8">{children}</div>
      </main>
    </div>
  );
}

import { Navbar } from "./_layouts/navbar";
import { Footer } from "./_layouts/footer";
import { SessionProvider } from "@/providers/session-provider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
      <Footer />
    </SessionProvider>
  );
}

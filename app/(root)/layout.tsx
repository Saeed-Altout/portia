import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

import { MiddlewareWrapper } from "@/components/middleware-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MiddlewareWrapper role="all">
      <Navbar />
      {children}
      <Footer />
    </MiddlewareWrapper>
  );
}

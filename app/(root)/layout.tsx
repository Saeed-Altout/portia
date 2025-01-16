import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

import { MiddlewareWrapper } from "@/components/middleware-wrapper";
import { AcceptCookiesSheet } from "@/components/sheets/accept-cookie-sheet";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MiddlewareWrapper role="all">
      <Navbar />
      {children}
      <AcceptCookiesSheet />
      <Footer />
    </MiddlewareWrapper>
  );
}

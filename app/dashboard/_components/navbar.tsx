"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Menu, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NotificationsPopover } from "@/components/notifications/notifications-popover";
import { dashboardRoutes, ROUTES } from "@/config/constants";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-[72px] items-center gap-4 bg-background px-4 md:px-6 z-10 border-b">
      <nav className="hidden md:flex flex-row items-center gap-6">
        <Link
          href={ROUTES.DASHBOARD_HOME}
          className="relative h-[27px] w-[91px]"
        >
          <Image src="/icons/logo.svg" alt="Logo" fill priority />
        </Link>
        <div className="flex justify-start items-center gap-x-2">
          {dashboardRoutes.map(({ label, href }, key) => (
            <>
              {href != ROUTES.CONTACT_US && (
                <Button
                  key={key}
                  variant="ghost"
                  size="sm"
                  className={cn(href === pathname && "bg-secondary")}
                  asChild
                >
                  <Link href={href}>{label}</Link>
                </Button>
              )}
            </>
          ))}
        </div>
      </nav>

      <MobileNav pathname={pathname} />

      <div className="flex items-center gap-x-2 w-fit ml-auto">
        <Button size="icon" variant="ghost" asChild>
          <Link href={ROUTES.DASHBOARD_SETTINGS}>
            <Settings className="h-4 w-4 text-gray-500" />
            <span className="sr-only">Settings</span>
          </Link>
        </Button>
        <NotificationsPopover />
      </div>
    </header>
  );
};

const MobileNav = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <Link
          href={ROUTES.DASHBOARD_HOME}
          className="relative h-[27px] w-[91px] block"
        >
          <Image src="/icons/logo.svg" alt="Logo" fill priority />
        </Link>
        <div className="w-full mt-10 flex flex-col justify-start items-center gap-y-3">
          {dashboardRoutes.map(({ label, href }, key) => (
            <Button
              key={key}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                href === pathname && "bg-secondary"
              )}
              onClick={() => setIsOpen(false)}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

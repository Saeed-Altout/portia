"use client";

import Link from "next/link";
import Image from "next/image";

import { Bell, Menu, Settings } from "lucide-react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "My Proxies",
      href: "/my-proxies",
      active: pathname === "/my-proxies",
    },
    {
      label: "Pricing Plans",
      href: "/pricing-plans",
      active: pathname === "/pricing-plans",
    },
    {
      label: "Deposits",
      href: "/deposits",
      active: pathname === "/deposits",
    },
  ];

  return (
    <header className="sticky top-0 flex h-[72px] items-center gap-4 bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/dashboard" className="relative h-[27px] w-[91px]">
          <Image src="/icons/logo.svg" alt="Logo" fill />
        </Link>
        <div className="flex justify-start items-center gap-x-2">
          {routes.map(({ label, href, active }, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(active && "bg-secondary transition-all")}
              asChild
            >
              <Link key={index} href={href}>
                {label}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="overflow-y-auto">
          <Link href="/dashboard" className="relative h-[27px] w-[91px] block">
            <Image src="/icons/logo.svg" alt="Logo" fill />
          </Link>
          <div className="w-full mt-10 flex flex-col justify-start items-center gap-y-4">
            {routes.map(({ label, href, active }, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full",
                  active && "bg-secondary transition-all"
                )}
                asChild
              >
                <Link key={index} href={href}>
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-x-2 w-fit ml-auto">
        <Button size="icon" variant="ghost">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button size="icon" variant="ghost">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Bell</span>
        </Button>
      </div>
    </header>
  );
};

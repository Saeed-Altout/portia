"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Bell, Menu, Settings } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { routes } from "@dashboard/constants";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-[72px] items-center gap-4 bg-background px-4 md:px-6 z-10">
      {/* Main navbar  */}
      <nav className="hidden md:flex flex-row items-center gap-6">
        {/* Logo */}
        <Link href="/dashboard" className="relative h-[27px] w-[91px]">
          <Image src="/icons/logo.svg" alt="Logo" fill />
        </Link>
        {/* Routes */}
        <div className="flex justify-start items-center gap-x-2">
          {routes.map(({ label, href }, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(href === pathname && "bg-secondary transition-all")}
              asChild
            >
              <Link key={index} href={href}>
                {label}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
      {/* Mobile navbar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="overflow-y-auto">
          {/* Logo */}
          <Link href="/dashboard" className="relative h-[27px] w-[91px] block">
            <Image src="/icons/logo.svg" alt="Logo" fill />
          </Link>
          {/* Routes */}
          <div className="w-full mt-10 flex flex-col justify-start items-center gap-y-5">
            {routes.map(({ label, href }, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full",
                  href === pathname && "bg-secondary transition-all"
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

      {/* Icons navbar */}
      <div className="flex items-center gap-x-2 w-fit ml-auto">
        <Button size="icon" variant="ghost" asChild>
          <Link href="/dashboard/settings">
            <Settings className="h-4 w-4 text-gray-primary" />
            <span className="sr-only">Settings icon</span>
          </Link>
        </Button>
        <Button size="icon" variant="ghost" asChild>
          <Link href="/dashboard/notifications">
            <Bell className="h-4 w-4 text-gray-primary" />
            <span className="sr-only">Bell icon</span>
          </Link>
        </Button>
      </div>
    </header>
  );
};

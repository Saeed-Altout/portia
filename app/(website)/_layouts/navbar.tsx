"use client";

import { NavMain } from "@/app/(website)/_components/navbar/nav-main";
import { NavMobile } from "@/app/(website)/_components/navbar/nav-mobile";

import { Logo } from "@/components/common/Logo";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="shadow-md h-16 w-full flex justify-center items-center">
      <div className="max-container flex justify-between items-center">
        <Logo />
        <NavMain />
        <NavMobile />
        <div className="hidden md:flex items-center justify-end gap-x-4">
          {/* TODO: Update function of this buttons */}
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMain, NavMobile } from "@/app/_(website)/_components/navbar";
import { Container } from "@/app/_(website)/_components/ui/container";

export const Navbar = () => {
  return (
    <header className="shadow-md h-20 w-full flex justify-center items-center">
      <Container className="w-full flex-row justify-between items-center">
        <Logo />
        <NavMain />
        <NavMobile />
        <div className="hidden lg:flex items-center justify-end gap-x-4">
          <Button variant="ghost" className="text-gray-primary" asChild>
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button>Get Started</Button>
        </div>
      </Container>
    </header>
  );
};
"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

import { Container } from "@/components/root/ui/container";
import { NavMain, NavMobile } from "@/components/root/navbar";

import { useAuthStore } from "@/stores";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="shadow-md h-20 w-full flex justify-center items-center">
      <Container className="w-full flex-row justify-between items-center">
        <Logo redirectTo="/" />
        <NavMain />
        <NavMobile />
        <div className="hidden lg:flex items-center justify-end gap-x-4">
          {!isAuthenticated && <LoginButton />}
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

const LoginButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  });

  if (!isMounted) {
    return null;
  }
  return (
    <Button variant="ghost" className="text-gray-500" asChild>
      <Link href="/auth/login">Log in</Link>
    </Button>
  );
};

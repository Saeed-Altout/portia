"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores";

const DEFAULT_LANGUAGE = "en";

export const AcceptCookiesSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent && isAuthenticated) {
      setIsOpen(true);
    }
  }, [isAuthenticated]);

  const handleAcceptCookies = () => {
    setCookie("cookieConsent", "accepted", { maxAge: 30 * 24 * 60 * 60 });
    setCookie("lang", DEFAULT_LANGUAGE, { maxAge: 30 * 24 * 60 * 60 });
    setIsOpen(false);
  };

  const handleRejectCookies = () => {
    setCookie("cookieConsent", "rejected", { maxAge: 30 * 24 * 60 * 60 });
    setCookie("lang", DEFAULT_LANGUAGE, { maxAge: 30 * 24 * 60 * 60 });
    setIsOpen(false);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="bottom" className="rounded-t-lg flex flex-col gap-5">
        <div className="w-full md:max-w-[80%] space-y-3">
          <SheetTitle className="text-2xl font-semibold text-primary">
            We Value Your Privacy
          </SheetTitle>
          <SheetDescription className="text-base">
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking{" "}
            <strong>Accept All</strong>, you consent to our use of cookies.
          </SheetDescription>
          <SheetDescription className="text-base">
            You can change your preferences at any time by clicking the{" "}
            <strong>Cookie Settings</strong> button below.
          </SheetDescription>
        </div>
        <div className="flex gap-4 w-full items-center">
          <Button onClick={handleAcceptCookies}>Accept All</Button>
          <Button onClick={handleRejectCookies} variant="outline">
            Reject All
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

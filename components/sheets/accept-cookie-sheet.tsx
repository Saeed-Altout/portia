"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores";
import { Cookie } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DEFAULT_LANGUAGE = "en";

export const AcceptCookiesSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent) {
      setIsOpen(true);
    }
  }, []);

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
    console.log("User is not authenticated.");
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="fixed bottom-4 right-4 rounded-full"
                size="icon"
              >
                <Cookie />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Cookie Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

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
        <div className="flex gap-4 w-full justify-end">
          <Button onClick={handleAcceptCookies}>Accept All</Button>
          <Button onClick={handleRejectCookies} variant="outline">
            Reject All
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

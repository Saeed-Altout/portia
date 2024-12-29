"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const bannerState = localStorage.getItem("banner");
    if (bannerState === "dismissed") {
      setIsVisible(false);
    }
    return () => setIsMounted(false);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("banner", "dismissed");
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative min-h-[62px] px-3 py-2 md:py-0 md:px-4 flex items-center justify-center",
        `bg-gradient-to-t from-[#03055E] to-[#111280]`
      )}
    >
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-white max-w-[90%] md:max-w-none text-center md:text-left">
        <p className="text-xs text-white md:text-base leading-tight">
          <span className="font-medium whitespace-nowrap">
            We&apos;ve just launched a new feature!
          </span>
          <span className="hidden md:inline ml-1">Check out the</span>
        </p>
        <Link
          href="/"
          className="text-xs md:text-base underline underline-offset-4 hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          new dashboard
        </Link>
      </div>

      <Button
        onClick={handleDismiss}
        size="icon"
        variant="ghost"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-8 w-8 md:h-9 md:w-9"
      >
        <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
        <span className="sr-only">Dismiss banner</span>
      </Button>
    </div>
  );
};

"use client";

import * as React from "react";

import Link from "next/link";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useBanner } from "@dashboard/hooks/use-banner";

export const Banner = () => {
  const { isClose, onClose } = useBanner();

  return (
    <div
      className={cn(
        "relative text-white bg-gradient-to-t from-[#03055E] to-[#111280] h-[62px] md:h-[62px] px-4 flex justify-center items-center",
        isClose && "hidden"
      )}
    >
      <p className="text-sm md:text-base">
        <span className="mr-2 font-medium">
          We&apos;ve just launched a new feature!
        </span>
        Check out the
        <Link
          href="/"
          className="ml-0 md:ml-2 underline underline-offset-4 inline-block"
        >
          new dashboard.
        </Link>
      </p>
      <Button
        className="!bg-transparent hover:!text-white absolute right-4 top-[50%] translate-y-[-50%]"
        size="icon"
        variant="ghost"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close Banner</span>
      </Button>
    </div>
  );
};

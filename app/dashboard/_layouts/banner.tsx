"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export const Banner = () => {
  const [isClose, setIsClose] = useState<boolean>(false);

  const onClose = () => {
    setIsClose(true);
    localStorage.setItem("bannerState", "close");
  };

  useEffect(() => {
    const bannerState = localStorage.getItem("bannerState");
    if (bannerState) {
      setIsClose(true);
    }
  }, []);

  return (
    <div
      className={cn(
        "relative text-white bg-gradient-to-t from-[#03055E] to-[#111280] flex justify-center items-center gap-x-1 h-[52px]",
        isClose && "hidden"
      )}
    >
      <p>
        <span className="mr-2 font-medium">
          We've just launched a new feature!
        </span>
        Check out the
      </p>
      <Link href="/" className="underline underline-offset-4">
        new dashboard.
      </Link>

      <Button
        className="!bg-transparent hover:!text-white absolute right-4 top-[50%] translate-y-[-50%]"
        size="icon"
        variant="ghost"
        onClick={() => onClose()}
      >
        <span className="sr-only">Close Banner</span>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

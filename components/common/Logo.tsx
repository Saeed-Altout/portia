"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-xl text-primary font-semibold tracking-wide",
        className
      )}
    >
      {/* TODO: Update Logo */}
      Portia
    </Link>
  );
};

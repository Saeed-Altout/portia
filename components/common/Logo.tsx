"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({
  dark = false,
  className,
}: {
  dark?: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link href="/" className={cn("w-[92px] h-[28px]", className)}>
      {!dark && (
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain"
        />
      )}
      {dark && (
        <Image
          src="/icons/logo-dark.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain"
        />
      )}
    </Link>
  );
};

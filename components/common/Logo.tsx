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
    <Link href="/" className={cn("w-[70px] h-[30px]", className)}>
      {!dark && (
        <Image
          src="/images/logo-dark.png"
          alt="Logo"
          width={90}
          height={30}
          className="object-contain"
        />
      )}
      {dark && (
        <Image
          src="/images/logo-light.png"
          alt="Logo"
          width={90}
          height={30}
          className="object-contain"
        />
      )}
    </Link>
  );
};

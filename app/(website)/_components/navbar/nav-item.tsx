"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const NavItem = ({
  label,
  href,
  active,
  className,
}: {
  label: string;
  href: string;
  active: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <NavigationMenuItem className="w-full">
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            "text-base font-medium",
            active && "text-black",
            "text-muted-foreground/80",
            className
          )}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

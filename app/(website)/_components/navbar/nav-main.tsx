"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { NavItem } from "@website/_components/navbar";
import { navLinks } from "@website/constants";

export const NavMain = () => {
  const pathname = usePathname();

  return (
    <div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-x-8">
          {navLinks.map(({ label, href, links }, index) => (
            <div key={index}>
              {links ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-base font-medium",
                      "text-muted-foreground/80",
                      pathname.startsWith(href) && "text-primary"
                    )}
                  >
                    {label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuList className="w-[200px] flex-col gap-y-2 space-x-0 justify-start pt-4 pb-2 px-2">
                      {links.map((link, index) => (
                        <NavItem
                          key={index}
                          href={link.href}
                          label={link.label}
                          active={pathname.startsWith(link.href)}
                          className="w-full justify-start"
                        />
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavItem
                  key={index}
                  href={href}
                  label={label}
                  active={pathname.startsWith(href)}
                />
              )}
            </div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

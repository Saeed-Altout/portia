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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavItem } from "@/app/(website)/_components/nav-item";

import { NAV_LINKS } from "../config";

export const NavMain = () => {
  const pathname = usePathname();

  return (
    <div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {NAV_LINKS.map(({ label, href, links }, index) => (
            <div key={index}>
              {links ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
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

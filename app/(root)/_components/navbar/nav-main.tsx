"use client";

import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

import { NavItem } from "@/app/(root)/_components/navbar";
import { navbarLinks, navLinks } from "@/app/(root)/constants";

export const NavMain = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:flex relative z-[1000]">
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
                <NavigationMenuContent className="bg-white">
                  <ul className="w-[640px] py-5 px-6 space-y-2">
                    {links.map(({ href, label, description }, index) => (
                      <ListItem key={index} href={href} title={label}>
                        {description}
                      </ListItem>
                    ))}
                  </ul>
                  <Separator />
                  <div className="px-6 py-5 flex items-center justify-between gap-2">
                    {navbarLinks.map(({ name, icon: Icon, href }, index) => (
                      <Link
                        key={index}
                        href={href}
                        className="flex justify-center items-center gap-4"
                      >
                        <Icon className="h-6 w-6" />
                        {name}
                      </Link>
                    ))}
                  </div>
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
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

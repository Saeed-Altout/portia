"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-dropdown";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useAuthStore } from "@/stores/use-auth-store";
import { navLinks, ROUTES, sidebarLinks } from "@/config/constants";
import { SocialLinks } from "./social-links";

export const Navbar = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="shadow-md h-20 flex justify-center items-center">
      <div className="screen w-full flex justify-between items-center">
        <Logo redirectTo={ROUTES.HOME} />
        <NavMain />
        <NavMobile />
        <div className="hidden lg:flex items-center justify-end gap-x-4">
          {!isAuthenticated && <LoginButton />}
          <Button asChild>
            <Link href={ROUTES.DASHBOARD_HOME}>
              {isAuthenticated ? "Dashboard" : "Get started"}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const LoginButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Button variant="ghost" className="text-gray-500" asChild>
      <Link href={ROUTES.LOGIN}>Log in</Link>
    </Button>
  );
};

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
                    "text-base font-medium text-muted-foreground/80 hover:text-primary transition-all",
                    pathname.includes(href) && "text-primary"
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

export const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { isAuthenticated } = useAuthStore();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col gap-y-3 overflow-y-auto">
        <SheetHeader>
          <Logo redirectTo={ROUTES.HOME} />
        </SheetHeader>
        <div className="flex flex-col gap-10 h-full">
          <div className="flex flex-col flex-1">
            {navLinks.map(({ label, href, links }, index) => (
              <React.Fragment key={index}>
                {links ? (
                  <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={`item-${index + 1}`}>
                      <AccordionTrigger>{label}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {links.map(({ href, label, description }, key) => (
                            <li key={key} className="w-full">
                              <Link
                                href={href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                <h3 className="text-sm font-medium leading-none">
                                  {label}
                                </h3>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <ul key={index} className="w-full py-3">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={href}
                      className="font-medium"
                    >
                      {label}
                    </Link>
                  </ul>
                )}
              </React.Fragment>
            ))}
          </div>
          <Separator />
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-y-5 flex-1">
              {sidebarLinks.map(({ name, href }, key) => (
                <Link
                  key={key}
                  href={href}
                  className="flex justify-start items-center gap-4"
                >
                  {name}
                </Link>
              ))}
            </div>
            <SocialLinks />
          </div>
          <div className="space-y-3 h-fit">
            <Button asChild className="w-full">
              <Link href={ROUTES.DASHBOARD_HOME}>
                {isAuthenticated ? "Dashboard" : "Get started"}
              </Link>
            </Button>
            {!isAuthenticated && <LoginButton />}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

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
            "text-base font-medium hover:text-primary transition-all",
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

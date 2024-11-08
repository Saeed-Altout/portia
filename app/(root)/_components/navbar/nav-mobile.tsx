"use client";

import Link from "next/link";
import * as React from "react";

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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { navbarLinks, navLinks, sidebarLinks } from "@/app/(root)/constants";

import { Logo } from "@/components/logo";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
          <Logo redirectTo="/" />
        </SheetHeader>
        <div className="flex flex-col gap-y-2">
          {navLinks.map(({ label, href, links }, index) => (
            <React.Fragment key={index}>
              {links ? (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger>{label}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {links.map(({ href, label, description }, index) => (
                          <li key={href} className="w-full">
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
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-5 py-5">
          <div className="flex flex-col gap-y-5">
            {navbarLinks.map(({ name, icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex justify-start items-center gap-4"
              >
                <Icon className="h-6 w-6" />
                {name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-5">
            {sidebarLinks.map(({ name, href }, index) => (
              <Link
                key={index}
                href={href}
                className="flex justify-start items-center gap-4"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <Button className="w-full">Get started</Button>
          <Button variant="secondary" className="w-full">
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

"use client";

import Link from "next/link";

import { Logo } from "@/components/common/Logo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { footerIcons, footerLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="bg-black-secondary py-10 text-gray-secondary">
      <div className="max-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-1 sm:col-span-2 space-y-3">
            <Logo dark />
            <p>Your Gateway to Unlimited Browsing.</p>
          </div>
          {footerLinks.map(({ title, links }, index) => (
            <div className="space-y-3 col-span-1" key={index}>
              <h3 className="font-semibold text-base text-white">{title}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link, index) => (
                  <li className="w-full" key={index}>
                    <Link
                      href={link.href}
                      className="text-sm hover:underline hover:text-gray-secondary/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-[#4B4B57] mt-[64px] mb-[30px]" />
        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
          <p className="text-[#9C9CAD]">
            @ 2024 Portia.io All rights reserved.
          </p>
          <ul className="flex items-center justify-center gap-x-2 -order-1 md:order-1">
            {footerIcons.map(({ name, icon: Icon, href }, index) => (
              <Button key={index} variant="link" size="icon" asChild>
                <Link href={href}>
                  <span className="sr-only">{name}</span>
                  <Icon className="h-5 w-5 text-[#9C9CAD]" />
                </Link>
              </Button>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
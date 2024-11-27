import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Container } from "@/components/root/ui/container";
import { footerIcons, footerLinks } from "@/app/(root)/constants";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-black-300 pt-16 pb-12">
      <Container>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 space-y-3">
            <div className="h-[30] w-[100px]">
              <Logo redirectTo="/" dark />
            </div>
            <p className="text !text-gray-200">Your Gateway to Unlimited Browsing.</p>
          </div>
          {footerLinks.map(({ title, links }, index) => (
            <div className="space-y-3 col-span-1" key={index}>
              <h3 className="font-semibold text-sm text-white tracking-wider">{title}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link, index) => (
                  <li className="w-full" key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-200 hover:text-gray-400 hover:underline hover:text-gray-secondary/80"
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
        <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
          <p className="text !text-gray-400">@ {year} Portia.io All rights reserved.</p>
          {/* <div className="flex items-center justify-center gap-x-2 -order-1 md:order-1">
            {footerIcons.map(({ name, icon: Icon, href }, index) => (
              <Button key={index} variant="link" size="icon" asChild>
                <Link href={href}>
                  <span className="sr-only">{name}</span>
                  <Icon className="h-6 w-6 text-gray-400" />
                </Link>
              </Button>
            ))}
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

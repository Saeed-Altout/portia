"use client";

import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";

import { footerLinks, ROUTES } from "@/config/constants";
import { SocialLinks } from "./social-links";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ href, children, className = "" }: FooterLinkProps) => (
  <Link
    href={href}
    className={`text-sm text-gray-200 transition-colors duration-200 hover:text-gray-400 ${className}`}
  >
    {children}
  </Link>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1F] pb-12 pt-16" role="contentinfo">
      <div className="screen">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="space-y-3 sm:col-span-2">
            <div className="h-[30px] w-[100px]">
              <Logo redirectTo={ROUTES.HOME} dark />
            </div>
            <p className="text-gray-200">Your Gateway to Unlimited Browsing.</p>
          </div>

          {footerLinks.map(({ title, links }, sectionIndex) => (
            <div
              className="col-span-1 space-y-3"
              key={`section-${sectionIndex}`}
            >
              <h2 className="text-sm font-semibold tracking-wider text-white">
                {title}
              </h2>
              <nav aria-label={`${title} navigation`}>
                <ul className="flex flex-col gap-3">
                  {links.map((link, linkIndex) => (
                    <li key={`${title}-link-${linkIndex}`}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <Separator
          className="my-12 bg-[#4B4B57]"
          role="separator"
          aria-orientation="horizontal"
        />

        <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
          <p className="text-gray-400">
            © {year} Portia.io. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

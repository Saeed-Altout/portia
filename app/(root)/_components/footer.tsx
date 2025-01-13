"use client";

import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";

import { footerLinks, navLinks } from "@/config/constants";
import { useGetSocialMediaAccountsQuery } from "@/services/settings/hooks";

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

const SocialLinks = () => {
  const { data: socialAccounts } = useGetSocialMediaAccountsQuery();

  if (!socialAccounts?.data?.length) return null;

  return (
    <div className="flex items-center gap-3">
      {socialAccounts.data.map((account) => (
        <Link
          href={account.url}
          key={account.name}
          className="text-gray-200 transition-colors duration-200 hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${account.name} profile`}
        >
          <svg
            dangerouslySetInnerHTML={{ __html: account.tag }}
            className="h-5 w-5"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1F] pb-12 pt-16" role="contentinfo">
      <div className="screen">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="space-y-3 sm:col-span-2">
            <div className="h-[30px] w-[100px]">
              <Logo redirectTo="/" dark />
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
                  {navLinks.map((link, linkIndex) => (
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

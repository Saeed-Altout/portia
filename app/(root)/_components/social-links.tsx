"use client";

import Link from "next/link";
import { useGetSocialMediaAccountsQuery } from "@/services/settings/hooks";
import Image from "next/image";

export const SocialLinks = () => {
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
          <Image
            src={account.icon_url}
            alt={`image-${account.name}`}
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
        </Link>
      ))}
    </div>
  );
};
export const SocialLinksFooter = () => {
  const { data: socialAccounts } = useGetSocialMediaAccountsQuery();

  if (!socialAccounts?.data?.length) return null;

  return (
    <div className="flex items-center gap-3">
      {socialAccounts.data.map((account, key) => (
        <div
          key={key}
          className="bg-white h-10 w-10 rounded-full flex justify-center items-center"
        >
          <Link
            href={account.url}
            className="text-gray-200 transition-colors duration-200 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${account.name} profile`}
          >
            <Image
              src={account.icon_url}
              alt={`image-${account.name}`}
              className="h-6 w-6"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

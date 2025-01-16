"use client";

import Link from "next/link";
import { useGetSocialMediaAccountsQuery } from "@/services/settings/hooks";

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

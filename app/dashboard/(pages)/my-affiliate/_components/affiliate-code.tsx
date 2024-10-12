"use client";

import { useRef } from "react";
import { Copy } from "lucide-react";

import { useOrigin } from "@/hooks/use-origin";
import { onCopy } from "@/utils/on-copy";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUserProfileQuery } from "@/app/dashboard/hooks";

export const AffiliateCode = () => {
  const inputRef = useRef(null);
  const [http, host] = useOrigin().split("://");
  const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery();

  if (isLoading || isError || !isSuccess)
    return (
      <div className="max-w-2xl space-y-2">
        <div className="flex items-center justify-between gap-2 w-full">
          <Skeleton className="h-11 w-full" />
          <Skeleton className="h-11 w-11" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[60%]" />
        </div>
      </div>
    );

  return (
    <div className="max-w-2xl space-y-2">
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="w-full">
          <Input
            ref={inputRef}
            prefix={`${http}://`}
            type="text"
            name="url"
            readOnly
            value={`${host}/auth/register?code=${data?.data.referred_code}`}
          />
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => onCopy(inputRef, http)}
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy</span>
        </Button>
      </div>
      <p className="text-sm">
        10% of all paid payments. from referred users. Over 60 days are credited
        into your balance.
      </p>
    </div>
  );
};

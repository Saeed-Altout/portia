"use client";

import { useRef } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { onCopy } from "@/utils/on-copy";
import { useOrigin } from "@/hooks/use-origin";

export const AffiliateCode = ({ code }: { code?: string }) => {
  const inputRef = useRef(null);
  const [http, host] = useOrigin().split("://");

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
            value={`${host}/auth/register?code=${code}`}
          />
        </div>
        <Button
          size="icon"
          variant="outline"
          type="button"
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

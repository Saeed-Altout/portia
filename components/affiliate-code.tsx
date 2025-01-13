"use client";

import { useRef } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { onCopy } from "@/utils/on-copy";
import { useOrigin } from "@/hooks/use-origin";
import { useResponse } from "@/hooks/use-response";

export const AffiliateCode = ({ code }: { code?: string }) => {
  const inputRef = useRef(null);
  const [http, host] = useOrigin().split("://");
  const { Success, Error } = useResponse();

  const onCopyHandler = (
    ref: React.RefObject<HTMLInputElement>,
    http: string
  ) => {
    if (!code) {
      Error({ error: null, message: "Code not found!" });
      return;
    }
    onCopy(ref, http);
    Success({ message: "Copied to clipboard" });
  };

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
            value={`${host}/auth/register?code=${code ?? "A/N"}`}
          />
        </div>
        <Button
          size="icon"
          variant="outline"
          type="button"
          onClick={() => onCopyHandler(inputRef, http)}
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy</span>
        </Button>
      </div>
      <p className="text-sm">10% of all paid payments. from referred users.</p>
    </div>
  );
};

"use client";

import { toast } from "sonner";
import { useRef } from "react";
import { ChartColumn, Copy } from "lucide-react";

import { History } from "./_components/history";
import { Statistics } from "./_components/statistics";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@dashboard/_components/ui/heading";

import { useOrigin } from "@/hooks/use-origin";

export default function MyAffiliatePage() {
  const inputRef = useRef(null);
  const origin = useOrigin();
  const [http, host] = origin.split("://");

  const onCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(
        `${http}://${(inputRef.current as HTMLInputElement).value}`
      );
      toast.success("Affiliate link copied to clipboard.");
    }
  };

  return (
    <>
      <Heading
        title="Welcome back, Jafar"
        description="your total money is: 0.00$"
      >
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline">
            <ChartColumn className="h-4 w-4 mr-2" />
            <span>Draw My Earning</span>
          </Button>
        </div>
      </Heading>
      <div className="max-w-2xl space-y-2">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="w-full">
            <Input
              ref={inputRef}
              prefix={`${http}://`}
              type="text"
              name="url"
              value={`${host}/auth/register?code=9rOcrU`}
            />
          </div>
          <Button size="icon" variant="outline" onClick={onCopy}>
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
        <p className="text-sm">
          10% of all paid payments. from referred users. Over 60 days are
          credited into your balance.
        </p>
      </div>
      <Statistics />
      <History />
    </>
  );
}

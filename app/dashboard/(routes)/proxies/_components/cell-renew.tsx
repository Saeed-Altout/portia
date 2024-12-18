"use client";

import { Button } from "@/components/ui/button";
import { Proxy } from "./columns";
import { Checkbox } from "@/components/ui/checkbox";
import { useRenewProxy } from "@/hooks/dashboard/proxy/use-renew-proxy";

export const CellRenew = ({ data }: { data: Proxy }) => {
  const { mutate, isPending } = useRenewProxy();

  return (
    <Checkbox
      disabled={isPending}
      checked={!!data.re_new}
      onCheckedChange={() =>
        mutate({
          proxy_id: data.proxy_id,
          duration: data.duration.toString(),
          parent_proxy_id: data.parent_proxy_id,
          protocol: data.protocol,
          password: data.password,
        })
      }
    />
  );
};
export const CellButtonRenew = ({ data }: { data: Proxy }) => {
  return <Button size="sm">Re New</Button>;
};

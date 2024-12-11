"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useModalStore } from "@/stores";
import { Proxy } from "./columns";

export const CellRenew = ({ data }: { data: Proxy }) => {
  const { renewProxyModalOnOpen } = useModalStore();

  return (
    <Checkbox checked={!!data.re_new} onCheckedChange={renewProxyModalOnOpen} />
  );
};

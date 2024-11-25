"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useModalStore } from "@/stores/use-modal-store";

export const CellRenew = ({ data }: { data: ProxyState }) => {
  const { renewProxyModalOnOpen } = useModalStore();

  return (
    <Checkbox checked={!!data.re_new} onCheckedChange={renewProxyModalOnOpen} />
  );
};

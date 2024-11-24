"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useModalStore } from "@/stores";

export const CellRenew = ({ data }: { data: any }) => {
  const { renewProxyModalOnOpen } = useModalStore();

  return (
    <Checkbox
      checked={!!data.original.re_new}
      onCheckedChange={renewProxyModalOnOpen}
    />
  );
};

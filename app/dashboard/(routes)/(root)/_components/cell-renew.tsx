"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useModalStore } from "@/stores";

export const CellRenew = ({ data }: { data: IProxy }) => {
  const { renewProxyModalOnOpen } = useModalStore();
  return <Checkbox checked={!!data.re_new} onCheckedChange={renewProxyModalOnOpen} />;
};

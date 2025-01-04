"use client";

import { Proxy } from "./columns";
import { Button } from "@/components/ui/button";
import { useProxyStore } from "@/stores/reducers/use-proxy-store";
import { useModalStore } from "@/stores";
import { ModalType } from "@/config/enums";

export const CellButtonRenew = ({ data }: { data: Proxy }) => {
  const { setProxy } = useProxyStore();
  const { onOpen } = useModalStore();

  const handleSelect = (data: Proxy) => {
    setProxy(data);
    onOpen(ModalType.RENEW_PROXY);
  };

  return (
    <Button size="sm" onClick={() => handleSelect(data)}>
      Renew
    </Button>
  );
};

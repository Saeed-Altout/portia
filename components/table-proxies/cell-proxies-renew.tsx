"use client";

import { Button } from "@/components/ui/button";
import { ModalType } from "@/config/constants";
import { useProxyStore } from "@/stores/use-proxy-store";
import { useModalStore } from "@/stores/use-modal-store";

export const CellProxiesRenew = ({ data }: { data: any }) => {
  const { setProxy } = useProxyStore();
  const { onOpen } = useModalStore();

  const handleRenewProxy = () => {
    setProxy(data);
    onOpen(ModalType.RENEW_PROXY);
  };

  return (
    <Button size="sm" onClick={handleRenewProxy}>
      Renew
    </Button>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { useProxyStore } from "@/stores/reducers/use-proxy-store";
import { useModalStore } from "@/stores";
import { ModalType } from "@/config/enums";

export const CellButtonRenew = ({ data }: { data: any }) => {
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

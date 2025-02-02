"use client";

import { ModalType } from "@/config/constants";
import { useModalStore } from "@/stores/use-modal-store";
import { useProxyStore } from "@/stores/use-proxy-store";

interface CellProxiesAuthEditProps {
  data: any;
  children: React.ReactNode;
}

export const CellProxiesAuthEdit = ({
  data,
  children,
}: CellProxiesAuthEditProps) => {
  const { onOpen } = useModalStore();
  const { setProxy } = useProxyStore();

  const handleAuthEdit = () => {
    setProxy(data);
    onOpen(ModalType.EDIT_AUTH_PROXY);
  };

  return (
    <p
      role="button"
      onClick={handleAuthEdit}
      className="cursor-pointer text-primary whitespace-nowrap line-clamp-1"
    >
      {children}
    </p>
  );
};

"use client";

import { useModalStore } from "@/stores";
import { ModalType } from "@/config/constants";
import { useProxyStore } from "@/stores/reducers/use-proxy-store";

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

"use client";

import { ModalType } from "@/config/constants";
import { useModalStore } from "@/stores/use-modal-store";
import { useProxyStore } from "@/stores/use-proxy-store";

interface CellProxiesInfoEditProps {
  data: any;
  children: React.ReactNode;
}

export const CellProxiesInfoEdit = ({
  data,
  children,
}: CellProxiesInfoEditProps) => {
  const { onOpen } = useModalStore();
  const { setProxy } = useProxyStore();

  const handleEditClick = () => {
    setProxy(data);
    onOpen(ModalType.EDIT_INFO_PROXY);
  };

  return (
    <p
      role="button"
      onClick={handleEditClick}
      className="text-primary capitalize cursor-pointer hover:underline"
    >
      {children}
    </p>
  );
};

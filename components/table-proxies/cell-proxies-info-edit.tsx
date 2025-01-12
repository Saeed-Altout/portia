"use client";

import { ModalType } from "@/config/constants";
import { useProxyStore, useModalStore } from "@/stores";

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

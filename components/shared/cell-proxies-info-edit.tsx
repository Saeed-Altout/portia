"use client";

import { useModalStore } from "@/stores";
import { ModalType } from "@/config/enums";
import { useEditInfoProxyStore } from "@/stores/reducers/edit-info-proxy-store";

interface CellProxiesInfoEditProps {
  data: any;
  children: React.ReactNode;
}

export const CellProxiesInfoEdit = ({
  data,
  children,
}: CellProxiesInfoEditProps) => {
  const { onOpen } = useModalStore();
  const { setProxy } = useEditInfoProxyStore();

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

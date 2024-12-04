"use client";

import { ModalType } from "@/config/enums";
import { useModalStore, useProxyStore } from "@/stores";

export const CellAuthEdit = ({
  data,
  children,
}: {
  data: IProxy;
  children: React.ReactNode;
}) => {
  const { onOpen } = useModalStore();
  const { setProxy } = useProxyStore();

  const onSelectToEdit = () => {
    setProxy(data);
    onOpen(ModalType.EDIT_AUTH_PROXY);
  };

  return (
    <p
      role="button"
      className="text-primary whitespace-nowrap line-clamp-1 cursor-pointer "
      onClick={onSelectToEdit}
    >
      {children}
    </p>
  );
};

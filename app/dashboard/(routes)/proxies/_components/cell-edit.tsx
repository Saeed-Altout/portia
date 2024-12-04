"use client";

import { ModalType } from "@/config/enums";
import { useModalStore, useProxyStore } from "@/stores";

export const CellEdit = ({
  data,
  children,
}: {
  data: IProxy;
  children: React.ReactNode;
}) => {
  const { onOpen } = useModalStore();
  const { setProxy, setPkgId } = useProxyStore();

  const onSelectToEdit = () => {
    setProxy(data);
    setPkgId(data.package_id);
    onOpen(ModalType.EDIT_INFO_PROXY);
  };

  return (
    <p
      className="text-primary capitalize cursor-pointer hover:underline"
      onClick={onSelectToEdit}
    >
      {children}
    </p>
  );
};

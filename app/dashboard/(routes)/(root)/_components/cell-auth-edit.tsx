"use client";

import { useModalStore, useProxyStore } from "@/stores";

export const CellAuthEdit = ({
  data,
  children,
}: {
  data: ProxyState;
  children: React.ReactNode;
}) => {
  const { editAuthProxyModalOnOpen } = useModalStore();
  const { setProxy } = useProxyStore();

  const onSelectToEdit = () => {
    setProxy(data);
    editAuthProxyModalOnOpen();
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

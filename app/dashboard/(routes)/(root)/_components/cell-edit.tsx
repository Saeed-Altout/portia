"use client";

import { useModalStore, useProxyStore } from "@/stores";

export const CellEdit = ({
  data,
  children,
}: {
  data: ProxyState;
  children: React.ReactNode;
}) => {
  const { editProxyModalOnOpen, setAction } = useModalStore();
  const { setProxy, setPkgId } = useProxyStore();

  const onSelectToEdit = () => {
    setProxy(data);
    console.log(data.package_id);

    setPkgId(data.package_id);
    setAction("edit");
    editProxyModalOnOpen();
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

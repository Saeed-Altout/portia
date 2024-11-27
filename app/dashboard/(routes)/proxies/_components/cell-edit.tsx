"use client";

import { useModalStore, useProxyStore } from "@/stores";

export const CellEdit = ({ data, children }: { data: IProxy; children: React.ReactNode }) => {
  const { editProxyModalOnOpen, setAction } = useModalStore();
  const { setProxy, setPkgId } = useProxyStore();

  const onSelectToEdit = () => {
    setProxy(data);
    setPkgId(data.package_id);
    setAction("edit");
    editProxyModalOnOpen();
  };

  return (
    <p className="text-primary capitalize cursor-pointer hover:underline" onClick={onSelectToEdit}>
      {children}
    </p>
  );
};

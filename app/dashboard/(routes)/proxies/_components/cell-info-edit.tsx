"use client";

import { Proxy } from "./columns";

import { useModalStore } from "@/stores";

import { ModalType } from "@/config/enums";
import { useStore } from "@/stores/use-store";

interface CellInfoEditProps {
  data: Proxy;
  children: React.ReactNode;
}
export const CellInfoEdit = ({ data, children }: CellInfoEditProps) => {
  const { onOpen } = useModalStore();
  const {
    setProxyId,
    setProxyParentId,
    setProxyPackageId,
    setLocationServiceProviderName,
  } = useStore();

  const handlerClick = () => {
    setProxyId(data.proxy_id);
    setProxyPackageId(data.package_id);
    setProxyParentId(data.parent_proxy_id);
    setLocationServiceProviderName(data.service_provider);
    onOpen(ModalType.EDIT_INFO_PROXY);
  };

  return (
    <p
      className="text-primary capitalize cursor-pointer hover:underline"
      onClick={handlerClick}
    >
      {children}
    </p>
  );
};

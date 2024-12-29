"use client";

import { Proxy } from "../../app/dashboard/(routes)/(root)/_components/columns";
import { useModalStore } from "@/stores";
import { useStore } from "@/stores/use-store";
import { ModalType } from "@/config/enums";

interface CellProxiesInfoEditProps {
  data: Proxy;
  children: React.ReactNode;
}

export const CellProxiesInfoEdit = ({
  data,
  children,
}: CellProxiesInfoEditProps) => {
  const { onOpen } = useModalStore();
  const {
    setProxyId,
    setProxyParentId,
    setProxyPackageId,
    setLocationServiceProviderName,
  } = useStore();

  const handleEditClick = () => {
    setProxyId(data.proxy_id);
    setProxyPackageId(data.package_id);
    setProxyParentId(data.parent_proxy_id);
    setLocationServiceProviderName(data.service_provider);
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

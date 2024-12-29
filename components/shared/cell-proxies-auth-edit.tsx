"use client";

import { Proxy } from "../../app/dashboard/(routes)/(root)/_components/columns";
import { useModalStore } from "@/stores";
import { useStore } from "@/stores/use-store";
import { ModalType } from "@/config/enums";

interface CellProxiesAuthEditProps {
  data: Proxy;
  children: React.ReactNode;
}

export const CellProxiesAuthEdit = ({
  data,
  children,
}: CellProxiesAuthEditProps) => {
  const { onOpen } = useModalStore();
  const { setProxyId, setProxyUsername } = useStore();

  const handleAuthEdit = () => {
    setProxyId(data.proxy_id);
    setProxyUsername(data.username);
    onOpen(ModalType.EDIT_AUTH_PROXY);
  };

  return (
    <p
      role="button"
      onClick={handleAuthEdit}
      className="cursor-pointer text-primary whitespace-nowrap line-clamp-1"
    >
      {children}
    </p>
  );
};

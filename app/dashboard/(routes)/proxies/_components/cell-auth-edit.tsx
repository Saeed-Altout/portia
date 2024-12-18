"use client";

import { Proxy } from "./columns";

import { useModalStore } from "@/stores";
import { ModalType } from "@/config/enums";
import { useStore } from "@/stores/use-store";

interface CellAuthEditProps {
  data: Proxy;
  children: React.ReactNode;
}

export const CellAuthEdit = ({ data, children }: CellAuthEditProps) => {
  const { onOpen } = useModalStore();
  const { setProxyId, setProxyUsername } = useStore();

  const handlerClick = () => {
    setProxyId(data.proxy_id);
    setProxyUsername(data.username);
    onOpen(ModalType.EDIT_AUTH_PROXY);
  };

  return (
    <p
      role="button"
      className="text-primary whitespace-nowrap line-clamp-1 cursor-pointer "
      onClick={handlerClick}
    >
      {children}
    </p>
  );
};

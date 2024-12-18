"use client";

import { Activity } from "lucide-react";

import { Proxy } from "./columns";
import { Button } from "@/components/ui/button";

import { useModalStore, useStore } from "@/stores";
import { ModalType } from "@/config/enums";

interface CellActionsProps {
  data: Proxy;
}
export const CellActions = ({ data }: CellActionsProps) => {
  const { onOpen } = useModalStore();
  const { setProxyId, setProxyPackageId } = useStore();

  const handlerFixProxy = () => {
    setProxyId(data.proxy_id);
    setProxyPackageId(data.package_id);
    onOpen(ModalType.FIX_PROXY);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button
          size="icon"
          className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
          onClick={handlerFixProxy}
        >
          <Activity className="h-4 w-4" />
          <span className="sr-only">Activity Icon</span>
        </Button>
        <Button size="sm">Manage</Button>
      </div>
    </>
  );
};

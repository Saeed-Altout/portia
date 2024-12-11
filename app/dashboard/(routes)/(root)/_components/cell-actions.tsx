"use client";

import { Activity } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Proxy } from "./columns";
import { useModalStore } from "@/stores";

import { ModalType } from "@/config/enums";
import { useStore } from "@/stores/use-store";

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
          size="sm"
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

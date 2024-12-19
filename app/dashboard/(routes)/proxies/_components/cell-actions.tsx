"use client";

import { Activity, RefreshCw } from "lucide-react";

import { Proxy } from "./columns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import { ModalType } from "@/config/enums";
import { useModalStore, useStore } from "@/stores";
import { useRenewProxy } from "@/hooks/dashboard/proxy/use-renew-proxy";
interface CellActionsProps {
  data: Proxy;
}
export const CellActions = ({ data }: CellActionsProps) => {
  const { onOpen } = useModalStore();
  const { setProxyId, setProxyPackageId } = useStore();
  const { mutate, isPending } = useRenewProxy();

  const handlerFixProxy = () => {
    setProxyId(data.proxy_id);
    setProxyPackageId(data.package_id);
    onOpen(ModalType.FIX_PROXY);
  };

  const handlerRenewProxy = () => {
    mutate({
      proxy_id: data.proxy_id,
      duration: data.duration.toString(),
      parent_proxy_id: data.parent_proxy_id,
      protocol: data.protocol,
      password: data.password,
    });
  };

  return (
    <TooltipProvider>
      <div className="flex justify-end items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
              onClick={handlerRenewProxy}
              disabled={isPending}
            >
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">RefreshCw Icon</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Renew proxy</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
              onClick={handlerFixProxy}
              disabled={isPending}
            >
              <Activity className="h-4 w-4" />
              <span className="sr-only">Activity Icon</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Activity proxy</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button disabled={isPending} size="sm">
              Manage
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Manage proxy</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

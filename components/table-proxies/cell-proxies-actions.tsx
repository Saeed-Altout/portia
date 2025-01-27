"use client";

import { Activity, RefreshCw } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import { ModalType } from "@/config/constants";
import { useProxyStore, useModalStore } from "@/stores";

const renderActionButton = (
  icon: React.ReactNode,
  label: string,
  onClick: () => void
) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        size="icon"
        className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
        onClick={onClick}
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>{label}</p>
    </TooltipContent>
  </Tooltip>
);

export const CellProxiesActions = ({ data }: { data: any }) => {
  const { onOpen } = useModalStore();
  const { setProxy } = useProxyStore();

  const handleFixProxy = () => {
    setProxy(data);
    onOpen(ModalType.FIX_PROXY);
  };

  const handleRenewProxy = () => {
    setProxy(data);
    onOpen(ModalType.FAST_RENEW_PROXY);
  };

  const handleManageProxy = () => {
    setProxy(data);
    onOpen(ModalType.MANAGE_PROXY);
  };

  return (
    <TooltipProvider>
      <div className="flex justify-end items-center gap-4">
        {renderActionButton(
          <RefreshCw className="h-4 w-4" />,
          "Renew proxy",
          handleRenewProxy
        )}
        {renderActionButton(
          <Activity className="h-4 w-4" />,
          "Fix proxy",
          handleFixProxy
        )}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" onClick={handleManageProxy}>
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

"use client";

import { Activity } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/stores/use-modal-store";
import { useProxyStore } from "@/stores";
import { ModalType } from "@/config/enums";

export const ActiveProxiesCellActions = ({ data }: { data: IProxy }) => {
  const { onOpen } = useModalStore();
  const { setProxy } = useProxyStore();

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button
          size="sm"
          className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
          onClick={() => {
            setProxy(data);
            onOpen(ModalType.FIX_PROXY);
          }}
        >
          <Activity className="h-4 w-4" />
          <span className="sr-only">Activity Icon</span>
        </Button>
        <Button size="sm">Manage</Button>
      </div>
    </>
  );
};

export const InactiveProxiesCellActions = ({ data }: { data: IProxy }) => {
  const { renewProxyModalOnOpen } = useModalStore();
  return (
    <div className="flex justify-end items-center gap-4">
      <Button size="sm" onClick={renewProxyModalOnOpen}>
        Renew
      </Button>
    </div>
  );
};

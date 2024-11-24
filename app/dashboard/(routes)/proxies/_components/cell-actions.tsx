"use client";

import { Activity } from "lucide-react";

import { Proxy } from "./columns";
import { Button } from "@/components/ui/button";

import { useModalStore } from "@/stores/use-modal-store";

export const ActiveProxiesCellActions = ({ data }: { data: Proxy }) => {
  const { fixProxyModalOnOpen, setFixProxy } = useModalStore();

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button
          size="sm"
          className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
          onClick={() => {
            setFixProxy({
              proxy_id: data.proxy_id,
              pkg_id: data.package_id,
            });
            fixProxyModalOnOpen();
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

export const InactiveProxiesCellActions = ({ data }: { data: Proxy }) => {
  const { renewProxyModalOnOpen } = useModalStore();

  return (
    <div className="flex justify-end items-center gap-4">
      <Button size="sm" onClick={renewProxyModalOnOpen}>
        Renew
      </Button>
    </div>
  );
};

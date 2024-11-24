"use client";
import { Activity } from "lucide-react";

import { useModalStore } from "@/stores";
import { Button } from "@/components/ui/button";

export const CellActions = ({ data }: { data: any }) => {
  const { fixProxyModalOnOpen, activeProxyModalOnOpen } = useModalStore();

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button
          size="sm"
          className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
          onClick={fixProxyModalOnOpen}
        >
          <Activity className="h-4 w-4" />
          <span className="sr-only">Activity Icon</span>
        </Button>
        <Button size="sm" onClick={activeProxyModalOnOpen}>
          Manage
        </Button>
      </div>
    </>
  );
};

"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { RenewExpiredProxiesModal } from "@/components/dashboard/modals/renew-expired-proxies-modal";
import { Activity } from "lucide-react";

interface CellActionsProps {
  data: any;
}

export const ActiveProxiesCellActions = ({ data }: CellActionsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button
          size="sm"
          className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
        >
          <Activity className="h-4 w-4" />
          <span className="sr-only">Activity Icon</span>
        </Button>
        <Button size="sm">Manage</Button>
      </div>
    </>
  );
};

export const InactiveProxiesCellActions = ({ data }: CellActionsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <RenewExpiredProxiesModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="flex justify-end items-center gap-4">
        <Button size="sm" onClick={() => setIsOpen(true)}>
          Renew
        </Button>
      </div>
    </>
  );
};

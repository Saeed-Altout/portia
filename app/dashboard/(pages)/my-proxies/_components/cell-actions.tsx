"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { RenewExpiredProxiesModal } from "@dashboard/_components/modals/renew-expired-proxies-modal";

interface CellActionsProps {
  row: any;
}

export const CellActions = ({ row }: CellActionsProps) => {
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

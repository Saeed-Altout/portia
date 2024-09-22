"use client";
import * as React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useActivateNewProxyModal } from "@dashboard/hooks/use-activate-new-proxy-modal";
import { useAddFundsModal } from "@dashboard/hooks/use-add-funds";

export const HeadingSection = () => {
  const activateNewProxyModal = useActivateNewProxyModal();
  const addFundsModal = useAddFundsModal();

  return (
    <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4">
      <h1 className="font-medium text-3xl">Welcome back, Jafar</h1>
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="outline"
          onClick={() => activateNewProxyModal.onOpen()}
        >
          <Plus className="h-4 w-4 mr-2" /> Activate Proxies
        </Button>
        <Button variant="outline" onClick={() => addFundsModal.onOpen()}>
          <Plus className="h-4 w-4 mr-2" /> Add Fund
        </Button>
      </div>
    </div>
  );
};

import * as React from "react";

import { Activity } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Proxy } from "./columns";

interface CellActionsProps {
  data: Proxy;
}

export const CellActions = ({ data }: CellActionsProps) => {
  return (
    <div className="flex justify-end items-center gap-4">
      <Button
        size="sm"
        className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/80 text-primary"
      >
        <Activity className="h-4 w-4" />
        <span className="sr-only">Activity Icon</span>
      </Button>
      <Button size="sm">Manage</Button>
    </div>
  );
};

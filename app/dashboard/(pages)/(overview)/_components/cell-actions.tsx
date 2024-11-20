import { useState } from "react";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CellActionsProps {
  data: any;
}

export const CellActions = ({ data }: CellActionsProps) => {
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

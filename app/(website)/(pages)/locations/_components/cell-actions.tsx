import * as React from "react";
import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Location } from "./columns";

interface CellActionsProps {
  data: Location;
}

export const CellActions = ({ data }: CellActionsProps) => {
  return (
    <div className="w-fit ml-auto">
      <Button
        className={cn("bg-[#3F41BF]", !data.connect && "px-5")}
        size="sm"
        disabled={data.connect}
      >
        {data.connect && <Info className="h-3 w-3 mr-1 mb-0.5" />}
        Continue
      </Button>
    </div>
  );
};

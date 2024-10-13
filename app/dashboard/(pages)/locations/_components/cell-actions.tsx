import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CellActionsProps {
  data: ListProxy;
}

export const CellActions = ({ data }: CellActionsProps) => {
  return (
    <div className="w-fit ml-auto">
      <Button
        className={cn("bg-[#3F41BF]", data.is_available && "px-5")}
        size="sm"
        disabled={!data.is_available}
      >
        {!data.is_available && <Info className="h-3 w-3 mr-1 mb-0.5" />}
        Continue
      </Button>
    </div>
  );
};

import { Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Circle, Icon } from "@/components/shared/circle-icon";

export const OfferCard = ({ offer, theme }: { offer?: any; theme?: any }) => (
  <div className="flex items-start md:items-center justify-between flex-col md:flex-row p-4 border rounded-lg gap-4">
    <div className="w-full flex items-center gap-x-4">
      <Circle fill={theme || "primary"}>
        <Icon icon={Zap} theme={theme || "primary"} />
      </Circle>
      <div>
        <h4 className="text-sm font-medium">{offer.name}</h4>
        <p className="text-sm">{offer.description}</p>
      </div>
    </div>
    <div className="w-full md:w-fit flex flex-row md:flex-col items-center md:items-start justify-start gap-4 md:gap-1">
      <p className={cn("text-base md:text-sm font-semibold text-primary")}>
        {offer.cost}
      </p>
      <Button
        size="sm"
        className={cn(
          "w-full",
          theme === "danger"
            ? "bg-[#E31B54]"
            : theme === "muted"
            ? "bg-[#4B4B57]"
            : "bg-primary"
        )}
      >
        Activate
      </Button>
    </div>
  </div>
);

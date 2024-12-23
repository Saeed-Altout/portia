import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Circle, Icon } from "@/components/ui/circle-icon";

interface OfferCardProps {
  offer: IOfferPackage;
  handleClick: () => void;
}
export const OfferCard = ({ offer, handleClick }: OfferCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg gap-4 shadow-sm overflow-hidden">
      <div className="w-full flex items-center gap-x-4">
        <Circle fill="primary" className="flex-shrink-0">
          <Icon icon={Zap} theme="primary" />
        </Circle>
        <div className="flex-1">
          <h3 className="text-lg font-medium capitalize">{offer.title}</h3>
          <p className="text-sm text-muted-foreground">{offer.description}</p>
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-row md:flex-col items-center gap-4">
        <p className="text-lg font-semibold text-primary">${offer.cost}</p>
        <Button
          disabled={!offer.is_available}
          onClick={handleClick}
          className="w-full md:w-auto"
        >
          Activate
        </Button>
      </div>
    </div>
  );
};

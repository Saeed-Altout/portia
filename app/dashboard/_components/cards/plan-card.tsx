"use client";
import * as React from "react";
import { Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Circle, Icon } from "@/components/dashboard/circle-icon";

interface PlanCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
}

export const PlanCard = ({
  initialData,
  theme,
  fill,
}: {
  initialData: PlanCardProps;
  theme: any;
  fill: any;
}) => {
  const { id, name, description, price } = initialData;

  return (
    <div className="flex items-start md:items-center justify-between flex-col md:flex-row p-4 border rounded-lg gap-4">
      <div className="w-full flex items-center gap-x-4">
        <Circle fill={fill}>
          <Icon icon={Zap} theme={theme} />
        </Circle>
        <div>
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-fit flex flex-row md:flex-col items-center md:items-start justify-start gap-4 md:gap-1">
        <p
          className={cn(
            "text-base md:text-sm font-semibold text-primary",
            fill === "danger" && "text-[#E31B54]",
            fill === "muted" && "text-[#4B4B57]"
          )}
        >
          {price}
        </p>
        <Button
          size="sm"
          className={cn(
            "w-full",
            fill === "danger" && "bg-[#E31B54] hover:bg-[#E31B54]/80",
            fill === "muted" && "bg-[#4B4B57] hover:bg-[#4B4B57]/80"
          )}
        >
          Activate
        </Button>
      </div>
    </div>
  );
};

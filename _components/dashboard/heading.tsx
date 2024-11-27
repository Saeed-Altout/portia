"use client";

import { ChartColumn, Plus } from "lucide-react";

import { useModalStore } from "@/stores";
import { Button } from "@/components/ui/button";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  label?: string;
  newProxy?: boolean;
  addFunds?: boolean;
  drawEarning?: boolean;
}

export const Heading = ({
  title,
  description,
  label,
  newProxy = false,
  addFunds = false,
  drawEarning = false,
  children,
}: HeadingProps) => {
  const { activeProxyModalOnOpen } = useModalStore();

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4">
      <div className="space-y-2">
        <p className="text-sm">{label}</p>
        <h1 className="text-2xl md:text-3xl font-medium capitalize">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center flex-wrap sm:flex-nowrap gap-3">
        {newProxy && (
          <Button
            variant="outline"
            className="w-full"
            onClick={activeProxyModalOnOpen}
          >
            <Plus className="h-4 w-4 mr-2" /> Activate Proxies
          </Button>
        )}
        {addFunds && (
          <Button variant="outline" className="w-full" onClick={() => {}}>
            <Plus className="h-4 w-4 mr-2" /> Add Fund
          </Button>
        )}
        {drawEarning && (
          <Button variant="outline">
            <ChartColumn className="h-4 w-4 mr-2" />
            <span>Draw My Earning</span>
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};

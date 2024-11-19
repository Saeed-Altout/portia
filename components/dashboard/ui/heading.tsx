"use client";

import { ChartColumn, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useGetUserDetails } from "@/hooks/dashboard";
import { proxyStore } from "@/stores/proxy-store";

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
  const { onOpen } = proxyStore();
  const { data: user } = useGetUserDetails();

  return (
    <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-y-1">
        <p className="text-sm">{label}</p>
        <h1 className="text-2xl md:text-3xl font-medium capitalize">{`${title} ${
          user?.data?.first_name ?? ""
        }`}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        {newProxy && (
          <Button variant="outline" onClick={onOpen}>
            <Plus className="h-4 w-4 mr-2" /> Activate Proxies
          </Button>
        )}
        {addFunds && (
          <Button variant="outline" onClick={() => {}}>
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

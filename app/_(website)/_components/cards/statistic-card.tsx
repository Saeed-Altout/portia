"use client";

import * as React from "react";

import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";

interface StatisticCardProps {
  value: string;
  name: string;
  description: string;
}

export const StatisticCard = ({
  name,
  value,
  description,
}: StatisticCardProps) => {
  return (
    <div className="space-y-3 pt-4 sm:pt-0 border-t-2 border-primary sm:border-none">
      <h3 className="text-primary font-semibold text-5xl lg:text-6xl">
        {value}
      </h3>
      <div className="space-y-2">
        <Paragraph size="lg" className="sm:text-black-primary font-medium">
          {name}
        </Paragraph>
        <Paragraph className="hidden sm:block">{description}</Paragraph>
      </div>
    </div>
  );
};

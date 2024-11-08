"use client";

import * as React from "react";

interface StatisticCardProps {
  value: string;
  name: string;
  description: string;
}

export const StatisticCard = ({
  initialData,
}: {
  initialData: StatisticCardProps;
}) => {
  const { name, value, description } = initialData;

  return (
    <div className="space-y-3 pt-4 sm:pt-0 border-t-2 border-primary sm:border-none">
      <span className="text-primary font-semibold text-5xl lg:text-6xl">
        {value}
      </span>
      <div className="space-y-2">
        <h2 className="text-black-200 text-lg font-medium">{name}</h2>
        <p className="text hidden sm:block">{description}</p>
      </div>
    </div>
  );
};

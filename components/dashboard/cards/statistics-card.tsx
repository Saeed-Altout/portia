"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { Area, AreaChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

interface StatisticCardProps {
  amount: number;
  label: string;
  color: string;
}

export const StatisticCard = ({ amount, label, color }: StatisticCardProps) => {
  const chartConfig: ChartConfig = {
    statistics: {
      label: "Statistics",
    },
  };

  const data = [
    { id: 1, amount: 20 },
    { id: 2, amount: 30 },
    { id: 3, amount: 70 },
    { id: 4, amount: 45 },
    { id: 5, amount: 50 },
  ];

  return (
    <div className="border rounded-lg">
      <div className="p-6 flex items-end justify-between h-full">
        <div className="flex justify-start items-start flex-col gap-y-5 flex-1">
          <h2 className="font-medium">{label}</h2>
          <p className="font-semibold text-3xl text-black-200">{amount}</p>
          <div className="flex items-center justify-start gap-x-2">
            <ArrowUp className="h-5 w-5" style={{ color }} />
            <p className="text-sm">Currently Spending</p>
          </div>
        </div>
        <ChartContainer config={chartConfig} className="w-1/2 h-full">
          <AreaChart accessibilityLayer data={data}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="amount"
              type="natural"
              fill={color}
              fillOpacity={0.2}
              stroke={color}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export const StatisticSkeltonCard = () => {
  return (
    <div className="border rounded-lg">
      <div className="p-6 flex flex-col gap-y-3 h-full">
        <Skeleton className="w-20 h-5" />
        <div className="flex items-end justify-between gap-10">
          <div className="space-y-5">
            <Skeleton className="w-24 h-8" />
            <div className="flex items-center justify-start gap-x-2">
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-32 h-5" />
            </div>
          </div>
          <Skeleton className="w-full h-12" />
        </div>
      </div>
    </div>
  );
};

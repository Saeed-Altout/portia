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

interface StatisticChartCardProps {
  title: string;
  price: string;
  color: string;
  data: {
    id: number;
    amount: number;
  }[];
}

export const StatisticChartCard = ({
  initialData,
}: {
  initialData: StatisticChartCardProps;
}) => {
  const { title, price, color, data } = initialData;

  return (
    <div className="border rounded-lg">
      <div className="p-6 flex items-end justify-between h-full">
        <div className="flex justify-start items-start flex-col gap-y-5 flex-1">
          <h2 className="font-medium">{title}</h2>
          <p className="font-semibold text-3xl">{price}</p>
          <div className="flex items-center justify-start gap-x-2">
            <ArrowUp className="h-5 w-5 text-[#26a6a4]" style={{ color }} />
            <p className="text-sm text-gray-primary">Currently Spending</p>
          </div>
        </div>
        <Chart data={data} theme={color} />
      </div>
    </div>
  );
};

interface ChartProps {
  data: {
    id: number;
    amount: number;
  }[];
  theme: string;
}

export function Chart({ data, theme }: ChartProps) {
  const chartConfig = {
    deposits: {
      label: "Deposits",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-1/2 h-full">
      <AreaChart accessibilityLayer data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area
          dataKey="amount"
          type="natural"
          fill={theme}
          fillOpacity={0.2}
          stroke={theme}
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}

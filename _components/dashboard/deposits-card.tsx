"use client";

import { ArrowUp } from "lucide-react";
import { Area, AreaChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface DepositsCardProps {
  amount: number;
  label: string;
  color: string;
}

export const DepositsCard = ({ amount, label, color }: DepositsCardProps) => {
  const chartConfig: ChartConfig = {
    deposits: {
      label: "Deposits",
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

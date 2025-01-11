"use client";

import { ArrowUp } from "lucide-react";
import { Area, AreaChart } from "recharts";

import { Heading } from "@/components/dashboard/ui/heading";
import { DataTable } from "@/components/dashboard/table/data-table";
import { ErrorApi } from "@/components/pages/error-api";
import { LoadingApi } from "@/components/pages/loading-api";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { columns } from "./columns";
import { useData } from "./affiliate-context";

import { useAuthStore } from "@/stores/use-auth-store";
import { AffiliateCode } from "@/components/dashboard";
export const AffiliateClient = () => {
  const { user } = useAuthStore();

  const {
    isLoading,
    isError,
    isSuccess,
    affiliateHistories,
    affiliateStatistics,
  } = useData();

  const chartConfig: ChartConfig = {
    affiliate: {
      label: "Affiliate",
    },
  };

  const data = [
    { id: 1, amount: 20 },
    { id: 2, amount: 30 },
    { id: 3, amount: 70 },
    { id: 4, amount: 45 },
    { id: 5, amount: 50 },
  ];

  if (isLoading || !isSuccess) {
    return <LoadingApi />;
  }

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <>
      <Heading title={`Welcome back ${user.first_name ?? ""}`} />
      <AffiliateCode code={user.referred_code ?? ""} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {affiliateStatistics.map((item, key) => (
          <div key={key} className="border rounded-lg">
            <div className="p-6 flex items-end justify-between h-full">
              <div className="flex justify-start items-start flex-col gap-y-5 flex-1">
                <h2 className="font-medium">{item.label}</h2>
                <p className="font-semibold text-3xl text-black-200">
                  {item.amount}
                </p>
                <div className="flex items-center justify-start gap-x-2">
                  <ArrowUp className="h-5 w-5" style={{ color: item.color }} />
                  <p className="text-sm">Currently Spending</p>
                </div>
              </div>
              <ChartContainer config={chartConfig} className="w-1/2 h-full">
                <AreaChart accessibilityLayer data={data}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Area
                    dataKey="amount"
                    type="natural"
                    fill={item.color}
                    fillOpacity={0.2}
                    stroke={item.color}
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>
        ))}
      </div>
      <DataTable
        columns={columns}
        data={affiliateHistories ?? []}
        title="Your earning calendar"
        description="Track your earnings by days"
        isLoading={isLoading}
      />
    </>
  );
};

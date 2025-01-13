"use client";

import { ArrowUp } from "lucide-react";
import { Area, AreaChart } from "recharts";

import { columns } from "./columns";
import { useData } from "./deposits-context";
import { DataTable } from "./data-table";

import { Heading } from "@/components/heading";
import { ErrorApi } from "@/components/pages/error-api";
import { LoadingApi } from "@/components/pages/loading-api";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { useAuthStore } from "@/stores/use-auth-store";

const chartConfig: ChartConfig = { deposits: { label: "Deposit" } };
const data = [
  { id: 1, amount: 20 },
  { id: 2, amount: 30 },
  { id: 3, amount: 70 },
  { id: 4, amount: 45 },
  { id: 5, amount: 50 },
];

export const DepositsClient = () => {
  const { user } = useAuthStore();
  const {
    isError,
    isLoading,
    depositHistories,
    depositStatistics,
    totalPages,
    perPage,
    currentPage,
    moveNext,
    movePrev,
    setPage,
  } = useData();

  if (isLoading) {
    return <LoadingApi />;
  }

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <>
      <Heading title={`Welcome back, ${user.first_name}`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {depositStatistics.map((item, key) => (
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
        title="My Deposits"
        columns={columns}
        data={depositHistories ?? []}
        isLoading={isLoading}
        totalPages={totalPages}
        currentPage={currentPage}
        perPage={perPage}
        moveNext={moveNext}
        movePrev={movePrev}
        setPage={setPage}
      />
    </>
  );
};

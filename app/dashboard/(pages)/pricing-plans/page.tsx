"use client";

import { useState } from "react";

import { Table } from "./_components/table";
import { FiltersSection } from "./_components/filters-section";

import { Skeleton } from "@/components/ui/skeleton";
import { Heading } from "@dashboard/_components/heading";
import { useStoreContext } from "@dashboard/contexts/store-context";
import { useGetPricingPlansQuery } from "@dashboard/hooks";

interface Filter {
  pkgName: string;
  planName: string;
}

export default function PricingPlansPage() {
  const { user, isLoading } = useStoreContext();
  const { data, isSuccess } = useGetPricingPlansQuery();
  const [filter, setFilter] = useState<Filter>({
    pkgName: "Basic",
    planName: "Hourly",
  });

  const packages = isSuccess
    ? data?.data.map((item, index) => ({
        id: index,
        name: item.name,
      }))
    : [];

  const plans = isSuccess
    ? data?.data[0].plans.map((item, index) => ({
        id: index,
        name: item.plan_name,
      }))
    : [];

  return (
    <>
      <Heading
        title={`Welcome back ${user.first_name} `}
        label="Our Pricing plans"
      />
      {isLoading || !isSuccess ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row items-center justify-start gap-5">
            <Skeleton className="w-full lg:w-[240px] h-11 rounded-md" />
            <Skeleton className="w-full lg:w-[240px] h-11 rounded-md" />
          </div>
          <div className="grid gap-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-start md:items-center justify-between flex-col md:flex-row p-4 border rounded-lg gap-4"
              >
                <div className="w-full flex items-center gap-x-4">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="w-24 h-4" />
                    <Skeleton className="w-36 h-3" />
                  </div>
                </div>
                <div className="w-full md:w-fit flex flex-row md:flex-col items-center md:items-start justify-start gap-4 md:gap-1">
                  <Skeleton className="w-12 h-4" />
                  <Skeleton className="w-full h-8 md:w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <FiltersSection
            filter={filter}
            setFilter={setFilter}
            packages={packages}
            plans={plans}
          />
          <Table filter={filter} data={data.data} />
        </>
      )}
    </>
  );
}

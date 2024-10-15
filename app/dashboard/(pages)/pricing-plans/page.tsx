"use client";

import { useState } from "react";

import { Table } from "./_components/table";
import { FiltersSection } from "./_components/filters-section";

import { Heading } from "@dashboard/_components/heading";
import { useSession } from "@/contexts/session-provider";
import { useGetPricingPlansQuery } from "@/app/dashboard/features/hooks";

interface Filter {
  pkgName: string;
  planName: string;
}

export default function PricingPlansPage() {
  const { user } = useSession();

  const { data, isSuccess } = useGetPricingPlansQuery();

  const [filter, setFilter] = useState<Filter>({
    pkgName: "Basic",
    planName: "Hourly",
  });

  const packages = isSuccess
    ? data.data.map((item, index) => ({
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
        title={`Welcome back ${user.first_name}`}
        label="Our Pricing plans"
      />
      <FiltersSection
        filter={filter}
        setFilter={setFilter}
        packages={packages}
        plans={plans}
      />
      <Table filter={filter} data={isSuccess ? data.data : []} />
    </>
  );
}

"use client";

import { useState } from "react";

import { Table } from "./_components/table";
import { FiltersSection } from "./_components/filters-section";

import { Heading } from "@dashboard/_components/heading";
import { useSession } from "@/providers/session-provider";
import { useGetPricingPlansQuery } from "@/app/dashboard/features/hooks";
import { Loader } from "@/components/ui/loader";

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

  if (!isSuccess) {
    return <Loader />;
  }

  const packages = data.data.map((item, index) => ({
    id: index,
    name: item.name,
  }));

  const plans = data?.data[0].plans.map((item, index) => ({
    id: index,
    name: item.plan_name,
  }));

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
      <Table filter={filter} data={data.data} />
    </>
  );
}

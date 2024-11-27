"use client";

import { useState } from "react";

import { TabMenu } from "./_components/tab-menu";
import { DropdownMenu } from "./_components/dropdown-menu";

import { Loader } from "@/components/ui/loader";

import { Heading, OfferCard } from "@/components/dashboard";
import { useGetPricingPlans, useGetUserDetails } from "@/hooks";

interface Filter {
  pkgName: string;
  planName: string;
}

export default function PricingPlansPage() {
  const { data: user, isLoading: isLoadingUser } = useGetUserDetails();
  const { data: pricingPlans, isLoading: isLoadingPricingPlans } = useGetPricingPlans();

  const isLoading = isLoadingUser || isLoadingPricingPlans;

  const [filter, setFilter] = useState<Filter>({
    pkgName: "Basic",
    planName: "Hourly",
  });

  const packages = pricingPlans?.data?.map((item, index) => ({
    id: index,
    name: item.name,
  }));

  const plans = pricingPlans?.data[0]?.plans.map((item, index) => ({
    id: index,
    name: item.plan_name,
  }));

  const handleFilterChange = (key: keyof Filter, value: number) => {
    setFilter({ ...filter, [key]: value });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading title={`Welcome back ${user?.data.first_name || ""}`} label="Our Pricing plans" />
      <div className="flex flex-col gap-y-4">
        <div className="hidden lg:flex items-start justify-start gap-x-12">
          <TabMenu
            items={packages || []}
            selected={filter.pkgName}
            onChange={(e) => handleFilterChange("pkgName", e)}
          />
          <TabMenu items={plans || []} selected={filter.planName} onChange={(e) => handleFilterChange("planName", e)} />
        </div>
        <div className="lg:hidden flex flex-col gap-5">
          <DropdownMenu
            items={packages || []}
            selected={filter.pkgName}
            onChange={(e) => handleFilterChange("pkgName", e)}
          />
          <DropdownMenu
            items={plans || []}
            selected={filter.planName}
            onChange={(e) => handleFilterChange("planName", e)}
          />
        </div>
      </div>
      <div className="grid gap-4">
        {pricingPlans?.data?.some(
          (pkg) =>
            pkg.name === filter.pkgName &&
            pkg.plans.some(
              (plan: { plan_name: any; offers: string | any[] }) =>
                plan.plan_name === filter.planName && plan.offers.length > 0,
            ),
        ) ? (
          pricingPlans.data
            ?.filter((pkg) => pkg.name === filter.pkgName)
            ?.flatMap((pkg) =>
              pkg.plans
                ?.filter((plan: { plan_name: any }) => plan.plan_name === filter.planName)
                ?.flatMap((plan: { offers: any[] }) =>
                  plan.offers.map((offer, index) => (
                    <OfferCard
                      key={index}
                      offer={offer}
                      theme={filter.pkgName == "Basic" ? "primary" : filter.pkgName == "Standard" ? "danger" : "muted"}
                    />
                  )),
                ),
            )
        ) : (
          <p>No offers available for this plan.</p>
        )}
      </div>
    </>
  );
}

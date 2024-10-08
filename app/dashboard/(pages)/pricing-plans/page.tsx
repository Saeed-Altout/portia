"use client";

import { Fragment, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { Heading } from "@dashboard/_components/ui/heading";

import { TabMenu } from "./_components/tab-menu";
import { DropdownMenu } from "./_components/dropdown-menu";
import { OfferCard, OfferCardSkeleton } from "./_components/offer-card";

import {
  useGetCategoriesPackagesQuery,
  useGetCategoriesPlansQuery,
  useGetPricingPlansQuery,
} from "@dashboard/hooks";
import { renderTheme } from "../../helpers/render-theme";

export default function PricingPlansPage() {
  const { data, isSuccess, isLoading, isError } = useGetPricingPlansQuery();
  const {
    data: categoriesPlans,
    isLoading: categoriesPlansLoading,
    isError: categoriesPlansError,
    isSuccess: categoriesPlansSuccess,
  } = useGetCategoriesPlansQuery();
  const {
    data: categoriesPackages,
    isLoading: categoriesPackagesLoading,
    isError: categoriesPackagesError,
    isSuccess: categoriesPackagesSuccess,
  } = useGetCategoriesPackagesQuery();

  const [pkgName, setPkgName] = useState<string>("Basic");
  const [planName, setPlanName] = useState<string>("Hourly");

  const LoadingSkeletons = () => (
    <div className="flex flex-col lg:flex-row items-center justify-start gap-5">
      <Skeleton className="w-full lg:w-[240px] h-11 rounded-md" />
      <Skeleton className="w-full lg:w-[240px] h-11 rounded-md" />
    </div>
  );

  return (
    <Fragment>
      <Heading title="Welcome back, Jafar" label="Our Pricing plans" />
      <div className="flex flex-col gap-y-4">
        {(categoriesPackagesLoading ||
          categoriesPackagesError ||
          categoriesPlansLoading ||
          categoriesPlansError) && <LoadingSkeletons />}

        {categoriesPackagesSuccess && categoriesPlansSuccess && (
          <div>
            <div className="hidden lg:flex items-start justify-start gap-x-12">
              <TabMenu
                items={categoriesPackages?.data}
                selected={pkgName}
                onChange={setPkgName}
              />
              <TabMenu
                items={categoriesPlans?.data}
                selected={planName}
                onChange={setPlanName}
              />
            </div>
            <div className="lg:hidden flex flex-col gap-5">
              <DropdownMenu
                items={categoriesPackages?.data || []}
                selected={pkgName}
                onChange={setPkgName}
              />
              <DropdownMenu
                items={categoriesPlans?.data || []}
                selected={planName}
                onChange={setPlanName}
              />
            </div>
          </div>
        )}
      </div>

      {(isLoading || isError) && (
        <div className="grid gap-4">
          {[...Array(3)].map((_, index) => (
            <OfferCardSkeleton key={index} />
          ))}
        </div>
      )}
      {isSuccess && (
        <div className="grid gap-4">
          {data?.data?.some(
            (pkg) =>
              pkg.name === pkgName &&
              pkg.plans.some(
                (plan) => plan.plan_name === planName && plan.offers.length > 0
              )
          ) ? (
            data?.data
              ?.filter((pkg) => pkg.name === pkgName)
              ?.flatMap((pkg) =>
                pkg.plans
                  ?.filter((plan) => plan.plan_name === planName)
                  ?.flatMap((plan) =>
                    plan.offers.map((offer, index) => (
                      <OfferCard
                        key={index}
                        offer={offer}
                        fill={
                          pkgName == "Basic"
                            ? "primary"
                            : pkgName == "Standard"
                            ? "danger"
                            : "muted"
                        }
                        theme={
                          pkgName == "Basic"
                            ? "primary"
                            : pkgName == "Standard"
                            ? "danger"
                            : "muted"
                        }
                      />
                    ))
                  )
              )
          ) : (
            <p>No offers available for this plan.</p>
          )}
        </div>
      )}
    </Fragment>
  );
}

"use client";

import { Zap } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { useAuthStore, useModalStore } from "@/stores";
import { useGetOffersPackage, useGetPackageWithPlans } from "@/hooks";
import { ModalType } from "@/config/enums";

import { Heading } from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Circle, Icon } from "@/components/ui/circle-icon";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PricingPlansClient = () => {
  const { user } = useAuthStore();

  const {
    data: packages,
    isSuccess: packagesIsSuccess,
    isLoading: packagesIsLoading,
  } = useGetPackageWithPlans();
  const {
    data: offers,
    isSuccess: offersIsSuccess,
    isLoading: offersIsLoading,
  } = useGetOffersPackage();

  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const { onOpen } = useModalStore();

  // Automatically select the first package on load
  useEffect(() => {
    if (packagesIsSuccess && packages.data?.length > 0) {
      const firstPackage = packages.data[0];
      setSelectedPackage(firstPackage.package_id);
      setSelectedPlan(null);
    }
  }, [packagesIsSuccess, packages]);

  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId);
    setSelectedPlan(null); // Reset selected plan when package changes
  };

  const handlePlanSelect = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <>
      <Heading
        title={`Welcome back, ${user?.first_name || "User"}`}
        label="Explore Our Pricing Plans"
      />

      {/* Tabs filter */}
      {packagesIsLoading && (
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      )}

      {packagesIsSuccess && (
        <div className="hidden md:flex items-center gap-10">
          {/* Package Selector */}
          <div className="flex items-center gap-4 bg-muted w-fit p-2 rounded-md">
            {packages.data.map((pkg) => (
              <div
                key={pkg.package_id}
                role="button"
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium cursor-pointer",
                  selectedPackage === pkg.package_id
                    ? "bg-white text-black-default shadow-md"
                    : "bg-transparent text-muted-foreground"
                )}
                onClick={() => handlePackageSelect(pkg.package_id)}
              >
                {pkg.package_name}
              </div>
            ))}
          </div>

          {/* Plan Selector */}
          {selectedPackage && (
            <div className="flex items-center gap-4 bg-muted w-fit p-2 rounded-md">
              {packages.data
                .find((pkg) => pkg.package_id === selectedPackage)
                ?.plans.map((plan) => (
                  <div
                    key={plan.id}
                    role="button"
                    onClick={() => handlePlanSelect(plan.id)}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium cursor-pointer",
                      selectedPlan === plan.id
                        ? "bg-white text-black-default shadow-md"
                        : "bg-transparent text-muted-foreground"
                    )}
                  >
                    {plan.name}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Select filter */}
      {packagesIsLoading && (
        <div className="flex md:hidden flex-col gap-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      )}

      {packagesIsSuccess && (
        <div className="flex flex-col gap-2 md:hidden">
          <Select
            onValueChange={(value: string) => handlePackageSelect(+value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Package" />
            </SelectTrigger>
            <SelectContent>
              {packages.data.map((pkg) => (
                <SelectItem
                  key={pkg.package_id}
                  value={pkg.package_id.toString()}
                >
                  {pkg.package_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value: string) => handlePlanSelect(+value)}
            disabled={!selectedPackage}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Plan" />
            </SelectTrigger>
            <SelectContent>
              {packages.data
                .find((pkg) => pkg.package_id === selectedPackage)
                ?.plans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id.toString()}>
                    {plan.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Offers */}
      {offersIsLoading && (
        <div className="grid grid-cols-1 gap-8">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="p-4 w-full flex flex-col md:flex-row items-center justify-between gap-4 border rounded-md"
            >
              <div className="w-full flex items-center gap-4 md:max-w-md">
                <Skeleton className="h-[50px] w-[50px] rounded-full flex-shrink-0" />
                <div className="space-y-2 w-full">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                </div>
              </div>
              <div className="w-full flex flex-row md:flex-col gap-4 items-center md:items-start md:max-w-xs">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          ))}
        </div>
      )}
      {offersIsSuccess && (
        <div className="grid grid-cols-1 gap-6">
          {offers.data
            .filter(
              (offer) =>
                offer.package_id === selectedPackage &&
                (!selectedPlan || offer.plan_id === selectedPlan)
            )
            .map((offer) => (
              <div
                key={offer.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg gap-4 shadow-sm"
              >
                <div className="w-full flex items-center gap-x-4">
                  <Circle fill="primary">
                    <Icon icon={Zap} theme="primary" />
                  </Circle>
                  <p className="text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                </div>
                <div className="w-full md:w-auto flex flex-row md:flex-col items-center gap-4">
                  <p className="text-lg font-semibold text-primary">
                    ${offer.cost}
                  </p>
                  <Button
                    onClick={() => onOpen(ModalType.ACTIVE_PROXY)}
                    className="w-full md:w-auto"
                  >
                    Activate
                  </Button>
                </div>
              </div>
            ))}
          {offers.data.filter(
            (offer) =>
              offer.package_id === selectedPackage &&
              (!selectedPlan || offer.plan_id === selectedPlan)
          ).length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No offers available for the selected package and plan.
            </div>
          )}
        </div>
      )}
    </>
  );
};

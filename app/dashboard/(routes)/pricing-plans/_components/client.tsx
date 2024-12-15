"use client";

import { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heading } from "@/components/dashboard";
import { OfferCard } from "@/components/cards/offer-card";
import { TabSkeleton } from "@/components/skeletons/tab-skeleton";
import { SelectSkeleton } from "@/components/skeletons/select-skeleton";
import { OfferSkeleton } from "@/components/skeletons/offer-skeleton";

import { cn } from "@/lib/utils";
import { ModalType } from "@/config/enums";

import { useAuthStore, useModalStore, useStore } from "@/stores";
import { useGetOffersPackage, useGetPackageWithPlans } from "@/hooks";

export const PricingPlansClient = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const { user } = useAuthStore();
  const { onOpen, setStep } = useModalStore();
  const { setProxyId, setProxyCost } = useStore();

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

  useEffect(() => {
    if (packagesIsSuccess && packages.data?.length > 0) {
      const firstPackage = packages.data[0];
      setSelectedPackage(firstPackage.package_id);
      setSelectedPlan(null);
    }
  }, [packagesIsSuccess, packages]);

  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId);
    setSelectedPlan(null);
  };

  const handlePlanSelect = (planId: number) => {
    setSelectedPlan(planId);
  };

  const handleActiveProxy = (id: number, cost: string) => {
    setProxyId(id.toString());
    setProxyCost(cost);
    onOpen(ModalType.ACTIVE_PROXY);
    setStep(3);
  };

  return (
    <>
      <Heading
        title={`Welcome back, ${user?.first_name || "User"}`}
        label="Explore Our Pricing Plans"
      />
      {/* Tabs */}
      {packagesIsLoading && <TabSkeleton />}
      {packagesIsSuccess && (
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-4 bg-muted w-fit p-2 rounded-md">
            {packages.data.map((pkg) => (
              <TabItem
                key={pkg.package_id}
                handleSelect={() => handlePackageSelect(pkg.package_id)}
                name={pkg.package_name}
                active={selectedPackage === pkg.package_id}
              />
            ))}
          </div>

          {selectedPackage && (
            <div className="flex items-center gap-4 bg-muted w-fit p-2 rounded-md">
              {packages.data
                .find((pkg) => pkg.package_id === selectedPackage)
                ?.plans.map((plan) => (
                  <TabItem
                    key={plan.id}
                    handleSelect={() => handlePlanSelect(plan.id)}
                    name={plan.name}
                    active={selectedPlan === plan.id}
                  />
                ))}
            </div>
          )}
        </div>
      )}

      {/* Select */}
      {packagesIsLoading && <SelectSkeleton />}
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
            <OfferSkeleton key={index} />
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
              <OfferCard
                key={offer.id}
                offer={offer}
                handleClick={() => handleActiveProxy(offer.id, offer.cost)}
              />
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

interface TabItemProps {
  active: boolean;
  handleSelect: () => void;
  name: string;
}
const TabItem = ({ active, handleSelect, name }: TabItemProps) => {
  return (
    <div
      role="button"
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium cursor-pointer",
        active
          ? "bg-white text-black-default shadow-md"
          : "bg-transparent text-muted-foreground"
      )}
      onClick={handleSelect}
    >
      {name}
    </div>
  );
};

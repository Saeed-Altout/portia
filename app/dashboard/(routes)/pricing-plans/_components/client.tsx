"use client";

import { useState, useEffect, Key } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heading } from "@/components/dashboard";
import { OfferCard } from "@/components/cards/offer-card";
import { LoadingApi2 } from "@/components/pages/loading-api";
import { ErrorApi } from "@/components/pages/error-api";

import { cn } from "@/lib/utils";
import { ModalType } from "@/config/enums";

import { useData } from "./plans-context";

import { useAuthStore } from "@/stores/use-auth-store";
import { useModalStore } from "@/stores/use-modal-store";
import { useProxyStore } from "@/stores/reducers/use-proxy-store";

export const PlansClient = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const { user } = useAuthStore();
  const { onOpen, setStep } = useModalStore();
  const { proxy, setProxy, setPrice } = useProxyStore();
  const { isLoading, isError, isSuccess, packages, offers } = useData();

  const handlePackageSelect = (id: number) => {
    setSelectedPackage(id);
    setSelectedPlan(null);
  };

  const handlePlanSelect = (id: number) => {
    setSelectedPlan(id);
  };

  const handleActiveProxy = (id: number, cost: string) => {
    setProxy({ ...proxy, proxy_id: id.toString() });
    setPrice(cost);
    onOpen(ModalType.ACTIVE_PROXY);
    setStep(3);
  };

  useEffect(() => {
    if (isSuccess && packages.length > 0) {
      const firstPackage = packages[0];
      setSelectedPackage(firstPackage.package_id);
      setSelectedPlan(null);
    }
  }, [isSuccess, packages]);

  if (isLoading || !isSuccess) {
    return <LoadingApi2 />;
  }

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <>
      <Heading
        title={`Welcome back, ${user?.first_name || ""}`}
        label="Explore Our Pricing Plans"
      />
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-4 bg-muted w-fit p-2 rounded-md">
          {packages.map((pkg, key) => (
            <div
              key={key}
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
        <div className="flex items-center gap-4 bg-muted w-fit p-2 rounded-md">
          {packages
            .find((pkg) => pkg.package_id === selectedPackage)
            ?.plans.map((plan: any, key: Key) => (
              <div
                key={key}
                role="button"
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium cursor-pointer",
                  selectedPlan === plan.id
                    ? "bg-white text-black-default shadow-md"
                    : "bg-transparent text-muted-foreground"
                )}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {plan.name}
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        <Select onValueChange={(value: string) => handlePackageSelect(+value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select Package" />
          </SelectTrigger>
          <SelectContent>
            {packages.map((pkg) => (
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
            {packages
              .find((pkg) => pkg.package_id === selectedPackage)
              ?.plans.map((plan: any) => (
                <SelectItem key={plan.id} value={plan.id.toString()}>
                  {plan.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {offers
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
        {offers.filter(
          (offer) =>
            offer.package_id === selectedPackage &&
            (!selectedPlan || offer.plan_id === selectedPlan)
        ).length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No offers available for the selected package and plan.
          </div>
        )}
      </div>
    </>
  );
};

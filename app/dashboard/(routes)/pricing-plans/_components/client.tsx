"use client";

import { useState, useEffect, Key } from "react";
import { Zap } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "@/components/circle-icon";
import { Heading } from "@/components/heading";
import { LoadingApi2 } from "@/components/pages/loading-api";
import { ErrorApi } from "@/components/pages/error-api";

import { cn } from "@/lib/utils";
import { ModalType } from "@/config/constants";
import { useData } from "@/contexts/plans-context";

import { useAuthStore, useModalStore, useProxyStore } from "@/stores";

export const PlansClient = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const { user } = useAuthStore();
  const { onOpen, setStep } = useModalStore();
  const { offer, setOffer, setPrice } = useProxyStore();
  const { isLoading, isError, isSuccess, packages, offers } = useData();

  const handlePackageSelect = (id: number) => {
    setSelectedPackage(id);
    setSelectedPlan(null);
  };

  const handlePlanSelect = (id: number) => {
    setSelectedPlan(id);
  };

  const handleActiveProxy = (id: number, cost: string) => {
    setStep(3);
    setOffer({ ...offer, id });
    setPrice(cost);
    onOpen(ModalType.ACTIVE_PROXY);
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
          .map((offer, key) => (
            <div
              key={key}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg gap-4 shadow-sm overflow-hidden"
            >
              <div className="w-full flex items-center gap-x-4">
                <CircleIcon icon={Zap} theme={"primary"} />
                <div className="flex-1">
                  <h3 className="text-lg font-medium capitalize">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-row md:flex-col items-center gap-4">
                <p className="text-lg font-semibold text-primary">
                  ${offer.cost}
                </p>
                <Button
                  disabled={offer.is_available}
                  onClick={() => handleActiveProxy(offer.id, offer.cost)}
                  className="w-full md:w-auto"
                >
                  Activate
                </Button>
              </div>
            </div>
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

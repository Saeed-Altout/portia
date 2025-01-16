"use client";

import { useState, useEffect, Key } from "react";
import { Loader, Zap } from "lucide-react";

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

import { useData } from "./plans-context";
import { cn } from "@/lib/utils";
import { ModalType } from "@/config/constants";

import { useAuthStore, useModalStore, useProxyStore } from "@/stores";
import { ActivateProxyModal } from "@/components/dialogs/activate-proxy-modal";
import { useGetProxyByIdQuery } from "@/services/proxies/hooks";

export const PlansClient = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [loadingOfferId, setLoadingOfferId] = useState<number | null>(null);

  const { user } = useAuthStore();
  const { type, isOpen, onOpen, setStep } = useModalStore();
  const { proxy, offer, setOffer, setPrice, setProxy } = useProxyStore();
  const { isLoading, isError, isSuccess, packages, offers } = useData();

  const currentProxy = useGetProxyByIdQuery(offer.id.toString());
  const isOpenModal =
    isOpen && type === ModalType.ACTIVE_PROXY && currentProxy.isSuccess;

  const handlePackageSelect = (id: number) => {
    setSelectedPackage(id);
    setSelectedPlan(null);
  };

  const handlePlanSelect = (id: number) => {
    setSelectedPlan(id);
  };

  const handleActiveProxy = async (id: number, cost: string) => {
    setLoadingOfferId(id);
    setOffer({ ...offer, id });
    setPrice(cost);
    setStep(3);
  };

  useEffect(() => {
    if (isSuccess && packages.length > 0) {
      const firstPackage = packages[0];
      setSelectedPackage(firstPackage.package_id);
      setSelectedPlan(null);
    }
  }, [isSuccess, packages]);

  useEffect(() => {
    if (currentProxy.isSuccess) {
      setProxy({
        ...proxy,
        plan_name: currentProxy.data.data.plan,
        package_name: currentProxy.data.data.package_name,
        rotation_time: currentProxy.data.data.rotation_time.toString(),
        protocol: currentProxy.data.data.port,
        service_provider: currentProxy.data.data.service_provider_name,
        country_name: currentProxy.data.data.country_name,
        duration: currentProxy.data.data.duration,
        package_id: currentProxy.data.data.package_id.toString(),
        parent_proxy_id: currentProxy.data.data.parent_proxy_id,
        amount: currentProxy.data.data.amount,
      });
      onOpen(ModalType.ACTIVE_PROXY);
      setLoadingOfferId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProxy.isSuccess, onOpen, setProxy]);

  if (isLoading || !isSuccess) {
    return <LoadingApi2 />;
  }

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <>
      {currentProxy.isSuccess && (
        <ActivateProxyModal
          isOpen={isOpenModal}
          proxy={currentProxy.data?.data}
        />
      )}
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
                <CircleIcon icon={Zap} theme={offer.color} />
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
                <p
                  className={cn(
                    "text-lg font-semibold",
                    offer.color === "primary" && "text-primary",
                    offer.color === "danger" && "text-[#E31B54]",
                    offer.color === "mute" && "text-[#4B4B57]",
                    offer.color === "success" && "text-[#11807E]"
                  )}
                >
                  ${offer.cost}
                </p>
                <Button
                  disabled={offer.is_available || currentProxy.isFetching}
                  onClick={() => handleActiveProxy(offer.id, offer.cost)}
                  className={cn(
                    "w-full md:w-auto",
                    offer.color === "primary" && "bg-[#111280] ",
                    offer.color === "danger" &&
                      "bg-[#E31B54] hover:bg-[#E31B54]/80",
                    offer.color === "mute" && "bg-[#4B4B57] bg-[#4B4B57]/80",
                    offer.color === "success" && "bg-[#26A6A4] bg-[#26A6A4]/80"
                  )}
                >
                  Activate
                  {loadingOfferId === offer.id && (
                    <Loader className="animate-spin h-5 w-5 ml-2" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        {offers.filter(
          (offer) =>
            offer.package_id === selectedPackage &&
            (!selectedPlan || offer.plan_id === selectedPlan)
        ).length === 0 && <ErrorApi />}
      </div>
    </>
  );
};

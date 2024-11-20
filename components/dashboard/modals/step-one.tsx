"use client";

import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { proxyStore } from "@/stores/proxy-store";
import { useGetPlansWithCost } from "@/hooks/dashboard/use-get-plans-with-cost";

interface StepOneProps {
  isLoading?: boolean;
  packages: {
    id: number;
    name: string;
  }[];
}

export const StepOne = ({ isLoading, packages }: StepOneProps) => {
  const { control } = useFormContext();
  const { setPackageId, pkg_id, setDuration, setPrice } = proxyStore();
  const { data: proxiesWithCost, isFetching: isFetchingPlans } =
    useGetPlansWithCost({ pkg_id });

  const [filteredPlans, setFilteredPlans] = useState<string[]>([]);
  const [filteredAmounts, setFilteredAmounts] = useState<string[]>([]);

  // Handle Package Selection
  const handlePackageSelect = (value: string) => {
    const packageId = Number(value);
    setPackageId(packageId);

    // Reset dependent fields
    setFilteredPlans([]);
    setFilteredAmounts([]);
  };

  // Handle Plan Selection
  const handlePlanSelect = (plan: string) => {
    const amounts =
      proxiesWithCost?.data && plan in proxiesWithCost.data
        ? proxiesWithCost.data[plan as keyof typeof proxiesWithCost.data]?.map(
            (item) => String(item.value)
          )
        : [];
    setFilteredAmounts(amounts);
  };

  // Handle Amount Selection
  const handleAmountSelect = (value: string) => {
    const selectedItem = Object.values(proxiesWithCost?.data || {})
      .flatMap((items) => items)
      .find((item) => String(item.value) === value);

    if (selectedItem) {
      setPrice(selectedItem.price);
      setDuration(selectedItem.duration);
    }
  };

  // Update Plans when Package Changes
  useEffect(() => {
    if (proxiesWithCost?.data) {
      const plans = Object.keys(proxiesWithCost.data);
      setFilteredPlans(plans);

      // Reset amounts if plans update
      setFilteredAmounts([]);
    }
  }, [proxiesWithCost]);

  return (
    <>
      {/* Package Selection */}
      <FormField
        control={control}
        name="pkg_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Packages</FormLabel>
            <Select
              disabled={isLoading || packages.length === 0}
              onValueChange={(value) => {
                field.onChange(value);
                handlePackageSelect(value);
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {packages.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Plan Selection */}
      <FormField
        control={control}
        name="plan_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plans</FormLabel>
            <Select
              disabled={
                isLoading || isFetchingPlans || filteredPlans.length === 0
              }
              onValueChange={(value) => {
                field.onChange(value);
                handlePlanSelect(value);
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {filteredPlans.map((plan) => (
                  <SelectItem key={plan} value={plan} className="capitalize">
                    {plan}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Amount Selection */}
      <FormField
        control={control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <Select
              disabled={isLoading || filteredAmounts.length === 0}
              onValueChange={(value) => {
                field.onChange(value);
                handleAmountSelect(value);
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an amount" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {filteredAmounts.map((amount, index) => (
                  <SelectItem key={index} value={amount.toString()}>
                    {amount}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

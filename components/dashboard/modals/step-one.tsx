"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";

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

import { useGetCost } from "@/features/dashboard/hooks/use-get-cost";
import { proxyStore } from "@/stores/proxy-store";

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
  const { data: cost, refetch } = useGetCost({ pkg_id });

  const [amounts, setAmounts] = useState<number[]>([]);

  const handlePackageSelect = (value: string) => {
    const packageId = Number(value);
    setPackageId(packageId);
    refetch();
  };

  const handlePlanSelect = (plan: string) => {
    if (cost?.data) {
      const filteredAmounts = cost.data
        .map((item) => {
          if (plan.toLowerCase() === "hourly" && item.hours > 0) {
            return item.hours;
          }
          if (plan.toLowerCase() === "daily" && item.days > 0) {
            return item.days;
          }
          return null;
        })
        .filter((value): value is number => value !== null);
      setAmounts(filteredAmounts);
    } else {
      setAmounts([]);
    }
  };

  const handleAmountSelect = (value: string) => {
    const selectedAmount = Number(value);

    // Find the corresponding price from cost data
    if (cost?.data) {
      const selectedCost = cost.data.find(
        (item) => item.hours === selectedAmount || item.days === selectedAmount
      );

      if (selectedCost) {
        setPrice(selectedCost.price); // Update the price in the proxy store
        setDuration(selectedAmount); // Update the duration in the proxy store
      }
    }
  };

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
              disabled={isLoading || packages.length === 0}
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
                {["Daily", "Hourly"].map((plan) => (
                  <SelectItem key={plan} value={plan}>
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
              disabled={isLoading || amounts.length === 0}
              onValueChange={(value) => {
                field.onChange(value);
                handleAmountSelect(value); // Update price and duration
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an amount" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {amounts.map((amount, index) => (
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

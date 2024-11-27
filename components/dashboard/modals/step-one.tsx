"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useProxyStore } from "@/stores";

interface StepOneProps {
  isLoading?: boolean;
}

interface ValuePlanProps {
  price: number;
  duration: number;
  value: number;
}

export const StepOne = ({ isLoading }: StepOneProps) => {
  const [valuePlan, setValuePlan] = useState<ValuePlanProps[]>([]);
  const { control } = useFormContext();
  const { packages, plans, costs, amounts, setPkgId, setPrice, setDuration, setAmounts } = useProxyStore();

  const handlePackageSelect = (newPkgId: string) => {
    setPkgId(newPkgId);
    // Clear State
    setValuePlan([]);
    setAmounts([]);
    setDuration(0);
    setPrice(0);
  };
  const handlePlanSelect = (plan: string) => {
    const valuePlan = Object.entries(costs)
      .filter(([key]) => key === plan)
      .map(([, value]) => value)
      .flat();

    setValuePlan(valuePlan);

    const amounts = valuePlan.map((item) => item.value);
    setAmounts(amounts);

    // Clear State
    setDuration(0);
    setPrice(0);
  };

  const handleAmountSelect = (amount: number) => {
    const values = valuePlan.filter((item) => item.value == amount && item)[0];
    if (values) {
      setDuration(values.duration);
      setPrice(values.price);
    }
  };

  return (
    <>
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
      <FormField
        control={control}
        name="plan_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plans</FormLabel>
            <Select
              disabled={isLoading || plans.length === 0}
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
                {plans.map((plan) => (
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
      <FormField
        control={control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <Select
              disabled={isLoading || amounts.length == 0}
              onValueChange={(value) => {
                field.onChange(value);
                handleAmountSelect(+value);
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

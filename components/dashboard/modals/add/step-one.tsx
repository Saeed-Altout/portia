"use client";

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

import { useProxyStore } from "@/stores";
import { useGetAllPackages, useGetCostPlans } from "@/hooks";
import { useStore } from "@/stores/use-store";

interface StepOneProps {
  form: any;
  isLoading?: boolean;
}

interface ValuePlanProps {
  price: number;
  duration: number;
  value: number;
}

export const StepOne = ({ form, isLoading }: StepOneProps) => {
  const [valuePlan, setValuePlan] = useState<ValuePlanProps[]>([]);
  const [costs, setCosts] = useState<Record<string, ValuePlanProps[]>>({});

  const {
    pkgId,
    amounts,
    setPkgId,
    setPrice,
    setDuration,
    setAmounts,
    plans,
    setPlans,
  } = useProxyStore();

  const { data: packages, isLoading: packagesIsLoading } = useGetAllPackages();
  const {
    data: costsData,
    isFetching: costsDataIsFetching,
    isSuccess: costsIsSuccess,
  } = useGetCostPlans({
    pkg_id: pkgId,
  });

  const handlePackageSelect = (newPkgId: string) => {
    setPkgId(newPkgId);
  };

  const handlePlanSelect = (plan: string) => {
    const selectedValuePlan = costs[plan] || [];
    const newAmounts = selectedValuePlan.map(
      (item) => `${item.value}::${plan}`
    );

    setValuePlan(selectedValuePlan);
    setAmounts(newAmounts);
  };

  const handleAmountSelect = (uniqueValue: string) => {
    const [amount, plan] = uniqueValue.split("::");
    const selectedValue = valuePlan.find(
      (item) => item.value === Number(amount) && plan
    );

    if (selectedValue) {
      setDuration(selectedValue.duration);
      setPrice(selectedValue.price);
    }
  };

  useEffect(() => {
    if (costsIsSuccess) {
      const fetchedCosts = costsData.data;
      setCosts(fetchedCosts);
      setPlans(Object.keys(fetchedCosts));
    }
  }, [pkgId, costsData, costsIsSuccess, form, setPlans]);

  return (
    <>
      <FormField
        control={form.control}
        name="pkg_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Packages</FormLabel>
            <Select
              disabled={packagesIsLoading || packages?.data.length === 0}
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
                {packages?.data.map((item) => (
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
        control={form.control}
        name="plan_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plans</FormLabel>
            <Select
              disabled={isLoading || costsDataIsFetching || plans.length === 0}
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
        control={form.control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <Select
              disabled={isLoading || amounts.length === 0}
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
                {amounts.map((uniqueValue) => {
                  const [amount] = uniqueValue.split("::");
                  return (
                    <SelectItem key={uniqueValue} value={uniqueValue}>
                      {amount}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
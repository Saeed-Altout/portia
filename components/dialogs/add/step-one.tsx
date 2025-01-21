"use client";

import { Loader2 } from "lucide-react";
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
import {
  useGetAllPackagesQuery,
  useGetCostPlansQuery,
} from "@/services/settings/hooks";
import { useProxyStore } from "@/stores";

export const StepOne = ({ form }: { form: any }) => {
  const [data, setData] = useState<any[]>([]);
  const [plans, setPlans] = useState<string[]>([]);

  const { proxy, setProxy, setPrice } = useProxyStore();

  const packages = useGetAllPackagesQuery();
  const costs = useGetCostPlansQuery({ pkg_id: proxy.package_id });

  useEffect(() => {
    if (proxy.package_id && costs.isSuccess) {
      const currentPlans = Object.keys(costs.data.data);
      setPlans(currentPlans);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proxy.package_id, costs.isSuccess]);

  useEffect(() => {
    if (proxy.plan_name && costs.isSuccess) {
      // @ts-ignore
      const currentData = costs.data.data[proxy.plan_name].map(
        (item: any) => item
      );
      setData(currentData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proxy.plan_name, costs.isSuccess]);

  return (
    <>
      <FormField
        control={form.control}
        name="pkgName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Package</FormLabel>
            <Select
              disabled={!packages.isSuccess}
              onValueChange={(value) => {
                const [id, name] = value.split("::");
                field.onChange(name);
                setProxy({
                  ...proxy,
                  package_id: id,
                  package_name: name,
                  plan_name: "",
                  amount: "",
                  duration: "",
                });
                setPrice("0");
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  {packages.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <SelectValue placeholder="select a package" />
                  )}
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {packages.data?.data.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={`${option.id}::${option.name}`}
                  >
                    {option.name}
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
        name="planName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plan</FormLabel>
            <Select
              disabled={!costs.isSuccess}
              onValueChange={(value) => {
                field.onChange(value);
                setProxy({
                  ...proxy,
                  plan_name: value,
                  amount: "",
                  duration: "",
                });
                setPrice("0");
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  {costs.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <SelectValue placeholder="select a plan" />
                  )}
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {plans.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
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
              disabled={!costs.isSuccess || !data.length}
              onValueChange={(value) => {
                const [amount, _plan] = value.split("::");
                field.onChange(amount);
                data.find((item) => {
                  if (item.value == amount) {
                    setProxy({
                      ...proxy,
                      amount: item.value.toString(),
                      duration: item.duration.toString(),
                    });
                    setPrice(item.price.toString());
                  }
                });
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  {costs.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <SelectValue placeholder="select an amount" />
                  )}
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {data.map((option) => (
                  <SelectItem
                    key={`${option.value}`}
                    value={`${option.value}::${proxy.plan_name}`}
                  >
                    {option.value}
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

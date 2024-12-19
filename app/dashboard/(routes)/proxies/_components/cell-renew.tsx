"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Circle, Icon } from "@/components/ui/circle-icon";
import { ArrowUpRight, Key, User, Zap } from "lucide-react";
import { renewProxySchema } from "@/schemas";
import { Proxy } from "./columns";
import { useGetAllPackages, useGetCostPlans } from "@/hooks";
import { useProxyStore } from "@/stores";
import { useEffect, useState } from "react";

interface ValuePlanProps {
  price: number;
  duration: number;
  value: number;
}
export const CellButtonRenew = ({ data }: { data: Proxy }) => {
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

  const form = useForm<z.infer<typeof renewProxySchema>>({
    resolver: zodResolver(renewProxySchema),
    defaultValues: {
      pkg_id: data.package_id || "",
      plan_id: data.plan_name || "",
      amount: data.duration?.toString() || "",
      provider: `${data.service_provider}/${data.country_name}` || "",
      ipRotation: data.rotation_time || "",
      protocol: data.protocol || "",
      re_new: false,
      username: data.username || "",
      password: data.password || "",
    },
  });

  const onSubmit = (values: z.infer<typeof renewProxySchema>) => {
    console.log(values);
  };

  useEffect(() => {
    if (costsIsSuccess) {
      const fetchedCosts = costsData.data;
      setCosts(fetchedCosts);
      setPlans(Object.keys(fetchedCosts));
    }
  }, [pkgId, costsData, costsIsSuccess, form, setPlans]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm">Renew</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-screen px-0 w-full sm:w-3/4">
        <div className="sticky top-0 z-10 border-b p-4 pt-0">
          <SheetHeader>
            <Circle fill="primary">
              <Icon icon={Zap} theme="primary" />
            </Circle>
            <div>
              <SheetTitle>Renew Proxy</SheetTitle>
              <SheetDescription>
                You can renew your proxy here.
              </SheetDescription>
            </div>
          </SheetHeader>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="pkg_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Packages</FormLabel>
                    <Select
                      disabled={
                        packagesIsLoading || packages?.data.length === 0
                      }
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
                      disabled={costsDataIsFetching || plans.length === 0}
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
                          <SelectItem
                            key={plan}
                            value={plan}
                            className="capitalize"
                          >
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
                      disabled={amounts.length === 0}
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
              <FormField
                control={form.control}
                name="protocol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proxy Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || data.protocol}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a proxy type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* Add proxy type options here */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="provider"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provider & Location</FormLabel>
                    <FormControl>
                      <div className="flex justify-between items-center">
                        <Input
                          placeholder="Provider & Location"
                          className="flex-1 rounded-r-none"
                          disabled={true}
                          readOnly
                          {...field}
                        />
                        <Button
                          size="icon"
                          className="rounded-l-none"
                          type="button"
                          asChild
                        >
                          <Link
                            href={`/dashboard/locations?callback=${window.location.href}`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">ArrowUpRight Icon</span>
                          </Link>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ipRotation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum time between IP rotation</FormLabel>
                    <FormControl>
                      <Input
                        disabled={true}
                        readOnly
                        placeholder="IP rotation"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        icon={User}
                        type="text"
                        placeholder="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        icon={Key}
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div className="sticky bottom-0 border-t p-4 pb-0 flex justify-end gap-4">
          <Button type="submit" className="w-full md:w-auto">
            Renew
          </Button>
          <Button type="button" variant="outline" className="w-full md:w-auto">
            Cancel
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

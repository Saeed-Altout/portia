"use client";

import Link from "next/link";
import { ArrowUpRight, Key, User, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleLoader, Loader } from "@/components/ui/loader";
import { Circle, Icon } from "@/components/ui/circle-icon";

import { Proxy } from "./columns";
import { useGetCostPlans, useGetPorts, useRenewProxy } from "@/hooks";
import { useModalStore, useProxyStore } from "@/stores";

const formSchema = z.object({
  plan: z.string(),
  amount: z.string(),
  provider: z.string(),
  ipRotation: z.string(),
  protocol: z.string(),
  username: z.string(),
  password: z.string(),
});

export const CellButtonRenew = ({ data }: { data: Proxy }) => {
  const pathname = usePathname();
  const [currentPlan, setCurrentPlan] = useState<any[]>([]);
  const [costs, setCosts] = useState<Record<string, any[]>>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    pkgId,
    amounts,
    setPkgId,
    setPrice,
    setDuration,
    setAmounts,
    plans,
    duration,
    setPlans,
    location,
    setLocation,
  } = useProxyStore();

  const { data: ports, isSuccess: portsIsSuccess } = useGetPorts({ id: pkgId });
  const { data: costsData, isSuccess: costsIsSuccess } = useGetCostPlans({
    pkg_id: pkgId,
  });

  const { mutateAsync, isPending } = useRenewProxy();
  const isSuccess = costsIsSuccess || portsIsSuccess;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: data.plan_name || "",
      amount: `${data.amount}` || "",
      provider: `${data.service_provider}/${data.country_name}` || "",
      ipRotation: data.rotation_time || "",
      protocol: data.protocol || "",
      username: data.username || "",
      password: data.password || "",
    },
  });

  const handleSelectPlan = useCallback(
    (plan: string) => {
      const valueCurrentPlan = costs[plan] || [];
      setCurrentPlan(valueCurrentPlan);
      // Extract amounts from plan
      const amounts = valueCurrentPlan.map((item) => `${item.value}`);
      setAmounts(amounts);
    },
    [costs, setAmounts]
  );

  const handleSelectAmount = useCallback(
    (amount: string) => {
      const currentObject = currentPlan.find((item) => item.value === +amount);

      if (currentObject) {
        setDuration(currentObject.duration);
        setPrice(currentObject.price);
      }
    },
    [currentPlan, setDuration, setPrice]
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        proxy_id: data.proxy_id,
        parent_proxy_id: data.parent_proxy_id,
        protocol: values.protocol,
        duration: duration ? duration.toString() : "",
        password: values.password,
      });
      form.reset();
      setIsOpen(false);
      setLocation({} as ILocation);
    } catch (error) {}
  };

  useEffect(() => {
    if (location.service_provider_name && location.rotation_time) {
      form.setValue("ipRotation", `${location.rotation_time ?? ""}`);
      form.setValue("provider", `${location.service_provider_name ?? ""}`);
    }
  }, [form, location]);

  useEffect(() => {
    if (costsIsSuccess) {
      const fetchedCosts = costsData.data;
      setCosts(fetchedCosts);
      setPlans(Object.keys(fetchedCosts));
    }
  }, [pkgId, costsData, costsIsSuccess, form, setPlans]);

  useEffect(() => {
    if (data.plan_name) {
      handleSelectPlan(data.plan_name);
    }
  }, [data.plan_name, handleSelectPlan]);
  useEffect(() => {
    if (data.amount) {
      handleSelectAmount(data.amount);
    }
  }, [data.amount, handleSelectAmount]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size="sm"
          onClick={() => {
            setIsOpen(true);
            setPkgId(data.package_id);
          }}
        >
          Renew
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-screen px-0 w-full sm:w-3/4">
        {isSuccess ? (
          <>
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

            <div className="flex-1 overflow-y-auto p-4 pb-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="space-y-4 pb-10">
                    <FormField
                      control={form.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Plan</FormLabel>
                          <Select
                            disabled={isPending}
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleSelectPlan(value);
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
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount</FormLabel>
                          <Select
                            disabled={isPending}
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleSelectAmount(value);
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an amount" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {amounts.map((amount, key) => (
                                <SelectItem key={key} value={amount}>
                                  {amount}
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
                      name="protocol"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proxy Type</FormLabel>
                          <Select
                            disabled={isPending}
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a proxy type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {ports?.data.map((item, index) => (
                                <SelectItem key={index} value={item}>
                                  {item}
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
                                {...field}
                              />
                              <Button
                                size="icon"
                                className="rounded-l-none"
                                type="button"
                                asChild
                              >
                                <Link
                                  href={`/dashboard/locations?callback=${pathname}`}
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                  <span className="sr-only">
                                    ArrowUpRight Icon
                                  </span>
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
                          <FormLabel>
                            Minimum time between IP rotation
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={true}
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
                              disabled={true}
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
                              disabled={isPending}
                              placeholder="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="bg-white sticky bottom-0 border-t py-2 px-4 flex justify-end gap-4">
                    <Button
                      disabled={isPending}
                      type="submit"
                      className="w-full md:w-auto"
                    >
                      {isPending ? <Loader /> : "Renew"}
                    </Button>
                    <Button
                      disabled={isPending}
                      type="button"
                      variant="outline"
                      className="w-full md:w-auto"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </>
        ) : (
          <div className="h-full flex justify-center items-center">
            <CircleLoader />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

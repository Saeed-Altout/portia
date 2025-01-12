"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowUpRight, Key, User, Zap } from "lucide-react";

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
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Loader2 } from "@/components/ui/loader";
import { Circle, Icon } from "@/components/ui/circle-icon";
import { ErrorApi } from "@/components/pages/error-api";

import { useModalStore, useProxyStore } from "@/stores";
import { ModalType, ROUTES } from "@/config/constants";
import {
  useGetCostPlansQuery,
  useGetPortsQuery,
} from "@/services/settings/hooks";
import { useRenewProxyMutation } from "@/services/proxies/hooks";

const formSchema = z.object({
  plan: z.string(),
  amount: z.string(),
  provider: z.string(),
  ipRotation: z.string(),
  protocol: z.string(),
  username: z.string(),
  password: z.string(),
});

export const RenewSheet = () => {
  const pathname = usePathname();

  const [duration, setDuration] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [amounts, setAmounts] = useState<string[]>([]);
  const [recordsPlan, setRecordsPlan] = useState<
    {
      value: number;
      price: number;
      duration: number;
    }[]
  >([]);

  const { proxy, location, reset } = useProxyStore();

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.RENEW_PROXY;

  const ports = useGetPortsQuery({ id: proxy.package_id });
  const costsData = useGetCostPlansQuery({ pkg_id: proxy.package_id });
  const { mutateAsync, isPending } = useRenewProxyMutation();

  const plans = costsData.isSuccess ? Object.keys(costsData.data.data) : [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "",
      provider: "",
      protocol: "",
      username: "",
      password: "",
      amount: "",
      ipRotation: "",
    },
  });

  const onCancel = () => {
    reset();
    form.reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        proxy_id: proxy?.proxy_id,
        parent_proxy_id: !!proxy.parent_proxy_id
          ? !!location.id
            ? location.id.toString()
            : proxy.parent_proxy_id
          : "",
        protocol: values.protocol,
        password: values.password,
        duration: duration,
      });
      onCancel();
    } catch (error) {}
  };

  useEffect(() => {
    if (costsData.isSuccess && proxy.plan_name) {
      //@ts-ignore
      const currentRecords = costsData.data?.data[proxy.plan_name];
      if (currentRecords) {
        setRecordsPlan(currentRecords);

        const amounts = currentRecords.map((obj: any) => {
          return obj.value.toString();
        });
        setAmounts(amounts);
      }
    }
  }, [costsData.data?.data, costsData.isSuccess, proxy.plan_name]);

  useEffect(() => {
    if (proxy.amount && recordsPlan) {
      const currentRecord = recordsPlan.find((record: any) => {
        return record.value.toString() === proxy.amount.toString();
      });

      if (currentRecord) {
        setDuration(currentRecord.duration.toString());
        setAmount(currentRecord.value.toString());
      }
    }
  }, [proxy.amount, recordsPlan]);

  useEffect(() => {
    if (proxy.rotation_time) {
      if (location.rotation_time) {
        form.setValue("ipRotation", `${location.rotation_time ?? ""}`);
      } else {
        form.setValue("ipRotation", `${location.rotation_time ?? ""}`);
      }
    }
    if (proxy.service_provider) {
      if (location.service_provider_name) {
        form.setValue("provider", `${location.service_provider_name ?? ""}`);
      } else {
        form.setValue("provider", `${proxy.service_provider ?? ""}`);
      }
    }
  }, [form, proxy, location]);

  useEffect(() => {
    if (proxy.username) form.setValue("username", proxy.username);
    if (proxy.password) form.setValue("password", proxy.password);
    if (proxy.protocol) form.setValue("protocol", proxy.protocol);
    if (proxy.plan_name) form.setValue("plan", proxy.plan_name);
    if (proxy.amount) form.setValue("amount", proxy.amount.toString());
  }, [form, proxy]);

  return (
    <Sheet open={isOpenModal} onOpenChange={onCancel}>
      <SheetContent className="flex flex-col h-screen px-0 w-full sm:w-3/4">
        <SheetHeader className="px-4">
          <Circle fill="primary">
            <Icon icon={Zap} theme="primary" />
          </Circle>
          <div>
            <SheetTitle>Renew Proxy</SheetTitle>
            <SheetDescription>You can renew your proxy here.</SheetDescription>
          </div>
        </SheetHeader>
        {ports.isLoading && costsData.isLoading && (
          <div className="h-full flex justify-center items-center">
            <Loader2 />
          </div>
        )}
        {(ports.isError || costsData.isError) && <ErrorApi />}
        {ports.isSuccess && costsData.isSuccess && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan</FormLabel>
                    <Select
                      value={field.value}
                      disabled={isPending || plans.length === 0}
                      onValueChange={(value) => {
                        setRecordsPlan([]);
                        setAmounts([]);
                        setDuration("");
                        setAmount("");

                        if (costsData && costsData.data) {
                          //@ts-ignore
                          const currentRecords = costsData.data[value];
                          if (currentRecords) {
                            setRecordsPlan(currentRecords);
                            setAmounts(
                              currentRecords.map((obj: any) =>
                                obj.value.toString()
                              )
                            );
                          }
                        }

                        field.onChange(value);
                      }}
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
                      value={amount}
                      disabled={isPending || amounts.length == 0}
                      onValueChange={(value) => {
                        setAmount("");
                        setDuration("");

                        if (recordsPlan) {
                          const currentRecord = recordsPlan.find(
                            (record) => record.value.toString() === value
                          );

                          if (currentRecord) {
                            setDuration(currentRecord.duration.toString());
                            setAmount(currentRecord.value.toString());
                          }
                        }

                        field.onChange(value);
                      }}
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
                      disabled={isPending || ports.data?.data.length == 0}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a proxy type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ports.data?.data.map((item, index) => (
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
                          onClick={() => onClose()}
                        >
                          <Link
                            href={`${ROUTES.DASHBOARD_LOCATIONS}?callback=${pathname}`}
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
                        placeholder="IP rotation"
                        disabled={true}
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
              <div className="flex items-center gap-4">
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
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        )}
      </SheetContent>
    </Sheet>
  );
};

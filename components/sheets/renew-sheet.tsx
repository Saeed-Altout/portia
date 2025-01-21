"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Eye,
  EyeOff,
  Key,
  Loader2,
  User,
  Zap,
} from "lucide-react";

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
import { Loader } from "@/components/ui/loader";
import { Circle, Icon } from "@/components/ui/circle-icon";

import { useModalStore, useProxyStore } from "@/stores";
import { ModalType, ROUTES } from "@/config/constants";
import {
  useGetAllPackagesQuery,
  useGetCostPlansQuery,
  useGetPortsQuery,
} from "@/services/settings/hooks";
import { useRenewProxyMutation } from "@/services/proxies/hooks";
import { usePasswordControl } from "@/hooks/use-password-control";

export const formSchema = z.object({
  planName: z.string().min(1),
  amount: z.string().min(1),
  provider: z.string().min(1),
  ipRotation: z.string().min(1),
  protocol: z.string().min(1),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must only contain letters and digits.",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .regex(/^(?!.*[\u0600-\u06FF])/, {
      message: "Password must not contain Arabic letters.",
    }),
});

export const RenewSheet = () => {
  const pathname = usePathname();
  const { passwordType, togglePasswordVisibility, handleSubjectPassword } =
    usePasswordControl({
      onPasswordGenerated: (password) => {
        form.setValue("password", password);
      },
    });
  const [data, setData] = useState<any[]>([]);
  const [plans, setPlans] = useState<string[]>([]);

  const { proxy, setProxy, reset, setPrice } = useProxyStore();

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.RENEW_PROXY;

  const ports = useGetPortsQuery({ id: proxy.package_id });
  const costs = useGetCostPlansQuery({ pkg_id: proxy.package_id });
  const { mutateAsync, isPending } = useRenewProxyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planName: "",
      amount: "",
      provider: "First available uk network & location",
      ipRotation: "",
      protocol: "",
      username: "",
      password: "",
    },
  });

  const handleClose = () => {
    reset();
    form.reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(form.getValues());

    try {
      await mutateAsync({
        proxy_id: proxy.proxy_id,
        parent_proxy_id: proxy.parent_proxy_id,
        duration: proxy.duration,
        protocol: values.protocol,
        password: values.password,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (proxy.service_provider && proxy.country_name && proxy.rotation_time) {
      form.setValue("ipRotation", `${proxy.rotation_time ?? ""}`);
      form.setValue(
        "provider",
        `${proxy.service_provider} / ${proxy.country_name}`
      );
    }
    if (proxy.username) form.setValue("username", proxy.username);
    if (proxy.password) form.setValue("password", proxy.password);
    if (proxy.protocol) form.setValue("protocol", proxy.protocol);
    if (proxy.plan_name) form.setValue("planName", proxy.plan_name);
    if (proxy.amount)
      form.setValue("amount", `${proxy.amount}::${proxy.plan_name}`);
  }, [form, proxy]);

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
    <Sheet open={isOpenModal} onOpenChange={handleClose}>
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
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
                        onClick={() => onClose()}
                        asChild
                      >
                        <Link
                          href={`${ROUTES.DASHBOARD_LOCATIONS}?redirect=${pathname}`}
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
              name="protocol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Protocol type</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setProxy({ ...proxy, protocol: value });
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        {ports.isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <SelectValue placeholder="select a proxy type" />
                        )}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ports.data?.data.map((option) => (
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
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      icon={User}
                      type="text"
                      placeholder="username"
                      disabled
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
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-sm font-medium">
                      Password
                    </FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        const password = await handleSubjectPassword();
                        if (password) {
                          field.onChange(password);
                        }
                      }}
                      disabled={isPending}
                      className="h-7 text-xs"
                    >
                      Generate Password
                    </Button>
                  </div>
                  <FormControl>
                    <div className="flex items-center relative">
                      <Input
                        {...field}
                        icon={Key}
                        type={passwordType}
                        disabled={isPending}
                        placeholder="new password"
                      />
                      <div
                        role="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-1 h-[80%] w-[40px] flex justify-center items-center"
                        aria-label="Toggle password visibility"
                        title="Toggle password visibility"
                      >
                        {passwordType === "password" ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
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
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

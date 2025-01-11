"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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

import { ModalType } from "@/config/enums";

import { useGetPortsQuery } from "@/services/settings/hooks";

import { useModalStore } from "@/stores/use-modal-store";
import { useProxyStore } from "@/stores/reducers/use-proxy-store";
import { useLocationStore } from "@/stores/reducers/use-location-store";
import { useManageProxyMutation } from "@/services/proxies/hooks";

const formSchema = z.object({
  provider: z.string(),
  ipRotation: z.string(),
  protocol: z.string(),
  username: z.string(),
  password: z.string(),
});

export const ManageSheet = () => {
  const pathname = usePathname();

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.MANAGE_PROXY;

  const { proxy, resetProxy } = useProxyStore();
  const { location, resetLocation } = useLocationStore();

  const ports = useGetPortsQuery({ id: proxy.package_id });
  const { mutateAsync, isPending } = useManageProxyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "",
      protocol: "",
      username: "",
      password: "",
      ipRotation: "",
    },
  });

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
      });
      onCancel();
    } catch (error) {}
  };

  const onCancel = () => {
    form.reset();
    resetProxy();
    resetLocation();
    onClose();
  };

  useEffect(() => {
    if (proxy.rotation_time && proxy.service_provider) {
      if (location.service_provider_name && location.rotation_time) {
        form.setValue("ipRotation", `${location.rotation_time ?? ""}`);
        form.setValue("provider", `${location.service_provider_name ?? ""}`);
      } else {
        form.setValue("ipRotation", `${proxy.rotation_time ?? ""}`);
        form.setValue("provider", `${proxy.service_provider ?? ""}`);
      }
    }
  }, [form, proxy, location]);

  useEffect(() => {
    if (proxy.username) form.setValue("username", proxy.username);
    if (proxy.password) form.setValue("password", proxy.password);
    if (proxy.protocol) form.setValue("protocol", proxy.protocol);
  }, [form, proxy]);

  return (
    <Sheet open={isOpenModal} onOpenChange={onCancel}>
      <SheetContent className="flex flex-col h-screen px-0 w-full sm:w-3/4">
        <SheetHeader className="px-4">
          <Circle fill="primary">
            <Icon icon={Zap} theme="primary" />
          </Circle>
          <div>
            <SheetTitle>Manage Proxy</SheetTitle>
            <SheetDescription>You can manage your proxy here.</SheetDescription>
          </div>
        </SheetHeader>

        {ports.isLoading && (
          <div className="h-full flex justify-center items-center">
            <Loader2 />
          </div>
        )}
        {ports.isError && <ErrorApi />}
        {ports.isSuccess && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              <FormField
                control={form.control}
                name="protocol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proxy Type</FormLabel>
                    <Select
                      disabled={isPending || ports?.data?.data.length == 0}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a proxy type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ports?.data?.data.map((item, index) => (
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
                          disabled
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
                            href={`/dashboard/locations?callback=${pathname}`}
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
                      <Input disabled placeholder="IP rotation" {...field} />
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
                        disabled
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
                  {isPending ? <Loader /> : "Update"}
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

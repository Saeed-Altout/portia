"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/modal";

import { ModalType, ROUTES } from "@/config/constants";
import { useEditInfoProxyMutation } from "@/services/proxies/hooks";
import { useGetPortsQuery } from "@/services/settings/hooks";
import { useProxyStore, useModalStore } from "@/stores";

export const formSchema = z.object({
  provider: z.string().min(2),
  protocol: z.string().min(2),
});

export const EditInfoProxyModal = () => {
  const pathname = usePathname();

  const { proxy, location, reset } = useProxyStore();

  const { mutateAsync, isPending } = useEditInfoProxyMutation();
  const { data: ports, isSuccess } = useGetPortsQuery({ id: proxy.package_id });

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.EDIT_INFO_PROXY;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "First available uk network & location",
      protocol: "",
    },
  });

  const onCancel = () => {
    form.reset();
    reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        parent_proxy_id:
          (!!location.id && location.id.toString()) ||
          proxy.parent_proxy_id ||
          "",
        proxy_id: proxy.proxy_id ?? "",
        protocol: values.protocol,
      });
      onCancel();
    } catch (error) {}
  };

  useEffect(() => {
    if (proxy.service_provider) {
      form.setValue(
        "provider",
        location.service_provider_name || proxy.service_provider
      );
    }
  }, [form, location, proxy]);

  return (
    <Modal
      title={`Change my proxy (id:${proxy.id}) type`}
      isOpen={isOpenModal}
      onClose={onCancel}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Provider & Location
                  </FormLabel>
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
                          href={`${ROUTES.DASHBOARD_LOCATIONS}?callback=${pathname}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">Select Location</span>
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
              name="protocol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Proxy Type
                  </FormLabel>
                  <Select
                    disabled={isPending || !isSuccess}
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
                        <SelectItem key={`port-${index}`} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={isPending}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <Loader /> : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { ArrowUpRight, Loader2 } from "lucide-react";

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
  provider: z.string().min(1),
  protocol: z.string().min(1),
});

export const EditInfoProxyModal = () => {
  const pathname = usePathname();
  const { proxy, reset } = useProxyStore();

  const { mutateAsync, isPending } = useEditInfoProxyMutation();
  const ports = useGetPortsQuery({ id: proxy.package_id });

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.EDIT_INFO_PROXY;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "First available uk network & location",
      protocol: "",
    },
  });

  const handleClose = () => {
    form.reset();
    reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        parent_proxy_id:
          (!!proxy.parent_proxy_id && proxy.parent_proxy_id) ||
          proxy.parent_proxy_id,
        proxy_id: proxy.proxy_id,
        protocol: values.protocol,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (proxy.service_provider && proxy.country_name) {
      form.setValue(
        "provider",
        `${proxy.service_provider} / ${proxy.country_name}`
      );
    }
  }, [form, proxy]);

  return (
    <Modal
      title={`Change my proxy (id:${proxy.proxy_id}) type`}
      isOpen={isOpenModal}
      onClose={handleClose}
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
                          href={`${ROUTES.DASHBOARD_LOCATIONS}?redirect=${pathname}`}
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
                  <FormLabel>Protocol type</FormLabel>
                  <Select
                    disabled={isPending || !ports.isSuccess}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
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
          </div>
          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={isPending}
              onClick={handleClose}
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

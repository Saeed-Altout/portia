"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { BeatLoader } from "react-spinners";
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
import { Modal } from "@/components/dashboard/modal";

import { useModalStore, useProxyStore } from "@/stores";
import { useEditInfoProxy, useGetPorts } from "@/hooks";
import { ModalType } from "@/config/enums";

const editProxySchema = z.object({
  provider: z.string().min(2),
  protocol: z.string().min(2),
});

export const EditInfoProxyModal = () => {
  const pathname = usePathname();
  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.EDIT_INFO_PROXY;

  const { location, proxy, setProxy, setLocation, pkgId } = useProxyStore();
  const { mutateAsync, isPending } = useEditInfoProxy();
  const { data: ports } = useGetPorts({ id: pkgId });

  const form = useForm<z.infer<typeof editProxySchema>>({
    resolver: zodResolver(editProxySchema),
    defaultValues: {
      provider: "First available uk network & location",
      protocol: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof editProxySchema>) => {
    try {
      await mutateAsync({
        parent_proxy_id: location.id ? location.id.toString() : "",
        proxy_id: proxy.proxy_id ? proxy.proxy_id : "",
        protocol: values.protocol,
      });
      onCancel();
      setProxy({} as IProxy);
      setLocation({} as ILocation);
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    form.reset();
    onClose(ModalType.EDIT_INFO_PROXY);
  };

  useEffect(() => {
    if (location && location.service_provider_name) {
      form.setValue("provider", `${location.service_provider_name}`);
    }
  }, [form, location]);

  return (
    <Modal
      title={`Change my proxy (id:${proxy.proxy_id ?? ""}) Authentications`}
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
                        onClick={() => onClose(ModalType.EDIT_INFO_PROXY)}
                        asChild
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
              name="protocol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proxy Type</FormLabel>
                  <Select
                    disabled={isPending || ports?.data.length == 0}
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
              {isPending ? <BeatLoader color="#fff" size={12} /> : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

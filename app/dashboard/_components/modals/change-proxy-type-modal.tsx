"use client";

import * as React from "react";

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

import { Modal } from "@dashboard/_components/ui/modal";
import { useChangeProxyTypeModal } from "@dashboard/hooks/use-change-proxy-type-modal";

const changeProxyTypeSchema = z.object({
  proxyType: z.string().min(2),
});

export const ChangeProxyTypeModal = () => {
  const changeProxyTypeModal = useChangeProxyTypeModal();

  const form = useForm<z.infer<typeof changeProxyTypeSchema>>({
    resolver: zodResolver(changeProxyTypeSchema),
    defaultValues: {
      proxyType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof changeProxyTypeSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Change my proxy (id:24) Type"
      isOpen={changeProxyTypeModal.isOpen}
      onClose={changeProxyTypeModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="proxyType"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Proxy Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Proxy type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="http-proxy">Http proxy</SelectItem>
                    <SelectItem value="https-proxy">Https proxy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="basis-1/2"
              onClick={() => changeProxyTypeModal.onClose()}
            >
              Cancel
            </Button>
            <Button type="submit" variant="default" className="basis-1/2">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

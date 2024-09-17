"use client";

import Link from "next/link";
import * as React from "react";
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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Modal } from "@dashboard/_components/ui/modal";
import { useChangeProxyLocationModal } from "@dashboard/hooks/use-change-proxy-location-modal";

const changeProxyLocationSchema = z.object({
  provider: z.string().min(2),
});

export const ChangeProxyLocationModal = () => {
  const changeProxyLocationModal = useChangeProxyLocationModal();

  const form = useForm<z.infer<typeof changeProxyLocationSchema>>({
    resolver: zodResolver(changeProxyLocationSchema),
    defaultValues: {
      provider: "First available uk network & location",
    },
  });

  const onSubmit = (values: z.infer<typeof changeProxyLocationSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Change my proxy (id:24) location"
      isOpen={changeProxyLocationModal.isOpen}
      onClose={changeProxyLocationModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      {...field}
                      className="flex-1 rounded-r-none"
                      disabled
                    />
                    <Button size="icon" className="rounded-l-none" asChild>
                      <Link href="/">
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="basis-1/2"
              onClick={() => changeProxyLocationModal.onClose()}
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

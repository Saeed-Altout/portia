"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useProxyStore, useModalStore } from "@/stores";

interface StepTwoProps {
  form: any;
}

export const StepTwo = ({ form }: StepTwoProps) => {
  const pathname = usePathname();
  const { step, onClose } = useModalStore();
  const { location } = useProxyStore();

  useEffect(() => {
    if (step === 2 && location) {
      form.setValue("ipRotation", `${location.rotation_time ?? ""}`);
      form.setValue("provider", `${location.service_provider_name ?? ""}`);
    }
  }, [form, location, step]);

  return (
    <>
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
                  <Link href={`/dashboard/locations?callback=${pathname}`}>
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
    </>
  );
};

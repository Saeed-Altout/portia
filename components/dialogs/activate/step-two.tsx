"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useProxyStore } from "@/stores";

export const StepTwo = ({ form }: { form: any }) => {
  const { proxy } = useProxyStore();

  return (
    <>
      <FormField
        control={form.control}
        name="provider"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Provider & Location</FormLabel>
            <FormControl>
              <Input
                placeholder="Provider & Location"
                disabled
                readOnly
                {...field}
                value={`${proxy.service_provider} / ${proxy.country_name}`}
              />
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
                readOnly
                {...field}
                value={proxy.rotation_time}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

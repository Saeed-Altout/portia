"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useStore } from "@/stores/use-store";

interface StepTwoProps {
  form: any;
}

export const StepTwo = ({ form }: StepTwoProps) => {
  const { offer } = useStore();

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
                disabled={true}
                readOnly
                {...field}
                value={offer.service_provider_name}
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
                disabled={true}
                {...field}
                value={offer.rotation_time}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

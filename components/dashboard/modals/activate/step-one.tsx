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

interface StepOneProps {
  form: any;
}

export const StepOne = ({ form }: StepOneProps) => {
  const { offer } = useStore();

  return (
    <>
      <FormField
        control={form.control}
        name="pkg_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Packages</FormLabel>
            <FormControl>
              <Input
                placeholder="package"
                readOnly
                {...field}
                value={offer.package_name}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="plan_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plans</FormLabel>
            <FormControl>
              <Input placeholder="plan" readOnly {...field} value={"hour"} />
            </FormControl>
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
            <FormControl>
              <Input
                placeholder="amount"
                readOnly
                {...field}
                value={offer.duration}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

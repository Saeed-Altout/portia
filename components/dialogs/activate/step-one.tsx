"use client";

import {
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
import { useProxyStore } from "@/stores";

interface StepOneProps {
  form: any;
}

export const StepOne = ({ form }: StepOneProps) => {
  const { proxy } = useProxyStore();

  return (
    <>
      <FormField
        control={form.control}
        name="pkg_id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Packages</FormLabel>
            <Select
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value || proxy.package_name}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem key={proxy.package_name} value={proxy.package_name}>
                  {proxy.package_name}
                </SelectItem>
              </SelectContent>
            </Select>
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
            <Select
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value || proxy.plan_name}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem
                  key={proxy.plan_name}
                  value={proxy.plan_name}
                  className="capitalize"
                >
                  {proxy.plan_name}
                </SelectItem>
              </SelectContent>
            </Select>
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
            <Select
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value || proxy.amount}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an amount" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem key={proxy.amount} value={proxy.amount.toString()}>
                  {proxy.amount}
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

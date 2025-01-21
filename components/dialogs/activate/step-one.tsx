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

export const StepOne = ({ form }: { form: any }) => {
  const { proxy } = useProxyStore();

  return (
    <>
      <FormField
        control={form.control}
        name="pkgName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Package</FormLabel>
            <Select
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value || proxy.package_name}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="select a package" />
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
        name="planName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plan</FormLabel>
            <Select
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value || proxy.plan_name}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="select a plan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem key={proxy.plan_name} value={proxy.plan_name}>
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
              defaultValue={field.value || proxy.amount.toString()}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="select an amount" />
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

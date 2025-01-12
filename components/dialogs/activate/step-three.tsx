"use client";

import { Key, User } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useProxyStore } from "@/stores";

interface StepThreeProps {
  form: any;
}

export const StepThree = ({ form }: StepThreeProps) => {
  const { offer } = useProxyStore();

  return (
    <>
      <FormField
        control={form.control}
        name="protocol"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proxy Type</FormLabel>
            <FormControl>
              <Input
                placeholder="protocol"
                disabled={true}
                readOnly
                {...field}
                value={offer.port}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                icon={User}
                type="text"
                placeholder="username"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                icon={Key}
                type="password"
                placeholder="password"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="re_new"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border px-4 py-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="leading-0">Auto Renew</FormLabel>
          </FormItem>
        )}
      />
    </>
  );
};

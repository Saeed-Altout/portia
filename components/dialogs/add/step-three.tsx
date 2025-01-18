"use client";

import { Key, User } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useProxyStore } from "@/stores";
import { useGetPortsQuery } from "@/services/settings/hooks";

interface StepThreeProps {
  isLoading?: boolean;
  form: any;
}

export const StepThree = ({ form, isLoading }: StepThreeProps) => {
  const { proxy } = useProxyStore();
  const { data: ports, isFetching } = useGetPortsQuery({
    id: proxy.package_id,
  });

  return (
    <>
      <FormField
        control={form.control}
        name="protocol"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proxy Type</FormLabel>
            <Select
              disabled={isLoading || isFetching || ports?.data.length == 0}
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
      <FormField
        control={form.control}
        name="re_new"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
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
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                icon={User}
                type="text"
                disabled={isLoading}
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
                disabled={isLoading}
                placeholder="username"
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

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
import { useProxyStore } from "@/stores";
export const StepThree = ({ form }: { form: any }) => {
  const { proxy } = useProxyStore();

  return (
    <>
      <FormField
        control={form.control}
        name="protocol"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Protocol type</FormLabel>
            <Select
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value || proxy.protocol}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="select a proxy type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem key={proxy.protocol} value={proxy.protocol}>
                  {proxy.protocol}
                </SelectItem>
              </SelectContent>
            </Select>
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
    </>
  );
};

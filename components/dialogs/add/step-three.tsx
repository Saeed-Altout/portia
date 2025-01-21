"use client";

import { Key, Loader2, User } from "lucide-react";

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
import { useGetPortsQuery } from "@/services/settings/hooks";

export const StepThree = ({
  form,
  isLoading,
}: {
  form: any;
  isLoading?: boolean;
}) => {
  const { proxy, setProxy } = useProxyStore();
  const ports = useGetPortsQuery({ id: proxy.package_id });

  return (
    <>
      <FormField
        control={form.control}
        name="protocol"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Protocol type</FormLabel>
            <Select
              disabled={isLoading || !ports.isSuccess}
              onValueChange={(value) => {
                field.onChange(value);
                setProxy({ ...proxy, protocol: value });
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  {ports.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <SelectValue placeholder="select a proxy type" />
                  )}
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {ports.data?.data.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
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

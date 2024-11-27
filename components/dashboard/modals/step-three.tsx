"use client";

import { Key, User } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useProxyStore } from "@/stores";

interface StepThreeProps {
  isLoading?: boolean;
}

export const StepThree = ({ isLoading }: StepThreeProps) => {
  const { control } = useFormContext();
  const { ports, location, setProtocol } = useProxyStore();

  const onProtocolSelect = (protocolName: string) => {
    if (location) {
      const protocolValue = protocolName.includes("http") ? location.http_port : location.socks_port;

      setProtocol(protocolValue);
    }
  };

  return (
    <>
      <FormField
        control={control}
        name="protocol"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proxy Type</FormLabel>
            <Select
              disabled={isLoading || ports.length == 0}
              defaultValue={field.value}
              onValueChange={(value) => {
                field.onChange(value);
                onProtocolSelect(value);
              }}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a proxy type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {ports.map((item, index) => (
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
        control={control}
        name="re_new"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel className="leading-0">Auto Renew</FormLabel>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input icon={User} type="text" disabled={isLoading} placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input icon={Key} type="password" disabled={isLoading} placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

import * as React from "react";

import { Key, User } from "lucide-react";
import { useFormContext } from "react-hook-form";

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

export const StepThree = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name="proxyType"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Proxy Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Proxy type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="http-proxy">Http proxy</SelectItem>
                <SelectItem value="https-proxy">Https proxy</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="autoRenew"
        render={({ field }) => (
          <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Auto Renew</FormLabel>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proxy Authentications</FormLabel>
            <FormControl>
              <Input icon={User} placeholder="Username" {...field} />
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
              <Input icon={Key} placeholder="Password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <p className="text-lg font-semibold">Cost: 0,000$</p>
    </>
  );
};

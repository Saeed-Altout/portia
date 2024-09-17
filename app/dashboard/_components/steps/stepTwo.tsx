import * as React from "react";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const StepTwo = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name="provider"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Provider & Location</FormLabel>
            <FormControl>
              <div className="flex justify-between items-center">
                <Input
                  placeholder="Provider & Location"
                  className="flex-1 rounded-r-none"
                  {...field}
                />
                <Button size="icon" className="rounded-l-none" asChild>
                  <Link href="/">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="ipRotation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Minimum time between IP rotation</FormLabel>
            <FormControl>
              <Input placeholder="IP rotation" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

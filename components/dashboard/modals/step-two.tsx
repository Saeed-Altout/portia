"use client";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { proxyStore } from "@/stores/proxy-store";
import { usePathname } from "next/navigation";

interface StepTwoProps {
  isLoading?: boolean;
}

export const StepTwo = ({ isLoading }: StepTwoProps) => {
  const pathname = usePathname();
  const { control } = useFormContext();
  const { onClose } = proxyStore();

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
                  disabled={true}
                  readOnly
                  {...field}
                />
                <Button
                  size="icon"
                  className="rounded-l-none"
                  type="button"
                  onClick={onClose}
                  asChild
                >
                  <Link href={`/dashboard/locations?callback=${pathname}`}>
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">ArrowUpRight Icon</span>
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
              <Input
                disabled={isLoading}
                placeholder="IP rotation"
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

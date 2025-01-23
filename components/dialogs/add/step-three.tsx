"use client";

import { Eye, EyeOff, Key, Loader2, User } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { usePasswordControl } from "@/hooks/use-password-control";

export const StepThree = ({
  form,
  isLoading,
}: {
  form: any;
  isLoading?: boolean;
}) => {
  const { proxy, setProxy } = useProxyStore();
  const ports = useGetPortsQuery({ id: proxy.package_id });
  const {
    passwordVisibility,
    togglePasswordVisibility,
    handleSubjectPassword,
  } = usePasswordControl({
    passwordType: "proxy",
    onPasswordGenerated: (password) => {
      form.setValue("password", password);
    },
  });

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
          <FormItem className="w-full">
            <FormLabel className="text-sm font-medium">Username</FormLabel>
            <FormControl>
              <Input
                icon={User}
                type="text"
                placeholder="username"
                disabled={isLoading}
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
            <div className="flex items-center justify-between">
              <FormLabel className="text-sm font-medium">Password</FormLabel>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={async () => {
                  const password = await handleSubjectPassword();
                  if (password) {
                    field.onChange(password);
                  }
                }}
                disabled={isLoading}
                className="h-7 text-xs"
              >
                Generate Password
              </Button>
            </div>
            <FormControl>
              <div className="flex items-center relative">
                <Input
                  {...field}
                  icon={Key}
                  type={passwordVisibility}
                  disabled={isLoading}
                  placeholder="new password"
                />
                <div
                  role="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-1 h-[80%] w-[40px] flex justify-center items-center"
                  aria-label="Toggle password visibility"
                  title="Toggle password visibility"
                >
                  {passwordVisibility === "password" ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

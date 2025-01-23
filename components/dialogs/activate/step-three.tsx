"use client";

import { Eye, EyeOff, Key, User } from "lucide-react";

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
import { usePasswordControl } from "@/hooks/use-password-control";
import { Button } from "@/components/ui/button";

export const StepThree = ({ form }: { form: any }) => {
  const { proxy } = useProxyStore();
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
          <FormItem className="w-full">
            <FormLabel className="text-sm font-medium">Username</FormLabel>
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

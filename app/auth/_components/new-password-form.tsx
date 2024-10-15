"use client";

import { Eye, EyeOff, Key } from "lucide-react";
import { useSearchParams } from "next/navigation";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Circle, Icon } from "@/components/circle-icon";
import { BackButton, SubmitButton } from "@auth/_components";

import { useSetNewPassword } from "@/app/auth/features/hooks";
import { newPasswordSchema } from "@/app/auth/features/schemas";
import { useState } from "react";

export const NewPasswordForm = () => {
  const [passwordType, setPasswordType] = useState<"text" | "password">("text");

  const params = useSearchParams();
  const token = params.get("token");

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });
  const { onSubmit, isPending } = useSetNewPassword(token || "");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Password</FormLabel>
                <FormControl>
                  <div className="flex items-center relative">
                    <Input
                      {...field}
                      type={passwordType}
                      disabled={isPending}
                      placeholder="********"
                    />
                    <div
                      role="button"
                      onClick={() =>
                        setPasswordType((prev) =>
                          prev === "password" ? "text" : "password"
                        )
                      }
                      className="absolute right-4 top-[50%] translate-y-[-50%]"
                      aria-label="Toggle password visibility"
                      title="Toggle password visibility"
                    >
                      {passwordType === "password" ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  Must be at least 8 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="flex items-center relative">
                    <Input
                      {...field}
                      type={passwordType}
                      disabled={isPending}
                      placeholder="********"
                    />
                    <div
                      role="button"
                      onClick={() =>
                        setPasswordType((prev) =>
                          prev === "password" ? "text" : "password"
                        )
                      }
                      className="absolute right-4 top-[50%] translate-y-[-50%]"
                      aria-label="Toggle password visibility"
                      title="Toggle password visibility"
                    >
                      {passwordType === "password" ? (
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
        </div>
        <SubmitButton isLoading={isPending} label="Reset password" />
      </form>
    </Form>
  );
};

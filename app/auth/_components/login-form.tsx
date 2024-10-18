"use client";

import Link from "next/link";
import { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { CardWrapper, Provider, SubmitButton } from "@/app/auth/_components";

import { loginSchema } from "@/app/auth/features/schemas";
import { useHandleResponse, useLogin } from "@/app/auth/features/hooks";

export const LoginForm = () => {
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<"text" | "password">("text");

  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync, isPending } = useLogin(isRememberMe);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const res = await mutateAsync(values);
      handleSuccess({
        message: res.message,
        refresh: true,
        redirectTo: "/dashboard",
      });
    } catch (error) {
      handleError({ error });
    }
  };

  return (
    <CardWrapper
      title="Welcome back"
      description="Welcome back! Please enter your details."
      label="Sign up"
      href="/auth/register"
      message="Don't have an account?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={isPending}
                      placeholder="Enter your email"
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
                  <FormLabel className="text-sm font-medium">
                    Password
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
                        className="absolute right-1 h-[80%] w-[40px] flex justify-center items-center"
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
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  checked={isRememberMe}
                  onCheckedChange={() => setIsRememberMe((prev) => !prev)}
                />
                <p className="text-black-200 font-medium leading-none text-sm mt-1">
                  Remember for 10 days.
                </p>
              </div>
              <Button
                type="button"
                size="sm"
                variant="link"
                className="px-0"
                asChild
              >
                <Link href="/auth/send-reset-email">Forget Password</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <SubmitButton isLoading={isPending} label="Sign in" />
            <Provider isLoading={isPending} />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

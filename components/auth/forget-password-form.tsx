"use client";

import { useState } from "react";
import { Key } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { CardMinForm } from "@/components/auth/card-min-form";
import { forgetPasswordSchema } from "@/schemas";

type ForgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>;

export const ForgetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgetPasswordFormValues) {
    setIsLoading(true);
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CardMinForm
      title="Forgot password?"
      description="No worries, we’ll send you reset instructions."
      backHrefButton="/auth/login"
      backLabelButton="Back to log in"
      icon={Key}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-5">
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
                      disabled={isLoading}
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            Reset password
          </Button>
        </form>
      </Form>
    </CardMinForm>
  );
};

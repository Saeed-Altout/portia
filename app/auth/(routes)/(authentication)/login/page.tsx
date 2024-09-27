"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { CardForm } from "@/components/auth/card-form";
import { ShowSocial } from "@/components/auth/show-social";

import { useLoginMutation } from "@/hooks/auth/use-login";

import {
  loginSchema,
  LoginFormValues,
  initialLoginFormValues,
} from "@/schemas";
import { Routes } from "@/config";

export default function LoginPage() {
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialLoginFormValues,
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await loginMutation({
        email: data.email,
        password: data.password,
      });
      toast.success(res.message || res.message[0] || "Login is success.");
    } catch (error) {
      toast.success("Login is failed");
    }
  };

  return (
    <CardForm
      title="Welcome back"
      description="Welcome back! Please enter your details."
      backButtonMessage="Don’t have an account?"
      backLabelButton="Sign up"
      backHrefButton={Routes.REGISTER}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <Input
                      {...field}
                      type="password"
                      disabled={isPending}
                      placeholder="********"
                    />
                  </FormControl>
                  <FormDescription>
                    Must be at least 8 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="isRememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-none outline-none shadow-none">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormDescription className="text-black-primary font-medium">
                        Remember for 30 days.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button size="sm" variant="link" className="px-0">
                <Link href={Routes.SEND_EMAIL_TO_RESET_PASSWORD}>
                  Forget Password
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <Button type="submit" disabled={isPending}>
              Sign in
            </Button>
            <ShowSocial isLoading={isPending} />
          </div>
        </form>
      </Form>
    </CardForm>
  );
}

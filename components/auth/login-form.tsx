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

import {
  loginSchema,
  LoginFormValues,
  initialLoginFormValues,
} from "@/schemas";

import { useLoginMutation } from "@/hooks/auth/use-login";

export const LoginForm = () => {
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialLoginFormValues,
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await loginMutation({ email: data.email, password: data.password });
      toast.success("Login is success");
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
      backHrefButton="/auth/register"
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
                <Link href="/auth/forget-password">Forget Password</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign in
            </Button>
            <ShowSocial isLoading={isPending} />
          </div>
        </form>
      </Form>
    </CardForm>
  );
};

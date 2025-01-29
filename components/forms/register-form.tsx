"use client";

import { Eye, EyeOff } from "lucide-react";

import * as z from "zod";
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
import { CardWrapper } from "@/components/card-wrapper";
import { SubmitButton } from "@/components/submit-button";
import { Provider } from "@/components/provider";

import { getFcmToken } from "@/lib/local-storage";
import { useRegisterMutation } from "@/services/auth/hooks";
import {
  REGEX_PASSWORD_AUTH,
  usePasswordControl,
} from "@/hooks/use-password-control";
import { ROUTES } from "@/config/constants";
import { useSearchParams } from "next/navigation";

export const formSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(255, { message: "First name must be less than 255 characters" }),

  last_name: z
    .string()
    .trim()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(255, { message: "Last name must be less than 255 characters" }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email address must be less than 255 characters" })
    .transform((email) => email.toLowerCase()),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password must be less than 128 characters long" })
    .regex(REGEX_PASSWORD_AUTH, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
    }),
});

export const RegisterForm = () => {
  const { passwordVisibility, togglePasswordVisibility } = usePasswordControl({
    passwordType: "auth",
  });
  const { mutate, isPending } = useRegisterMutation();
  const code = useSearchParams().get("code");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const fcmToken = getFcmToken();

    mutate({
      ...values,
      fcm_token: fcmToken ?? "",
      referred_by: code ?? "",
    });
  };

  return (
    <CardWrapper
      title="Sign up"
      description="Start your journey today."
      label="Sign in"
      href={ROUTES.LOGIN}
      message="Already have an account?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-row gap-x-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium">
                      First Name*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your first name"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium">
                      Last Name*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your last name"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      disabled={isPending}
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
                  <FormLabel className="text-sm font-medium">
                    Password*
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center relative">
                      <Input
                        {...field}
                        type={passwordVisibility}
                        disabled={isPending}
                        placeholder="********"
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
                  <FormDescription>
                    Must be at least 8 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <SubmitButton isLoading={isPending} label="Create account" />
            <Provider isLoading={isPending} />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

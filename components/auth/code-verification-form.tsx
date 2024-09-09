"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { CardMinForm } from "@/components/auth/card-min-form";
import { codeVerificationSchema } from "@/schemas";

type CodeVerificationFormValues = z.infer<typeof codeVerificationSchema>;

export const CodeVerificationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<CodeVerificationFormValues>({
    resolver: zodResolver(codeVerificationSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(data: CodeVerificationFormValues) {
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
      title="Check your email"
      description="We sent a password reset link to"
      backHrefButton="/auth/login"
      backLabelButton="Back to log in"
      email="Jafar_shamma@gmail.com"
      icon={Mail}
      redirect
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-5 flex justify-center items-center">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSeparator />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            Verify email
          </Button>
        </form>
      </Form>
    </CardMinForm>
  );
};

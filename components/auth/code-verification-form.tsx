"use client";

import { toast } from "sonner";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

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

import {
  codeVerificationSchema,
  CodeVerificationFormValues,
  initialCodeVerificationValues,
} from "@/schemas";
import { useConfirmVerificationCodeMutation } from "@/hooks/auth/use-confirm-verification-code";
import localStorage from "@/services/local-storage-service";

export const CodeVerificationForm = () => {
  const { mutateAsync: confirmVerificationCode, isPending } =
    useConfirmVerificationCodeMutation();
  const router = useRouter();

  const form = useForm<CodeVerificationFormValues>({
    resolver: zodResolver(codeVerificationSchema),
    defaultValues: initialCodeVerificationValues,
  });

  const onSubmit = async (data: CodeVerificationFormValues) => {
    try {
      const email = localStorage.getEmail();
      if (!email) {
        throw new Error("Email is not found");
      }
      const res = await confirmVerificationCode({
        code: data.code,
        email: email,
      });
      toast.success(
        res.message || res.message[0] || "Verification code is valid"
      );
      router.push("/auth/email-verified");
    } catch (error) {
      toast.error("Verification code is invalid");
    }
  };

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
                    <InputOTP
                      disabled={isPending}
                      maxLength={6}
                      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                      {...field}
                    >
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
          <Button type="submit" className="w-full" disabled={isPending}>
            Verify email
          </Button>
        </form>
      </Form>
    </CardMinForm>
  );
};

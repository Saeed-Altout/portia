"use client";

import { Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Circle, Icon } from "@/components/ui/circle-icon";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackButton, ResendButton, SubmitButton } from "@/components";

import { useVerifyCodeMutation } from "@/services/auth/hooks";

export const formSchema = z.object({
  code: z.string().min(6, "Code is required!"),
});

export const VerifyRestCodeForm = () => {
  const email = useSearchParams().get("email");

  const { mutate, isPending } = useVerifyCodeMutation();

  const onSubmit = async (values: z.infer<typeof formSchema>) =>
    mutate({ code: values.code, email: email || "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { code: "" },
  });

  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3">
        <Circle size="lg">
          <Icon size="lg" icon={Mail} />
        </Circle>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          Check your email
        </CardTitle>
        <CardDescription className="text-center">
          We sent a password reset link to
          {email != "null" && email && (
            <span className="font-medium block text-wrap">{email}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex justify-center items-center">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        disabled={isPending}
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
            <SubmitButton label="Verify email" isLoading={isPending} />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-4">
        <ResendButton />
        <BackButton />
      </CardFooter>
    </Card>
  );
};

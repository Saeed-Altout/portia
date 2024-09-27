"use client";

import { toast } from "sonner";
import { Key } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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

import localStorage from "@/services/local-storage-service";
import { useSendEmailToResetPasswordMutation } from "@/hooks/auth/use-send-email-to-reset-password";

import {
  sendEmailToResetPasswordSchema,
  SendEmailToResetPasswordFormValues,
  initialSendEmailToResetPasswordValues,
} from "@/schemas";
import { Routes } from "@/config";

export default function SendEmailToResetPasswordPage() {
  const router = useRouter();
  const { mutateAsync: sendEmailToResetPasswordMutation, isPending } =
    useSendEmailToResetPasswordMutation();

  const form = useForm<SendEmailToResetPasswordFormValues>({
    resolver: zodResolver(sendEmailToResetPasswordSchema),
    defaultValues: initialSendEmailToResetPasswordValues,
  });

  const onSubmit = async (data: SendEmailToResetPasswordFormValues) => {
    try {
      const res = await sendEmailToResetPasswordMutation(data);
      localStorage.setEmail(data.email);
      toast.success(res.message);
      router.push(Routes.CHECK_EMAIL);
    } catch (error) {
      toast.success("Email is invalid.");
    }
  };

  return (
    <CardMinForm
      title="Forgot password?"
      description="No worries, we’ll send you reset instructions."
      backHrefButton={Routes.LOGIN}
      backLabelButton="Back to log in"
      icon={Key}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <Button type="submit" className="w-full" disabled={isPending}>
            Reset password
          </Button>
        </form>
      </Form>
    </CardMinForm>
  );
}

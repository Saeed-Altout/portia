"use client";

import { Key } from "lucide-react";

import * as z from "zod";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Circle, Icon } from "@/components/ui/circle-icon";
import { BackButton, SubmitButton } from "@/components";

import { useSendResetEmailMutation } from "@/services/auth/hooks";

export const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const SendResetEmailForm = () => {
  const { mutate, isPending } = useSendResetEmailMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => mutate(values);

  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3">
        <Circle size="lg">
          <Icon size="lg" icon={Key} />
        </Circle>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          Forgot password?
        </CardTitle>
        <CardDescription className="text-center">
          No worries, we’ll send you reset instructions.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <SubmitButton isLoading={isPending} label="Reset password" />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <BackButton />
      </CardFooter>
    </Card>
  );
};

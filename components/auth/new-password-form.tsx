"use client";

import { useState } from "react";
import { Eye, EyeOff, Key } from "lucide-react";
import { useSearchParams } from "next/navigation";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useSetNewPassword } from "@/features/auth/hooks";
import { newPasswordSchema } from "@/features/auth/schemas";
import { BackButton, SubmitButton } from "@/components/auth";

import { Circle, Icon } from "../circle-icon";

export const NewPasswordForm = () => {
  const params = useSearchParams();
  const token = params.get("token");
  const [passwordType, setPasswordType] = useState<string>("text");

  const { mutate, isPending } = useSetNewPassword();

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = (data: z.infer<typeof newPasswordSchema>) => {
    mutate({ ...data, token: token || "" });
  };

  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3">
        <Circle size="lg">
          <Icon size="lg" icon={Key} />
        </Circle>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          Set new password
        </CardTitle>
        <CardDescription className="text-center">
          Your new password must be different from previously used passwords.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
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
                            setPasswordType((prev: string) =>
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
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Confirm Password
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
                            setPasswordType((prev: string) =>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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

"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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

import { CardForm } from "@/components/auth/card-form";
import { ShowSocial } from "@/components/auth/show-social";

import {
  initialRegisterFormValues,
  RegisterFormValues,
  registerSchema,
} from "@/schemas";
import { useRegisterMutation } from "@/hooks/auth/use-register";
import localStorage from "@/services/local-storage-service";

export const RegisterForm = () => {
  const { mutateAsync: registerMutation, isPending } = useRegisterMutation();
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialRegisterFormValues,
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const username: string[] = data.username.split(" ");

    try {
      const res = await registerMutation({
        first_name: username[0],
        last_name: username[1],
        email: data.email,
        password: data.password,
      });
      router.push("/auth/email-verification");
      localStorage.setEmail(data.email);
      toast.success(res.message || res.message[0] || "Register is success");
    } catch (error) {
      toast.success("Register is failed");
    }
  };

  return (
    <CardForm
      title="Sign up"
      description="Start your journey today."
      backButtonMessage="Already have an account?"
      backLabelButton="Log in"
      backHrefButton="/auth/login"
      showMessage
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Username*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email*</FormLabel>
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
                    Password*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      disabled={isPending}
                      placeholder="Create a password"
                    />
                  </FormControl>
                  <FormDescription>
                    Must be at least 8 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isPending}>
              Create account
            </Button>
            <ShowSocial isLoading={isPending} />
          </div>
        </form>
      </Form>
    </CardForm>
  );
};

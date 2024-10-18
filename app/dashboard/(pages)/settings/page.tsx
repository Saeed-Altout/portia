"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Eye, EyeOff } from "lucide-react";

import { z } from "zod";
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
import { Separator } from "@/components/ui/separator";

import { useUpdateUserProfile } from "@/app/dashboard/features/hooks";
import { userProfileSchema } from "@/app/dashboard/features/schemas";

import { Heading } from "@/app/dashboard/_components/heading";
import { AffiliateCode } from "@dashboard/_components/affiliate-code";

import { useSession } from "@/providers/session-provider";
import { Loader } from "@/components/ui/loader";
import { UserButton } from "@/components/auth/ui/user-button";

export default function SettingsPage() {
  const [passwordType, setPasswordType] = useState<"text" | "password">("text");

  const { onSubmit, isPending } = useUpdateUserProfile();
  const { user, isLoading, isSuccess } = useSession();

  const form = useForm<z.infer<typeof userProfileSchema>>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  useEffect(() => {
    form.reset({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      email: user.email || "",
    });
  }, [form, user, isLoading]);

  if (!isSuccess) {
    return <Loader />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Heading
          title="Personal info"
          description="Update your photo and personal details here."
          className="col-span-1 md:col-span-2 lg:col-span-4"
        >
          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" asChild disabled={isPending}>
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button type="submit" variant="default" disabled={isPending}>
              {isPending ? <BeatLoader size={10} color="#fff" /> : "Update"}
            </Button>
          </div>
        </Heading>
        <Separator />
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="first name"
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
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="last name"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <h3 className="font-medium text-lg">Password</h3>
          <p className="text-sm">
            Please enter your current password to change your password
          </p>
        </div>
        <FormField
          control={form.control}
          name="current_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
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
                      setPasswordType((prev) =>
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
        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
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
                      setPasswordType((prev) =>
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
                Your new password must be more than 8 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="new_password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password Confirmation</FormLabel>
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
                      setPasswordType((prev) =>
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
        <AffiliateCode code={user.referred_code} />
        <div className="space-y-6 pt-12">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Export Data</h3>
            <p className="text-sm max-w-[551px]">
              you can easily export all your data by clicking the button below
              your data will include all your proxies all your deposits
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <Button type="button">Export My Data</Button>
            <UserButton />
          </div>
        </div>
      </form>
    </Form>
  );
}

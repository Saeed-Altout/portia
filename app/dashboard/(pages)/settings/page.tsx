"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Copy, Loader } from "lucide-react";
import { BeatLoader } from "react-spinners";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Heading } from "@dashboard/_components/ui/heading";
import { userProfileSchema } from "@dashboard/schemas";
import { useGetUserProfileQuery, useUpdateUserProfile } from "@dashboard/hooks";
import { useOrigin } from "@/hooks/use-origin";
import { toast } from "sonner";

export default function SettingsPage() {
  const { onSubmit, isPending } = useUpdateUserProfile();
  const { data: user, isLoading, isSuccess } = useGetUserProfileQuery();
  const inputRef = useRef(null);
  const origin = useOrigin();
  const [http, host] = origin.split("://");

  const onCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(
        `${http}://${(inputRef.current as HTMLInputElement).value}`
      );
      toast.success("Affiliate link copied to clipboard.");
    }
  };

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
    isSuccess && form.reset({ ...user });
  }, [isSuccess, user, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Heading
          title="Personal info"
          description="Update your photo and personal details here."
          className="col-span-1 md:col-span-2 lg:col-span-4"
        >
          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" asChild disabled={isPending || isLoading}>
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button
              type="submit"
              variant="default"
              disabled={isPending || isLoading}
            >
              {isPending ? (
                <BeatLoader size={10} color="#fff" />
              ) : isLoading ? (
                <span className="flex items-center justify-center gap-x-2">
                  <Loader className="animate-spin h-4 w-4 text-white" /> Data
                  Fetching
                </span>
              ) : (
                "Update"
              )}
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
                  disabled={isPending || isLoading}
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
                  disabled={isPending || isLoading}
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
                  disabled={isPending || isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <h3 className="font-medium text-lg">Password</h3>
          <p className="text-sm text-gray-500">
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
                <Input
                  type="password"
                  placeholder="********"
                  disabled={isPending || isLoading}
                  {...field}
                />
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
                <Input
                  type="password"
                  placeholder="********"
                  disabled={isPending || isLoading}
                  {...field}
                />
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
                <Input
                  type="password"
                  placeholder="********"
                  disabled={isPending || isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="max-w-2xl space-y-2 pt-8">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="w-full">
              <Input
                ref={inputRef}
                prefix={`${http}://`}
                type="text"
                name="url"
                value={`${host}/auth/register?code=9rOcrU`}
              />
            </div>
            <Button
              size="icon"
              type="button"
              variant="outline"
              onClick={onCopy}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          <p className="text-sm">
            10% of all paid payments. from referred users. Over 60 days are
            credited into your balance.
          </p>
        </div>

        <div className="space-y-6 pt-12">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Export Data</h3>
            <p className="text-sm max-w-[551px]">
              you can easily export all your data by clicking the button below
              your data will include all your proxies all your deposits
            </p>
          </div>
          <Button type="button">Export My Data</Button>
        </div>
      </form>
    </Form>
  );
}

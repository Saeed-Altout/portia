"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Eye, EyeOff, LogOut } from "lucide-react";

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

import { useUpdateUserProfile } from "@/hooks/dashboard";
import { Heading, AffiliateCode } from "@/components/dashboard";
import { userProfileSchema } from "@/schemas";
import { getModifiedData } from "@/utils";
import { useAuthStore } from "@/stores/auth-store";
import { useModalStore } from "@/stores";

export const SettingsForm = () => {
  const [isNewPassword, setIsNewPassword] = useState<boolean>(true);
  const [isCurrentPassword, setIsCurrentPassword] = useState<boolean>(true);
  const [isNewPasswordConfirmation, setIsNewPasswordConfirmation] =
    useState<boolean>(true);
  const { logoutModalOnOpen } = useModalStore();
  const { user } = useAuthStore();
  const { mutate, isPending } = useUpdateUserProfile();

  const onSubmit = async (data: z.infer<typeof userProfileSchema>) => {
    const modifiedData = getModifiedData(data) as UpdateUserProfileRequestType;
    mutate(modifiedData);
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
    if (user) {
      form.reset({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
    }
  }, [form, user]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Heading
          title="Personal info"
          description="Update your personal details here."
          className="col-span-1 md:col-span-2 lg:col-span-4"
        >
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              asChild
              disabled={isPending}
            >
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
                <div className="relative">
                  <Input
                    type={isCurrentPassword ? "password" : "text"}
                    placeholder="********"
                    disabled={isPending}
                    {...field}
                  />
                  <div
                    role="button"
                    onClick={() => setIsCurrentPassword((prev) => !prev)}
                    className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-8 w-8 flex justify-center items-center"
                  >
                    {isCurrentPassword ? (
                      <Eye className="h-5 w-5 text-[#999999]" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-[#999999]" />
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
                <div className="relative">
                  <Input
                    type={isNewPassword ? "password" : "text"}
                    placeholder="********"
                    disabled={isPending}
                    {...field}
                  />
                  <div
                    role="button"
                    onClick={() => setIsNewPassword((prev) => !prev)}
                    className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-8 w-8 flex justify-center items-center"
                  >
                    {isNewPassword ? (
                      <Eye className="h-5 w-5 text-[#999999]" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-[#999999]" />
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
                <div className="relative">
                  <Input
                    type={isNewPasswordConfirmation ? "password" : "text"}
                    placeholder="********"
                    disabled={isPending}
                    {...field}
                  />
                  <div
                    role="button"
                    onClick={() =>
                      setIsNewPasswordConfirmation((prev) => !prev)
                    }
                    className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-8 w-8 flex justify-center items-center"
                  >
                    {isNewPasswordConfirmation ? (
                      <Eye className="h-5 w-5 text-[#999999]" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-[#999999]" />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <h3 className="font-medium text-lg">Affiliate System</h3>
          <p className="text-sm">You can copy this code.</p>
        </div>
        <AffiliateCode code={user?.referred_code || ""} />

        <Separator />
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
            <Button
              disabled={isPending}
              variant="destructive"
              type="button"
              onClick={logoutModalOnOpen}
            >
              Logout <LogOut className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

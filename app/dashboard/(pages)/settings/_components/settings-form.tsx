"use client";

import * as React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Mail } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { CustomField, FiledType } from "@dashboard/_components/ui/custom-field";

const formSchema = z.object({
  name: z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
  }),
  email: z.string().email("Invalid email address"),
  password: z.object({
    currentPassword: z
      .string()
      .min(8, "Current password must be at least 8 characters"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmNewPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  }),
  affiliateLink: z.string().url("Invalid URL"),
});

export const SettingsForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: {
        firstName: "",
        lastName: "",
      },
      email: "",
      password: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      affiliateLink: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="col-span-1 md:col-span-2 lg:col-span-4 space-y-6 hidden md:block">
          {/* Name Fields */}
          <div className="w-full flex border-y py-4 justify-between items-center">
            <Label className="basis-1/3">Name</Label>
            <div className="flex-1 flex items-center justify-start gap-3">
              <CustomField
                name="name.firstName"
                placeholder="first name"
                className="basis-[calc(25%-6px)]"
                type={FiledType.TEXT}
                isLoading={isLoading}
              />
              <CustomField
                name="name.lastName"
                placeholder="last name"
                className="basis-[calc(25%-6px)]"
                type={FiledType.TEXT}
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full flex border-y py-4 justify-between items-center">
            <Label className="basis-1/3">Email Address</Label>
            <div className="flex-1 flex items-center justify-start gap-3">
              <CustomField
                name="email"
                placeholder="john.doe@example.com"
                icon={Mail}
                className="basis-1/2"
                type={FiledType.TEXT}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>

        {/* Password Fields */}
        <div className="space-y-6 col-span-1 lg:col-span-2">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Password</h3>
            <p className="text-sm text-gray-primary">
              Please enter your current password to change your password
            </p>
          </div>
          <Separator />
          <CustomField
            name="password.currentPassword"
            label="Current Password"
            placeholder="******"
            type={FiledType.PASSWORD}
            isLoading={isLoading}
          />
          <CustomField
            name="password.newPassword"
            label="New Password"
            placeholder="******"
            type={FiledType.PASSWORD}
            description="Your new password must be more than 8 characters"
            isLoading={isLoading}
          />
          <CustomField
            name="password.confirmNewPassword"
            label="Confirm New Password"
            placeholder="******"
            type={FiledType.PASSWORD}
            isLoading={isLoading}
          />
        </div>
        <div className="space-y-6 block md:hidden">
          <div className="border-t pt-6 space-y-6">
            <CustomField
              name="name.firstName"
              label="First Name"
              placeholder="first name"
              type={FiledType.TEXT}
              isLoading={isLoading}
            />
            <CustomField
              name="name.lastName"
              placeholder="last name"
              label="First Name"
              type={FiledType.TEXT}
              isLoading={isLoading}
            />
          </div>

          <div className="border-y py-6">
            <CustomField
              name="email"
              label="Email address"
              placeholder="john.doe@example.com"
              icon={Mail}
              type={FiledType.EMAIL}
              isLoading={isLoading}
            />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Password</h3>
              <p className="text-sm text-gray-primary">
                Please enter your current password to change your password
              </p>
            </div>
            <Separator />
            <CustomField
              name="password.currentPassword"
              label="Current Password"
              placeholder="******"
              type={FiledType.PASSWORD}
              isLoading={isLoading}
            />
            <CustomField
              name="password.newPassword"
              label="New Password"
              placeholder="******"
              type={FiledType.PASSWORD}
              description="Your new password must be more than 8 characters"
              isLoading={isLoading}
            />
            <CustomField
              name="password.confirmNewPassword"
              label="Confirm New Password"
              placeholder="******"
              type={FiledType.PASSWORD}
              isLoading={isLoading}
            />
          </div>
        </div>
        {/* Affiliate Link Field */}
        <div className="space-y-6 col-span-1 lg:col-span-2">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Affiliate link</h3>
            <p className="text-sm text-gray-primary">
              Share this link to with your friends and network to start
              receiving commission
            </p>
          </div>
          <Separator />
          <CustomField
            name="affiliateLink"
            placeholder="portia.io?aid=9rOcrU"
            type={FiledType.TEXT}
            isLoading={isLoading}
            prefix="https://"
            description="10% of all paid payments. form referred users. Over 60 days are credited into your balance"
          />
          <div className="space-y-6 pt-12">
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Export Data</h3>
              <p className="text-sm text-gray-primary max-w-[551px]">
                you can easily export all your data by clicking the button below
                your data will include all your proxies all your deposits
              </p>
            </div>
            <Button type="submit">Export My Data</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

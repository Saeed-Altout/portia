"use client";

import * as React from "react";

import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Icon } from "@/app/(website)/_components/ui/icon";
import { Paragraph } from "@/app/(website)/_components/ui/paragraph";

interface CardFormProps {
  title: string;
  description?: string;
  email?: string;
  icon: LucideIcon;
  variant?: "success" | "default";
  backLabelButton?: string;
  backHrefButton?: string;
  redirect?: boolean;
  children: React.ReactNode;
}

export const CardMinForm = ({
  title,
  description,
  email,
  icon: IconItem,
  variant = "default",
  redirect = false,
  backLabelButton,
  backHrefButton,
  children,
}: CardFormProps) => {
  return (
    <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
      <CardHeader className="flex flex-col items-center justify-center gap-y-3 text-center">
        <Icon variant={variant}>
          <IconItem className="h-5 w-5" />
        </Icon>
        <CardTitle className="text-2xl md:text-3xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
          {email && <span className="font-medium block">{email}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col items-center justify-center gap-y-8">
        {redirect && (
          <Paragraph className="text-center" size="sm">
            Didn’t receive the email?
            <Link
              href="/auth/reset"
              className="hover:underline text-primary font-medium text-nowrap ml-2"
            >
              Click to resend
            </Link>
          </Paragraph>
        )}
        {backHrefButton && (
          <Button variant="link" asChild>
            <Link
              href={backHrefButton}
              className="flex items-center justify-center !text-gray-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {backLabelButton}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

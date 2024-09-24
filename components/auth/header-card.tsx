import * as React from "react";

import { cn } from "@/lib/utils";

import { Paragraph } from "@/app/(website)/_components/ui/paragraph";

import { Logo } from "@/components/shared/logo";

interface HeaderCardProps {
  title: string;
  description?: string;
  showMessage?: boolean;
}

export const HeaderCard = ({
  title,
  description,
  showMessage,
}: HeaderCardProps) => {
  return (
    <div className="space-y-3">
      <div className="w-[144px] h-[35px] my-9 lg:hidden">
        <Logo />
      </div>

      <div
        className={cn(
          "space-y-2",
          showMessage && "block lg:hidden",
          !showMessage && "hidden"
        )}
      >
        <h1 className="lg:text-white text-2xl lg:text-6xl font-medium leading-8 lg:leading-[72px]">
          Start turning your Browsing to Unlimited Efficiency.
        </h1>
        <p className="lg:text-white lg:text-xl lg:font-medium leading-6 lg:leading-8">
          Create your account and get full access to our dashboard. Trusted by
          over 40,000 professionals.
        </p>
      </div>

      <div className={cn(showMessage && "hidden lg:block")}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

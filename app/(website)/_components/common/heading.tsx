"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

export const Heading = ({
  title,
  description,
  heading,
  children,
  className,
  titleStyle,
  descriptionStyle,
}: {
  title: string;
  description?: string;
  heading?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="flex items-start justify-start flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="space-y-5 flex-1 relative max-w-3xl">
        <span className="block absolute -top-6 left-0 text-primary font-semibold">
          {heading}
        </span>
        <h1 className={cn("text-3xl md:text-4xl font-semibold", titleStyle)}>
          {title}
        </h1>
        <p className={cn(descriptionStyle)}>{description}</p>
      </div>
      <div className="w-full md:w-fit">{children}</div>
    </div>
  );
};

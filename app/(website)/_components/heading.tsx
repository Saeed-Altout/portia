"use client";

import * as React from "react";

export const Heading = ({
  title,
  description,
  heading,
  children,
}: {
  title: string;
  description?: string;
  heading?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="flex items-start justify-start flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="space-y-5 flex-1 relative">
        <span className="block absolute -top-9 left-0 text-primary font-semibold">
          {heading}
        </span>
        <h1 className="text-3xl md:text-4xl text-black-primary font-medium">
          {title}
        </h1>
        <p className="text-gray-primary text-sm md:text-base">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

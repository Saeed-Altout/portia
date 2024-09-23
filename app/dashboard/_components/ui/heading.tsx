"use client";

import * as React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  label?: string;
}

export const Heading = ({
  title,
  description,
  label,
  children,
}: HeadingProps) => {
  return (
    <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-y-1">
        <p className="text-sm text-gray-primary">{label}</p>
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        <p className="text-sm text-gray-primary">{description}</p>
      </div>
      {children}
    </div>
  );
};

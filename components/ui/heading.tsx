import * as React from "react";

import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  label?: string;
  description?: string;
}

export const Heading = ({
  label,
  title,
  description,
  className,
}: HeadingProps) => {
  return (
    <div className={cn("space-y-3", className)}>
      {label && <span className="text-[#111280] font-semibold">{label}</span>}
      <h1 className="text-[#0A0A0A] text-3xl lg:text-4xl font-semibold">
        {title}
      </h1>
      <p className="text-[#727282] text-lg">{description}</p>
    </div>
  );
};

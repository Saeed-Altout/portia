import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@website/_components/ui/label";

interface HeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export const Heading = ({
  label,
  title,
  description,
  className,
}: HeadingProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-3">
        {label && <Label label={label} />}
        <h1 className="text-3xl lg:text-4xl font-semibold">{title}</h1>
      </div>
      <p className="text max-w-4xl lg:text-xl">{description}</p>
    </div>
  );
};

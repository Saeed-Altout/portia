import * as React from "react";

import { Label } from "@/app/_(website)/_components/ui/label";
import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";
import { cn } from "@/lib/utils";

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
      <Paragraph className="max-w-4xl lg:text-xl">{description}</Paragraph>
    </div>
  );
};

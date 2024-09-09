import * as React from "react";

import { Label } from "@website/_components/ui//label";
import { Paragraph } from "@website/_components/ui/paragraph";

interface HeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export const Heading = ({
  label,
  title,
  description,
}: HeadingProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {label && <Label label={label} />}
        <h1 className="text-3xl lg:text-4xl font-semibold">{title}</h1>
      </div>
      <Paragraph className="max-w-4xl lg:text-xl">{description}</Paragraph>
    </div>
  );
};

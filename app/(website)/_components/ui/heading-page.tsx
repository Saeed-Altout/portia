import * as React from "react";

import { Label } from "@/app/(website)/_components/ui/label";
import { Paragraph } from "@website/_components/ui/paragraph";

interface HeadingPageProps {
  label?: string;
  title: string;
  description?: string;
}

export const HeadingPage = ({
  label,
  title,
  description,
}: HeadingPageProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {label && <Label label={label} />}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h1>
      </div>
      <Paragraph className="max-w-4xl lg:text-xl">{description}</Paragraph>
    </div>
  );
};

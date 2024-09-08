import * as React from "react";

import { Timestamp } from "@website/_components/ui/timestamp";
import { Paragraph } from "@website/_components/ui/paragraph";

interface HeadingProps {
  timestamp?: string;
  title: string;
  description?: string;
}

export const Heading = ({
  timestamp,
  title,
  description,
}: HeadingProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {timestamp && <Timestamp label={timestamp} />}
        <h1 className="text-3xl lg:text-4xl font-semibold">{title}</h1>
      </div>
      <Paragraph className="max-w-4xl lg:text-xl">{description}</Paragraph>
    </div>
  );
};

import * as React from "react";

import { Timestamp } from "@website/_components/ui/timestamp";
import { Paragraph } from "@website/_components/ui/paragraph";

interface HeadingPageProps {
  timestamp?: string;
  title: string;
  description?: string;
}

export const HeadingPage = ({
  timestamp,
  title,
  description,
}: HeadingPageProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {timestamp && <Timestamp label={timestamp} />}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h1>
      </div>
      <Paragraph className="max-w-3xl lg:text-xl">{description}</Paragraph>
    </div>
  );
};

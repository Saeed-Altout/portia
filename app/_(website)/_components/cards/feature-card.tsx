import * as React from "react";
import { LucideIcon } from "lucide-react";

import { Icon } from "@/app/_(website)/_components/ui/icon";
import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({
  initialData,
}: {
  initialData: FeatureCardProps;
}) => {
  const { icon: IconItem, title, description } = initialData;

  return (
    <div className="space-y-5">
      <Icon>
        <IconItem className="text-primary h-5 w-5" />
      </Icon>
      <div className="space-y-2">
        <Paragraph
          size="xl"
          className="font-medium text-black-primary capitalize"
        >
          {title}
        </Paragraph>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

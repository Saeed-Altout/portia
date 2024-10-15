import * as React from "react";
import { LucideIcon } from "lucide-react";

import { Circle, Icon } from "@/components/circle-icon";

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
      <Circle>
        <Icon icon={IconItem} />
      </Circle>
      <div className="space-y-2">
        <h3 className="text-xl font-medium capitalize">{title}</h3>
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

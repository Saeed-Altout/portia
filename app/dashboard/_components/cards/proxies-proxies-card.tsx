import * as React from "react";

import { LucideIcon } from "lucide-react";

import { Circle, Icon } from "@dashboard/_components/ui/circle-icon";

interface StatisticProxiesCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  fill: any;
  theme: any;
}

export const StatisticProxiesCard = ({
  initialData,
}: {
  initialData: StatisticProxiesCardProps;
}) => {
  const { icon, title, content, fill, theme } = initialData;
  return (
    <div className="border rounded-lg">
      <div className="p-6 flex justify-start items-start flex-col gap-y-6">
        <div className="flex items-center justify-start gap-x-2">
          <Circle fill={fill}>
            <Icon icon={icon} theme={theme} />
          </Circle>
          <h3 className="text-base font-medium">{title}</h3>
        </div>
        <p className="text-4xl font-semibold">{content}</p>
      </div>
    </div>
  );
};

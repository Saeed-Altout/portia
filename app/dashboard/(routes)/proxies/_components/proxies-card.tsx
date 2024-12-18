"use client";

import { Circle, Icon } from "@/components/ui/circle-icon";
import { LucideIcon } from "lucide-react";

interface ProxiesCardProps {
  icon: LucideIcon;
  title: string;
  theme: any;
  value: string;
}
export const ProxiesCard = ({ item }: { item: ProxiesCardProps }) => {
  return (
    <div className="border rounded-[8px] p-6 space-y-6">
      <div className="flex items-center gap-x-2">
        <Circle fill={item.theme as any}>
          <Icon icon={item.icon} theme={item.theme as any} />
        </Circle>
        <p className="font-medium">{item.title}</p>
      </div>
      <h4 className="text-4xl font-semibold">{item.value}</h4>
    </div>
  );
};

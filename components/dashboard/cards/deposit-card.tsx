"use client";

import { LucideIcon } from "lucide-react";
import { Circle, Icon } from "@/components/ui/circle-icon";

interface DepositCardProps {
  title: string;
  label?: string | null;
  theme?: any;
  icon: LucideIcon;
}

export const DepositCard = ({
  title,
  label,
  theme,
  icon,
}: DepositCardProps) => {
  return (
    <div className="border rounded-[8px] shadow-sm p-6 space-y-6">
      <div className="flex items-center gap-5">
        <Circle fill={theme}>
          <Icon icon={icon} theme={theme} />
        </Circle>
        <p className="font-medium text-[#0A0A0A]">{title}</p>
      </div>
      {label && (
        <h4 className="text-[#0A0A0A] font-semibold text-3xl md:text-4xl">
          {label}
        </h4>
      )}
    </div>
  );
};

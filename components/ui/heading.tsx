import * as React from "react";
import { LucideIcon, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { Circle, Icon } from "@/components/ui/circle-icon";

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  label?: string;
  description?: string;
  icon?: LucideIcon;
}

export const Heading = ({
  label,
  title,
  description,
  className,
  icon,
}: HeadingProps) => {
  return (
    <div className={cn("space-y-3", icon && "space-y-6", className)}>
      {label && <span className="text-[#111280] font-semibold">{label}</span>}
      {icon && (
        <Circle>
          <Icon icon={Zap} />
        </Circle>
      )}
      <div className="space-y-2">
        <h1 className="text-[#0A0A0A] text-3xl lg:text-4xl font-semibold">
          {title}
        </h1>
        <p className="text-[#727282] text-lg">{description}</p>
      </div>
    </div>
  );
};

import * as React from "react";
import Link from "next/link";

import { LucideIcon } from "lucide-react";

import { Circle, Icon } from "@dashboard/_components/ui/circle-icon";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface StatisticCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  label: string;
  href: string;
  fill: any;
  theme: any;
}

export const StatisticCard = ({
  initialData,
}: {
  initialData: StatisticCardProps;
}) => {
  const { icon, title, content, label, href, fill, theme } = initialData;
  return (
    <div className="border rounded-lg">
      <div className="p-6 flex justify-start items-start flex-col gap-y-6">
        <div className="flex items-center justify-start gap-x-2">
          <Circle fill={fill}>
            <Icon icon={icon} theme={theme} />
          </Circle>
          <h3 className="text-base font-medium text-gray-primary">{title}</h3>
        </div>
        <p className="text-4xl font-semibold">{content}</p>
      </div>
      <Separator />
      <div className="flex items-center justify-end py-2 px-6">
        <Button variant="ghost" asChild>
          <Link href={href} className="text-primary capitalize">
            {label}
          </Link>
        </Button>
      </div>
    </div>
  );
};

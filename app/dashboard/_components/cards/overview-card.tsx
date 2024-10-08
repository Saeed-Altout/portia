import * as React from "react";
import Link from "next/link";

import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Circle, Icon } from "@dashboard/_components/ui/circle-icon";

interface OverviewCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  label: string;
  href: string;
  fill: any;
  theme: any;
}

export const OverviewCard = ({
  initialData,
}: {
  initialData: OverviewCardProps;
}) => {
  const { icon, title, content, label, href, fill, theme } = initialData;
  return (
    <div className="border rounded-lg">
      <div className="p-6 flex justify-start items-start flex-col gap-y-6">
        <div className="flex items-center justify-start gap-x-2">
          <Circle fill={fill}>
            <Icon icon={icon} theme={theme} />
          </Circle>
          <p className="font-medium">{title}</p>
        </div>
        <h3 className="text-4xl font-semibold">{content}</h3>
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

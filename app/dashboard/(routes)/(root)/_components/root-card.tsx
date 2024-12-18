"use client";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Circle, Icon } from "@/components/ui/circle-icon";

interface RootCardProps {
  icon: LucideIcon;
  title: string;
  theme: any;
  value: string;
  href: string;
  label: string;
}

export const RootCard = ({ item }: { item: RootCardProps }) => {
  return (
    <div className="border rounded-lg">
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-start gap-x-2">
          <Circle fill={item.theme as any}>
            <Icon icon={item.icon} theme={item.theme as any} />
          </Circle>
          <p className="font-medium">{item.title}</p>
        </div>
        <h4 className="text-4xl font-semibold">{item.value}</h4>
      </div>
      <Separator />
      <div className="flex items-center justify-end py-2 px-6">
        <Button variant="ghost" asChild>
          <Link href={item.href} className="text-primary capitalize">
            {item.label}
          </Link>
        </Button>
      </div>
    </div>
  );
};

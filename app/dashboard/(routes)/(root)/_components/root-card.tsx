"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleIcon } from "./circle-icon";

interface RootCardProps {
  icon: LucideIcon;
  title: string;
  theme: string;
  value: string;
  href: string;
  label: string;
}

export const RootCard = ({ item }: { item: RootCardProps }) => {
  return (
    <div className="rounded-lg border">
      <div className="space-y-5 p-6">
        <div className="flex items-center gap-x-2">
          <CircleIcon icon={item.icon} theme={item.theme} />
          <p className="font-medium">{item.title}</p>
        </div>
        <h4 className="text-4xl font-semibold">{item.value}</h4>
      </div>
      <Separator />
      <div className="flex items-center justify-end px-6 py-2">
        <Button variant="ghost" asChild>
          <Link href={item.href} className="capitalize text-primary">
            {item.label}
          </Link>
        </Button>
      </div>
    </div>
  );
};

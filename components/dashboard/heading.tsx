"use client";

import { Plus } from "lucide-react";

import { useModalStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { ModalType } from "@/config/enums";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  label?: string;
  newProxy?: boolean;
  addFunds?: boolean;
}

export const Heading = ({
  title,
  description,
  label,
  newProxy = false,
  addFunds = false,
  children,
}: HeadingProps) => {
  const { onOpen } = useModalStore();

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4">
      <div className="space-y-2">
        <p className="text-sm">{label}</p>
        <h1 className="text-2xl md:text-3xl font-medium capitalize">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center flex-wrap sm:flex-nowrap gap-3">
        {newProxy && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onOpen(ModalType.ADD_PROXY)}
          >
            <Plus className="h-4 w-4 mr-2" /> Activate Proxies
          </Button>
        )}
        {addFunds && (
          <Button variant="outline" className="w-full" onClick={() => {}}>
            <Plus className="h-4 w-4 mr-2" /> Add Fund
          </Button>
        )}

        {children}
      </div>
    </div>
  );
};

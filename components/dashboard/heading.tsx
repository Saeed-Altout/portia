"use client";

import { Plus } from "lucide-react";
import { ModalType } from "@/config/enums";

import { useModalStore } from "@/stores";
import { Button } from "@/components/ui/button";

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
    <header className="flex justify-between flex-col md:flex-row gap-4">
      <div className="space-y-2">
        {label && <p className="text-sm text-muted-foreground">{label}</p>}
        <h1 className="text-2xl md:text-3xl font-medium capitalize">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex items-center flex-wrap sm:flex-nowrap gap-3">
        {newProxy && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onOpen(ModalType.ADD_PROXY)}
            aria-label="Activate proxies"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Activate Proxies
          </Button>
        )}
        {addFunds && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onOpen(ModalType.ADD_FUNDS)}
            aria-label="Add funds"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add Fund
          </Button>
        )}
        {children}
      </div>
    </header>
  );
};

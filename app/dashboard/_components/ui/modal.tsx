"use client";

import * as React from "react";
import { LucideIcon, Zap } from "lucide-react";

import { Circle, Icon } from "@dashboard/_components/ui/circle-icon";
import { Typography } from "@dashboard/_components/ui/typography";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

interface ModalProps {
  icon?: LucideIcon;
  fill?: any;
  theme?: any;
  title: string;
  description: string;
  isLoading: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({
  icon = Zap,
  fill = "default",
  theme = "primary",
  title,
  description,
  isOpen,
  isLoading,
  onClose,
  children,
}: ModalProps & React.HTMLAttributes<HTMLElement>) => {
  const onChange = (open: boolean) => {
    if (!open && !isLoading) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader className="space-y-5">
          <Circle fill={fill}>
            <Icon icon={icon} theme={theme} />
          </Circle>
          <div>
            <Typography as="h4" variant="h4">
              {title}
            </Typography>
            <Typography as="p" variant="p" className="text-sm">
              {description}
            </Typography>
          </div>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
"use client";

import * as React from "react";
import { LucideIcon, Zap } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Circle, Icon } from "@/components/ui/circle-icon";

interface ModalProps {
  icon?: LucideIcon;
  fill?: any;
  theme?: any;
  title: string;
  description?: string;
  isLoading?: boolean;
  isOpen: boolean;
  progress?: number;
  onClose: () => void;
}

export const Modal = ({
  icon = Zap,
  fill = "default",
  theme = "primary",
  title,
  description,
  isOpen,
  progress,
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
      <DialogContent className="max-w-sm sm:max-w-[480px]">
        {progress && (
          <div className="absolute top-0 left-0 bg-[#D4D4FF] w-full h-2 overflow-hidden">
            <span
              className="block h-full bg-primary transition-all"
              style={{
                width: `${progress}%`,
              }}
            ></span>
          </div>
        )}
        <DialogHeader className="space-y-5">
          <Circle fill={fill} className="mx-auto sm:mx-0">
            <Icon icon={icon} theme={theme} />
          </Circle>
          <div>
            <DialogTitle className="text-lg font-medium">{title}</DialogTitle>
            <DialogDescription className="text-sm font-normal">{description}</DialogDescription>
          </div>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

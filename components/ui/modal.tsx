"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description?: string;
  isLoading?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({
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
      <DialogContent className="max-w-sm sm:max-w-[480px] max-h-[50vh]">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium">{title}</DialogTitle>
          <DialogDescription className="text-sm font-normal">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

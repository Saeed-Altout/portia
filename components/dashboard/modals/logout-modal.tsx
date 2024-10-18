"use client";

import * as React from "react";
import { BeatLoader } from "react-spinners";
import { Power } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useLogoutModal } from "@/components/dashboard/hooks/modals/use-logout-modal";
import { Circle, Icon } from "@/components/dashboard/circle-icon";

export const LogoutModal = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const logoutModal = useLogoutModal();

  const onConfirm = () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        logoutModal.onClose();
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onChange = (open: boolean) => {
    if (!open && !isLoading) {
      logoutModal.onClose();
    }
  };

  return (
    <Dialog open={logoutModal.isOpen} onOpenChange={onChange}>
      <DialogContent className="max-w-sm sm:max-w-[480px]">
        <DialogHeader className="flex items-start justify-start flex-row gap-5">
          <Circle fill="alert" className="mx-auto sm:mx-0">
            <Icon icon={Power} theme="alert" />
          </Circle>
          <div className="flex-1 !text-left">
            <DialogTitle className="text-lg font-medium">Logout</DialogTitle>
            <DialogDescription className="text-sm font-normal">
              Are you sure you want to logout? if you are sure click
              &apos;logout&apos; button below
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="flex justify-between items-center gap-5">
          <Button
            type="button"
            variant="outline"
            className="basis-1/2"
            disabled={isLoading}
            onClick={() => logoutModal.onClose()}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="basis-1/2 !bg-[#801121] hover:!bg-[#901121]/90"
            disabled={isLoading}
            onClick={onConfirm}
          >
            {isLoading ? <BeatLoader color="#fff" /> : "Logout"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

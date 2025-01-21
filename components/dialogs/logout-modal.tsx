"use client";

import * as React from "react";
import { Power } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Circle, Icon } from "@/components/ui/circle-icon";
import { useModalStore } from "@/stores/use-modal-store";
import { ModalType } from "@/config/constants";
import { useLogoutMutation } from "@/services/auth/hooks";
import { Loader } from "@/components/ui/loader";

export const LogoutModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.LOGOUT;

  const { mutateAsync, isPending } = useLogoutMutation();

  const onConfirm = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (open: boolean) => {
    if (!open && !isPending) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpenModal} onOpenChange={onChange}>
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
            className="w-full"
            disabled={isPending}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="w-full !bg-[#801121] hover:!bg-[#901121]/90"
            disabled={isPending}
            onClick={onConfirm}
          >
            {isPending ? <Loader /> : "Logout"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

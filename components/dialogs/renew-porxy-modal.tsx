"use client";

import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/modal";

import { ModalType } from "@/config/constants";
import { useModalStore, useProxyStore } from "@/stores";

import { useRenewProxyMutation } from "@/services/proxies/hooks";

export const RenewProxyModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const { proxy, reset } = useProxyStore();
  const isOpenModal = isOpen && type === ModalType.FAST_RENEW_PROXY;

  const { mutateAsync, isPending } = useRenewProxyMutation();

  const onConfirm = async () => {
    try {
      await mutateAsync({
        proxy_id: proxy.proxy_id,
        duration: proxy.duration.toString(),
        parent_proxy_id: proxy.parent_proxy_id,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Modal
      title="Are you sure you want to renew this proxy?"
      description="Notice: Proceeding with approval will result in a charge equivalent to the last renewal of this proxy."
      isOpen={isOpenModal}
      onClose={handleClose}
      icon={Zap}
    >
      <div className="flex justify-between items-center gap-5">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          disabled={isPending}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="w-full"
          disabled={isPending}
          onClick={onConfirm}
        >
          {isPending ? <Loader /> : "Confirm"}
        </Button>
      </div>
    </Modal>
  );
};

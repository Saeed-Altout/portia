"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Loader } from "@/components/ui/loader";

import { ModalType } from "@/config/constants";
import { useModalStore, useProxyStore } from "@/stores";
import { useFixProxyMutation } from "@/services/proxies/hooks";

export const FixProxyModal = () => {
  const { proxy, resetProxy } = useProxyStore();
  const { mutateAsync, isPending } = useFixProxyMutation();

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.FIX_PROXY;

  const onCancel = () => {
    onClose();
    resetProxy();
  };

  const handleSubmit = async () => {
    try {
      await mutateAsync({
        pkg_id: proxy.package_id,
        proxy_id: proxy.proxy_id,
      });
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title={`Fixing proxy (id:${proxy.proxy_id ?? ""}) troubleshoot`}
      description="If the proxy doesn't work for any reason, click the button below to run diagnostics"
      isOpen={isOpenModal}
      onClose={onCancel}
    >
      <div className="flex justify-between items-center gap-5">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          disabled={isPending}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="w-full"
          disabled={isPending}
          onClick={handleSubmit}
        >
          {isPending ? <Loader /> : "Fix my proxy"}
        </Button>
      </div>
    </Modal>
  );
};

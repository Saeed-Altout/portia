"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Loader } from "@/components/ui/loader";

import { ModalType } from "@/config/enums";
import { useStore } from "@/stores/use-store";

import { useFixProxy } from "@/hooks";
import { useModalStore } from "@/stores";
export const FixProxyModal = () => {
  const { proxy } = useStore();
  const { mutate, isPending } = useFixProxy();

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.FIX_PROXY;

  const onSubmit = () =>
    mutate({ pkg_id: proxy.package_id, proxy_id: proxy.id });

  return (
    <Modal
      title={`Fixing proxy (id:${proxy.id ?? ""}) troublesShoot`}
      description="if the proxy does't work for any reason click this button below to diagnostics"
      isOpen={isOpenModal}
      onClose={() => onClose(ModalType.FIX_PROXY)}
    >
      <div className="flex justify-between items-center gap-5">
        <Button
          variant="outline"
          disabled={isPending}
          onClick={() => onClose(ModalType.FIX_PROXY)}
          className="w-full"
        >
          Cancel
        </Button>
        <Button disabled={isPending} onClick={onSubmit} className="w-full">
          {isPending ? <Loader /> : "Fix my proxy"}
        </Button>
      </div>
    </Modal>
  );
};

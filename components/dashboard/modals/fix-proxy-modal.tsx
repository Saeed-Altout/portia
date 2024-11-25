"use client";

import { BeatLoader } from "react-spinners";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

import { useFixProxy } from "@/hooks";
import { useModalStore, useProxyStore } from "@/stores";

export const FixProxyModal = () => {
  const { proxy } = useProxyStore();
  const { fixProxyModalIsOpen, fixProxyModalOnClose } = useModalStore();
  const { mutate, isPending } = useFixProxy();

  const onSubmit = () =>
    mutate({
      pkg_id: proxy.package_id,
      proxy_id: proxy.proxy_id,
    });

  return (
    <Modal
      title={`Fixing proxy (id:${proxy.proxy_id}) troublesShoot`}
      description="if the proxy does't work for any reason click this button below to diagnostics"
      isOpen={fixProxyModalIsOpen}
      onClose={fixProxyModalOnClose}
    >
      <div className="flex justify-between items-center gap-5">
        <Button
          variant="outline"
          disabled={isPending}
          onClick={fixProxyModalOnClose}
          className="w-full"
        >
          Cancel
        </Button>
        <Button disabled={isPending} onClick={onSubmit} className="w-full">
          {isPending ? <BeatLoader color="#fff" size={12} /> : "Fix my proxy"}
        </Button>
      </div>
    </Modal>
  );
};

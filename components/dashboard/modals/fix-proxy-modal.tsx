"use client";

import { BeatLoader } from "react-spinners";

import { Button } from "@/components/ui/button";

import { useModalStore } from "@/stores";
import { useFixProxy } from "@/hooks";
import { Modal } from "../modal";

export const FixProxyModal = () => {
  const { fixProxyModalIsOpen, fixProxyModalOnClose, fixProxy } =
    useModalStore();
  const { mutate, isPending } = useFixProxy();

  const onSubmit = () => {
    mutate(fixProxy);
  };

  return (
    <Modal
      title="Fixing proxy (id:24) troublesShoot"
      description="if the proxy does't work for any reason click this button below to diagnostics"
      isOpen={fixProxyModalIsOpen}
      onClose={fixProxyModalOnClose}
    >
      <div className="flex justify-between items-center gap-5">
        <Button
          type="button"
          variant="outline"
          className="basis-1/2"
          disabled={isPending}
          onClick={fixProxyModalOnClose}
        >
          Cancel
        </Button>
        <Button
          type="button"
          variant="default"
          className="basis-1/2"
          disabled={isPending}
          onClick={onSubmit}
        >
          {isPending ? <BeatLoader color="#fff" /> : "Fix my proxy"}
        </Button>
      </div>
    </Modal>
  );
};

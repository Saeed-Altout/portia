"use client";

import { useEffect, useState } from "react";

import { AddProxyModal } from "@/components/dialogs/add-proxy-modal";
import { AddFundsModal } from "@/components/dialogs/add-funds-modal";
import { FixProxyModal } from "@/components/dialogs/fix-proxy-modal";
import { EditInfoProxyModal } from "@/components/dialogs/edit-info-proxy-modal";
import { EditAuthProxyModal } from "@/components/dialogs/edit-auth-proxy-modal";
import { RenewProxyModal } from "@/components/dialogs/renew-porxy-modal";

export const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddProxyModal />
      <AddFundsModal />
      <FixProxyModal />
      <RenewProxyModal />
      <EditInfoProxyModal />
      <EditAuthProxyModal />
    </>
  );
};

"use client";

import { useEffect, useState } from "react";

import { AddProxyModal } from "@/components/dialogs/add-proxy-modal";
import { AddFundsModal } from "@/components/dialogs/add-funds-modal";
import { FixProxyModal } from "@/components/dialogs/fix-proxy-modal";
import { EditInfoProxyModal } from "@/components/dialogs/edit-info-proxy-modal";
import { EditAuthProxyModal } from "@/components/dialogs/edit-auth-proxy-modal";
// import { LogoutModal } from "@/components/dialogs/logout-modal";
// import { ExportDataModal } from "@/components/dialogs/export-data-modal";
// import { ActivateProxyModal } from "@/components/dialogs/activate-proxy-modal";

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
      <EditInfoProxyModal />
      <EditAuthProxyModal />
      {/* 
   


      <ExportDataModal />
      <LogoutModal />
      <ActivateProxyModal /> */}
    </>
  );
};

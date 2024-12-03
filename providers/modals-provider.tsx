"use client";

import { useEffect, useState } from "react";

import { AddProxyModal } from "@/components/dashboard/modals/add-proxy-modal";
import { FixProxyModal } from "@/components/dashboard/modals/fix-proxy-modal";
import { EditInfoProxyModal } from "@/components/dashboard/modals/edit-info-proxy-modal";
import { EditAuthProxyModal } from "@/components/dashboard/modals/edit-auth-proxy-modal";
import { LogoutModal } from "@/components/dashboard/modals/logout-modal";
import { ExportDataModal } from "@/components/dashboard/modals/export-data-modal";

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
      <FixProxyModal />
      <EditInfoProxyModal />
      <EditAuthProxyModal />
      <ExportDataModal />
      <LogoutModal />
    </>
  );
};

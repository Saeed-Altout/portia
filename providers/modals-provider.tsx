"use client";

import { useEffect, useState } from "react";

import { AddFundsModal } from "@/components/dashboard/modals/add-funds-modal";
import { ActivateNewProxyModal } from "@/components/dashboard/modals/activate-new-proxy-modal";
import { ChangeProxyLocationModal } from "@/components/dashboard/modals/change-proxy-location-modal";
import { ChangeProxyTypeModal } from "@/components/dashboard/modals/change-proxy-type-modal";
import { ChangeProxyAuthenticationsModal } from "@/components/dashboard/modals/change-proxy-authentications-modal copy";
import { FixingProxyModal } from "@/components/dashboard/modals/fixing-proxy-modal";
import { LogoutModal } from "@/components/dashboard/modals/logout-modal";
import { AddProxyModal } from "@/components/dashboard/modals/add-proxy-modal";

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
      {/* <ActivateNewProxyModal /> */}
      <AddFundsModal />
      <ChangeProxyLocationModal />
      <ChangeProxyTypeModal />
      <ChangeProxyAuthenticationsModal />
      <FixingProxyModal />
      <LogoutModal />
    </>
  );
};

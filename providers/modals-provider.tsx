"use client";

import { useEffect, useState } from "react";

import { FixProxyModal } from "@/components/dashboard/modals/fix-proxy-modal";
import { AddProxyModal } from "@/components/dashboard/modals/add-proxy-modal";

import { LogoutModal } from "@/components/dashboard/modals/logout-modal";

import { ChangeProxyLocationModal } from "@/components/dashboard/modals/change-proxy-location-modal";
import { ChangeProxyTypeModal } from "@/components/dashboard/modals/change-proxy-type-modal";

import { AddFundsModal } from "@/components/dashboard/modals/add-funds-modal";
import { ChangeProxyAuthenticationsModal } from "@/components/dashboard/modals/change-proxy-authentications-modal copy";
import { RenewExpiredProxiesModal } from "@/components/dashboard/modals/renew-expired-proxies-modal";

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
      <FixProxyModal />
      <AddProxyModal />

      {/* <ActivateNewProxyModal /> */}
      <AddFundsModal />
      <ChangeProxyLocationModal />
      <ChangeProxyTypeModal />
      <ChangeProxyAuthenticationsModal />
      <RenewExpiredProxiesModal />
      <LogoutModal />
    </>
  );
};

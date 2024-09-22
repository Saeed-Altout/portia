import * as React from "react";

import { AddFundsModal } from "@dashboard/_components/modals/add-funds-modal";
import { ActivateNewProxyModal } from "@dashboard/_components/modals/activate-new-proxy-modal";
import { ChangeProxyLocationModal } from "@dashboard/_components/modals/change-proxy-location-modal";
import { ChangeProxyTypeModal } from "@dashboard/_components/modals/change-proxy-type-modal";
import { ChangeProxyAuthenticationsModal } from "@dashboard/_components/modals/change-proxy-authentications-modal copy";
import { FixingProxyModal } from "@dashboard/_components/modals/fixing-proxy-modal";
import { LogoutModal } from "@dashboard/_components/modals/logout-modal";

export const ModalsSections = () => {
  return (
    <>
      <ActivateNewProxyModal />
      <AddFundsModal />
      <ChangeProxyLocationModal />
      <ChangeProxyTypeModal />
      <ChangeProxyAuthenticationsModal />
      <FixingProxyModal />
      <LogoutModal />
    </>
  );
};

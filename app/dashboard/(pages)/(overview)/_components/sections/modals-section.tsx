import * as React from "react";

import { AddFundsModal } from "@/app/dashboard/_components/modals/add-funds-modal";
import { ActivateNewProxyModal } from "@dashboard/_components/modals/activate-new-proxy-modal";
import { ChangeProxyLocationModal } from "@dashboard/_components/modals/change-proxy-location-modal";

export const ModalsSections = () => {
  return (
    <>
      <ActivateNewProxyModal />
      <AddFundsModal />
      <ChangeProxyLocationModal />
    </>
  );
};

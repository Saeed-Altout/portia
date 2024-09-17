import * as React from "react";

import { AddFundsModal } from "@dashboard/_components/modals/add-funds-modal";
import { ActivateNewProxyModal } from "@dashboard/_components/modals/activate-new-proxy-modal";
import { ChangeProxyLocationModal } from "@dashboard/_components/modals/change-proxy-location-modal";
import { ChangeProxyTypeModal } from "@dashboard/_components/modals/change-proxy-type-modal";

export const ModalsSections = () => {
  return (
    <>
      <ActivateNewProxyModal />
      <AddFundsModal />
      <ChangeProxyLocationModal />
      <ChangeProxyTypeModal />
    </>
  );
};

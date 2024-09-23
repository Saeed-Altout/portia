import { create } from "zustand";

interface useStoreModal {
  activateNewProxy: boolean;
  onOpenActivateNewProxy: () => void;
  onCloseActivateNewProxy: () => void;

  addFunds: boolean;
  onOpenAddFunds: () => void;
  onCloseAddFunds: () => void;

  changeProxyAuthentications: boolean;
  onOpenChangeProxyAuthentications: () => void;
  onCloseChangeProxyAuthentications: () => void;

  changeProxyLocation: boolean;
  onOpenChangeProxyLocation: () => void;
  onCloseChangeProxyLocation: () => void;

  changeProxyType: boolean;
  onOpenChangeProxyType: () => void;
  onCloseChangeProxyType: () => void;

  fixingProxy: boolean;
  onOpenFixingProxy: () => void;
  onCloseFixingProxy: () => void;

  logout: boolean;
  onOpenLogout: () => void;
  onCloseLogout: () => void;

  renewExpiredProxies: boolean;
  onOpenRenewExpiredProxies: () => void;
  onCloseRenewExpiredProxies: () => void;
}

const initialState = {
  activateNewProxy: false,
  addFunds: false,
  changeProxyAuthentications: false,
  changeProxyLocation: false,
  changeProxyType: false,
  fixingProxy: false,
  logout: false,
  renewExpiredProxies: false,
};

export const useStoreModal = create<useStoreModal>((set) => ({
  ...initialState,
  onOpenActivateNewProxy: () => set({ activateNewProxy: true }),
  onCloseActivateNewProxy: () => set({ activateNewProxy: false }),

  onOpenAddFunds: () => set({ addFunds: true }),
  onCloseAddFunds: () => set({ addFunds: false }),

  onOpenChangeProxyAuthentications: () =>
    set({ changeProxyAuthentications: true }),
  onCloseChangeProxyAuthentications: () =>
    set({ changeProxyAuthentications: false }),

  onOpenChangeProxyLocation: () => set({ changeProxyLocation: true }),
  onCloseChangeProxyLocation: () => set({ changeProxyLocation: false }),

  onOpenChangeProxyType: () => set({ changeProxyType: true }),
  onCloseChangeProxyType: () => set({ changeProxyType: false }),

  onOpenFixingProxy: () => set({ fixingProxy: true }),
  onCloseFixingProxy: () => set({ fixingProxy: false }),

  onOpenLogout: () => set({ logout: true }),
  onCloseLogout: () => set({ logout: false }),

  onOpenRenewExpiredProxies: () => set({ renewExpiredProxies: true }),
  onCloseRenewExpiredProxies: () => set({ renewExpiredProxies: false }),
}));

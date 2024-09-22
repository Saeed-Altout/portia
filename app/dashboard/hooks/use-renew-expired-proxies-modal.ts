import { create } from "zustand";

interface UseRenewExpiredProxiesModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useRenewExpiredProxiesModal = create<UseRenewExpiredProxiesModal>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);

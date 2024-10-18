import { create } from "zustand";

interface UseChangeProxyTypeModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useChangeProxyTypeModal = create<UseChangeProxyTypeModalProps>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);

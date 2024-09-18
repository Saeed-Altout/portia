import { create } from "zustand";

interface UseActivateNewProxyModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useActivateNewProxyModal = create<UseActivateNewProxyModalProps>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);

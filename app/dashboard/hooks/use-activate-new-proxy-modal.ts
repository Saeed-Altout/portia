import { create } from "zustand";

interface UseActivateNewProxyModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useActivateNewProxyModal = create<UseActivateNewProxyModalProps>(
  (set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);

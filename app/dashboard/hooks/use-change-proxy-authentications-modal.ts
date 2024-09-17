import { create } from "zustand";

interface UseChangeProxyAuthenticationsModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useChangeProxyAuthenticationsModal =
  create<UseChangeProxyAuthenticationsModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));

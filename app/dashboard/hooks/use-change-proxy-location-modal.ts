import { create } from "zustand";

interface UseChangeProxyLocationModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useChangeProxyLocationModal =
  create<UseChangeProxyLocationModalProps>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));

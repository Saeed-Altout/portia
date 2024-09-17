import { create } from "zustand";

interface UseAddFundsModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAddFundsModal = create<UseAddFundsModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

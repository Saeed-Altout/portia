import { create } from "zustand";

interface UseLogoutModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useLogoutModal = create<UseLogoutModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

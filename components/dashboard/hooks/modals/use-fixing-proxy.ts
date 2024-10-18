import { create } from "zustand";

interface UseFixingProxyProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useFixingProxy = create<UseFixingProxyProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

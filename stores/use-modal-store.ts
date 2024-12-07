import { ModalType } from "@/config/enums";
import { create } from "zustand";

export interface ModalStoreProps {
  isOpen: boolean;
  type: ModalType;
  onOpen: (type: ModalType) => void;
  onClose: (type: ModalType) => void;

  renewProxyModalIsOpen: boolean;
  renewProxyModalOnOpen: () => void;
  renewProxyModalOnClose: () => void;

  step: number;
  setStep: (step: number) => void;
  moveNextStep: () => void;
  movePrevStep: () => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  isOpen: false,
  type: ModalType.ADD_PROXY,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: (type) => set({ isOpen: false, type }),

  renewProxyModalIsOpen: false,
  renewProxyModalOnOpen: () => set({ renewProxyModalIsOpen: true }),
  renewProxyModalOnClose: () => set({ renewProxyModalIsOpen: false }),

  step: 1,
  setStep: (step) => set({ step }),
  moveNextStep: () => set((state) => ({ step: state.step + 1 })),
  movePrevStep: () => set((state) => ({ step: state.step - 1 })),
}));

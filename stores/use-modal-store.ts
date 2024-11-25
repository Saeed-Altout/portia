import { create } from "zustand";

export interface ModalStoreProps {
  renewProxyModalIsOpen: boolean;
  renewProxyModalOnOpen: () => void;
  renewProxyModalOnClose: () => void;

  fixProxyModalIsOpen: boolean;
  fixProxyModalOnOpen: () => void;
  fixProxyModalOnClose: () => void;

  activeProxyModalIsOpen: boolean;
  activeProxyModalOnOpen: () => void;
  activeProxyModalOnClose: () => void;

  step: number;
  setStep: (step: number) => void;
  moveNextStep: () => void;
  movePrevStep: () => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  renewProxyModalIsOpen: false,
  renewProxyModalOnOpen: () => set({ renewProxyModalIsOpen: true }),
  renewProxyModalOnClose: () => set({ renewProxyModalIsOpen: false }),

  fixProxyModalIsOpen: false,
  fixProxyModalOnOpen: () => set({ fixProxyModalIsOpen: true }),
  fixProxyModalOnClose: () => set({ fixProxyModalIsOpen: false }),

  activeProxyModalIsOpen: false,
  activeProxyModalOnOpen: () => set({ activeProxyModalIsOpen: true }),
  activeProxyModalOnClose: () => set({ activeProxyModalIsOpen: false }),

  step: 1,
  setStep: (step) => set({ step }),
  moveNextStep: () => set((state) => ({ step: state.step + 1 })),
  movePrevStep: () => set((state) => ({ step: state.step - 1 })),
}));

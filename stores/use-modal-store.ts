import { create } from "zustand";

export interface ModalStoreProps {
  editProxyModalIsOpen: boolean;
  editProxyModalOnOpen: () => void;
  editProxyModalOnClose: () => void;

  editAuthProxyModalIsOpen: boolean;
  editAuthProxyModalOnOpen: () => void;
  editAuthProxyModalOnClose: () => void;

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

  action: "edit" | "add" | "fix";
  setAction: (action: "edit" | "add" | "fix") => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  editProxyModalIsOpen: false,
  editProxyModalOnOpen: () => set({ editProxyModalIsOpen: true }),
  editProxyModalOnClose: () => set({ editProxyModalIsOpen: false }),

  editAuthProxyModalIsOpen: false,
  editAuthProxyModalOnOpen: () => set({ editAuthProxyModalIsOpen: true }),
  editAuthProxyModalOnClose: () => set({ editAuthProxyModalIsOpen: false }),

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

  action: "add",
  setAction: (action) => set({ action }),
}));

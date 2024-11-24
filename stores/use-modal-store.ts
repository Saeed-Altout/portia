import { create } from "zustand";

interface FixProxy {
  pkg_id: number;
  proxy_id: number;
}
export interface ModalStoreProps {
  renewProxyModalIsOpen: boolean;
  renewProxyModalOnOpen: () => void;
  renewProxyModalOnClose: () => void;

  fixProxy: FixProxy;
  setFixProxy: (data: FixProxy) => void;

  fixProxyModalIsOpen: boolean;
  fixProxyModalOnOpen: () => void;
  fixProxyModalOnClose: () => void;

  activeProxyModalIsOpen: boolean;
  activeProxyModalOnOpen: () => void;
  activeProxyModalOnClose: () => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  renewProxyModalIsOpen: false,
  renewProxyModalOnOpen: () => set({ renewProxyModalIsOpen: true }),
  renewProxyModalOnClose: () => set({ renewProxyModalIsOpen: false }),

  fixProxy: {
    pkg_id: 0,
    proxy_id: 0,
  },
  setFixProxy: (data) => set({ fixProxy: data }),

  fixProxyModalIsOpen: false,
  fixProxyModalOnOpen: () => set({ fixProxyModalIsOpen: true }),
  fixProxyModalOnClose: () => set({ fixProxyModalIsOpen: false }),

  activeProxyModalIsOpen: false,
  activeProxyModalOnOpen: () => set({ activeProxyModalIsOpen: true }),
  activeProxyModalOnClose: () => set({ activeProxyModalIsOpen: false }),
}));

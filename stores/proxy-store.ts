import { create } from "zustand";

interface ProxyProps {
  city_name: string;
  country_name: string;
  http_port: number;
  id: number;
  is_available: boolean;
  rotation_time: number;
  service_provider_name: string;
  socks_port: number;
}

interface Package {
  id: number;
  name: string;
}

interface Cost {
  days: number;
  hours: number;
  price: number;
}

export interface ProxyStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

  step: number;
  setStep: (step: number) => void;
  moveNextStep: () => void;
  movePrevStep: () => void;

  proxy: ProxyProps | null;
  setProxy: (proxy: ProxyProps | null) => void;

  pkg_id: number;
  setPackageId: (pkg_id: number) => void;

  price: number;
  setPrice: (price: number) => void;

  duration: number;
  setDuration: (duration: number) => void;
}

export const proxyStore = create<ProxyStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),

  step: 1,
  setStep: (step) => set({ step }),
  moveNextStep: () => set((state) => ({ step: state.step + 1 })),
  movePrevStep: () => set((state) => ({ step: state.step - 1 })),

  proxy: null,
  setProxy: (proxy) => set({ proxy }),

  pkg_id: 0,
  setPackageId: (pkg_id) => set({ pkg_id }),

  price: 0,
  setPrice: (price: number) => set({ price }),

  duration: 0,
  setDuration: (duration: number) => set({ duration }),
}));

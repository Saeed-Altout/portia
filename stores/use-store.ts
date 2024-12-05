import { create } from "zustand";

interface Proxy {
  id: number;
  cost: string;
}

interface Offer {
  parent_proxy_id: string;
  package_id: number;
  package_name: string;
  duration: number;
  port: string;
  service_provider_name: string;
  country_name: string;
  city_name: string;
  rotation_time: number;
}

interface Store {
  proxy: Proxy;
  offer: Offer;
  setOffer: (offer: Offer) => void;
  setProxy: (proxy: Proxy) => void;
  setProxyId: (id: number) => void;
  setProxyCost: (cost: string) => void;
}

export const useStore = create<Store>((set) => ({
  proxy: {
    id: 0,
    cost: "",
  },
  offer: {
    parent_proxy_id: "",
    package_id: 0,
    package_name: "",
    duration: 0,
    port: "",
    service_provider_name: "",
    country_name: "",
    city_name: "",
    rotation_time: 0,
  },
  setOffer: (offer: Offer) => set({ offer }),
  setProxy: (proxy: Proxy) => set({ proxy }),
  setProxyId: (id: number) =>
    set((state) => ({ proxy: { ...state.proxy, id } })),
  setProxyCost: (cost: string) =>
    set((state) => ({ proxy: { ...state.proxy, cost } })),
}));

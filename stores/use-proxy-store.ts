import { create } from "zustand";

interface Proxy {
  sequence: string;
  id: number;
  re_new: number;
  is_active: number;
  package_name: string;
  protocol: string;
  service_provider: string;
  protocol_port: number;
  expire_at: string | null;
  username: string;
  password: string;
  plan_name: string;
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  duration: number;
  amount: number;
  rotation_time: string;
  country_name: string;
}

interface Location {
  city_id: number;
  city_name: string;
  country_id: number;
  country_name: string;
  id: number;
  is_available: boolean;
  package_id: number;
  package_name: string;
  rotation_time: string;
  service_provider_id: number;
  service_provider_name: string;
  status: string;
  http_port: number;
  socks_port: number;
}

interface Offer {
  id: number;
  cost: string;
  description: string;
  title: string;
  plan_id: number;
  package_id: number;
  is_available: boolean;
  color: string;
}

const initialOffer: Offer = {
  id: 0,
  cost: "",
  description: "",
  title: "",
  plan_id: 0,
  package_id: 0,
  is_available: false,
  color: "",
};

const initialProxy: Proxy = {
  sequence: "",
  id: 0,
  re_new: 0,
  is_active: 0,
  package_name: "",
  protocol: "",
  service_provider: "",
  protocol_port: 0,
  expire_at: "",
  username: "",
  password: "",
  plan_name: "",
  proxy_id: "",
  parent_proxy_id: "",
  package_id: "",
  duration: 0,
  rotation_time: "",
  amount: 0,
  country_name: "",
};
const initialLocation: Location = {
  city_id: 0,
  city_name: "",
  country_id: 0,
  country_name: "",
  id: 0,
  is_available: false,
  package_id: 0,
  package_name: "",
  rotation_time: "",
  service_provider_id: 0,
  service_provider_name: "",
  status: "",
  http_port: 0,
  socks_port: 0,
};

interface ProxyStore {
  proxy: Proxy;
  setProxy: (proxy: Proxy) => void;
  resetProxy: () => void;

  location: Location;
  setLocation: (location: Location) => void;
  resetLocation: () => void;

  offer: Offer;
  setOffer: (offer: Offer) => void;
  resetOffer: () => void;

  price: string;
  setPrice: (price: string) => void;

  duration: string;
  setDuration: (duration: string) => void;

  reset: () => void;
}

export const useProxyStore = create<ProxyStore>((set) => ({
  proxy: initialProxy,
  setProxy: (proxy) => set({ proxy }),
  resetProxy: () => set({ proxy: initialProxy }),

  offer: initialOffer,
  setOffer: (offer) => set({ offer }),
  resetOffer: () => set({ offer: initialOffer }),

  location: initialLocation,
  setLocation: (location) => set({ location }),
  resetLocation: () => set({ location: initialLocation }),

  price: "",
  setPrice: (price) => set({ price }),

  duration: "",
  setDuration: (duration) => set({ duration }),

  reset: () =>
    set({
      proxy: initialProxy,
      location: initialLocation,
      offer: initialOffer,
    }),
}));

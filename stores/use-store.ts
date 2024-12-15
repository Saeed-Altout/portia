import { create } from "zustand";

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
  plan_id: number;
  plan: string;
}

interface Proxy {
  id: string;
  cost: string;
  username: string;
  parent_proxy_id: string;
  package_id: string;
}
type Location = {
  id: number;
  service_provider_name: string;
};

type Notification = {
  id: number;
  title: string;
  message: string;
  type: string;
  timestamp: string | Date;
  read: boolean;
};
interface Store {
  proxy: Proxy;
  offer: Offer;
  location: Location;
  setLocation: (location: Location) => void;
  setLocationId: (id: number) => void;
  setLocationServiceProviderName: (service_provider_name: string) => void;
  setOffer: (offer: Offer) => void;
  setOfferId: (offerId: number) => void;
  setProxy: (proxy: Proxy) => void;
  setProxyId: (id: string) => void;
  setProxyUsername: (username: string) => void;
  setProxyParentId: (parentId: string) => void;
  setProxyPackageId: (packageId: string) => void;
  setProxyCost: (cost: string) => void;

  notification: Notification;
  setNotification: (notification: Notification) => void;
}

export const useStore = create<Store>((set) => ({
  location: {
    id: 0,
    service_provider_name: "",
  },

  setLocation: (location: Location) => set({ location }),
  setLocationId: (id: number) =>
    set((state) => ({ location: { ...state.location, id } })),

  setLocationServiceProviderName: (service_provider_name: string) =>
    set((state) => ({
      location: { ...state.location, service_provider_name },
    })),

  proxy: {
    id: "0",
    cost: "",
    username: "",
    parent_proxy_id: "",
    package_id: "",
  },

  setProxy: (proxy: Proxy) => set({ proxy }),
  setProxyId: (id: string) =>
    set((state) => ({ proxy: { ...state.proxy, id } })),
  setProxyUsername: (username: string) =>
    set((state) => ({ proxy: { ...state.proxy, username } })),
  setProxyParentId: (parentId: string) =>
    set((state) => ({ proxy: { ...state.proxy, parent_proxy_id: parentId } })),
  setProxyPackageId: (packageId: string) =>
    set((state) => ({ proxy: { ...state.proxy, package_id: packageId } })),
  setProxyCost: (cost: string) =>
    set((state) => ({ proxy: { ...state.proxy, cost } })),

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
    plan_id: 0,
    plan: "",
  },
  setOffer: (offer: Offer) => set({ offer }),
  setOfferId: (offerId: number) =>
    set((state) => ({ offer: { ...state.offer, package_id: offerId } })),

  notification: {
    id: 0,
    message: "",
    read: false,
    timestamp: "",
    title: "",
    type: "",
  },

  setNotification: (notification) => {
    set({ notification });
  },
}));

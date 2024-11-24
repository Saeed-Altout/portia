import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ProxyState {
  id: number;
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  rotation_time: string;
  is_active: number;
  re_new: number;
  protocol: string;
  protocol_port: number;
  country_name: string;
  city_name: string;
  service_provider: string;
  username: string;
  password: string;
  ip_addr: string;
  duration: number;
  price: string;
  expire_at: string | Date;
  created_at: string | Date;
  updated_at: string | Date;
  user_id: number;
}

const initialProxy: ProxyState = {
  id: 0,
  proxy_id: "",
  parent_proxy_id: "",
  package_id: "",
  rotation_time: "",
  is_active: 0,
  re_new: 0,
  protocol: "",
  protocol_port: 0,
  country_name: "",
  city_name: "",
  service_provider: "",
  username: "",
  password: "",
  ip_addr: "",
  duration: 0,
  price: "",
  expire_at: "",
  created_at: "",
  updated_at: "",
  user_id: 0,
};

interface ProxyStore {
  proxy: ProxyState;
  setProxy: (proxy: ProxyState) => void;

  activeProxies: ProxyState[];
  setActiveProxies: (proxies: ProxyState[]) => void;

  inactiveProxies: ProxyState[];
  setInactiveProxies: (proxies: ProxyState[]) => void;

  activePage: number;
  setActivePage: (page: number) => void;

  inactivePage: number;
  setInactivePage: (page: number) => void;

  activeProxiesCount: number;
  setActiveProxiesCount: (count: number) => void;

  inactiveProxiesCount: number;
  setInactiveProxiesCount: (count: number) => void;

  totalProxiesCount: number;
  setTotalProxiesCount: (count: number) => void;
}

export const useProxyStore = create<ProxyStore>()(
  immer((set) => ({
    proxy: initialProxy,
    setProxy: (proxy) => set((state) => void (state.proxy = proxy)),

    activeProxies: [],
    setActiveProxies: (proxies) =>
      set((state) => void (state.activeProxies = proxies)),

    inactiveProxies: [],
    setInactiveProxies: (proxies) =>
      set((state) => void (state.inactiveProxies = proxies)),

    activePage: 1,
    setActivePage: (page) =>
      set((state) => {
        state.activePage = page;
      }),

    inactivePage: 1,
    setInactivePage: (page) =>
      set((state) => {
        state.inactivePage = page;
      }),

    activeProxiesCount: 0,
    setActiveProxiesCount: (count: number) =>
      set({ activeProxiesCount: count }),

    inactiveProxiesCount: 0,
    setInactiveProxiesCount: (count: number) =>
      set({ inactiveProxiesCount: count }),

    totalProxiesCount: 0,
    setTotalProxiesCount: (count: number) => set({ totalProxiesCount: count }),
  }))
);

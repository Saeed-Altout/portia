import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Costs {
  plan: Array<{
    value: number;
    price: number;
    duration: number;
  }>;
}

const initialProxy: ProxyState = {
  id: 0,
  proxy_id: "",
  parent_proxy_id: "",
  package_id: "",
  package_name: "",
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

const initialLocation: LocationState = {
  id: 0,
  http_port: 0,
  socks_port: 0,
  service_provider_name: "",
  country_name: "",
  city_name: "",
  rotation_time: 0,
  is_available: false,
};

interface ProxyStore {
  proxy: ProxyState;
  setProxy: (proxy: ProxyState) => void;

  location: LocationState;
  setLocation: (location: LocationState) => void;

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

  packages: Package[];
  setPackages: (packages: Package[]) => void;

  protocol: number;
  setProtocol: (protocol: number) => void;

  pkgId: string;
  setPkgId: (pkgId: string) => void;

  ports: string[];
  setPorts: (ports: string[]) => void;

  plans: string[];
  setPlans: (plans: string[]) => void;

  costs: Costs;
  setCosts: (costs: Costs) => void;

  price: number;
  setPrice: (price: number) => void;

  duration: number;
  setDuration: (duration: number) => void;

  amounts: string[];
  setAmounts: (amounts: string[]) => void;
}

export const useProxyStore = create<ProxyStore>()(
  immer((set) => ({
    proxy: initialProxy,
    setProxy: (proxy) => set((state) => void (state.proxy = proxy)),

    location: initialLocation,
    setLocation: (location) => set((state) => void (state.location = location)),

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

    packages: [],
    setPackages: (packages) => set({ packages }),

    protocol: 0,
    setProtocol: (protocol) => set({ protocol }),

    pkgId: "",
    setPkgId: (pkgId) => set({ pkgId }),

    ports: [],
    setPorts: (ports) => set({ ports }),

    plans: [],
    setPlans: (plans) => set({ plans }),

    costs: { plan: [] },
    setCosts: (costs) => set({ costs }),

    price: 0,
    setPrice: (price) => set({ price }),

    duration: 0,
    setDuration: (duration) => set({ duration }),

    amounts: [],
    setAmounts: (amounts) => set({ amounts }),
  }))
);

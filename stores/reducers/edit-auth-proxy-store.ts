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
}

const initialProxy: Proxy = {
  sequence: "",
  id: 0,
  re_new: 0,
  is_active: 0,
  package_name: "",
  protocol: "",
  service_provider: "",
  protocol_port: 0,
  expire_at: null,
  username: "",
  password: "",
  plan_name: "",
  proxy_id: "",
  parent_proxy_id: "",
  package_id: "",
  duration: 0,
};

interface EditAuthProxyStore {
  proxy: Proxy;
  setProxy: (proxy: Proxy) => void;
  resetProxy: () => void;
}

export const useEditAuthProxyStore = create<EditAuthProxyStore>((set) => ({
  proxy: initialProxy,
  setProxy: (proxy) => set({ proxy }),
  resetProxy: () => set({ proxy: initialProxy }),
}));

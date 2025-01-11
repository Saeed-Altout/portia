import { create } from "zustand";

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

interface LocationStore {
  location: Location;
  setLocation: (location: Location) => void;
  resetLocation: () => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  location: initialLocation,
  setLocation: (location) => set({ location }),
  resetLocation: () => set({ location: initialLocation }),
}));

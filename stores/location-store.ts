import { create } from "zustand";

export interface LocationStoreProps {
  location: any | null;
  setLocation: (location: any) => void;
}

export const useLocationStore = create<LocationStoreProps>((set) => ({
  location: null,
  setLocation: (location) => set({ location }),
}));

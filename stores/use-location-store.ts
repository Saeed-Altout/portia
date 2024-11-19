import { create } from "zustand";

interface LocationState {
  offset: number;
  pkgId: number | null;
  countryId: number | null;
  cityId: number | null;
  serviceProviderId: number | null;
  ipRotationId: number | null;
  refetchAll: () => void;
  setPkgId: (pkgId: number) => void;
  setCountryId: (countryId: number | null) => void;
  setCityId: (cityId: number | null) => void;
  setServiceProviderId: (serviceProviderId: number | null) => void;
  setIpRotationId: (ipRotation: number | null) => void;
  setOffset: (offset: number) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  offset: 0,
  pkgId: 1,
  countryId: null,
  cityId: null,
  serviceProviderId: null,
  ipRotationId: null,
  refetchAll: () => {},

  setOffset: (offset) => set((state) => ({ ...state, offset })),

  setPkgId: (pkgId) =>
    set((state) => ({
      ...state,
      pkgId,
      countryId: null,
      cityId: null,
    })),

  setCountryId: (countryId) =>
    set((state) => ({
      ...state,
      countryId,
      cityId: null,
    })),

  setCityId: (cityId) =>
    set((state) => ({
      ...state,
      cityId,
    })),

  setServiceProviderId: (serviceProviderId) =>
    set((state) => ({
      ...state,
      serviceProviderId,
    })),

  setIpRotationId: (ipRotationId) =>
    set((state) => ({
      ...state,
      ipRotationId,
    })),
}));

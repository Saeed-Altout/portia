"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useGetOffersQuery, useGetPackagesQuery } from "@/services/plans/hooks";

interface PlansContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  packages: any[];
  offers: any[];
}

const PlansContext = createContext<PlansContextType | undefined>(undefined);

export const PlansProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const packages = useGetPackagesQuery();
  const offers = useGetOffersQuery();

  const isLoading = packages.isLoading || offers.isLoading;
  const isError = packages.isError || offers.isError;
  const isSuccess = packages.isSuccess && offers.isSuccess;

  return (
    <PlansContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        packages: packages.data?.data ?? [],
        offers: offers.data?.data ?? [],
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error("useData must be used within a PlansProvider");
  }
  return context;
};

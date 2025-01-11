"use client";

import React, { createContext, useContext, ReactNode } from "react";
import {
  useGetProxiesCountQuery,
  useGetProxiesQuery,
} from "@/services/proxies/hooks";
import { useGetUserBalanceQuery } from "@/services/user/hooks";
import { formatProxiesData, formatStatistics } from "@/helpers/formatter";

interface RootContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  formattedProxies: any[];
  formattedStatistics: any[];
}

const RootContext = createContext<RootContextType | undefined>(undefined);

export const RootProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const userBalance = useGetUserBalanceQuery();
  const ProxiesCount = useGetProxiesCountQuery();
  const proxies = useGetProxiesQuery({ state: "active" });

  const isLoading =
    userBalance.isLoading || ProxiesCount.isLoading || proxies.isLoading;
  const isError =
    userBalance.isError || ProxiesCount.isError || proxies.isError;
  const isSuccess =
    userBalance.isSuccess || ProxiesCount.isSuccess || proxies.isSuccess;

  const formattedProxies = formatProxiesData(proxies.data?.data ?? []);
  const formattedStatistics = formatStatistics(
    ProxiesCount.data?.data,
    userBalance.data?.data
  );

  return (
    <RootContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        formattedProxies,
        formattedStatistics,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useProxies must be used within a ProxiesProvider");
  }
  return context;
};

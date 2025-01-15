"use client";

import React, { createContext, useContext, ReactNode } from "react";
import {
  useGetProxiesCountQuery,
  useGetProxiesQuery,
} from "@/services/proxies/hooks";
import { useGetUserBalanceQuery } from "@/services/settings/hooks";
import { formatProxiesData, formatStatistics } from "@/utils/formatters";

interface RootContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  formattedActiveProxies: any[];
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

  const formattedActiveProxies = formatProxiesData(proxies.data?.data ?? []);
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
        formattedActiveProxies,
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

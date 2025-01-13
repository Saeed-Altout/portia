"use client";

import React, { createContext, useContext, ReactNode } from "react";
import {
  useGetProxiesCountQuery,
  useGetProxiesQuery,
} from "@/services/proxies/hooks";
import { useGetUserBalanceQuery } from "@/services/settings/hooks";
import { formatProxiesData, formatStatistics } from "@/utils/formatters";

interface ProxiesContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  formattedActiveProxies: any[];
  formattedInactiveProxies: any[];
  formattedStatistics: any[];
}

const ProxiesContext = createContext<ProxiesContextType | undefined>(undefined);

export const ProxiesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const userBalance = useGetUserBalanceQuery();
  const ProxiesCount = useGetProxiesCountQuery();
  const activeProxies = useGetProxiesQuery({ state: "active" });
  const inactiveProxies = useGetProxiesQuery({ state: "inactive" });

  const isLoading =
    userBalance.isLoading ||
    ProxiesCount.isLoading ||
    activeProxies.isLoading ||
    inactiveProxies.isLoading;
  const isError =
    userBalance.isError ||
    ProxiesCount.isError ||
    activeProxies.isError ||
    inactiveProxies.isError;
  const isSuccess =
    userBalance.isSuccess ||
    ProxiesCount.isSuccess ||
    activeProxies.isSuccess ||
    inactiveProxies.isSuccess;

  const formattedActiveProxies = formatProxiesData(
    activeProxies.data?.data ?? []
  );
  const formattedInactiveProxies = formatProxiesData(
    inactiveProxies.data?.data ?? []
  );

  const formattedStatistics = formatStatistics(
    ProxiesCount.data?.data,
    userBalance.data?.data
  );

  return (
    <ProxiesContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        formattedActiveProxies,
        formattedInactiveProxies,
        formattedStatistics,
      }}
    >
      {children}
    </ProxiesContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(ProxiesContext);
  if (!context) {
    throw new Error("useProxies must be used within a ProxiesProvider");
  }
  return context;
};

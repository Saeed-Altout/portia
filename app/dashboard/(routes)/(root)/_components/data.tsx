"use client";
import {
  useGetActiveProxies,
  useGetProxiesCounts,
  useGetUserBalance,
} from "@/hooks";

export const useRootData = () => {
  const proxiesCount = useGetProxiesCounts();
  const balance = useGetUserBalance();
  const proxiesActive = useGetActiveProxies();

  const isLoading =
    proxiesCount.isLoading || balance.isLoading || proxiesActive.isLoading;
  const isError =
    proxiesCount.isError || balance.isError || proxiesActive.isError;

  return {
    proxiesCount: proxiesCount.data?.data,
    balance: balance.data?.data,
    proxiesActive: proxiesActive.data?.data ?? [],
    isLoading,
    isError,
  };
};

"use client";
import {
  useGetActiveProxies,
  useGetInactiveProxies,
  useGetProxiesCounts,
} from "@/hooks";

export const useData = () => {
  const proxiesCount = useGetProxiesCounts();
  const proxiesInactive = useGetInactiveProxies();
  const proxiesActive = useGetActiveProxies();

  const isLoading =
    proxiesCount.isLoading ||
    proxiesInactive.isLoading ||
    proxiesActive.isLoading;
  const isError =
    proxiesCount.isError || proxiesInactive.isError || proxiesActive.isError;

  return {
    proxiesCount: proxiesCount.data?.data,
    proxiesInactive: proxiesInactive.data?.data ?? [],
    proxiesActive: proxiesActive.data?.data ?? [],
    isLoading,
    isError,
  };
};

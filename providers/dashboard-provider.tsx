"use client";

import { useEffect, useState } from "react";

import { useProxyStore } from "@/stores/new/proxy-store";
import { useGetActiveProxies } from "@/hooks/dashboard/use-get-active-proxies";
import { useGetInactiveProxies } from "@/hooks/dashboard/use-get-inactive-proxies";
import { useGetProxiesCounts } from "@/hooks/dashboard/use-get-proxies-counts";

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const {
    setActiveProxies,
    setInactiveProxies,
    activePage,
    inactivePage,
    setActiveProxiesCount,
    setInactiveProxiesCount,
    setTotalProxiesCount,
  } = useProxyStore();

  const { data: proxiesCount, isSuccess: proxiesCountIsSuccess } =
    useGetProxiesCounts();
  const { data: activeProxies, isSuccess: activeProxiesIsSuccess } =
    useGetActiveProxies({ page: activePage });
  const { data: inactiveProxies, isSuccess: inactiveProxiesIsSuccess } =
    useGetInactiveProxies({ page: inactivePage });

  useEffect(() => {
    if (activeProxiesIsSuccess) setActiveProxies(activeProxies.data.data);
  }, [activeProxies, activeProxiesIsSuccess, setActiveProxies]);

  useEffect(() => {
    if (inactiveProxiesIsSuccess) setInactiveProxies(inactiveProxies.data.data);
  }, [inactiveProxies, inactiveProxiesIsSuccess, setInactiveProxies]);

  useEffect(() => {
    if (proxiesCountIsSuccess) {
      setActiveProxiesCount(proxiesCount.data.active);
      setInactiveProxiesCount(proxiesCount.data.inactive);
      setTotalProxiesCount(proxiesCount.data.total);
    }
  }, [
    proxiesCount,
    proxiesCountIsSuccess,
    setActiveProxiesCount,
    setInactiveProxiesCount,
    setTotalProxiesCount,
  ]);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

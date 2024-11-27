"use client";

import { useEffect, useState } from "react";

import { useProxyStore } from "@/stores/use-proxy-store";
import {
  useGetActiveProxies,
  useGetAllPackages,
  useGetCostPlans,
  useGetInactiveProxies,
  useGetPorts,
  useGetProxiesCounts,
} from "@/hooks";

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const {
    setActiveProxies,
    setInactiveProxies,
    activePage,
    inactivePage,
    setActiveProxiesCount,
    setInactiveProxiesCount,
    setTotalProxiesCount,
    setPackages,
    pkgId,
    setPorts,
    setPlans,
    setCosts,
  } = useProxyStore();

  const { data: proxiesCount, isSuccess: proxiesCountIsSuccess } = useGetProxiesCounts();
  const { data: activeProxies, isSuccess: activeProxiesIsSuccess } = useGetActiveProxies({ page: activePage });
  const { data: inactiveProxies, isSuccess: inactiveProxiesIsSuccess } = useGetInactiveProxies({ page: inactivePage });
  const { data: packages, isSuccess: packagesIsSuccess } = useGetAllPackages();
  const {
    data: costs,
    isSuccess: costsIsSuccess,
    refetch: costsRefetch,
  } = useGetCostPlans({
    pkg_id: +pkgId,
  });
  const {
    data: ports,
    isSuccess: portsIsSuccess,
    refetch: portsRefetch,
  } = useGetPorts({
    id: +pkgId,
  });

  useEffect(() => {
    if (pkgId) {
      costsRefetch();
      portsRefetch();
    }
  }, [costsRefetch, portsRefetch, pkgId]);

  useEffect(() => {
    if (costsIsSuccess) {
      setCosts(costs.data);
    }
  }, [costs, costsIsSuccess, setCosts]);

  useEffect(() => {
    if (costsIsSuccess) {
      const plans = Object.keys(costs.data);
      setPlans(plans);
    }
  }, [costs, costsIsSuccess, setPlans]);

  useEffect(() => {
    if (portsIsSuccess) setPorts(ports.data);
  }, [ports, portsIsSuccess, setPorts]);

  useEffect(() => {
    if (packagesIsSuccess) setPackages(packages.data);
  }, [packages, packagesIsSuccess, setPackages]);

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
  }, [proxiesCount, proxiesCountIsSuccess, setActiveProxiesCount, setInactiveProxiesCount, setTotalProxiesCount]);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

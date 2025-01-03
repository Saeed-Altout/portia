"use client";

import { Zap } from "lucide-react";
import { format } from "date-fns";

import { useData } from "./use-data";
import { DataTable } from "./data-table";
import { ProxiesCard } from "./proxies-card";
import { activeColumns, inactiveColumns } from "./columns";

import { Heading } from "@/components/dashboard";

import { useAuthStore } from "@/stores";
import { PageSkelton } from "@/components/skeletons/page-skeleton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const ProxiesClient = () => {
  const { user } = useAuthStore();
  const { proxiesCount, proxiesInactive, proxiesActive, isLoading, isError } =
    useData();
  const formattedStatistic = [
    {
      icon: Zap,
      title: "My Active Proxies",
      theme: "success",
      value: `${proxiesCount?.active ?? 0} Proxies`,
    },
    {
      icon: Zap,
      title: "My Expired Proxies",
      theme: "danger",
      value: `${proxiesCount?.inactive ?? 0} Proxies`,
    },
    {
      icon: Zap,
      title: "All Proxies",
      theme: "primary",
      value: `${proxiesCount?.total ?? 0} Proxies`,
    },
  ];

  const formattedProxiesActive = proxiesActive.map((proxy, index) => ({
    sequence: `${index + 1}`,
    id: proxy.id,
    re_new: proxy.re_new,
    is_active: proxy.is_active,
    package_name: proxy.package_name,
    protocol: proxy.protocol,
    service_provider: proxy.service_provider,
    protocol_port: proxy.protocol_port,
    expire_at: format(proxy.expire_at, "MMM dd, yyyy"),
    username: proxy.username,
    password: proxy.password,
    plan_name: proxy.plan_name,

    // Additional for state
    proxy_id: proxy.proxy_id,
    parent_proxy_id: proxy.parent_proxy_id,
    package_id: proxy.package_id,
    duration: proxy.duration,
    rotation_time: proxy.rotation_time,
    country_name: proxy.country_name,
    amount: proxy.amount,
  }));
  const formattedProxiesInactive = proxiesInactive.map((proxy, index) => ({
    sequence: `${index + 1}`,
    id: proxy.id,
    re_new: proxy.re_new,
    is_active: proxy.is_active,
    package_name: proxy.package_name,
    protocol: proxy.protocol,
    service_provider: proxy.service_provider,
    protocol_port: proxy.protocol_port,
    expire_at: format(proxy.expire_at, "MMM dd, yyyy"),
    username: proxy.username,
    password: proxy.password,
    plan_name: proxy.plan_name,

    // Additional for state
    proxy_id: proxy.proxy_id,
    parent_proxy_id: proxy.parent_proxy_id,
    package_id: proxy.package_id,
    duration: proxy.duration,
    rotation_time: proxy.rotation_time,
    country_name: proxy.country_name,
    amount: proxy.amount,
  }));

  if (isLoading || isError) {
    return <PageSkelton />;
  }

  return (
    <>
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistic.map((item, index) => (
          <ProxiesCard item={item} key={index} />
        ))}
      </div>
      <DataTable
        columns={activeColumns}
        data={formattedProxiesActive}
        title="My Active Proxies"
      />
      <DataTable
        columns={inactiveColumns}
        data={formattedProxiesInactive}
        title="My Inactive Proxies"
      />
    </>
  );
};

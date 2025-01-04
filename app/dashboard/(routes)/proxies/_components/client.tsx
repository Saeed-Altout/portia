"use client";

import { Zap } from "lucide-react";

import { useData } from "./use-data";
import { DataTable } from "@/components/shared/data-table";

import { ProxiesCard } from "./proxies-card";
import { activeColumns, inactiveColumns } from "./columns";

import { Heading } from "@/components/dashboard";

import { useAuthStore, useModalStore } from "@/stores";
import { PageSkelton } from "@/components/skeletons/page-skeleton";
import { RenewSheet } from "./renew-sheet";
import { ModalType } from "@/config/enums";

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

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.RENEW_PROXY;

  const formattedProxiesActive = proxiesActive.map((proxy, index) => ({
    sequence: `${index + 1}`,
    id: proxy.id,
    re_new: proxy.re_new,
    is_active: proxy.is_active,
    package_name: proxy.package_name,
    protocol: proxy.protocol,
    service_provider: proxy.service_provider,
    protocol_port: proxy.protocol_port,
    expire_at: proxy.expire_at,
    username: proxy.username,
    password: proxy.password,
    plan_name: proxy.plan_name,
    proxy_id: proxy.proxy_id,
    parent_proxy_id: proxy.parent_proxy_id,
    package_id: proxy.package_id,
    duration: proxy.duration,
    amount: proxy.amount,
    rotation_time: proxy.rotation_time,
    country_name: proxy.country_name,
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
    expire_at: proxy.expire_at,
    username: proxy.username,
    password: proxy.password,
    plan_name: proxy.plan_name,
    proxy_id: proxy.proxy_id,
    parent_proxy_id: proxy.parent_proxy_id,
    package_id: proxy.package_id,
    duration: proxy.duration,
    amount: proxy.amount,
    rotation_time: proxy.rotation_time,
    country_name: proxy.country_name,
  }));

  if (isLoading || isError) {
    return <PageSkelton />;
  }

  return (
    <>
      <RenewSheet
        isOpen={isOpenModal}
        onClose={() => onClose(ModalType.RENEW_PROXY)}
      />
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistic.map((item, index) => (
          <ProxiesCard item={item} key={index} />
        ))}
      </div>
      <DataTable
        columns={activeColumns}
        data={formattedProxiesActive ?? []}
        title="My Active Proxies"
        isLoading={isLoading}
      />
      <DataTable
        columns={inactiveColumns}
        data={formattedProxiesInactive ?? []}
        title="My Inactive Proxies"
        isLoading={isLoading}
      />
    </>
  );
};

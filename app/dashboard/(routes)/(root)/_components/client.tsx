"use client";

import { Zap } from "lucide-react";

import { columns } from "./columns";
import { useData } from "./use-data";

import { Heading } from "@/components/dashboard";
import { DataTable } from "@/components/shared/data-table";
import { RootCard } from "@/components/dashboard/cards/root-card";
import { PageSkelton } from "@/components/skeletons/page-skeleton";

import { useAuthStore } from "@/stores";
import { ManageSheet } from "./manage-sheet";

export const RootClient = () => {
  const { user } = useAuthStore();
  const { balance, proxiesCount, proxiesActive, isLoading, isError } =
    useData();

  const statistics = [
    {
      icon: Zap,
      title: "Paid Proxies",
      theme: "primary",
      value: `${proxiesCount?.total ?? 0} Proxies`,
      href: "/dashboard/proxies",
      label: "View All Proxies",
    },
    {
      icon: Zap,
      title: "Your Balance",
      theme: "success",
      value: `${balance?.user_balance ?? 0}$`,
      href: "/dashboard/deposits",
      label: "View All Deposits",
    },
  ];

  const formattedProxies = proxiesActive?.map((proxy, index) => ({
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
    ip_addr: proxy.ip_addr,
  }));

  if (isLoading || isError) {
    return <PageSkelton />;
  }

  return (
    <>
      <ManageSheet />
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {statistics.map((item, index) => (
          <RootCard key={index} item={item} />
        ))}
      </div>
      <DataTable
        columns={columns}
        data={formattedProxies ?? []}
        title="My Active Proxies"
        isLoading={isLoading}
      />
    </>
  );
};

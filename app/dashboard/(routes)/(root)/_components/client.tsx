"use client";

import { Zap } from "lucide-react";
import { format } from "date-fns";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { RootCard } from "./root-card";

import { Heading } from "@/components/dashboard";
import { PageSkelton } from "@/components/skeletons/page-skeleton";

import { useAuthStore } from "@/stores";
import {
  useGetProxiesCountQuery,
  useGetProxiesQuery,
} from "@/services/proxies/hooks";
import { useGetUserBalanceQuery } from "@/services/user/hooks";

export const RootClient = () => {
  const { user } = useAuthStore();

  const balance = useGetUserBalanceQuery();
  const proxiesCount = useGetProxiesCountQuery();
  const proxiesActive = useGetProxiesQuery({ state: "active" });

  const isLoading =
    proxiesActive.isLoading || proxiesCount.isLoading || balance.isLoading;
  const isError =
    proxiesActive.isError || proxiesCount.isError || balance.isError;

  const formattedStatistic = [
    {
      icon: Zap,
      title: "Paid Proxies",
      theme: "primary",
      value: `${proxiesCount?.data?.data.total ?? 0} Proxies`,
      href: "/dashboard/proxies",
      label: "View All Proxies",
    },
    {
      icon: Zap,
      title: "Your Balance",
      theme: "success",
      value: `${balance?.data?.data.user_balance ?? 0}$`,
      href: "/dashboard/deposits",
      label: "View All Deposits",
    },
  ];

  const formattedProxiesActive = proxiesActive.data?.data.map(
    (proxy, index) => ({
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
    })
  );

  if (isLoading || isError) {
    return <PageSkelton />;
  }

  return (
    <>
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistic.map((item, index) => (
          <RootCard item={item} key={index} />
        ))}
      </div>
      <DataTable
        columns={columns}
        data={formattedProxiesActive ?? []}
        title="My Active Proxies"
      />
    </>
  );
};

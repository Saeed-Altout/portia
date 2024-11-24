"use client";

import { Zap } from "lucide-react";

import { Heading } from "@/components/dashboard";

import { Card } from "./card";
import { ActiveProxiesTable } from "./active-proxies-table";
import { InactiveProxiesTable } from "./inactive-proxies-table";

import { useAuthStore } from "@/stores/auth-store";
import { useProxyStore } from "@/stores/new/proxy-store";
export const ProxiesClient = () => {
  const { user } = useAuthStore();
  const { activeProxiesCount, inactiveProxiesCount, totalProxiesCount } =
    useProxyStore();

  const formattedStatistic = [
    {
      icon: Zap,
      label: "My Active Proxies",
      theme: "success",
      value: `${activeProxiesCount} Proxies`,
    },
    {
      icon: Zap,
      label: "My Expired Proxies",
      theme: "danger",
      value: `${inactiveProxiesCount} Proxies`,
    },
    {
      icon: Zap,
      label: "All Proxies",
      theme: "primary",
      value: `${totalProxiesCount} Proxies`,
    },
  ];

  return (
    <>
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistic.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            label={item.label}
            theme={item.theme}
            value={item.value}
          />
        ))}
      </div>
      <ActiveProxiesTable />
      <InactiveProxiesTable />
    </>
  );
};

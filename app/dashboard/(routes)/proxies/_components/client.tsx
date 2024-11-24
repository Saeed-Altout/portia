"use client";

import { Zap } from "lucide-react";

import { Heading } from "@/components/dashboard";
import { Circle, Icon } from "@/components/ui/circle-icon";

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
          <div key={index} className="border rounded-[8px] p-6 space-y-6">
            <div className="flex items-center gap-x-2">
              <Circle fill={item.theme as any}>
                <Icon icon={item.icon} theme={item.theme as any} />
              </Circle>
              <p className="font-medium">{item.label}</p>
            </div>
            <h4 className="text-4xl font-semibold">{item.value}</h4>
          </div>
        ))}
      </div>
      <ActiveProxiesTable />
      <InactiveProxiesTable />
    </>
  );
};

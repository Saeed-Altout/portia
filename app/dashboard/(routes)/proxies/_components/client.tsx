"use client";

import { Zap } from "lucide-react";

import { Heading } from "@/components/dashboard";
import { Circle, Icon } from "@/components/ui/circle-icon";

import { ActiveProxiesTable } from "./active-proxies-table";
import { InactiveProxiesTable } from "./inactive-proxies-table";

import { useAuthStore } from "@/stores";
import { useGetProxiesCounts } from "@/hooks";

export const ProxiesClient = () => {
  const { user } = useAuthStore();
  const { data: proxiesCount } = useGetProxiesCounts();

  const formattedStatistic = [
    {
      icon: Zap,
      title: "My Active Proxies",
      theme: "success",
      value: `${proxiesCount?.data.active ?? 0} Proxies`,
    },
    {
      icon: Zap,
      title: "My Expired Proxies",
      theme: "danger",
      value: `${proxiesCount?.data.inactive ?? 0} Proxies`,
    },
    {
      icon: Zap,
      title: "All Proxies",
      theme: "primary",
      value: `${proxiesCount?.data.total ?? 0} Proxies`,
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
              <p className="font-medium">{item.title}</p>
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

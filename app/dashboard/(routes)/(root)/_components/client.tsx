"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/dashboard";
import { Separator } from "@/components/ui/separator";
import { Circle, Icon } from "@/components/ui/circle-icon";

import { ActiveProxiesTable } from "./active-proxies-table";

import { useAuthStore } from "@/stores";
import { useGetProxiesCounts, useGetUserBalance } from "@/hooks";
export const RootClient = () => {
  const { user } = useAuthStore();
  const { data: proxiesCount } = useGetProxiesCounts();
  const { data: balance } = useGetUserBalance();

  const formattedStatistic = [
    {
      icon: Zap,
      title: "Paid Proxies",
      theme: "primary",
      value: `${proxiesCount?.data.total ?? 0} Proxies`,
      href: "/dashboard/proxies",
      label: "View All Proxies",
    },
    {
      icon: Zap,
      title: "Your Balance",
      theme: "success",
      value: `${balance?.data.user_balance ?? 0}$`,
      href: "/dashboard/deposit",
      label: "View All Deposit",
    },
  ];

  return (
    <>
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistic.map((item, index) => (
          <div key={index} className="border rounded-lg">
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-start gap-x-2">
                <Circle fill={item.theme as any}>
                  <Icon icon={item.icon} theme={item.theme as any} />
                </Circle>
                <p className="font-medium">{item.title}</p>
              </div>
              <h4 className="text-4xl font-semibold">{item.value}</h4>
            </div>
            <Separator />
            <div className="flex items-center justify-end py-2 px-6">
              <Button variant="ghost" asChild>
                <Link href={item.href} className="text-primary capitalize">
                  {item.label}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ActiveProxiesTable />
    </>
  );
};

import * as React from "react";
import { ChartArea, Zap } from "lucide-react";

import { StatisticCard } from "@/app/dashboard/_components/cards/statistic-card";

export const StatisticSection = () => {
  const data = [
    {
      title: "Paid Proxies",
      content: "12 Proxies",
      label: "View all proxies",
      href: "/my-proxies",
      fill: "default",
      theme: "default",
      icon: Zap,
    },
    {
      title: "User Balance",
      content: "100$",
      label: "View all deposit",
      href: "/deposit",
      fill: "success",
      theme: "success",
      icon: ChartArea,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <StatisticCard key={index} initialData={item} />
      ))}
    </div>
  );
};

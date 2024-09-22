import * as React from "react";
import { ChartArea, Zap } from "lucide-react";

import { StatisticProxiesCard } from "@/app/dashboard/_components/cards/proxies-proxies-card";

export const StatisticSection = () => {
  const data = [
    {
      title: "My Active Proxies",
      content: "12 Proxies",
      fill: "success",
      theme: "success",
      icon: Zap,
    },
    {
      title: "My Expired Proxies",
      content: "15 Proxies",
      fill: "alert",
      theme: "alert",
      icon: Zap,
    },
    {
      title: "All Proxies",
      content: "27 Proxies",
      fill: "secondary",
      theme: "secondary",
      icon: Zap,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <StatisticProxiesCard key={index} initialData={item} />
      ))}
    </div>
  );
};

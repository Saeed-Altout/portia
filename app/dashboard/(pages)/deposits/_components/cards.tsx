"use client";

import { DepositCard } from "@/components/dashboard";
// import { useGetProxiesCounts } from "@/hooks/dashboard/use-get-proxies-counts";
import { Zap } from "lucide-react";

export const Cards = () => {
  // const { data } = useGetProxiesCounts();

  const dataFormatted = [
    {
      icon: Zap,
      theme: "success",
      title: "My Active Proxies",
      label: "0",
      // label: `${data?.data.active ?? 0.0} Proxies`,
    },
    {
      icon: Zap,
      theme: "danger",
      title: "My Expired Proxies",
      label: "0",
      // label: `${data?.data.inactive ?? 0.0} Proxies`,
    },
    {
      icon: Zap,
      theme: "primary",
      title: "All Proxies",
      label: "0",
      // label: `${data?.data.total ?? 0.0} Proxies`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dataFormatted.map((item, index) => (
        <DepositCard key={index} {...item} />
      ))}
    </div>
  );
};

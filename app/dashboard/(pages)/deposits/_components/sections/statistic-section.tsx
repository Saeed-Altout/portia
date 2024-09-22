import * as React from "react";

import { StatisticChartCard } from "@dashboard/_components/cards/statistic-chart-card";

export const StatisticSection = () => {
  const data = [
    {
      title: "This Month",
      price: "15.00$",
      color: "#26a6a4",
      data: [
        { id: 1, amount: 20 },
        { id: 2, amount: 30 },
        { id: 3, amount: 70 },
        { id: 4, amount: 45 },
        { id: 5, amount: 50 },
      ],
    },
    {
      title: "This Year",
      price: "125.00$",
      color: "#f63d68",
      data: [
        { id: 1, amount: 150 },
        { id: 2, amount: 320 },
        { id: 3, amount: 710 },
        { id: 4, amount: 415 },
        { id: 5, amount: 820 },
      ],
    },
    {
      title: "All Time",
      price: "500.00$",
      color: "#7a5af8",
      data: [
        { id: 1, amount: 2000 },
        { id: 2, amount: 3012 },
        { id: 3, amount: 7460 },
        { id: 4, amount: 4512 },
        { id: 5, amount: 8046 },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <StatisticChartCard key={index} initialData={item} />
      ))}
    </div>
  );
};

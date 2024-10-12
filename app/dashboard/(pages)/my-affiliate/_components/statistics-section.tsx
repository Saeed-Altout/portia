"use client";

import { useGetAffiliateEarningsStatisticsQuery } from "@/app/dashboard/hooks/affiliate-system/get-affiliate-earnings-statistics-query";
import { StatisticCard, StatisticSkeltonCard } from "./statistics-card";

export const StatisticsSection = () => {
  const { data, isLoading, isError, isSuccess } =
    useGetAffiliateEarningsStatisticsQuery();

  if (isLoading || isError || !isSuccess) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatisticSkeltonCard />
        <StatisticSkeltonCard />
        <StatisticSkeltonCard />
      </div>
    );
  }

  const { this_month_earnings, this_year_earnings, total_earnings } =
    data.data || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <StatisticCard
        color="#26a6a4"
        amount={this_month_earnings}
        label="This Month"
      />
      <StatisticCard
        color="#f63d68"
        amount={this_year_earnings}
        label="This Year"
      />
      <StatisticCard color="#7a5af8" amount={total_earnings} label="All Time" />
    </div>
  );
};

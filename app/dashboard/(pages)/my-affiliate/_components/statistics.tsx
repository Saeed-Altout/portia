"use client";

import { StatisticsCard, StatisticsSkeltonCard } from "./statistics-card";
import { useGetAffiliateEarningsStatisticsQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-statistics-query";

export const Statistics = () => {
  const {
    data: statistics,
    isSuccess,
    isError,
    isLoading,
  } = useGetAffiliateEarningsStatisticsQuery();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {(isError || isLoading) && [
        [...Array(3)].map((_, index) => <StatisticsSkeltonCard key={index} />),
      ]}
      {isSuccess && (
        <>
          <StatisticsCard
            color="#26a6a4"
            amount={statistics.data.this_month_earnings || 0.0}
            label="This Month"
          />
          <StatisticsCard
            color="#f63d68"
            amount={statistics.data.this_year_earnings || 0.0}
            label="This Year"
          />
          <StatisticsCard
            color="#7a5af8"
            amount={statistics.data.total_earnings || 0.0}
            label="All Time"
          />
        </>
      )}
    </div>
  );
};

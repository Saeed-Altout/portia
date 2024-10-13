"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { columns } from "./_components/columns";

import { Heading } from "@dashboard/_components/heading";
import { Pagination } from "@dashboard/_components/pagination";
import { AffiliateCode } from "@dashboard/_components/affiliate-code";
import { StatisticCard } from "@dashboard/_components/cards/statistics-card";

import { Loader } from "@/components/ui/loader";
import { DataTable } from "@/components/ui/data-table";

import { useStoreContext } from "@dashboard/contexts/store-context";
import { useGetAffiliateEarningsHistoryQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-history-query";
import { useGetAffiliateEarningsStatisticsQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-statistics-query";

import localStorage from "@/services/local-storage";

export default function MyAffiliatePage() {
  const { user } = useStoreContext();
  const [email, setEmail] = useState<string>("un known");
  const [page, setPage] = useState<number>(1);

  const statistics = useGetAffiliateEarningsStatisticsQuery();
  const histories = useGetAffiliateEarningsHistoryQuery(page);

  const isLoading = statistics.isLoading || histories.isLoading;
  const isSuccess = statistics.isSuccess && histories.isSuccess;

  useEffect(() => {
    const email = localStorage.getEmail();
    if (email) {
      setEmail(email);
    }
  }, []);

  if (isLoading || !isSuccess) {
    return <Loader />;
  }

  const historiesFormatted = histories.data.data.data.map((item) => ({
    id: item.id,
    amount: item.amount,
    email: email,
    date: format(new Date(item.created_at), "MMM dd, yyyy"),
  }));

  return (
    <>
      <Heading
        title={`Welcome back ${user.first_name}`}
        description="Total Earning is: 0,00$"
        drawEarning
      />
      <AffiliateCode code={user.referred_code} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatisticCard
          color="#26a6a4"
          amount={statistics.data.data.this_month_earnings}
          label="This Month"
        />
        <StatisticCard
          color="#f63d68"
          amount={statistics.data.data.this_year_earnings}
          label="This Year"
        />
        <StatisticCard
          color="#7a5af8"
          amount={statistics.data.data.total_earnings}
          label="All Time"
        />
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">Your earning calendar</h3>
          <p className="text-sm">Track your earnings by days</p>
        </div>
        <DataTable columns={columns} data={historiesFormatted} />
        <Pagination
          prevButton={page === 1}
          nextButton={page === histories.data.data.last_page}
          setPage={setPage}
          currentPage={page}
          totalPages={histories.data.data.total / histories.data.data.per_page}
        />
      </div>
    </>
  );
}

"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { columns } from "./_components/columns";
import { StatisticCard } from "./_components/statistics-card";

import { Heading } from "@/components/dashboard/ui/heading";
import { Pagination } from "@/components/dashboard/ui/pagination";
import { AffiliateCode } from "@/components/dashboard/ui/affiliate-code";

import { Loader } from "@/components/ui/loader";
import { DataTable } from "@/components/ui/data-table";

import {
  useGetAffiliateEarningsHistoriesQuery,
  useGetAffiliateEarningsStatisticsQuery,
} from "@/app/dashboard/features/hooks";
import { useSession } from "@/providers/session-provider";
import cookieStorage from "@/services/cookie-storage";

export default function MyAffiliatePage() {
  const { user } = useSession();
  const [email, setEmail] = useState<string>("un known");
  const [page, setPage] = useState<number>(1);

  const statistics = useGetAffiliateEarningsStatisticsQuery();
  const histories = useGetAffiliateEarningsHistoriesQuery(page);

  const isSuccess = statistics.isSuccess && histories.isSuccess;

  useEffect(() => {
    const email = cookieStorage.getEmail();
    if (email) {
      setEmail(email);
    }
  }, []);

  if (!isSuccess) {
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

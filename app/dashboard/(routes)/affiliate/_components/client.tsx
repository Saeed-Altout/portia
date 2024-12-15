"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { columns } from "./columns";

import { DataTable } from "@/components/ui/data-table";
import { Heading, AffiliateCode, StatisticCard } from "@/components/dashboard";

import { useAuthStore } from "@/stores";
import { getEmail } from "@/utils/cookie";
import { useGetAffiliateHistories, useGetAffiliateStatistics } from "@/hooks";

export const AffiliateClient = () => {
  const [email, setEmail] = useState<string>("un known");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [data, setDate] = useState<IAffiliateHistory[]>([]);

  const { user } = useAuthStore();
  const { data: statistics } = useGetAffiliateStatistics();
  const { data: history, isSuccess: historyIsSuccess } =
    useGetAffiliateHistories({
      page: currentPage,
    });

  useEffect(() => {
    if (historyIsSuccess) {
      const histories = history.data;
      if (histories) {
        const total = histories.total;
        const per_page = histories.per_page;
        const totalPages = Math.ceil(total / per_page);

        const historiesFormatted: IAffiliateHistory[] = histories.data.map(
          (item) => ({
            id: item.id,
            amount: item.amount.toString(),
            email: email,
            date: format(new Date(item.created_at), "MMM dd, yyyy"),
          })
        );

        setDate(historiesFormatted);
        setTotalPages(totalPages);
      }
    }
  }, [email, history, historyIsSuccess]);

  useEffect(() => {
    const email = getEmail();
    if (email) {
      setEmail(email);
    }
  }, []);

  return (
    <>
      <Heading
        title={`Welcome back ${user.first_name}`}
        description="Total Earning is: 0,00$"
      />
      <AffiliateCode code={user.referred_code} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatisticCard
          color="#26a6a4"
          amount={statistics?.data.this_month_earnings ?? 0}
          label="This Month"
        />
        <StatisticCard
          color="#f63d68"
          amount={statistics?.data.this_year_earnings ?? 0}
          label="This Year"
        />
        <StatisticCard
          color="#7a5af8"
          amount={statistics?.data.total_earnings ?? 0}
          label="All Time"
        />
      </div>
      <DataTable
        columns={columns}
        data={data}
        title="Your earning calendar"
        description="Track your earnings by days"
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

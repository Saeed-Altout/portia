"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

import { columns, IHistory } from "./columns";

import { Heading } from "@/_components/dashboard/heading";
import { DepositsCard } from "@/_components/dashboard/deposits-card";
import { DataTable } from "@/components/ui/data-table";

import { useGetDepositsHistory } from "@/hooks/dashboard/use-get-deposits-history";
import { useGetDepositsStatistics } from "@/hooks/dashboard/use-get-deposits-statistics";

import { useAuthStore } from "@/stores";
export const DepositsClient = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [data, setDate] = useState<IHistory[]>([]);

  const { user } = useAuthStore();
  const { data: statistics } = useGetDepositsStatistics();
  const { data: history, isSuccess: historyIsSuccess } = useGetDepositsHistory({
    page: currentPage,
  });

  useEffect(() => {
    if (historyIsSuccess) {
      const histories = history.data;
      if (histories) {
        const total = histories.total;
        const per_page = histories.per_page;
        const totalPages = Math.ceil(total / per_page);

        const historiesFormatted = histories.data.map((item) => ({
          id: item.id,
          amount: item.amount,
          payment_method: item.payment_method,
          date: format(new Date(item.created_at), "MMM dd, yyyy"),
        }));

        setDate(historiesFormatted);
        setTotalPages(totalPages);
      }
    }
  }, [history, historyIsSuccess]);

  return (
    <>
      <Heading title={`Welcome back, ${user.first_name}`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DepositsCard
          color="#26a6a4"
          amount={statistics?.data.monthly_deposits ?? 0}
          label="This Month"
        />
        <DepositsCard
          color="#f63d68"
          amount={statistics?.data.yearly_deposits ?? 0}
          label="This Year"
        />
        <DepositsCard
          color="#7a5af8"
          amount={statistics?.data.all_time_deposits ?? 0}
          label="All Time"
        />
      </div>
      <DataTable
        columns={columns}
        data={data ?? []}
        title="My Deposits"
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { columns } from "./columns";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/dashboard/ui/heading";
import { DepositsCard } from "@/components/dashboard/cards/deposits-card";

import { useAuthStore } from "@/stores";
import { useGetDepositsHistories, useGetDepositsStatistics } from "@/hooks";
import { PageSkelton } from "@/components/skeletons/page-skeleton";
export const DepositsClient = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [data, setDate] = useState<IHistory[]>([]);

  const { user } = useAuthStore();

  const {
    data: statistics,
    isLoading: statisticsIsLoading,
    isError: statisticsIsError,
  } = useGetDepositsStatistics();
  const { data: history, isSuccess: historyIsSuccess } =
    useGetDepositsHistories({
      page: currentPage,
    });

  const isLoading = statisticsIsLoading;
  const isError = statisticsIsError;

  useEffect(() => {
    if (historyIsSuccess) {
      const histories = history.data;
      if (histories) {
        const total = histories.total;
        const per_page = histories.per_page;
        const totalPages = Math.ceil(total / per_page);

        const historiesFormatted: IHistory[] = histories.data.map((item) => ({
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

  if (isLoading || isError) {
    return <PageSkelton />;
  }

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

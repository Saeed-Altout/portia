"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { columns } from "./columns";
import { Pagination } from "./pagination";

import {
  DataTable,
  DataTableSkeleton,
} from "@/components/dashboard/data-table";

import localStorage from "@/services/local-storage";
import { useGetAffiliateEarningsHistoryQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-history-query";

export const Table = () => {
  const [email, setEmail] = useState<string>("un known");
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, isSuccess } =
    useGetAffiliateEarningsHistoryQuery(page);

  useEffect(() => {
    const email = localStorage.getEmail();
    if (email) {
      setEmail(email);
    }
  }, []);

  if (isLoading || isError || !isSuccess) {
    return <DataTableSkeleton columns={3} rows={10} />;
  }

  const { data: histories, total, per_page, last_page } = data.data;
  const historyFormatted = isSuccess
    ? histories.map((item) => ({
        id: item.id,
        amount: item.amount,
        email: email,
        date: format(new Date(item.created_at), "MMM dd, yyyy"),
      }))
    : [];

  return (
    <div className="border rounded-md">
      <div className="w-full flex flex-col rounded-t-md py-6 px-4">
        <h3 className="font-medium text-lg">Your earning calendar</h3>
        <p className="text-sm">Track your earnings by days</p>
      </div>
      <DataTable columns={columns} data={historyFormatted} />
      <Pagination
        prevButton={page === 1}
        nextButton={page === last_page}
        setPage={setPage}
        currentPage={page}
        totalPages={total / per_page}
      />
    </div>
  );
};

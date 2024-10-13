"use client";

import { useState } from "react";

import { columns } from "./columns";

import { DataTable, DataTableSkeleton } from "@/components/ui/data-table";

import { Pagination } from "@/app/dashboard/_components/pagination";
import { useGetAffiliateEarningsHistoryQuery } from "@/app/dashboard/hooks/affiliate-system/get-affiliate-earnings-history-query";

export const Table = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, isSuccess } =
    useGetAffiliateEarningsHistoryQuery(page);

  if (isLoading || isError || !isSuccess) {
    return <DataTableSkeleton columns={3} rows={10} />;
  }

  const { data: histories, total, per_page, last_page } = data.data;

  return (
    <div className="border rounded-md">
      <div className="w-full flex flex-col rounded-t-md py-6 px-4">
        <h3 className="font-medium text-lg">All my deposit</h3>
        <p className="text-sm"></p>
      </div>
      <DataTable columns={columns} data={[]} />
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

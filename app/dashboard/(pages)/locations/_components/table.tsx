"use client";

import { useState } from "react";

import { columns } from "./columns";
import { DataTable, DataTableSkeleton } from "@/components/ui/data-table";
import { Pagination } from "@/app/dashboard/_components/pagination";
import { useGetProxiesQuery } from "@website/hooks";

export const Table = ({ filters }: { filters: FiltersProps }) => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError, isSuccess } = useGetProxiesQuery({
    ...filters,
    offset: page,
  });

  if (isLoading || isError) {
    return <DataTableSkeleton columns={5} rows={10} />;
  }

  const { has_more, count, list } = isSuccess
    ? data.data
    : { has_more: false, count: 0, list: [] };

  return (
    <div className="border rounded-md">
      <div className="w-full flex flex-col rounded-t-md py-6 px-4">
        <h3 className="font-medium text-lg">All my deposit</h3>
        <p className="text-sm"></p>
      </div>
      <DataTable columns={columns} data={list} />
      <Pagination
        prevButton={page === 1}
        nextButton={!has_more}
        setPage={setPage}
        currentPage={page}
        totalPages={Math.floor(count / 10)}
      />
    </div>
  );
};

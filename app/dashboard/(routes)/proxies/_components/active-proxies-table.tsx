"use client";

import { useEffect, useState } from "react";

import { activeColumns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { useGetActiveProxies } from "@/hooks";

export const ActiveProxiesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { data, isSuccess } = useGetActiveProxies({ page: currentPage });

  useEffect(() => {
    if (isSuccess) {
      const total = data.data.total;
      const per_page = data.data.per_page;
      const totalPages = Math.ceil(total / per_page);
      setTotalPages(totalPages);
    }
  }, [data]);

  return (
    <DataTable
      columns={activeColumns}
      data={data?.data.data ?? []}
      title="My Active Proxies"
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

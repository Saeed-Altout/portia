"use client";

import { useEffect, useState } from "react";
import { activeColumns } from "./columns";
import { useGetActiveProxies } from "@/hooks/dashboard/use-get-active-proxies";
import { DataTable } from "@/components/ui/data-table";

export const ActiveProxiesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { data, refetch } = useGetActiveProxies({ page: currentPage });

  useEffect(() => {
    if (data?.data) {
      setTotalPages(data.data.last_page);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

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

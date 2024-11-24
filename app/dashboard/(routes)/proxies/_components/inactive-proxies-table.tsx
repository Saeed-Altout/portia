"use client";

import { useEffect, useState } from "react";

import { inactiveColumns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { useGetInactiveProxies } from "@/hooks";

export const InactiveProxiesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { data, refetch } = useGetInactiveProxies({ page: currentPage });

  useEffect(() => {
    if (data?.data) {
      setTotalPages(data.data.total);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <DataTable
      columns={inactiveColumns}
      data={data?.data.data ?? []}
      title="My Expired Proxies"
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

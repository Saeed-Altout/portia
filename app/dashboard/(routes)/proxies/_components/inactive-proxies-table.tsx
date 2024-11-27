"use client";

import { useEffect, useState } from "react";

import { inactiveColumns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { useGetInactiveProxies } from "@/hooks";

export const InactiveProxiesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { data, isSuccess } = useGetInactiveProxies({ page: currentPage });

  useEffect(() => {
    if (isSuccess) {
      const total = data.data.total;
      const per_page = data.data.per_page;
      const totalPages = Math.ceil(total / per_page);
      setTotalPages(totalPages);
    }
  }, [data, isSuccess]);

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

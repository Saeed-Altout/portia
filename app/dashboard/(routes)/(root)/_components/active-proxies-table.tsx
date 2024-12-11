"use client";

import { useEffect, useState } from "react";

import { activeColumns, Proxy } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { format } from "date-fns";
import { useGetActiveProxies } from "@/hooks";
export const ActiveProxiesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const { data, isSuccess } = useGetActiveProxies({ page: currentPage });

  const formattedActiveProxies: Proxy[] = isSuccess
    ? data?.data.data.map((proxy, index) => ({
        sequence: `${index + 1}`,
        id: proxy.id,
        re_new: proxy.re_new,
        is_active: proxy.is_active,
        package_name: proxy.package_name,
        protocol: proxy.protocol,
        service_provider: proxy.service_provider,
        protocol_port: proxy.protocol_port,
        expire_at: format(proxy.expire_at, "MMM dd, yyyy"),
        username: proxy.username,
        password: proxy.password,

        // Additional for state
        proxy_id: proxy.proxy_id,
        parent_proxy_id: proxy.parent_proxy_id,
        package_id: proxy.package_id,
      }))
    : [];

  useEffect(() => {
    if (data?.data) {
      const total = data.data.total;
      const per_page = data.data.per_page;
      const totalPages = Math.ceil(total / per_page);
      setTotalPages(totalPages);
    }
  }, [data]);

  return (
    <DataTable
      columns={activeColumns}
      data={formattedActiveProxies}
      title="My Active Proxies"
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

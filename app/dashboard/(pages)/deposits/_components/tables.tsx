"use client";
import { useState } from "react";

import { Table } from "./table";
import { activeColumns } from "./active-columns";
import { inactiveColumns } from "./inactive-columns";

import { useGetActiveProxies } from "@/hooks/dashboard/use-get-active-proxies";
import { useGetInactiveProxies } from "@/hooks/dashboard/use-get-inactive-proxies";

export const Tables = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [inactivePage, setInactivePage] = useState<number>(1);

  const { data: activeProxies } = useGetActiveProxies({ page: activePage });
  const { data: inactiveProxies } = useGetInactiveProxies({
    page: inactivePage,
  });

  return (
    <>
      <Table
        title="My Active Proxies"
        columns={activeColumns}
        data={activeProxies ?? []}
        currentPage={activePage}
        totalPages={activeProxies?.data.total ?? 1}
        setPage={setActivePage}
        prevButton={!!activeProxies?.data.prev_page_url}
        nextButton={!!activeProxies?.data.next_page_url}
      />
      <Table
        title="My Expired Proxies"
        columns={inactiveColumns}
        data={inactiveProxies ?? []}
        currentPage={inactivePage}
        totalPages={inactiveProxies?.data.total ?? 1}
        setPage={setInactivePage}
        prevButton={!!inactiveProxies?.data.prev_page_url}
        nextButton={!!inactiveProxies?.data.next_page_url}
      />
    </>
  );
};

"use client";
import { useEffect, useState } from "react";

import { inactiveColumns } from "./inactive-columns";

import { useGetActiveProxies } from "@/hooks/dashboard/use-get-active-proxies";
import { useGetInactiveProxies } from "@/hooks/dashboard/use-get-inactive-proxies";
import { Table } from "@/components/table";
import { activeColumns } from "./active-columns";

export const Tables = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [inactivePage, setInactivePage] = useState<number>(1);

  const { data: activeProxies, refetch: refetchActiveProxies } =
    useGetActiveProxies({ page: activePage });
  const { data: inactiveProxies } = useGetInactiveProxies({
    page: inactivePage,
  });

  useEffect(() => {
    if (activePage) {
      refetchActiveProxies();
    }
  }, [activePage, refetchActiveProxies]);

  return (
    <>
      <Table
        title="My Active Proxies"
        columns={activeColumns}
        data={activeProxies?.data.data ?? []}
        currentPage={activePage}
        totalPages={Math.ceil(
          (activeProxies?.data.total ?? 1) / (activeProxies?.data.per_page ?? 1)
        )}
        setPage={setActivePage}
        prevButton={!activeProxies?.data.prev_page_url}
        nextButton={!activeProxies?.data.next_page_url}
      />
      <Table
        title="My Expired Proxies"
        columns={inactiveColumns}
        data={inactiveProxies?.data.data ?? []}
        currentPage={inactivePage}
        totalPages={Math.ceil(
          (inactiveProxies?.data.total ?? 1) /
            (inactiveProxies?.data.per_page ?? 1)
        )}
        setPage={setInactivePage}
        prevButton={!inactiveProxies?.data.prev_page_url}
        nextButton={!inactiveProxies?.data.next_page_url}
      />
    </>
  );
};

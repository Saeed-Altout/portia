"use client";

import { useEffect, useState } from "react";

import { columns } from "./_components/columns";

import { overviewData } from "@/constants";

import { Table } from "@/components/table";
import { Heading, OverviewCard } from "@/components/dashboard";

import { useAuthStore } from "@/stores/auth-store";
import { useGetActiveProxies } from "@/hooks/dashboard/use-get-active-proxies";

export default function OverviewPage() {
  const [activePage, setActivePage] = useState<number>(1);
  const { user } = useAuthStore();
  const { data: activeProxies, refetch } = useGetActiveProxies({
    page: activePage,
  });

  useEffect(() => {
    if (activePage) {
      refetch();
    }
  }, [activePage, refetch]);

  return (
    <>
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {overviewData.map((item, index) => (
          <OverviewCard key={index} initialData={item} />
        ))}
      </div>
      <Table
        title="My Active Proxies"
        columns={columns}
        data={activeProxies?.data.data ?? []}
        currentPage={activePage}
        totalPages={Math.ceil(
          (activeProxies?.data.total ?? 1) / (activeProxies?.data.per_page ?? 1)
        )}
        setPage={setActivePage}
        prevButton={!activeProxies?.data.prev_page_url}
        nextButton={!activeProxies?.data.next_page_url}
      />
    </>
  );
}

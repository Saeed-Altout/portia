"use client";

import { ActiveTable } from "./_components/active-table";
import { ExpiredTable } from "./_components/expired-table";
import { activeColumns, expiredColumns } from "./_components/columns";
import { ProxiesCardsSection } from "./_components/proxies-cards-sections";

import { Heading } from "@/app/dashboard/_components/heading";
import { useGetUserProfileQuery } from "@/app/dashboard/hooks";

export default function MyProxiesPage() {
  const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery();

  return (
    <>
      <Heading
        title={`Welcome back, ${data?.data.first_name}`}
        newProxy
        addFunds
        isLoading={isLoading || isError || !isSuccess}
      />
      <ProxiesCardsSection />
      <ActiveTable title="My Active Proxies" columns={activeColumns} />
      <ExpiredTable title="My Expired Proxies" columns={expiredColumns} />
    </>
  );
}

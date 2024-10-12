"use client";

import { activeColumns, expiredColumns } from "./_components/columns";

import { ExpiredTable } from "./_components/expired-table";
import { ActiveTable } from "./_components/active-table";
import { ProxiesCard } from "./_components/proxies-card";

import { Heading } from "@/app/dashboard/_components/heading";
import { Loader } from "@/components/dashboard/loader";

import { useSessionContext } from "@/providers/session-provider";

export default function MyProxiesPage() {
  const { session, isLoading } = useSessionContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        title={`Welcome back, ${session?.first_name}`}
        newProxy
        addFunds
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[].map((item, index) => (
          <ProxiesCard key={index} initialData={item} />
        ))}
      </div>
      <ActiveTable title="My Active Proxies" columns={activeColumns} />
      <ExpiredTable title="My Expired Proxies" columns={expiredColumns} />
    </>
  );
}

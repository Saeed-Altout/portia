"use client";

import { Table } from "./_components/table";
import { columns } from "./_components/columns";
import { OverviewCard } from "./_components/overview-card";

import { Heading } from "@/app/dashboard/_components/heading";
import { Loader } from "@/components/dashboard/loader";

import { useSessionContext } from "@/providers/session-provider";

export default function OverviewPage() {
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
          <OverviewCard key={index} initialData={item} />
        ))}
      </div>
      <Table title="All Proxies Available" columns={columns} />
    </>
  );
}

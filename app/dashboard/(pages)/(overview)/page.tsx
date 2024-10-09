"use client";

import { Table } from "./_components/table";
import { columns } from "./_components/columns";
import { OverviewCard } from "./_components/overview-card";

import { Heading } from "@/components/dashboard/heading";
import { Loader } from "@/components/dashboard/loader";

import { useSession } from "@/hooks/use-session";

export default function OverviewPage() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        title={`Welcome back, ${session?.first_name} ${session?.last_name}`}
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

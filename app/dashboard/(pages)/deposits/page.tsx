"use client";

import { Pagination } from "@/app/dashboard/_components/pagination";
import { Heading } from "@/app/dashboard/_components/heading";

import { columns } from "./_components/columns";
import { DepositCard } from "./_components/deposit-card";

import { DataTable } from "@/components/ui/data-table";
import { useSession } from "@/providers/session-provider";

export default function DepositsPage() {
  const { user } = useSession();

  return (
    <>
      <Heading title={`Welcome back, ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[].map((item, index) => (
          <DepositCard key={index} initialData={item} />
        ))}
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">All my deposit</h3>
        </div>
        <DataTable columns={columns} data={[]} />
        <Pagination
          prevButton={false}
          nextButton={false}
          setPage={() => {}}
          currentPage={1}
          totalPages={1}
        />
      </div>
    </>
  );
}

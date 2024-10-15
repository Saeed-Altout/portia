"use client";

import { ProxiesCard } from "./_components/proxies-card";
import { activeColumns, expiredColumns } from "./_components/columns";

import { Heading } from "@/app/dashboard/_components/heading";
import { Pagination } from "@/app/dashboard/_components/pagination";

import { DataTable } from "@/components/ui/data-table";
import { useSession } from "@/providers/session-provider";

export default function MyProxiesPage() {
  const { user } = useSession();

  return (
    <>
      <Heading title={`Welcome back, ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[].map((item, index) => (
          <ProxiesCard key={index} initialData={item} />
        ))}
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">My Active Proxies</h3>
        </div>
        <DataTable columns={activeColumns} data={[]} />
        <Pagination
          prevButton={true}
          nextButton={true}
          setPage={() => {}}
          currentPage={1}
          totalPages={1}
        />
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">My Expired Proxies</h3>
        </div>
        <DataTable columns={expiredColumns} data={[]} />
        <Pagination
          prevButton={true}
          nextButton={true}
          setPage={() => {}}
          currentPage={1}
          totalPages={1}
        />
      </div>
    </>
  );
}

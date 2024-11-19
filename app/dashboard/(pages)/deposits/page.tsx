"use client";

import { columns } from "./_components/columns";

import { Loader } from "@/components/ui/loader";
import { DataTable } from "@/components/ui/data-table";

import { Heading, Pagination, DepositCard } from "@/components/dashboard";
import { useGetUserDetails } from "@/hooks/dashboard";

export default function DepositsPage() {
  const { data: user, isLoading } = useGetUserDetails();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        title={`Welcome back, ${user?.data.first_name || ""}`}
        newProxy
        addFunds
      />
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

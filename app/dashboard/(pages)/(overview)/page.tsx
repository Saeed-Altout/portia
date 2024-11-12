"use client";

import { columns } from "./_components/columns";

import { DataTable } from "@/components/ui/data-table";
import { Heading, Pagination, OverviewCard } from "@/components/dashboard";
import { overviewData } from "@/constants";

export default function OverviewPage() {
  return (
    <>
      <Heading title="Welcome back," newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {overviewData.map((item, index) => (
          <OverviewCard key={index} initialData={item} />
        ))}
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">Your activate proxy</h3>
        </div>
        <DataTable columns={columns} data={[]} />
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

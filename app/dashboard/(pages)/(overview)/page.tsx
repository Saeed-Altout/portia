"use client";

import { useState } from "react";

import { Heading } from "@/app/dashboard/_components/heading";
import { Pagination } from "@/app/dashboard/_components/pagination";

import { columns } from "./_components/columns";
import { OverviewCard } from "./_components/overview-card";

import { DataTable } from "@/components/ui/data-table";
import { useSession } from "@/providers/session-provider";

export default function OverviewPage() {
  const { user } = useSession();
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <Heading
        title={`Welcome back, ${user.first_name || ""}`}
        newProxy
        addFunds
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[].map((item, index) => (
          <OverviewCard key={index} initialData={item} />
        ))}
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">Your earning calendar</h3>
          <p className="text-sm">Track your earnings by days</p>
        </div>
        <DataTable columns={columns} data={[]} />
        <Pagination
          prevButton={true}
          nextButton={true}
          setPage={setPage}
          currentPage={page}
          totalPages={1}
        />
      </div>
    </>
  );
}

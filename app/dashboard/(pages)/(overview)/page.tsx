"use client";

import { columns } from "./_components/columns";

import { Loader } from "@/components/ui/loader";
import { DataTable } from "@/components/ui/data-table";

import { Heading, Pagination, OverviewCard } from "@/components/dashboard";
import { useGetUserDetails } from "@/features/dashboard/hooks";

import { overviewData, overviewTableData } from "../../constants";

export default function OverviewPage() {
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
        {overviewData.map((item, index) => (
          <OverviewCard key={index} initialData={item} />
        ))}
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">Your earning calendar</h3>
          <p className="text-sm">Track your earnings by days</p>
        </div>
        <DataTable columns={columns} data={overviewTableData} />
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

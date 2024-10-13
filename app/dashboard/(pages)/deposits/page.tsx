"use client";

import { Table } from "./_components/table";
import { DepositCard } from "./_components/deposit-card";

import { Heading } from "@/app/dashboard/_components/heading";
import { useGetUserProfileQuery } from "@/app/dashboard/hooks";

export default function DepositsPage() {
  const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery();

  return (
    <>
      <Heading
        title={`Welcome back, ${data?.data.first_name}`}
        newProxy
        addFunds
        isLoading={isLoading || isError || !isSuccess}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[].map((item, index) => (
          <DepositCard key={index} initialData={item} />
        ))}
      </div>
      <Table />
    </>
  );
}

"use client";

import { Table } from "./_components/table";
import { AffiliateCode } from "./_components/affiliate-code";
import { StatisticsSection } from "./_components/statistics-section";

import { useGetUserProfileQuery } from "@/app/dashboard/hooks";
import { Heading } from "@/app/dashboard/_components/heading";

export default function MyAffiliatePage() {
  const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery();

  return (
    <>
      <Heading
        title={`Welcome back ${data?.data.first_name || ""}`}
        description="Total Earning is: 0,00$"
        drawEarning
        isLoading={isLoading || isError || !isSuccess}
      />
      <AffiliateCode />
      <StatisticsSection />
      <Table />
    </>
  );
}

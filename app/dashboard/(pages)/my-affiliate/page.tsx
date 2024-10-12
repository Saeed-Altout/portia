"use client";

import { Fragment } from "react";

import { Heading } from "@/components/dashboard/heading";

import { Table } from "./_components/table";
import { AffiliateCode } from "./_components/affiliate-code";
import { StatisticsSection } from "./_components/statistics-section";

import { useGetUserProfileQuery } from "../../hooks";

export default function MyAffiliatePage() {
  const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery();

  return (
    <Fragment>
      <Heading
        title={`Welcome back ${data?.data.first_name || ""}`}
        description="Total Earning is: 0,00$"
        drawEarning
        isLoading={isLoading || isError || !isSuccess}
      />
      <AffiliateCode />
      <StatisticsSection />
      <Table />
    </Fragment>
  );
}

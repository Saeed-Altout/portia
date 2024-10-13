"use client";

import { Table } from "./_components/table";
import { StatisticsSection } from "./_components/statistics-section";

import { Heading } from "@dashboard/_components/heading";
import { AffiliateCode } from "@dashboard/_components/affiliate-code";
import { useStoreContext } from "@dashboard/contexts/store-context";

export default function MyAffiliatePage() {
  const { user } = useStoreContext();

  return (
    <>
      <Heading
        title={`Welcome back ${user.first_name}`}
        description="Total Earning is: 0,00$"
        drawEarning
      />
      <AffiliateCode />
      <StatisticsSection />
      <Table />
    </>
  );
}

import { Fragment } from "react";

import { Heading } from "@/components/dashboard/heading";

import { Table } from "./_components/table";
import { AffiliateCode } from "./_components/affiliate-code";
import { StatisticsSection } from "./_components/statistics-section";

export default function MyAffiliatePage() {
  return (
    <Fragment>
      <Heading
        title="My Affiliate"
        description="Total Earning is: 0,00$"
        drawEarning
      />
      <AffiliateCode />
      <StatisticsSection />
      <Table />
    </Fragment>
  );
}

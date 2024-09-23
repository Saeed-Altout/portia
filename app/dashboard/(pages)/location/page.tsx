"use client";
import * as React from "react";

import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

import { Heading } from "@dashboard/_components/ui/heading";
import { locationsTableData } from "@dashboard/constants";

export default function LocationPage() {
  return (
    <>
      <Heading
        label="Our Available Proxy’s Locations"
        title="Choose your location’s needs"
        description="you can easily filter your results based on country, state, isp, rotation by this:"
      />
      <DataTable data={locationsTableData} columns={columns} />
    </>
  );
}

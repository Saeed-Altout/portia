"use client";

import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

import { Heading } from "@/components/dashboard";
import { useGetProxyLocations } from "@/hooks";

export default function LocationsPage() {
  const { data: locations } = useGetProxyLocations();

  return (
    <>
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="You can easily filter your results based on country, state, ISP, rotation by this:"
      />
      <DataTable columns={columns} data={locations?.data ?? []} />
    </>
  );
}

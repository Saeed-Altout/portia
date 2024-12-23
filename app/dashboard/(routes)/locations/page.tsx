"use client";

import { formatTime } from "@/utils/formatters";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

import { Heading } from "@/components/dashboard";
import { useGetProxyLocations } from "@/hooks";

export default function LocationsPage() {
  const { data: locations, isSuccess } = useGetProxyLocations();

  const formattedLocations: ILocation[] = isSuccess
    ? locations.data.map((location) => ({
        ...location,
        rotation_time: formatTime(location.rotation_time),
      }))
    : [];

  return (
    <>
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="You can easily filter your results based on country, state, ISP, rotation by this:"
      />
      <DataTable columns={columns} data={formattedLocations} />
    </>
  );
}

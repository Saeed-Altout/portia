"use client";

import { formatTime } from "@/utils/formatters";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Heading } from "@/components/dashboard";
import { useGetProxyLocations } from "@/hooks";

export const Content = () => {
  const { data: locations, isSuccess } = useGetProxyLocations();

  const formattedLocations: ILocation[] = isSuccess
    ? locations.data.map((location) => ({
        ...location,
        rotation_time: formatTime(location.rotation_time),
      }))
    : [];

  return (
    <section id="locations" className="screen py-12 space-y-8">
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="You can easily filter your results based on country, state, ISP, rotation by this:"
      />
      <DataTable columns={columns} data={formattedLocations} />
    </section>
  );
};

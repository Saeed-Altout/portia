"use client";

import { Heading } from "@/components/heading";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { useData } from "./locations-context";
import { ErrorApi } from "@/components/pages/error-api";

export const Content = () => {
  const { isError, locations } = useData();

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <section id="locations" className="screen py-12 space-y-8">
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="You can easily filter your results based on country, state, ISP, rotation by this:"
      />
      <DataTable columns={columns} data={locations} />
    </section>
  );
};

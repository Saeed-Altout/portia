"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useData } from "./locations-context";

import { Heading } from "@/components/dashboard";
import { LoadingApi3 } from "@/components/pages/loading-api";
import { ErrorApi } from "@/components/pages/error-api";

export const LocationsClient = () => {
  const { isLoading, isError, isSuccess, locations } = useData();

  if (isLoading || !isSuccess) {
    return <LoadingApi3 />;
  }

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <>
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="You can easily filter your results based on country, state, ISP, rotation by this:"
      />
      <DataTable columns={columns} data={locations} />
    </>
  );
};

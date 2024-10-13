"use client";

import { useState } from "react";

import { Table } from "./_components/table";
import { FiltersSection } from "./_components/filters-section";
import { Heading } from "@/app/dashboard/_components/heading";

export default function LocationsPage() {
  const [filters, setFilters] = useState<FiltersProps>({
    pkg_id: 1,
    service_provider_id: 0,
    city_id: 0,
    country_id: 0,
    rotation_time: 0,
  });

  return (
    <>
      <Heading
        label="Our Available Proxy’s Locations"
        title="Choose your location’s needs"
        description="you can easily filter your results based on country, state, isp, rotation by this:"
      />
      <FiltersSection filters={filters} setFilters={setFilters} />
      <Table filters={filters} />
    </>
  );
}

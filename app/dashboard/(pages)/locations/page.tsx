"use client";

import { useEffect, useState } from "react";

import { Filter } from "./_components/filter";
import { columns } from "./_components/columns";

import { Loader } from "@/components/ui/loader";
import { DataTable } from "@/components/ui/data-table";
import { Heading, Pagination } from "@/components/dashboard";

import { useGetLocations } from "@/hooks/dashboard";
import { formatObjectArray, formatStringArray } from "@/utils/formatters";

export default function LocationsPage() {
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<FiltersProps>({
    pkg_id: 1,
    service_provider_id: 0,
    city_id: 0,
    country_id: 0,
    rotation_time: 0,
  });

  const { pkg_id, country_id, city_id, service_provider_id } = filters;

  const locations = useGetLocations({
    pkg_id,
    country_id,
    city_id,
    service_provider_id,
    offset: 1,
  });

  const proxies = locations[0].data?.data;
  const pkgs = locations[1].data?.data;
  const countries = locations[2].data?.data;
  const cities = locations[3].data?.data;
  const sp = locations[4].data?.data;
  const ipRotations = locations[5].data?.data;

  const ipRotationsFormatted = formatStringArray(ipRotations);
  const packagesFormatted = formatObjectArray(pkgs, "id", "name");
  const countriesFormatted = formatObjectArray(countries, "id", "country_name");
  const citiesFormatted = formatObjectArray(cities, "id", "city_name");
  const servicesProviderFormatted = formatObjectArray(
    sp,
    "id",
    "service_provider_name"
  );

  const isLoading =
    locations[0].isLoading ||
    locations[1].isLoading ||
    locations[2].isLoading ||
    locations[3].isLoading ||
    locations[4].isLoading ||
    locations[5].isLoading;

  const handleFilterChange = (key: keyof FiltersProps, value: number) => {
    setFilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    setPage(1);
  }, [filters]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="you can easily filter your results based on country, state, isp, rotation by this:"
      />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <Filter
          disabled={locations[1].isLoading || packagesFormatted.length == 0}
          onValueChange={(e) => handleFilterChange("pkg_id", Number(e))}
          placeholder="Package"
          options={packagesFormatted}
        />
        <Filter
          disabled={locations[2].isLoading || countriesFormatted.length == 0}
          onValueChange={(e) => handleFilterChange("country_id", Number(e))}
          placeholder="Country"
          options={countriesFormatted}
        />
        <Filter
          disabled={locations[3].isLoading || citiesFormatted.length == 0}
          onValueChange={(e) => handleFilterChange("city_id", Number(e))}
          placeholder="City"
          options={citiesFormatted}
        />
        <Filter
          disabled={
            locations[4].isLoading || servicesProviderFormatted.length == 0
          }
          onValueChange={(e) =>
            handleFilterChange("service_provider_id", Number(e))
          }
          placeholder="SP"
          options={servicesProviderFormatted}
        />
        <Filter
          disabled={locations[5].isLoading || ipRotationsFormatted.length == 0}
          onValueChange={(e) => handleFilterChange("rotation_time", Number(e))}
          placeholder="Ip Rotations"
          options={ipRotationsFormatted}
        />
      </div>
      <div className="border rounded-md relative z-0">
        {isLoading && (
          <div className="bg-white/40 w-full h-full absolute z-50 rounded-md"></div>
        )}
        <div className="w-full flex flex-col rounded-t-md py-6 px-4 relative">
          <h3 className="font-medium text-lg">All my deposit</h3>
        </div>
        <DataTable columns={columns} data={proxies?.list ?? []} />
        <Pagination
          prevButton={page === 1}
          nextButton={!proxies?.has_more}
          setPage={setPage}
          currentPage={page}
          totalPages={Math.floor(proxies?.count ?? 10 / 10)}
        />
      </div>
    </>
  );
}

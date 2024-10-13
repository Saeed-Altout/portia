"use client";

import { useEffect, useState } from "react";

import {
  useGetCitiesQuery,
  useGetCountriesQuery,
  useGetIpRotationsQuery,
  useGetPackagesQuery,
  useGetServiceProviderQuery,
  useGetProxiesQuery,
} from "@website/hooks";

import { Heading } from "@dashboard/_components/heading";
import { Pagination } from "@dashboard/_components/pagination";

import { Filter } from "./_components/filter";
import { columns } from "./_components/columns";

import { DataTable } from "@/components/ui/data-table";
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

  const pkgsQuery = useGetPackagesQuery();
  const countriesQuery = useGetCountriesQuery({ pkg_id });
  const spQuery = useGetServiceProviderQuery({ pkg_id, city_id, country_id });
  const citiesQuery = useGetCitiesQuery({ pkg_id, country_id });
  const ipRotationsQuery = useGetIpRotationsQuery({
    pkg_id,
    country_id,
    city_id,
    service_provider_id,
  });
  const proxiesQuery = useGetProxiesQuery({
    ...filters,
    offset: page,
  });

  const ipRotationsFormatted = formatStringArray(ipRotationsQuery.data?.data);
  const packagesFormatted = formatObjectArray(
    pkgsQuery.data?.data,
    "id",
    "name"
  );
  const countriesFormatted = formatObjectArray(
    countriesQuery.data?.data,
    "id",
    "country_name"
  );
  const citiesFormatted = formatObjectArray(
    citiesQuery.data?.data,
    "id",
    "city_name"
  );
  const servicesProviderFormatted = formatObjectArray(
    spQuery.data?.data,
    "id",
    "service_provider_name"
  );

  const isSuccess =
    proxiesQuery.isSuccess &&
    pkgsQuery.isSuccess &&
    countriesQuery.isSuccess &&
    citiesQuery.isSuccess &&
    ipRotationsQuery.isSuccess &&
    spQuery.isSuccess;

  const isLoading =
    proxiesQuery.isLoading ||
    proxiesQuery.isFetching ||
    pkgsQuery.isLoading ||
    countriesQuery.isLoading ||
    citiesQuery.isLoading ||
    ipRotationsQuery.isLoading ||
    spQuery.isLoading;

  const handleFilterChange = (key: keyof FiltersProps, value: number) => {
    setFilters({ ...filters, [key]: value });
  };

  const { has_more, count, list } = proxiesQuery.isSuccess
    ? proxiesQuery.data.data
    : { has_more: false, count: 0, list: [] };

  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <>
      <Heading
        label="Our Available Proxy’s Locations"
        title="Choose your location’s needs"
        description="you can easily filter your results based on country, state, isp, rotation by this:"
      />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <Filter
          disabled={
            !pkgsQuery.isSuccess ||
            pkgsQuery.isLoading ||
            packagesFormatted.length == 0
          }
          onValueChange={(e) => handleFilterChange("pkg_id", Number(e))}
          placeholder="Package"
          options={packagesFormatted}
        />
        <Filter
          disabled={
            !pkgsQuery.isSuccess ||
            !countriesQuery.isSuccess ||
            countriesQuery.isLoading ||
            countriesFormatted.length == 0
          }
          onValueChange={(e) => handleFilterChange("country_id", Number(e))}
          placeholder="Country"
          options={countriesFormatted}
        />
        <Filter
          disabled={
            !pkgsQuery.isSuccess ||
            !countriesQuery.isSuccess ||
            !citiesQuery.isSuccess ||
            citiesQuery.isLoading ||
            citiesFormatted.length == 0
          }
          onValueChange={(e) => handleFilterChange("city_id", Number(e))}
          placeholder="City"
          options={citiesFormatted}
        />
        <Filter
          disabled={
            !pkgsQuery.isSuccess ||
            !citiesQuery.isSuccess ||
            !spQuery.isSuccess ||
            spQuery.isLoading ||
            servicesProviderFormatted.length == 0
          }
          onValueChange={(e) =>
            handleFilterChange("service_provider_id", Number(e))
          }
          placeholder="SP"
          options={servicesProviderFormatted}
        />
        <Filter
          disabled={
            !pkgsQuery.isSuccess ||
            !ipRotationsQuery.isSuccess ||
            ipRotationsQuery.isLoading ||
            ipRotationsFormatted.length == 0
          }
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
        <DataTable columns={columns} data={list} />
        <Pagination
          prevButton={page === 1}
          nextButton={!has_more}
          setPage={setPage}
          currentPage={page}
          totalPages={Math.floor(count / 10)}
        />
      </div>
    </>
  );
}

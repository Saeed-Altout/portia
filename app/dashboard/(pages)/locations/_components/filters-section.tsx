"use client";

import {
  useGetCitiesQuery,
  useGetCountriesQuery,
  useGetIpRotationsQuery,
  useGetPackagesQuery,
  useGetServiceProviderQuery,
} from "@website/hooks";
import { formatObjectArray, formatStringArray } from "@/utils/formatters";

import { Filter } from "./filter";

export const FiltersSection = ({
  filters,
  setFilters,
}: {
  filters: FiltersProps;
  setFilters: (filters: FiltersProps) => void;
}) => {
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

  const handleFilterChange = (key: keyof FiltersProps, value: number) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-6 px-4">
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
  );
};

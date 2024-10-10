"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import {
  useGetCitiesQuery,
  useGetCountriesQuery,
  useGetIpRotationsQuery,
  useGetPackagesQuery,
  useGetProxiesQuery,
  useGetServiceProviderQuery,
} from "@website/hooks";

import { Filter } from "./_components/filter";
import { columns } from "./_components/columns";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/dashboard/loader";
import { DataTable } from "@/components/dashboard/data-table";

import { Heading } from "@dashboard/_components/ui/heading";

import { formatObjectArray, formatStringArray } from "@/utils/formatters";

export default function LocationsPage() {
  const [sp, setSp] = useState<number>(0);
  const [pkg, setPkg] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [city, setCity] = useState<number>(0);
  const [country, setCountry] = useState<number>(0);
  const [ipRotation, setIpRotation] = useState<number>(0);

  const {
    data: pkgs,
    isSuccess: pkgsIsSuccess,
    isLoading: pkgsIsLoading,
  } = useGetPackagesQuery();
  const {
    data: proxies,
    isSuccess,
    isLoading,
  } = useGetProxiesQuery({
    pkg_id: pkg,
    offset: page,
    country_id: country,
    city_id: city,
    service_provider_id: sp,
    rotation_time: ipRotation,
  });
  const {
    data: countries,
    isSuccess: countriesIsSuccess,
    isLoading: countriesIsLoading,
  } = useGetCountriesQuery({ pkg_id: pkg });
  const {
    data: servicesProvider,
    isSuccess: servicesProviderIsSuccess,
    isLoading: servicesProviderIsLoading,
  } = useGetServiceProviderQuery({
    pkg_id: pkg,
    city_id: city,
    country_id: country,
  });
  const {
    data: cities,
    isSuccess: citiesIsSuccess,
    isLoading: citiesIsLoading,
  } = useGetCitiesQuery({
    pkg_id: pkg,
    country_id: country,
  });
  const {
    data: ipRotations,
    isSuccess: ipRotationsIsSuccess,
    isLoading: ipRotationsIsLoading,
  } = useGetIpRotationsQuery({
    pkg_id: pkg,
    country_id: country,
    city_id: city,
    service_provider_id: sp,
  });

  const totalPages = isSuccess ? Math.floor(proxies.data.count / 10) : 1;

  // Format data for filters
  const packagesFormatted = pkgsIsSuccess
    ? formatObjectArray(pkgs?.data, "id", "name")
    : [];
  const countriesFormatted = countriesIsSuccess
    ? formatObjectArray(countries?.data, "id", "country_name")
    : [];
  const citiesFormatted = citiesIsSuccess
    ? formatObjectArray(cities?.data, "id", "city_name")
    : [];
  const servicesProviderFormatted = servicesProviderIsSuccess
    ? formatObjectArray(servicesProvider?.data, "id", "service_provider_name")
    : [];
  const ipRotationsFormatted = ipRotationsIsSuccess
    ? formatStringArray(ipRotations?.data)
    : [];

  useEffect(() => {
    setPage(1);
  }, [pkg, country, city, sp, ipRotation]);

  if (!pkgsIsSuccess) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        label="Our Available Proxy’s Locations"
        title="Choose your location’s needs"
        description="you can easily filter your results based on country, state, isp, rotation by this:"
      />

      <div className="border rounded-md">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 rounded-t-md py-6 px-4">
          <Filter
            disabled={
              !pkgsIsSuccess || pkgsIsLoading || packagesFormatted.length == 0
            }
            onValueChange={(e) => setPkg(Number(e))}
            placeholder="Package"
            options={packagesFormatted}
          />
          <Filter
            disabled={
              !pkgsIsSuccess ||
              !countriesIsSuccess ||
              countriesIsLoading ||
              countriesFormatted.length == 0
            }
            onValueChange={(e) => setCountry(Number(e))}
            placeholder="Country"
            options={countriesFormatted}
          />
          <Filter
            disabled={
              !pkgsIsSuccess ||
              !countriesIsSuccess ||
              !citiesIsSuccess ||
              citiesIsLoading ||
              citiesFormatted.length == 0
            }
            onValueChange={(e) => setCity(Number(e))}
            placeholder="City"
            options={citiesFormatted}
          />
          <Filter
            disabled={
              !pkgsIsSuccess ||
              !citiesIsSuccess ||
              !servicesProviderIsSuccess ||
              servicesProviderIsLoading ||
              servicesProviderFormatted.length == 0
            }
            onValueChange={(e) => setSp(Number(e))}
            placeholder="SP"
            options={servicesProviderFormatted}
          />
          <Filter
            disabled={
              !pkgsIsSuccess ||
              !ipRotationsIsSuccess ||
              ipRotationsIsLoading ||
              ipRotationsFormatted.length == 0
            }
            onValueChange={(e) => setIpRotation(Number(e))}
            placeholder="Ip Rotations"
            options={ipRotationsFormatted}
          />
        </div>

        <DataTable
          columns={columns}
          data={isSuccess ? proxies?.data.list : []}
        />

        <div className="w-full flex justify-between items-center rounded-b-md py-6 px-4">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          <div className="flex justify-center items-center gap-x-2">
            {page >= 2 && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </Button>
            )}
            <Button
              size="icon"
              variant="ghost"
              className="bg-secondary"
              onClick={() => setPage(page)}
            >
              {page}
            </Button>
            {totalPages >= 4 && page >= 4 && page - 1 != totalPages && (
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            )}
            {page <= totalPages && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </Button>
            )}
          </div>
          <Button
            variant="outline"
            disabled={page - 1 === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}

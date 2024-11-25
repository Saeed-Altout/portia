"use client";

import { useEffect, useState } from "react";

import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/dashboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  useGetAllPackages,
  useGetAllCities,
  useGetAllCountries,
  useGetAllLocations,
  useGetIpRotations,
  useGetServiceProvider,
} from "@/hooks";

import { useLocationStore } from "@/stores/use-location-store";
import { useProxyStore } from "@/stores";

export const Content = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { pkgId } = useProxyStore();
  const {
    offset,
    countryId,
    cityId,
    serviceProviderId,
    ipRotationId,
    setPkgId,
    setCountryId,
    setCityId,
    setServiceProviderId,
    setIpRotationId,
    setOffset,
  } = useLocationStore();

  const {
    data: locations,
    refetch: locationsRefetch,
    isLoading: locationsIsLoading,
  } = useGetAllLocations({
    offset,
    pkg_id: pkgId,
    country_id: countryId,
    city_id: cityId,
    service_provider_id: serviceProviderId,
    ip_rotation: ipRotationId,
  });
  const { data: packages, isLoading: packagesIsLoading } = useGetAllPackages();

  const {
    data: countries,
    refetch: refetchCountries,
    isLoading: countriesIsLoading,
  } = useGetAllCountries({ pkg_id: pkgId });

  const {
    data: cities,
    refetch: refetchCities,
    isLoading: citiesIsLoading,
  } = useGetAllCities({
    pkg_id: pkgId,
    country_id: countryId,
  });

  const {
    data: serviceProviders,
    refetch: refetchServiceProviders,
    isLoading: serviceProvidersIsLoading,
  } = useGetServiceProvider({
    pkg_id: pkgId,
    country_id: countryId,
    city_id: cityId,
  });

  const {
    data: ipRotations,
    refetch: refetchIpRotations,
    isLoading: ipRotationsIsLoading,
  } = useGetIpRotations({
    pkg_id: pkgId,
    country_id: countryId,
    city_id: cityId,
  });

  useEffect(() => {
    if (pkgId) {
      refetchCountries();
      refetchCities();
      refetchServiceProviders();
      refetchIpRotations();
      locationsRefetch();
    }
  }, [
    pkgId,
    refetchCountries,
    refetchCities,
    refetchServiceProviders,
    refetchIpRotations,
    locationsRefetch,
  ]);

  useEffect(() => {
    if (countryId) {
      refetchCities();
      refetchServiceProviders();
      refetchIpRotations();
      locationsRefetch();
    }
  }, [
    countryId,
    refetchCities,
    refetchServiceProviders,
    refetchIpRotations,
    locationsRefetch,
  ]);

  useEffect(() => {
    if (cityId) {
      refetchServiceProviders();
      refetchIpRotations();
      locationsRefetch();
    }
  }, [cityId, refetchServiceProviders, refetchIpRotations, locationsRefetch]);

  useEffect(() => {
    if (ipRotationId) {
      locationsRefetch();
    }
  }, [ipRotationId, locationsRefetch]);

  useEffect(() => {
    if (offset) {
      locationsRefetch();
    }
  }, [locationsRefetch, offset]);

  useEffect(() => {
    setOffset(1);
  }, [pkgId, countryId, cityId, serviceProviderId, ipRotationId]);

  // Event handlers for dropdown selection
  const onSelectPackage = (pkgId: string) => {
    setPkgId(+pkgId);
    setCountryId(null);
    setCityId(null);
    setServiceProviderId(null);
    setIpRotationId(null);
  };

  const onSelectCountry = (countryId: string) => {
    setCountryId(+countryId);
    setCityId(null);
    setServiceProviderId(null);
    setIpRotationId(null);
  };

  const onSelectCity = (cityId: string) => {
    setCityId(+cityId);
    setServiceProviderId(null);
    setIpRotationId(null);
  };

  const onSelectServiceProvider = (serviceProviderId: string) => {
    setServiceProviderId(+serviceProviderId);
    setIpRotationId(null);
  };

  const onSelectIpRotations = (ipRotationId: string) => {
    setIpRotationId(+ipRotationId);
  };

  return (
    <section id="locations" className="screen py-12 space-y-8">
      <Heading
        label="Our Available Proxy's Locations"
        title="Choose your location's needs"
        description="You can easily filter your results based on country, state, ISP, rotation by this:"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-6">
        <Select
          onValueChange={onSelectPackage}
          defaultValue={packages?.data[0]?.id.toString()}
          disabled={!packages?.data || packagesIsLoading}
        >
          <SelectTrigger>
            <SelectValue placeholder="Package" />
          </SelectTrigger>
          <SelectContent>
            {packages?.data?.map((pkg) => (
              <SelectItem key={pkg.id} value={pkg.id.toString()}>
                {pkg.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={onSelectCountry}
          disabled={!countries?.data || packagesIsLoading || countriesIsLoading}
        >
          <SelectTrigger>
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            {countries?.data?.map((country) => (
              <SelectItem key={country.id} value={country.id.toString()}>
                {country.country_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={onSelectCity}
          disabled={!cities?.data || countriesIsLoading || citiesIsLoading}
        >
          <SelectTrigger>
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            {cities?.data?.map((city) => (
              <SelectItem key={city.id} value={city.id.toString()}>
                {city.city_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={onSelectServiceProvider}
          disabled={
            !serviceProviders?.data ||
            citiesIsLoading ||
            serviceProvidersIsLoading
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="ISP" />
          </SelectTrigger>
          <SelectContent>
            {serviceProviders?.data?.map((serviceProvider) => (
              <SelectItem
                key={serviceProvider.id}
                value={serviceProvider.id.toString()}
              >
                {serviceProvider.service_provider_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={onSelectIpRotations}
          disabled={
            !ipRotations?.data ||
            serviceProvidersIsLoading ||
            ipRotationsIsLoading
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="IP Rotation" />
          </SelectTrigger>
          <SelectContent>
            {ipRotations?.data?.map((ipRotation) => (
              <SelectItem key={ipRotation} value={ipRotation}>
                {ipRotation}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DataTable
        title="Filtered Locations"
        columns={columns}
        data={locations?.data.list ?? []}
        totalPages={locations?.data.count ?? 1}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

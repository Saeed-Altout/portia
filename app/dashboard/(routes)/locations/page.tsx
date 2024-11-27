"use client";

import { useEffect, useState } from "react";

import { columns } from "./_components/columns";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/dashboard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
  useGetAllPackages,
  useGetProxyCities,
  useGetProxyCountries,
  useGetProxyLocations,
  useGetProxyIpRotations,
  useGetProxyServiceProvider,
} from "@/hooks";

import { useLocationStore } from "@/stores/use-location-store";
import { useProxyStore } from "@/stores";

export default function LocationsPage() {
  const { pkgId, setPkgId } = useProxyStore();
  const [totalPages, setTotalPages] = useState<number>(1);
  const {
    offset,
    countryId,
    cityId,
    serviceProviderId,
    ipRotationId,
    setCountryId,
    setCityId,
    setServiceProviderId,
    setIpRotationId,
    setOffset,
  } = useLocationStore();
  const { data: packages, isLoading: packagesIsLoading } = useGetAllPackages();

  const { data: locations, isSuccess: locationsIsSuccess } = useGetProxyLocations({
    offset,
    pkg_id: pkgId,
    country_id: countryId,
    city_id: cityId,
    service_provider_id: serviceProviderId,
    ip_rotation: ipRotationId,
  });

  const { data: countries, isLoading: countriesIsLoading } = useGetProxyCountries({ pkg_id: pkgId });

  const { data: cities, isLoading: citiesIsLoading } = useGetProxyCities({
    pkg_id: pkgId,
    country_id: countryId,
  });

  const { data: serviceProviders, isLoading: serviceProvidersIsLoading } = useGetProxyServiceProvider({
    pkg_id: pkgId,
    country_id: countryId,
    city_id: cityId,
  });

  const { data: ipRotations, isLoading: ipRotationsIsLoading } = useGetProxyIpRotations({
    pkg_id: pkgId,
    country_id: countryId,
    city_id: cityId,
  });

  useEffect(() => {
    setOffset(1);
  }, [pkgId, countryId, cityId, serviceProviderId, ipRotationId, setOffset]);

  const onSelectPackage = (pkgId: string) => {
    setPkgId(pkgId);
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

  useEffect(() => {
    if (locationsIsSuccess) {
      const totalPages = Math.ceil(locations.data.count / 10);
      setTotalPages(totalPages);
    }
  }, [locations, locationsIsSuccess]);

  return (
    <>
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
        <Select onValueChange={onSelectCountry} disabled={!countries?.data || packagesIsLoading || countriesIsLoading}>
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
        <Select onValueChange={onSelectCity} disabled={!cities?.data || countriesIsLoading || citiesIsLoading}>
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
          disabled={!serviceProviders?.data || citiesIsLoading || serviceProvidersIsLoading}
        >
          <SelectTrigger>
            <SelectValue placeholder="ISP" />
          </SelectTrigger>
          <SelectContent>
            {serviceProviders?.data?.map((serviceProvider) => (
              <SelectItem key={serviceProvider.id} value={serviceProvider.id.toString()}>
                {serviceProvider.service_provider_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={onSelectIpRotations}
          disabled={!ipRotations?.data || serviceProvidersIsLoading || ipRotationsIsLoading}
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
        totalPages={totalPages}
        currentPage={offset}
        onPageChange={(page) => setOffset(page)}
      />
    </>
  );
}

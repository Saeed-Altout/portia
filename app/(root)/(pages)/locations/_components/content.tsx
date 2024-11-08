"use client";

import { useEffect, useState } from "react";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Filter } from "./filter";

import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";

import {
  useGetCitiesQuery,
  useGetCountriesQuery,
  useGetIpRotationsQuery,
  useGetPackagesQuery,
  useGetProxiesQuery,
  useGetServiceProviderQuery,
} from "@/app/(root)/hooks";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Content = () => {
  const [pkg, setPkg] = useState<number>(1);
  const [country, setCountry] = useState<number>(0);
  const [city, setCity] = useState<number>(0);
  const [ipRotation, setIpRotation] = useState<number>(0);
  const [sp, setSp] = useState<number>(0);
  const [offset, setOffset] = useState<number>(1);

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
    offset: offset,
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

  const totalPages = isSuccess ? Math.ceil(proxies.data.count / 10) : 1;

  const handleNextPage = () =>
    setOffset((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setOffset((prev) => Math.max(prev - 1, 1));

  const generatePagination = () => {
    const maxVisiblePages = 5;
    const pages = [];

    const startPage = Math.max(1, offset - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={offset === i ? "outline" : "ghost"}
          onClick={() => setOffset(i)}
        >
          {i}
        </Button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <MoreHorizontal key="more" className="h-4 w-4 mx-1 text-gray-500" />
      );
    }

    return pages;
  };

  const packagesFormatted = pkgsIsSuccess
    ? pkgs?.data.map((pkg) => {
        return {
          value: pkg.id.toString(),
          label: pkg.name,
        };
      })
    : [];
  const countriesFormatted = countriesIsSuccess
    ? countries?.data.map((country) => {
        return {
          value: country.id.toString(),
          label: country.country_name,
        };
      })
    : [];
  const citiesFormatted = citiesIsSuccess
    ? cities?.data.map((city) => {
        return {
          value: city.id.toString(),
          label: city.city_name,
        };
      })
    : [];
  const servicesProviderFormatted = servicesProviderIsSuccess
    ? servicesProvider?.data.map((serviceProvider) => {
        return {
          value: serviceProvider.id.toString(),
          label: serviceProvider.service_provider_name,
        };
      })
    : [];
  const ipRotationsFormatted = ipRotationsIsSuccess
    ? ipRotations?.data.map((ipRotation) => {
        return {
          value: ipRotation,
          label: ipRotation,
        };
      })
    : [];

  useEffect(() => {
    setOffset(1);
  }, [pkg, country, city, sp, ipRotation]);

  return (
    <Section>
      <Container className="gap-y-8">
        <div className="w-full space-y-3 text-center lg:text-left">
          <p>Our Available Proxy’s Locations</p>
          <h3 className="text-2xl lg:text-3xl font-semibold">
            Choose your location’s needs
          </h3>
          <p>
            you can easily filter your results based on country, state, isp,
            rotation by this:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-8">
          <Filter
            disabled={pkgs?.data.length === 0 || pkgsIsLoading}
            onValueChange={(e) => setPkg(Number(e))}
            placeholder="Package"
            options={packagesFormatted}
          />
          <Filter
            disabled={
              pkg === 0 || countries?.data.length == 0 || countriesIsLoading
            }
            onValueChange={(e) => setCountry(Number(e))}
            placeholder="Country"
            options={countriesFormatted}
          />
          <Filter
            disabled={
              pkg === 0 ||
              country === 0 ||
              cities?.data.length == 0 ||
              citiesIsLoading
            }
            onValueChange={(e) => setCity(Number(e))}
            placeholder="City"
            options={citiesFormatted}
          />
          <Filter
            disabled={
              pkg === 0 ||
              city === 0 ||
              servicesProvider?.data.length == 0 ||
              servicesProviderIsLoading
            }
            onValueChange={(e) => setSp(Number(e))}
            placeholder="SP"
            options={servicesProviderFormatted}
          />
          <Filter
            disabled={
              pkg === 0 ||
              city === 0 ||
              ipRotations?.data.length === 0 ||
              ipRotationsIsLoading
            }
            onValueChange={(e) => setIpRotation(Number(e))}
            placeholder="Ip Rotations"
            options={ipRotationsFormatted}
          />
        </div>
        <DataTable
          columns={columns}
          isLoading={isLoading}
          data={isSuccess ? proxies.data.list : []}
        />

        <div className="w-full flex justify-between items-center bg-white rounded-b-md py-5 px-6">
          <Button
            variant="outline"
            onClick={handlePreviousPage}
            disabled={offset === 1 || !isSuccess}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          <div className="flex items-center gap-2">{generatePagination()}</div>
          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={
              offset === totalPages || !proxies?.data.has_more || !isSuccess
            }
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
};

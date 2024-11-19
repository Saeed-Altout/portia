import { keepPreviousData, useQueries } from "@tanstack/react-query";

import {
  getCountries,
  getCities,
  getServicesProvider,
  getIpRotations,
  getPackages,
  getAllLocations,
} from "@/api/dashboard";

export const useGetLocations = ({
  pkg_id,
  country_id,
  city_id,
  service_provider_id,
  rotation_time,
  offset,
}: {
  pkg_id: number;
  offset: number;
  country_id?: number;
  city_id?: number;
  service_provider_id?: number;
  rotation_time?: number;
}) => {
  return useQueries({
    queries: [
      {
        queryKey: ["get-proxies"],
        queryFn: () =>
          getAllLocations({
            pkg_id,
            country_id,
            city_id,
            service_provider_id,
            rotation_time,
            offset,
          }),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ["get-packages"],
        queryFn: () => getPackages(),
      },
      {
        queryKey: ["get-countries"],
        queryFn: () => getCountries({ pkg_id }),
        enabled: !!pkg_id,
      },
      {
        queryKey: ["get-cities"],
        queryFn: () => getCities({ pkg_id, country_id }),
        enabled: !!pkg_id && !!country_id,
      },
      {
        queryKey: ["get-services-provider"],
        queryFn: () => getServicesProvider({ pkg_id, city_id, country_id }),
        enabled: !!pkg_id && !!country_id && !!city_id,
      },
      {
        queryKey: ["get-ip-rotations"],
        queryFn: () =>
          getIpRotations({
            pkg_id,
            city_id,
            country_id,
            service_provider_id,
            rotation_time,
          }),
      },
    ],
  });
};
